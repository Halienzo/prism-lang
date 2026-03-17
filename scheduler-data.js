/*
 * scheduler-data.js - 棱镜 Prism 集训排课系统 v2
 * 老师管理 / 综合课表解析 / 自动排课算法 / iCal导出
 * 支持: 分钟级时间精度, 班级组感知占用, 重叠规则, 一键排课预览
 */

// ══════════ 老师档案 (8位真实集训老师) ══════════
var TEACHERS_DEFAULT = [
  {id:"t01",name:"陈亮",aliases:["陈亮"],skills:["ielts_s","toefl_s"],maxDaily:4,color:"#4f6ef7"},
  {id:"t02",name:"段艳",aliases:["段艳"],skills:["ielts_w","toefl_w"],maxDaily:4,color:"#e74c3c"},
  {id:"t03",name:"郑腾",aliases:["郑腾"],skills:["ielts_l","toefl_l"],maxDaily:4,color:"#27ae60"},
  {id:"t04",name:"牛斌",aliases:["牛斌"],skills:["ielts_r","toefl_r"],maxDaily:4,color:"#f39c12"},
  {id:"t05",name:"袁野",aliases:["袁野"],skills:["ielts_mock","toefl_mock"],maxDaily:4,color:"#9b59b6"},
  {id:"t06",name:"李鹤",aliases:["李鹤"],skills:["ielts_mock","toefl_mock"],maxDaily:4,color:"#1abc9c"},
  {id:"t07",name:"安东",aliases:["安东","Antonio","antonio"],skills:["ielts_mock","toefl_mock"],maxDaily:4,color:"#e67e22"},
  {id:"t08",name:"王舒雅",aliases:["王舒雅"],skills:["ielts_w","toefl_w"],maxDaily:4,color:"#3498db"}
];
var TEACHERS = [];

// ══════════ 颜色池 ══════════
var COLOR_POOL = [
  "#4f6ef7","#e74c3c","#27ae60","#f39c12","#9b59b6",
  "#1abc9c","#e67e22","#3498db","#e91e63","#607d8b",
  "#8e44ad","#2ecc71","#d35400","#16a085","#c0392b",
  "#2980b9","#f1c40f","#7f8c8d","#e84393","#00b894",
  "#6c5ce7","#fd79a8","#0984e3","#fdcb6e","#636e72"
];
function getUsedColors(excludeId){
  return TEACHERS.filter(function(t){return t.id!==excludeId;}).map(function(t){return t.color.toLowerCase();});
}
function isColorUsed(color,excludeId){
  return getUsedColors(excludeId).indexOf(color.toLowerCase())>-1;
}
function nextAvailableColor(excludeId){
  var used=getUsedColors(excludeId);
  for(var i=0;i<COLOR_POOL.length;i++){
    if(used.indexOf(COLOR_POOL[i].toLowerCase())<0) return COLOR_POOL[i];
  }
  return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

// ══════════ 集训科目定义 ══════════
var INTENSIVE_COURSES = {
  toefl:[
    {id:"toefl_r",name:"托福阅读集训",nameEn:"TOEFL Reading",duration:120,perWeek:3,icon:"\u{1F4D6}"},
    {id:"toefl_w",name:"托福写作集训",nameEn:"TOEFL Writing",duration:120,perWeek:3,icon:"\u{270D}"},
    {id:"toefl_s",name:"托福口语集训",nameEn:"TOEFL Speaking",duration:90,perWeek:4,icon:"\u{1F5E3}"},
    {id:"toefl_l",name:"托福听力集训",nameEn:"TOEFL Listening",duration:120,perWeek:3,icon:"\u{1F3A7}"},
    {id:"toefl_mock",name:"托福模考",nameEn:"TOEFL Mock",duration:120,perWeek:2,icon:"\u{1F4CB}"}
  ],
  ielts:[
    {id:"ielts_r",name:"雅思阅读集训",nameEn:"IELTS Reading",duration:120,perWeek:3,icon:"\u{1F4D6}"},
    {id:"ielts_w",name:"雅思写作集训",nameEn:"IELTS Writing",duration:120,perWeek:3,icon:"\u{270D}"},
    {id:"ielts_s",name:"雅思口语集训",nameEn:"IELTS Speaking",duration:90,perWeek:4,icon:"\u{1F5E3}"},
    {id:"ielts_l",name:"雅思听力集训",nameEn:"IELTS Listening",duration:120,perWeek:3,icon:"\u{1F3A7}"},
    {id:"ielts_mock",name:"雅思模考",nameEn:"IELTS Mock",duration:120,perWeek:2,icon:"\u{1F4CB}"}
  ]
};

// ══════════ 老师课次分配 ══════════
var TEACHER_ASSIGNMENTS = {};

// ══════════ 排课配置 (v2: 分钟级精度) ══════════
var SCH_CONFIG = {
  startMin:530,        // 8:50 = 8*60+50 = 530 (minutes from midnight)
  endMin:1260,         // 21:00 = 21*60 = 1260
  slotMin:30,          // 最小粒度30分钟 (可选: 30/40/60/90/120)
  breakMin:10,         // 课间休息
  workdays:[1,2,3,4,5,6],
  holidays:[],
  termStart:"2026-03-16",
  termEnd:"2026-06-30",
  dayLabels:["","周一","周二","周三","周四","周五","周六","周日"]
};

// ══════════ 班级组与重叠规则 ══════════
// 综合课表中的班级组标识:
//   "ielts" = A Level E + A Level B (合班, IELTS集训目标班)
//   "toefl" = AP / AP Year3 (TOEFL集训目标班)
//   "ify_e" / "ify_b" = IFY (不参加集训)
//   "eng1" / "eng2" = 其他英语课
// 重叠规则: 排IELTS集训时, 老师教ielts组的课可重叠; 排TOEFL集训时, 老师教toefl组的课可重叠
var OVERLAP_RULES = {
  ielts: ["ielts"],          // A Level E + B = 单一 "ielts" 组
  toefl: ["toefl"]           // AP + AP Year3 = "toefl" 组
};

// ══════════ 全局排课数据 ══════════
// v2: OCCUPIED[teacherId][day] = [{slot, group, subject}]
// group: 班级组标识, subject: 课程名称
var OCCUPIED = {};
var TOEFL_SCHEDULE = [];
var IELTS_SCHEDULE = [];
var TEACHER_BLOCKED = {};

// ══════════ 时间槽工具函数 (v2: 分钟级) ══════════
function slotCount(){return Math.floor((SCH_CONFIG.endMin-SCH_CONFIG.startMin)/SCH_CONFIG.slotMin);}
function slotToTime(s){
  var totalMin=SCH_CONFIG.startMin+s*SCH_CONFIG.slotMin;
  var h=Math.floor(totalMin/60),m=totalMin%60;
  return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
}
function slotToMinute(s){return SCH_CONFIG.startMin+s*SCH_CONFIG.slotMin;}
function minuteToSlot(min){return Math.floor((min-SCH_CONFIG.startMin)/SCH_CONFIG.slotMin);}
function timeToSlot(timeStr){
  var parts=timeStr.split(':');
  var h=parseInt(parts[0]),m=parseInt(parts[1]||'0');
  return Math.floor((h*60+m-SCH_CONFIG.startMin)/SCH_CONFIG.slotMin);
}
function durationToSlots(minutes){return Math.ceil(minutes/SCH_CONFIG.slotMin);}
function breakSlots(){return Math.ceil(SCH_CONFIG.breakMin/SCH_CONFIG.slotMin);}

// Generate time options for config selects (10-min increments)
function generateTimeOptions(startHour,endHour){
  var opts=[];
  for(var h=startHour;h<=endHour;h++){
    for(var m=0;m<60;m+=10){
      var min=h*60+m;
      var label=(h<10?'0':'')+h+':'+(m<10?'0':'')+m;
      opts.push({value:min,label:label});
    }
  }
  return opts;
}

// ══════════ 综合课表专用解析器 (Timetable_2025_2026_Fall) ══════════
/*
 * 课表布局 (双面板):
 *   Mon: rows 0-17, cols 11-19 (time col=10)
 *   Tue: rows 0-17, cols 21-29 (time col=20)
 *   Wed: rows 18-35, cols 1-9  (time col=0)
 *   Thu: rows 18-35, cols 11-19 (time col=10)
 *   Fri: rows 18-35, cols 21-29 (time col=20)
 *
 * 每天9列班级:
 *   offset+0: Eng1, +1: Eng2, +2: IELTS/A-Level E, +3: A-Level B,
 *   +4: TOEFL/AP, +5: IFY E, +6: IFY B, +7: AP Year3, +8: (reserve)
 *
 * 班级 → 组映射:
 *   col offset 2 (A-Level E) → "ielts"
 *   col offset 3 (A-Level B) → "ielts"   (合班)
 *   col offset 4 (AP)        → "toefl"
 *   col offset 7 (AP Year3)  → "toefl"
 *   col offset 5 (IFY E)     → "ify"
 *   col offset 6 (IFY B)     → "ify"
 *   col offset 0 (Eng1)      → "eng1"
 *   col offset 1 (Eng2)      → "eng2"
 */

var TIMETABLE_LAYOUT = {
  days: [
    {day:1, rowStart:0,  rowEnd:17, colStart:11, timeCol:10}, // Mon
    {day:2, rowStart:0,  rowEnd:17, colStart:21, timeCol:20}, // Tue
    {day:3, rowStart:18, rowEnd:35, colStart:1,  timeCol:0},  // Wed
    {day:4, rowStart:18, rowEnd:35, colStart:11, timeCol:10}, // Thu
    {day:5, rowStart:18, rowEnd:35, colStart:21, timeCol:20}  // Fri
  ],
  colGroupMap: {
    0: "eng1",
    1: "eng2",
    2: "ielts",    // A-Level E
    3: "ielts",    // A-Level B (合班 = same group)
    4: "toefl",    // AP
    5: "ify",      // IFY E
    6: "ify",      // IFY B
    7: "toefl"     // AP Year3
  }
};

// Known time slots in the timetable (hh:mm-hh:mm)
var TIMETABLE_TIMES = [
  "08:00-08:40","08:50-09:30","10:10-10:50","11:05-11:45",
  null, // lunch row
  "14:00-14:40","14:50-15:30","15:45-16:25","16:35-17:15","17:25-18:05",
  null, // dinner row
  "18:50-19:50","20:00-21:00","21:10-22:10"
];

function parseExcelSchedule(workbook){
  var sheet=workbook.Sheets[workbook.SheetNames[0]];
  var data=XLSX.utils.sheet_to_json(sheet,{header:1,defval:""});
  if(!data||data.length<2) return {error:"课表为空或格式不正确"};

  // Clear existing
  OCCUPIED={};
  TEACHERS.forEach(function(t){OCCUPIED[t.id]={};});

  // Try specific timetable layout first
  if(data.length>=35 && data[0].length>=28){
    return parseTimetableSpecific(data);
  }

  // Fallback: generic format detection
  var header=data[0].map(function(c){return String(c).trim();});
  var teacherCol=-1,dayCol=-1,timeCol=-1;
  header.forEach(function(h,i){
    var hl=h.toLowerCase();
    if(hl.indexOf('老师')>-1||hl.indexOf('教师')>-1||hl.indexOf('teacher')>-1) teacherCol=i;
    if(hl.indexOf('星期')>-1||hl.indexOf('周')>-1||hl.indexOf('day')>-1) dayCol=i;
    if(hl.indexOf('时间')>-1||hl.indexOf('节次')>-1||hl.indexOf('time')>-1) timeCol=i;
  });
  if(teacherCol>-1 && dayCol>-1 && timeCol>-1){
    return parseFormatC(data,teacherCol,dayCol,timeCol);
  }
  var dayPattern=/周[一二三四五六日]|星期[一二三四五六日天]|mon|tue|wed|thu|fri|sat|sun/i;
  var dayColMap={};var hasDayCols=false;
  header.forEach(function(h,i){
    if(i===0) return;
    var dm=h.match(dayPattern);
    if(dm){var dn=parseDayName(dm[0]);if(dn>0){dayColMap[i]=dn;hasDayCols=true;}}
  });
  if(hasDayCols) return parseFormatA(data,dayColMap);
  return parseFormatB(data);
}

// ══════════ 专用课表解析 (Timetable_2025_2026_Fall 格式) ══════════
function parseTimetableSpecific(data){
  var matchCount=0;
  var layout=TIMETABLE_LAYOUT;

  layout.days.forEach(function(dayInfo){
    var timeIdx=0; // index into TIMETABLE_TIMES
    for(var r=dayInfo.rowStart;r<=dayInfo.rowEnd&&r<data.length;r++){
      // Get time from known slots
      var timeRange=null;
      if(timeIdx<TIMETABLE_TIMES.length){
        var tstr=TIMETABLE_TIMES[timeIdx];
        if(tstr){
          var tp=tstr.match(/(\d{2}):(\d{2})-(\d{2}):(\d{2})/);
          if(tp){
            var sMin=parseInt(tp[1])*60+parseInt(tp[2]);
            var eMin=parseInt(tp[3])*60+parseInt(tp[4]);
            timeRange={startMin:sMin,endMin:eMin};
          }
        }
        timeIdx++;
      }
      if(!timeRange) continue; // skip lunch/dinner/invalid rows

      // Check if this time range falls within our scheduling window
      // We record ALL occupied slots regardless, for accurate conflict detection

      // Scan the 8 class columns
      for(var offset=0;offset<8;offset++){
        var col=dayInfo.colStart+offset;
        if(col>=data[r].length) continue;
        var cellVal=String(data[r][col]||'').trim();
        if(!cellVal||cellVal==='-'||cellVal==='/'||cellVal.toLowerCase()==='lunch'||cellVal.toLowerCase()==='dinner') continue;

        var group=layout.colGroupMap[offset]||"other";

        // Match teacher names in cell
        for(var ti=0;ti<TEACHERS.length;ti++){
          var t=TEACHERS[ti];
          var names=[t.name].concat(t.aliases||[]);
          var found=false;
          for(var ni=0;ni<names.length;ni++){
            if(names[ni]&&cellVal.indexOf(names[ni])>-1){found=true;break;}
          }
          if(!found) continue;

          if(!OCCUPIED[t.id]) OCCUPIED[t.id]={};
          if(!OCCUPIED[t.id][dayInfo.day]) OCCUPIED[t.id][dayInfo.day]=[];

          // Convert time range to slot indices
          var sSlot=minuteToSlot(timeRange.startMin);
          var eSlot=minuteToSlot(timeRange.endMin-1); // endMin is exclusive
          if(sSlot<0) sSlot=0;
          var maxSlot=slotCount()-1;
          if(eSlot>maxSlot) eSlot=maxSlot;

          for(var ss=sSlot;ss<=eSlot;ss++){
            // Check if this slot already exists
            var exists=false;
            for(var oi=0;oi<OCCUPIED[t.id][dayInfo.day].length;oi++){
              if(OCCUPIED[t.id][dayInfo.day][oi].slot===ss){exists=true;break;}
            }
            if(!exists){
              OCCUPIED[t.id][dayInfo.day].push({slot:ss,group:group,subject:cellVal});
              matchCount++;
            }
          }
        }
      }
    }
  });

  if(matchCount>0){
    return {success:true,format:"SPECIFIC",msg:"综合课表解析成功 (专用格式), 匹配到 "+matchCount+" 个占用时段"};
  }
  return {error:"未在课表中匹配到任何老师。请确认老师名单与课表中的名字一致。"};
}

// ══════════ 通用课表解析 (保留兼容) ══════════
function parseDayName(s){
  s=s.replace(/星期/,'周');
  var map={'周一':1,'周二':2,'周三':3,'周四':4,'周五':5,'周六':6,'周日':7,'周天':7};
  if(map[s]) return map[s];
  var emap={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7};
  var sl=s.toLowerCase().substring(0,3);
  return emap[sl]||0;
}

function parseFormatA(data,dayColMap){
  for(var r=1;r<data.length;r++){
    var timeCell=String(data[r][0]||'').trim();
    if(!timeCell) continue;
    var timeRange=parseTimeRange(timeCell,r-1);
    if(!timeRange) continue;
    var cols=Object.keys(dayColMap);
    for(var ci=0;ci<cols.length;ci++){
      var colIdx=parseInt(cols[ci]);
      var day=dayColMap[colIdx];
      var cellVal=String(data[r][colIdx]||'').trim();
      if(!cellVal) continue;
      matchTeacherInCell(cellVal,day,timeRange.startSlot,timeRange.endSlot,"other",cellVal);
    }
  }
  return {success:true,format:"A",msg:"按周课表格式解析成功"};
}

function parseFormatB(data){
  for(var r=0;r<data.length;r++){
    var name=String(data[r][0]||'').trim();
    var teacher=findTeacherByName(name);
    if(!teacher) continue;
    for(var c=1;c<data[r].length;c++){
      var cellVal=String(data[r][c]||'').trim();
      if(!cellVal||cellVal==='-'||cellVal==='/'||cellVal==='无') continue;
      var colHeader=String(data[0][c]||'').trim();
      var parsed=parseDayTimeHeader(colHeader,c-1);
      if(parsed){
        if(!OCCUPIED[teacher.id][parsed.day]) OCCUPIED[teacher.id][parsed.day]=[];
        for(var s=parsed.startSlot;s<=parsed.endSlot;s++){
          var exists=false;
          for(var oi=0;oi<OCCUPIED[teacher.id][parsed.day].length;oi++){
            if(OCCUPIED[teacher.id][parsed.day][oi].slot===s){exists=true;break;}
          }
          if(!exists) OCCUPIED[teacher.id][parsed.day].push({slot:s,group:"other",subject:cellVal});
        }
      }
    }
  }
  return {success:true,format:"B",msg:"按老师行格式解析成功"};
}

function parseFormatC(data,tCol,dCol,tmCol){
  for(var r=1;r<data.length;r++){
    var name=String(data[r][tCol]||'').trim();
    var teacher=findTeacherByName(name);
    if(!teacher) continue;
    var dayStr=String(data[r][dCol]||'').trim();
    var day=parseDayName(dayStr)||parseInt(dayStr)||0;
    if(day<1||day>7) continue;
    var timeStr=String(data[r][tmCol]||'').trim();
    var timeRange=parseTimeRange(timeStr,0);
    if(!timeRange) continue;
    if(!OCCUPIED[teacher.id][day]) OCCUPIED[teacher.id][day]=[];
    for(var s=timeRange.startSlot;s<=timeRange.endSlot;s++){
      var exists=false;
      for(var oi=0;oi<OCCUPIED[teacher.id][day].length;oi++){
        if(OCCUPIED[teacher.id][day][oi].slot===s){exists=true;break;}
      }
      if(!exists) OCCUPIED[teacher.id][day].push({slot:s,group:"other",subject:""});
    }
  }
  return {success:true,format:"C",msg:"按列名格式解析成功"};
}

function parseTimeRange(str,fallbackRow){
  var m=str.match(/(\d{1,2})[:\uff1a](\d{2})\s*[-~\u2013\u2014]\s*(\d{1,2})[:\uff1a](\d{2})/);
  if(m){
    return {startSlot:timeToSlot(m[1]+':'+m[2]),endSlot:timeToSlot(m[3]+':'+m[4])-1};
  }
  var m2=str.match(/第?(\d+)\s*[-~]?\s*(\d+)?\s*节/);
  if(m2){
    var s=parseInt(m2[1]),e=parseInt(m2[2]||m2[1]);
    var startMin=(s-1)*60+Math.floor(SCH_CONFIG.startMin/60)*60;
    var endMin=startMin+(e-s+1)*60;
    return {startSlot:minuteToSlot(startMin),endSlot:minuteToSlot(endMin)-1};
  }
  if(fallbackRow>=0) return {startSlot:fallbackRow*2,endSlot:fallbackRow*2+1};
  return null;
}

function parseDayTimeHeader(str,fallbackCol){
  var dayMatch=str.match(/周[一二三四五六日]|星期[一二三四五六日天]/);
  var day=dayMatch?parseDayName(dayMatch[0]):Math.floor(fallbackCol/8)+1;
  var timeRange=parseTimeRange(str,-1);
  if(timeRange) return {day:day,startSlot:timeRange.startSlot,endSlot:timeRange.endSlot};
  var periodMatch=str.match(/(\d+)\s*[-~]?\s*(\d+)?\s*节/);
  if(periodMatch){
    var s=parseInt(periodMatch[1]),e=parseInt(periodMatch[2]||periodMatch[1]);
    return {day:day,startSlot:(s-1)*2,endSlot:e*2-1};
  }
  return {day:day,startSlot:(fallbackCol%8)*2,endSlot:(fallbackCol%8)*2+1};
}

function findTeacherByName(name){
  if(!name) return null;
  for(var i=0;i<TEACHERS.length;i++){
    var t=TEACHERS[i];
    if(name.indexOf(t.name)>-1||t.name.indexOf(name)>-1) return t;
    var aliases=t.aliases||[];
    for(var a=0;a<aliases.length;a++){
      if(aliases[a]&&(name.indexOf(aliases[a])>-1||aliases[a].indexOf(name)>-1)) return t;
    }
  }
  return null;
}

function matchTeacherInCell(cellVal,day,startSlot,endSlot,group,subject){
  for(var i=0;i<TEACHERS.length;i++){
    var t=TEACHERS[i];
    var names=[t.name].concat(t.aliases||[]);
    var found=false;
    for(var ni=0;ni<names.length;ni++){
      if(names[ni]&&cellVal.indexOf(names[ni])>-1){found=true;break;}
    }
    if(!found) continue;
    if(!OCCUPIED[t.id]) OCCUPIED[t.id]={};
    if(!OCCUPIED[t.id][day]) OCCUPIED[t.id][day]=[];
    for(var s=startSlot;s<=endSlot;s++){
      var exists=false;
      for(var oi=0;oi<OCCUPIED[t.id][day].length;oi++){
        if(OCCUPIED[t.id][day][oi].slot===s){exists=true;break;}
      }
      if(!exists) OCCUPIED[t.id][day].push({slot:s,group:group||"other",subject:subject||""});
    }
  }
}

// ══════════ 空闲时段计算 (v2: 感知重叠规则) ══════════
// examType: "ielts" or "toefl" — determines which occupied slots can be overlapped
function getTeacherFreeSlots(teacherId,day,examType){
  var total=slotCount();
  var free=[];
  var occArr=(OCCUPIED[teacherId]&&OCCUPIED[teacherId][day])||[];
  var blk=(TEACHER_BLOCKED[teacherId]&&TEACHER_BLOCKED[teacherId][day])||[];
  var overlapGroups=examType?OVERLAP_RULES[examType]:[];

  for(var s=0;s<total;s++){
    // Check blocked
    if(blk.indexOf(s)>-1) continue;
    // Check occupied (with overlap rule)
    var blocked=false;
    for(var oi=0;oi<occArr.length;oi++){
      if(occArr[oi].slot===s){
        // If this occupied slot's group is in the overlap list, it's OK (not blocked)
        if(overlapGroups&&overlapGroups.indexOf(occArr[oi].group)>-1){
          // Overlap allowed — this teacher teaches the intensive's target group
          continue;
        }
        blocked=true;
        break;
      }
    }
    if(!blocked) free.push(s);
  }
  return free;
}

// Legacy compat: getTeacherFreeSlots without examType (blocks all occupied)
function getTeacherFreeSlotsAll(teacherId,day){
  return getTeacherFreeSlots(teacherId,day,null);
}

function findFreeBlocks(teacherId,day,neededSlots,examType){
  var free=getTeacherFreeSlots(teacherId,day,examType);
  var blocks=[];
  var brk=breakSlots();
  var scheduled=getTeacherScheduledSlots(teacherId,day);
  var available=free.filter(function(s){return scheduled.indexOf(s)<0;});
  for(var i=0;i<available.length;i++){
    var start=available[i];
    var len=1;
    while(i+len<available.length&&available[i+len]===start+len) len++;
    if(len>=neededSlots){
      var prevBusy=isSlotBusy(teacherId,day,start-1,scheduled);
      var okStart=prevBusy?start+brk:start;
      if(okStart+neededSlots<=start+len) blocks.push(okStart);
    }
    i+=len-1;
  }
  return blocks;
}

function isSlotBusy(teacherId,day,slot,scheduled){
  if(slot<0) return false;
  var occArr=(OCCUPIED[teacherId]&&OCCUPIED[teacherId][day])||[];
  for(var i=0;i<occArr.length;i++){
    if(occArr[i].slot===slot) return true;
  }
  return scheduled.indexOf(slot)>-1;
}

function getTeacherScheduledSlots(teacherId,day){
  var slots=[];
  [TOEFL_SCHEDULE,IELTS_SCHEDULE].forEach(function(sch){
    sch.forEach(function(entry){
      if(entry.teacherId===teacherId&&entry.day===day){
        for(var s=entry.startSlot;s<=entry.endSlot;s++) slots.push(s);
      }
    });
  });
  return slots;
}

function getTeacherDailyLoad(teacherId,day,scheduleArr){
  var count=0;
  scheduleArr.forEach(function(e){
    if(e.teacherId===teacherId&&e.day===day) count+=(e.endSlot-e.startSlot+1);
  });
  return count*SCH_CONFIG.slotMin/60;
}

// ══════════ 自动排课算法 (v2: 重叠感知) ══════════
function autoSchedule(examType){
  var courses=INTENSIVE_COURSES[examType];
  var schedule=[];
  var tasks=[];
  for(var ci=0;ci<courses.length;ci++){
    var course=courses[ci];
    var assignments=TEACHER_ASSIGNMENTS[course.id]||[];
    if(!assignments.length) continue;
    for(var ai=0;ai<assignments.length;ai++){
      var a=assignments[ai];
      if(!a.sessions||a.sessions<=0) continue;
      var teacher=TEACHERS.find(function(t){return t.id===a.teacherId;});
      if(!teacher) continue;
      tasks.push({
        courseId:course.id,teacherId:a.teacherId,
        sessions:a.sessions,duration:a.duration||course.duration,
        teacherObj:teacher
      });
    }
  }

  // Sort by constraint tightness (fewest free slots first)
  tasks.sort(function(a,b){
    var aFree=0,bFree=0;
    SCH_CONFIG.workdays.forEach(function(d){
      aFree+=getTeacherFreeSlots(a.teacherId,d,examType).length;
      bFree+=getTeacherFreeSlots(b.teacherId,d,examType).length;
    });
    return aFree-bFree;
  });

  for(var ti=0;ti<tasks.length;ti++){
    var task=tasks[ti];
    var needed=durationToSlots(task.duration);
    var sessionsLeft=task.sessions;
    var usedDays=[];
    for(var attempt=0;attempt<SCH_CONFIG.workdays.length*3&&sessionsLeft>0;attempt++){
      var dayOrder=SCH_CONFIG.workdays.slice().sort(function(a,b){
        var aUsed=usedDays.indexOf(a)>-1?1:0;
        var bUsed=usedDays.indexOf(b)>-1?1:0;
        if(aUsed!==bUsed) return aUsed-bUsed;
        return getTeacherDailyLoad(task.teacherId,a,schedule)-getTeacherDailyLoad(task.teacherId,b,schedule);
      });
      var day=dayOrder[attempt%dayOrder.length];
      var load=getTeacherDailyLoad(task.teacherId,day,schedule);
      if(load+task.duration/60>task.teacherObj.maxDaily) continue;
      var blocks=findFreeBlocksForSchedule(task.teacherId,day,needed,schedule,examType);
      if(blocks.length>0){
        var pick=blocks[Math.floor(blocks.length/3)];
        schedule.push({courseId:task.courseId,teacherId:task.teacherId,day:day,startSlot:pick,endSlot:pick+needed-1});
        usedDays.push(day);
        sessionsLeft--;
      }
    }
    if(sessionsLeft>0){
      schedule.push({courseId:task.courseId,teacherId:task.teacherId,
        error:getTeacherName(task.teacherId)+" 的 "+getCourseName(task.courseId)+": 仅排了"+(task.sessions-sessionsLeft)+"/"+task.sessions+"节, 时段不足"});
    }
  }
  return schedule;
}

function findFreeBlocksForSchedule(teacherId,day,neededSlots,scheduleArr,examType){
  var free=getTeacherFreeSlots(teacherId,day,examType);
  var brk=breakSlots();
  var scheduled=[];
  scheduleArr.forEach(function(e){
    if(e.teacherId===teacherId&&e.day===day&&!e.error){
      for(var s=Math.max(0,e.startSlot-brk);s<=e.endSlot+brk;s++) scheduled.push(s);
    }
  });
  var available=free.filter(function(s){return scheduled.indexOf(s)<0;});
  var blocks=[];
  for(var i=0;i<available.length;i++){
    var start=available[i];
    var len=1;
    while(i+len<available.length&&available[i+len]===start+len) len++;
    if(len>=neededSlots) blocks.push(start);
    i+=len-1;
  }
  return blocks;
}

function getEligibleTeachers(courseId){
  return TEACHERS.filter(function(t){return t.skills.indexOf(courseId)>-1;});
}

// ══════════ 执行排课 ══════════
function runAutoScheduleToefl(){
  TOEFL_SCHEDULE=autoSchedule('toefl').filter(function(e){return !e.error;});
  saveToeflSchedule(); return TOEFL_SCHEDULE;
}
function runAutoScheduleIelts(){
  IELTS_SCHEDULE=autoSchedule('ielts').filter(function(e){return !e.error;});
  saveIeltsSchedule(); return IELTS_SCHEDULE;
}

// ══════════ 冲突检测 (v2: 感知重叠) ══════════
function detectConflicts(scheduleArr,examType){
  var conflicts=[];
  for(var i=0;i<scheduleArr.length;i++){
    if(scheduleArr[i].error) continue;
    var a=scheduleArr[i];
    var overlapGroups=examType?OVERLAP_RULES[examType]:[];
    var occArr=(OCCUPIED[a.teacherId]&&OCCUPIED[a.teacherId][a.day])||[];
    for(var s=a.startSlot;s<=a.endSlot;s++){
      for(var oi=0;oi<occArr.length;oi++){
        if(occArr[oi].slot===s){
          if(overlapGroups&&overlapGroups.indexOf(occArr[oi].group)>-1) continue; // overlap OK
          conflicts.push({type:'occupied',entry:a,slot:s,
            msg:getTeacherName(a.teacherId)+'在'+SCH_CONFIG.dayLabels[a.day]+' '+slotToTime(s)+'有综合课 ('+occArr[oi].subject+')'});
        }
      }
    }
    for(var j=i+1;j<scheduleArr.length;j++){
      if(scheduleArr[j].error) continue;
      var b=scheduleArr[j];
      if(a.teacherId===b.teacherId&&a.day===b.day){
        if(a.startSlot<=b.endSlot&&b.startSlot<=a.endSlot){
          conflicts.push({type:'overlap',entryA:a,entryB:b,
            msg:getTeacherName(a.teacherId)+'在'+SCH_CONFIG.dayLabels[a.day]+'有课程时间重叠'});
        }
      }
    }
  }
  return conflicts;
}

function getTeacherName(id){
  var t=TEACHERS.find(function(t){return t.id===id;});
  return t?t.name:id;
}
function getTeacherColor(id){
  var t=TEACHERS.find(function(t){return t.id===id;});
  return t?t.color:'#999';
}
function getCourseName(id){
  var all=INTENSIVE_COURSES.toefl.concat(INTENSIVE_COURSES.ielts);
  var c=all.find(function(c){return c.id===id;});
  return c?c.name:id;
}
function getCourseObj(id){
  var all=INTENSIVE_COURSES.toefl.concat(INTENSIVE_COURSES.ielts);
  return all.find(function(c){return c.id===id;})||{name:id,icon:""};
}

// ══════════ localStorage 持久化 ══════════
function saveTeachers(){localStorage.setItem('prism_teachers',JSON.stringify(TEACHERS));}
function loadTeachers(){
  var d=localStorage.getItem('prism_teachers');
  if(d){try{TEACHERS=JSON.parse(d);}catch(e){TEACHERS=TEACHERS_DEFAULT.slice();}}
  else{TEACHERS=TEACHERS_DEFAULT.slice();}
  // Ensure aliases field exists
  TEACHERS.forEach(function(t){if(!t.aliases) t.aliases=[];});
}
function addTeacher(t){if(!t.aliases) t.aliases=[];TEACHERS.push(t);saveTeachers();}
function removeTeacher(id){TEACHERS=TEACHERS.filter(function(t){return t.id!==id;});saveTeachers();}
function updateTeacher(id,data){
  for(var i=0;i<TEACHERS.length;i++){if(TEACHERS[i].id===id){Object.assign(TEACHERS[i],data);break;}}
  saveTeachers();
}
function nextTeacherId(){
  var max=0;TEACHERS.forEach(function(t){var n=parseInt(t.id.replace('t',''));if(n>max)max=n;});
  var next=max+1;return 't'+(next<10?'0':'')+next;
}
function saveOccupied(){localStorage.setItem('prism_occupied',JSON.stringify(OCCUPIED));}
function loadOccupied(){
  var d=localStorage.getItem('prism_occupied');
  if(d){try{OCCUPIED=JSON.parse(d);}catch(e){}}
}
function saveToeflSchedule(){localStorage.setItem('prism_toefl_sch',JSON.stringify(TOEFL_SCHEDULE));}
function loadToeflSchedule(){
  var d=localStorage.getItem('prism_toefl_sch');
  if(d){try{TOEFL_SCHEDULE=JSON.parse(d);}catch(e){}}
}
function saveIeltsSchedule(){localStorage.setItem('prism_ielts_sch',JSON.stringify(IELTS_SCHEDULE));}
function loadIeltsSchedule(){
  var d=localStorage.getItem('prism_ielts_sch');
  if(d){try{IELTS_SCHEDULE=JSON.parse(d);}catch(e){}}
}
function saveSchConfig(){localStorage.setItem('prism_sch_config',JSON.stringify(SCH_CONFIG));}
function loadSchConfig(){
  var d=localStorage.getItem('prism_sch_config');
  if(d){
    try{
      var c=JSON.parse(d);
      // Migrate from old startHour/endHour format
      if(c.startHour!==undefined&&c.startMin===undefined){
        c.startMin=c.startHour*60;
        c.endMin=c.endHour*60;
        delete c.startHour;delete c.endHour;
      }
      Object.assign(SCH_CONFIG,c);
    }catch(e){}
  }
}
function saveAssignments(){localStorage.setItem('prism_assignments',JSON.stringify(TEACHER_ASSIGNMENTS));}
function loadAssignments(){
  var d=localStorage.getItem('prism_assignments');
  if(d){try{TEACHER_ASSIGNMENTS=JSON.parse(d);}catch(e){}}
}
function loadAllSchedulerData(){
  loadTeachers();loadOccupied();loadToeflSchedule();loadIeltsSchedule();loadSchConfig();loadAssignments();
}

// ══════════ 周末日期映射 ══════════
// 当排课日期落在周六, 用户选择参考哪天的课表
var WEEKEND_DAY_MAP = {}; // {"2026-03-21": 3} = that Saturday uses Wednesday's timetable
function saveWeekendMap(){localStorage.setItem('prism_weekend_map',JSON.stringify(WEEKEND_DAY_MAP));}
function loadWeekendMap(){
  var d=localStorage.getItem('prism_weekend_map');
  if(d){try{WEEKEND_DAY_MAP=JSON.parse(d);}catch(e){}}
}
function getEffectiveDay(dateStr){
  // If this date has a weekend mapping, use that weekday's OCCUPIED data
  if(WEEKEND_DAY_MAP[dateStr]) return WEEKEND_DAY_MAP[dateStr];
  var d=new Date(dateStr);
  return d.getDay()||7; // 0=Sun→7, 1=Mon...6=Sat
}

// ══════════ iCal (.ics) 导出 ══════════
function generateICS(scheduleArr,title){
  var lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Prism//Scheduler//CN','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
  var termStart=new Date(SCH_CONFIG.termStart);
  var firstMonday=new Date(termStart);
  while(firstMonday.getDay()!==1) firstMonday.setDate(firstMonday.getDate()+1);
  var termEnd=new Date(SCH_CONFIG.termEnd);
  var weekCount=Math.ceil((termEnd-firstMonday)/(7*24*60*60*1000));
  scheduleArr.forEach(function(entry){
    if(entry.error) return;
    var course=getCourseObj(entry.courseId);
    var teacher=getTeacherName(entry.teacherId);
    var firstDate=new Date(firstMonday);
    firstDate.setDate(firstDate.getDate()+(entry.day-1));
    var startTime=slotToTime(entry.startSlot).replace(':','')+'00';
    var endTime=slotToTime(entry.endSlot+1).replace(':','')+'00';
    var dateStr=firstDate.getFullYear()+
      ((firstDate.getMonth()+1)<10?'0':'')+(firstDate.getMonth()+1)+
      (firstDate.getDate()<10?'0':'')+firstDate.getDate();
    lines.push('BEGIN:VEVENT');
    lines.push('DTSTART:'+dateStr+'T'+startTime);
    lines.push('DTEND:'+dateStr+'T'+endTime);
    lines.push('RRULE:FREQ=WEEKLY;COUNT='+weekCount);
    lines.push('SUMMARY:'+course.name+' - '+teacher);
    lines.push('DESCRIPTION:'+title+' | 老师: '+teacher);
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function downloadICS(scheduleArr,filename,title){
  var ics=generateICS(scheduleArr,title);
  var blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=filename;
  a.click();
}

// ══════════ Excel课表导出 ══════════
function exportScheduleExcel(scheduleArr,filename){
  var header=['星期','时间','课程','老师','时长(分钟)'];
  var rows=[header];
  scheduleArr.forEach(function(e){
    if(e.error) return;
    rows.push([
      SCH_CONFIG.dayLabels[e.day],
      slotToTime(e.startSlot)+'-'+slotToTime(e.endSlot+1),
      getCourseName(e.courseId),
      getTeacherName(e.teacherId),
      (e.endSlot-e.startSlot+1)*SCH_CONFIG.slotMin
    ]);
  });
  var ws=XLSX.utils.aoa_to_sheet(rows);
  var wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'课程表');
  XLSX.write(wb,{bookType:'xlsx',type:'array'});
  XLSX.writeFile(wb,filename);
}

// ══════════ 统计 ══════════
function getScheduleStats(scheduleArr){
  var byTeacher={},byCourse={},byDay={};
  scheduleArr.forEach(function(e){
    if(e.error) return;
    var dur=(e.endSlot-e.startSlot+1)*SCH_CONFIG.slotMin/60;
    byTeacher[e.teacherId]=(byTeacher[e.teacherId]||0)+dur;
    byCourse[e.courseId]=(byCourse[e.courseId]||0)+1;
    byDay[e.day]=(byDay[e.day]||0)+dur;
  });
  return {byTeacher:byTeacher,byCourse:byCourse,byDay:byDay,total:scheduleArr.filter(function(e){return !e.error}).length};
}

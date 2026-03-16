/*
 * scheduler-data.js - 棱镜 Prism 集训排课系统
 * 老师管理 / 综合课表解析 / 自动排课算法 / iCal导出
 */

// ══════════ 老师档案 (动态可选, 可0~N位, 占位数据仅供参考) ══════════
var TEACHERS_DEFAULT = [
  {id:"t01",name:"张明",skills:["toefl_r","ielts_r"],maxDaily:4,color:"#4f6ef7"},
  {id:"t02",name:"李华",skills:["toefl_w","ielts_w"],maxDaily:4,color:"#e74c3c"},
  {id:"t03",name:"王芳",skills:["toefl_s","ielts_s"],maxDaily:3,color:"#27ae60"},
  {id:"t04",name:"赵磊",skills:["toefl_l","ielts_l"],maxDaily:4,color:"#f39c12"},
  {id:"t05",name:"陈静",skills:["toefl_r","toefl_w","ielts_r"],maxDaily:4,color:"#9b59b6"},
  {id:"t06",name:"刘洋",skills:["toefl_s","toefl_l","ielts_s"],maxDaily:3,color:"#1abc9c"},
  {id:"t07",name:"周婷",skills:["ielts_w","ielts_s"],maxDaily:4,color:"#e67e22"},
  {id:"t08",name:"吴刚",skills:["ielts_l","ielts_r","toefl_l"],maxDaily:4,color:"#3498db"},
  {id:"t09",name:"孙悦",skills:["toefl_w","toefl_s"],maxDaily:3,color:"#e91e63"},
  {id:"t10",name:"郑浩",skills:["ielts_w","ielts_l","toefl_r"],maxDaily:4,color:"#607d8b"}
];
// 实际使用的老师列表(从localStorage加载或使用默认, 用户可增删改)
var TEACHERS = [];

// ══════════ 颜色池 (不可重复) ══════════
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
  // 超出池子, 随机生成
  return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

// ══════════ 集训科目定义 ══════════
// duration=默认时长(分钟), perWeek仅做参考默认值
// 实际课次由 TEACHER_ASSIGNMENTS 中每位老师手动输入决定
var INTENSIVE_COURSES = {
  toefl:[
    {id:"toefl_r",name:"托福阅读集训",nameEn:"TOEFL Reading",duration:120,perWeek:3,icon:"\u{1F4D6}"},
    {id:"toefl_w",name:"托福写作集训",nameEn:"TOEFL Writing",duration:120,perWeek:3,icon:"\u{270D}"},
    {id:"toefl_s",name:"托福口语集训",nameEn:"TOEFL Speaking",duration:90,perWeek:4,icon:"\u{1F5E3}"},
    {id:"toefl_l",name:"托福听力集训",nameEn:"TOEFL Listening",duration:120,perWeek:3,icon:"\u{1F3A7}"}
  ],
  ielts:[
    {id:"ielts_r",name:"雅思阅读集训",nameEn:"IELTS Reading",duration:120,perWeek:3,icon:"\u{1F4D6}"},
    {id:"ielts_w",name:"雅思写作集训",nameEn:"IELTS Writing",duration:120,perWeek:3,icon:"\u{270D}"},
    {id:"ielts_s",name:"雅思口语集训",nameEn:"IELTS Speaking",duration:90,perWeek:4,icon:"\u{1F5E3}"},
    {id:"ielts_l",name:"雅思听力集训",nameEn:"IELTS Listening",duration:120,perWeek:3,icon:"\u{1F3A7}"}
  ]
};

// ══════════ 老师课次分配 (核心: 排课人手动输入) ══════════
// 格式: {courseId: [{teacherId, sessions(课次数), duration(可覆盖默认时长)}]}
// 每位参与集训的老师各自的课次量不同, 以手动输入为准
var TEACHER_ASSIGNMENTS = {};

// ══════════ 排课配置 ══════════
var SCH_CONFIG = {
  startHour:8,
  endHour:21,
  slotMin:30,       // 最小粒度30分钟
  breakMin:15,      // 课间休息
  workdays:[1,2,3,4,5,6], // 1=周一 ... 6=周六
  holidays:[],      // "YYYY-MM-DD"格式
  termStart:"2026-03-16",
  termEnd:"2026-06-30",
  dayLabels:["","周一","周二","周三","周四","周五","周六","周日"]
};

// ══════════ 全局排课数据 ══════════
// 老师被综合课表占用的时段: {teacherId: {dayOfWeek: [slotIndex,...]}}
var OCCUPIED = {};
// 排课结果: [{courseId, teacherId, day(1-7), startSlot, endSlot, weekNum}]
var TOEFL_SCHEDULE = [];
var IELTS_SCHEDULE = [];
// 手动不可用标记: {teacherId: {day: [slotIndex,...]}}
var TEACHER_BLOCKED = {};

// ══════════ 时间槽工具函数 ══════════
function slotCount(){return (SCH_CONFIG.endHour-SCH_CONFIG.startHour)*60/SCH_CONFIG.slotMin;}
function slotToTime(s){
  var totalMin=SCH_CONFIG.startHour*60+s*SCH_CONFIG.slotMin;
  var h=Math.floor(totalMin/60),m=totalMin%60;
  return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
}
function timeToSlot(timeStr){
  var parts=timeStr.split(':');
  var h=parseInt(parts[0]),m=parseInt(parts[1]||'0');
  return Math.floor((h*60+m-SCH_CONFIG.startHour*60)/SCH_CONFIG.slotMin);
}
function durationToSlots(minutes){return Math.ceil(minutes/SCH_CONFIG.slotMin);}
function breakSlots(){return Math.ceil(SCH_CONFIG.breakMin/SCH_CONFIG.slotMin);}

// ══════════ Excel综合课表解析 ══════════
/*
 * 支持的Excel格式 (自动检测):
 * 格式A (标准周课表): 行=时间段, 列=星期几, 单元格=老师名/课程名
 * 格式B (老师行课表): 行=老师, 列=时间段(周一1/周一2.../周二1...)
 * 格式C (自由格式):   含有"老师/教师"+"星期/周"+"时间/节次"列
 */
function parseExcelSchedule(workbook){
  var sheet=workbook.Sheets[workbook.SheetNames[0]];
  var data=XLSX.utils.sheet_to_json(sheet,{header:1,defval:""});
  if(!data||data.length<2) return {error:"课表为空或格式不正确"};

  // 清空现有占用数据
  OCCUPIED={};
  TEACHERS.forEach(function(t){OCCUPIED[t.id]={};});

  // 尝试自动检测格式
  var header=data[0].map(function(c){return String(c).trim();});

  // 格式C: 有明确列名
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

  // 格式A: 检测表头是否含有 周一/周二... 或 Mon/Tue...
  var dayPattern=/周[一二三四五六日]|星期[一二三四五六日天]|mon|tue|wed|thu|fri|sat|sun/i;
  var dayColMap={};
  var hasDayCols=false;
  header.forEach(function(h,i){
    if(i===0) return; // 跳过第一列(通常是时间)
    var m=h.match(dayPattern);
    if(m){
      var dayNum=parseDayName(m[0]);
      if(dayNum>0){dayColMap[i]=dayNum;hasDayCols=true;}
    }
  });

  if(hasDayCols){
    return parseFormatA(data,dayColMap);
  }

  // 格式B: 第一列是老师名
  return parseFormatB(data);
}

function parseDayName(s){
  s=s.replace(/星期/,'周');
  var map={'周一':1,'周二':2,'周三':3,'周四':4,'周五':5,'周六':6,'周日':7,'周天':7};
  if(map[s]) return map[s];
  var emap={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7};
  var sl=s.toLowerCase().substring(0,3);
  return emap[sl]||0;
}

// 格式A: 行=时段, 列=星期
function parseFormatA(data,dayColMap){
  var timeSlots=[];
  // 第一列通常是时间段
  for(var r=1;r<data.length;r++){
    var timeCell=String(data[r][0]||'').trim();
    if(!timeCell) continue;
    // 尝试解析时间 "08:00-09:30" 或 "第1节" 等
    var timeRange=parseTimeRange(timeCell,r-1);
    if(!timeRange) continue;
    var cols=Object.keys(dayColMap);
    for(var ci=0;ci<cols.length;ci++){
      var colIdx=parseInt(cols[ci]);
      var day=dayColMap[colIdx];
      var cellVal=String(data[r][colIdx]||'').trim();
      if(!cellVal) continue;
      // 在单元格中查找老师名
      matchTeacherInCell(cellVal,day,timeRange.startSlot,timeRange.endSlot);
    }
  }
  return {success:true,format:"A",msg:"按周课表格式解析成功"};
}

// 格式B: 行=老师
function parseFormatB(data){
  for(var r=0;r<data.length;r++){
    var name=String(data[r][0]||'').trim();
    var teacher=findTeacherByName(name);
    if(!teacher) continue;
    for(var c=1;c<data[r].length;c++){
      var cellVal=String(data[r][c]||'').trim();
      if(!cellVal||cellVal==='-'||cellVal==='/'||cellVal==='无') continue;
      // 列头可能是 "周一1-2节" 等
      var colHeader=String(data[0][c]||'').trim();
      var parsed=parseDayTimeHeader(colHeader,c-1);
      if(parsed){
        if(!OCCUPIED[teacher.id][parsed.day]) OCCUPIED[teacher.id][parsed.day]=[];
        for(var s=parsed.startSlot;s<=parsed.endSlot;s++){
          if(OCCUPIED[teacher.id][parsed.day].indexOf(s)<0)
            OCCUPIED[teacher.id][parsed.day].push(s);
        }
      }
    }
  }
  return {success:true,format:"B",msg:"按老师行格式解析成功"};
}

// 格式C: 明确列
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
      if(OCCUPIED[teacher.id][day].indexOf(s)<0)
        OCCUPIED[teacher.id][day].push(s);
    }
  }
  return {success:true,format:"C",msg:"按列名格式解析成功"};
}

function parseTimeRange(str,fallbackRow){
  // "08:00-09:30" or "8:00~10:00"
  var m=str.match(/(\d{1,2})[:\uff1a](\d{2})\s*[-~\u2013\u2014]\s*(\d{1,2})[:\uff1a](\d{2})/);
  if(m){
    return {startSlot:timeToSlot(m[1]+':'+m[2]),endSlot:timeToSlot(m[3]+':'+m[4])-1};
  }
  // "第1节" or "1-2节" - map to approximate times
  var m2=str.match(/第?(\d+)\s*[-~]?\s*(\d+)?\s*节/);
  if(m2){
    var s=parseInt(m2[1]),e=parseInt(m2[2]||m2[1]);
    // Standard: period 1=8:00, each period ~50min + 10min break
    var startMin=(s-1)*60+SCH_CONFIG.startHour*60;
    var endMin=startMin+(e-s+1)*60;
    return {startSlot:Math.floor((startMin-SCH_CONFIG.startHour*60)/SCH_CONFIG.slotMin),
            endSlot:Math.floor((endMin-SCH_CONFIG.startHour*60)/SCH_CONFIG.slotMin)-1};
  }
  // Fallback: use row number as slot index
  if(fallbackRow>=0){
    return {startSlot:fallbackRow*2,endSlot:fallbackRow*2+1};
  }
  return null;
}

function parseDayTimeHeader(str,fallbackCol){
  var dayMatch=str.match(/周[一二三四五六日]|星期[一二三四五六日天]/);
  var day=dayMatch?parseDayName(dayMatch[0]):Math.floor(fallbackCol/8)+1;
  var timeRange=parseTimeRange(str,-1);
  if(timeRange) return {day:day,startSlot:timeRange.startSlot,endSlot:timeRange.endSlot};
  // "周一1-2节" 格式
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
    if(name.indexOf(TEACHERS[i].name)>-1||TEACHERS[i].name.indexOf(name)>-1) return TEACHERS[i];
  }
  return null;
}

function matchTeacherInCell(cellVal,day,startSlot,endSlot){
  for(var i=0;i<TEACHERS.length;i++){
    var t=TEACHERS[i];
    if(cellVal.indexOf(t.name)>-1){
      if(!OCCUPIED[t.id][day]) OCCUPIED[t.id][day]=[];
      for(var s=startSlot;s<=endSlot;s++){
        if(OCCUPIED[t.id][day].indexOf(s)<0) OCCUPIED[t.id][day].push(s);
      }
    }
  }
}

// ══════════ 空闲时段计算 ══════════
function getTeacherFreeSlots(teacherId,day){
  var total=slotCount();
  var free=[];
  var occ=OCCUPIED[teacherId]&&OCCUPIED[teacherId][day]?OCCUPIED[teacherId][day]:[];
  var blk=TEACHER_BLOCKED[teacherId]&&TEACHER_BLOCKED[teacherId][day]?TEACHER_BLOCKED[teacherId][day]:[];
  for(var s=0;s<total;s++){
    if(occ.indexOf(s)<0&&blk.indexOf(s)<0) free.push(s);
  }
  return free;
}

// 找连续空闲块 (用于排课)
function findFreeBlocks(teacherId,day,neededSlots){
  var free=getTeacherFreeSlots(teacherId,day);
  var blocks=[];
  var brk=breakSlots();
  // 检查已排课的TOEFL+IELTS占用
  var scheduled=getTeacherScheduledSlots(teacherId,day);
  var available=free.filter(function(s){return scheduled.indexOf(s)<0;});
  // 找连续段
  for(var i=0;i<available.length;i++){
    var start=available[i];
    var len=1;
    while(i+len<available.length&&available[i+len]===start+len) len++;
    if(len>=neededSlots){
      // 检查前后是否有足够休息
      var prevBusy=isSlotBusy(teacherId,day,start-1,scheduled);
      var okStart=prevBusy?start+brk:start;
      if(okStart+neededSlots<=start+len){
        blocks.push(okStart);
      }
    }
    i+=len-1;
  }
  return blocks;
}

function isSlotBusy(teacherId,day,slot,scheduled){
  if(slot<0) return false;
  var occ=OCCUPIED[teacherId]&&OCCUPIED[teacherId][day]?OCCUPIED[teacherId][day]:[];
  return occ.indexOf(slot)>-1||scheduled.indexOf(slot)>-1;
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

// 计算老师某天已排集训课时数
function getTeacherDailyLoad(teacherId,day,scheduleArr){
  var count=0;
  scheduleArr.forEach(function(e){
    if(e.teacherId===teacherId&&e.day===day) count+=(e.endSlot-e.startSlot+1);
  });
  return count*SCH_CONFIG.slotMin/60; // 小时
}

// ══════════ 自动排课算法 ══════════
/*
 * 核心逻辑:
 * 1. 读取 TEACHER_ASSIGNMENTS: 每门课 → 每位老师各自的课次数(手动输入)
 * 2. 按"该老师的空闲时段最少"优先排(约束最紧的先排)
 * 3. 同一老师的课尽量分散到不同天
 * 4. 不超过老师每日上限, 课间有breakMin休息
 */
function autoSchedule(examType){
  var courses=INTENSIVE_COURSES[examType];
  var schedule=[];

  // 收集所有需要排的 [课程, 老师, 课次] 任务
  var tasks=[];
  for(var ci=0;ci<courses.length;ci++){
    var course=courses[ci];
    var assignments=TEACHER_ASSIGNMENTS[course.id]||[];
    if(!assignments.length){
      // 无分配, 跳过(不算错误, 可能该科目本轮不排)
      continue;
    }
    for(var ai=0;ai<assignments.length;ai++){
      var a=assignments[ai];
      if(!a.sessions||a.sessions<=0) continue;
      var teacher=TEACHERS.find(function(t){return t.id===a.teacherId;});
      if(!teacher) continue;
      tasks.push({
        courseId:course.id,
        teacherId:a.teacherId,
        sessions:a.sessions,
        duration:a.duration||course.duration,
        teacherObj:teacher
      });
    }
  }

  // 按空闲时段最少的老师优先(约束最紧先排)
  tasks.sort(function(a,b){
    var aFree=0,bFree=0;
    SCH_CONFIG.workdays.forEach(function(d){
      aFree+=getTeacherFreeSlots(a.teacherId,d).length;
      bFree+=getTeacherFreeSlots(b.teacherId,d).length;
    });
    return aFree-bFree;
  });

  // 逐个任务排课
  for(var ti=0;ti<tasks.length;ti++){
    var task=tasks[ti];
    var needed=durationToSlots(task.duration);
    var sessionsLeft=task.sessions;
    var usedDays=[];

    for(var attempt=0;attempt<SCH_CONFIG.workdays.length*3&&sessionsLeft>0;attempt++){
      // 优先未使用的天
      var dayOrder=SCH_CONFIG.workdays.slice().sort(function(a,b){
        var aUsed=usedDays.indexOf(a)>-1?1:0;
        var bUsed=usedDays.indexOf(b)>-1?1:0;
        if(aUsed!==bUsed) return aUsed-bUsed;
        return getTeacherDailyLoad(task.teacherId,a,schedule)-getTeacherDailyLoad(task.teacherId,b,schedule);
      });
      var day=dayOrder[attempt%dayOrder.length];
      // 检查每日上限
      var load=getTeacherDailyLoad(task.teacherId,day,schedule);
      if(load+task.duration/60>task.teacherObj.maxDaily) continue;
      // 找空闲块
      var blocks=findFreeBlocksForSchedule(task.teacherId,day,needed,schedule);
      if(blocks.length>0){
        var pick=blocks[Math.floor(blocks.length/3)];
        schedule.push({
          courseId:task.courseId,
          teacherId:task.teacherId,
          day:day,
          startSlot:pick,
          endSlot:pick+needed-1
        });
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

// findFreeBlocks that considers a specific in-progress schedule array
function findFreeBlocksForSchedule(teacherId,day,neededSlots,scheduleArr){
  var free=getTeacherFreeSlots(teacherId,day);
  var brk=breakSlots();
  // 已排课占用
  var scheduled=[];
  scheduleArr.forEach(function(e){
    if(e.teacherId===teacherId&&e.day===day){
      // 包含课间
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
  saveToeflSchedule();
  return TOEFL_SCHEDULE;
}
function runAutoScheduleIelts(){
  IELTS_SCHEDULE=autoSchedule('ielts').filter(function(e){return !e.error;});
  saveIeltsSchedule();
  return IELTS_SCHEDULE;
}

// ══════════ 冲突检测 ══════════
function detectConflicts(scheduleArr){
  var conflicts=[];
  for(var i=0;i<scheduleArr.length;i++){
    if(scheduleArr[i].error) continue;
    var a=scheduleArr[i];
    // 检查与综合课表冲突
    var occ=OCCUPIED[a.teacherId]&&OCCUPIED[a.teacherId][a.day]?OCCUPIED[a.teacherId][a.day]:[];
    for(var s=a.startSlot;s<=a.endSlot;s++){
      if(occ.indexOf(s)>-1){
        conflicts.push({type:'occupied',entry:a,slot:s,msg:getTeacherName(a.teacherId)+'在'+SCH_CONFIG.dayLabels[a.day]+' '+slotToTime(s)+'有综合课'});
      }
    }
    // 检查与同排课表内其他课冲突
    for(var j=i+1;j<scheduleArr.length;j++){
      if(scheduleArr[j].error) continue;
      var b=scheduleArr[j];
      if(a.teacherId===b.teacherId&&a.day===b.day){
        if(a.startSlot<=b.endSlot&&b.startSlot<=a.endSlot){
          conflicts.push({type:'overlap',entryA:a,entryB:b,msg:getTeacherName(a.teacherId)+'在'+SCH_CONFIG.dayLabels[a.day]+'有课程时间重叠'});
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
}
function addTeacher(t){TEACHERS.push(t);saveTeachers();}
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
  if(d){try{var c=JSON.parse(d);Object.assign(SCH_CONFIG,c);}catch(e){}}
}
function saveAssignments(){localStorage.setItem('prism_assignments',JSON.stringify(TEACHER_ASSIGNMENTS));}
function loadAssignments(){
  var d=localStorage.getItem('prism_assignments');
  if(d){try{TEACHER_ASSIGNMENTS=JSON.parse(d);}catch(e){}}
}
function loadAllSchedulerData(){
  loadTeachers();loadOccupied();loadToeflSchedule();loadIeltsSchedule();loadSchConfig();loadAssignments();
}

// ══════════ iCal (.ics) 导出 ══════════
function generateICS(scheduleArr,title){
  var lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Prism//Scheduler//CN','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
  var termStart=new Date(SCH_CONFIG.termStart);
  // 找到学期开始后的第一个周一
  var firstMonday=new Date(termStart);
  while(firstMonday.getDay()!==1) firstMonday.setDate(firstMonday.getDate()+1);

  var termEnd=new Date(SCH_CONFIG.termEnd);
  var weekCount=Math.ceil((termEnd-firstMonday)/(7*24*60*60*1000));

  scheduleArr.forEach(function(entry){
    if(entry.error) return;
    var course=getCourseObj(entry.courseId);
    var teacher=getTeacherName(entry.teacherId);
    // 计算第一次上课的日期
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

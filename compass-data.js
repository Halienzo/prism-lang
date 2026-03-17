/*
 * compass-data.js - 棱镜 Prism 核心数据结构 & 专业分类
 * v4.0 - 全本科版 (Undergraduate Only) + Dual TOEFL scale (0-120 + 1-6)
 *
 * Data format:
 *   Each university: {id, n(name), e(english), c(city), r(QS rank), cat,
 *     ll(langLevels): {key: {ielts:{t,r,w,s,l}, toefl:{t,r,w,s,l}, toefl6:{t,r,w,s,l}(optional)}},
 *     pol(policies): {nt(newToefl status 5-state), mb(myBest), v(validity), note},
 *     fee(fees): {ug(tuition), currency},
 *     living(living cost), visa, ddl(deadlines), schol(scholarships), materials,
 *     p(programs): [{c(category), l(langLevel key), g(entry grades), o(override), note}]
 *   }
 *   g(grades): A-Level / IB / SAT / 高考 entry requirements
 *   Sub-scores: t=total, r=reading, w=writing, s=speaking, l=listening
 *   null = not published / check official site
 *   pol.nt values: "published"|"accepted"|"suspended"|"old_only"|"pending"
 */

// ══════════ Undergraduate Program Categories ══════════
var PC = {
  // ── 工程与技术 ──
  cs:{n:"计算机科学",e:"Computer Science BSc",f:"计算机/工程学院"},
  ee:{n:"电子电气工程",e:"Electrical Engineering BEng",f:"工程学院"},
  me:{n:"机械工程",e:"Mechanical Engineering BEng",f:"工程学院"},
  ce:{n:"土木工程",e:"Civil Engineering BEng",f:"工程学院"},
  eng:{n:"工程(通用)",e:"Engineering BEng",f:"工程学院"},
  ds:{n:"数据科学",e:"Data Science BSc",f:"计算机/信息学院"},
  ai:{n:"人工智能",e:"Artificial Intelligence BSc",f:"计算机/工程学院"},
  // ── 商科 ──
  bus:{n:"商科/工商管理",e:"Business/Commerce BBA",f:"商学院"},
  fin:{n:"金融",e:"Finance BBA/BSc",f:"商学院"},
  acct:{n:"会计",e:"Accounting BAcc",f:"商学院"},
  econ:{n:"经济学",e:"Economics BA/BSc",f:"经济学院"},
  // ── 自然科学 ──
  math:{n:"数学",e:"Mathematics BSc",f:"理学院"},
  stat:{n:"统计学",e:"Statistics BSc",f:"理学院"},
  phys:{n:"物理",e:"Physics BSc",f:"理学院"},
  chem:{n:"化学",e:"Chemistry BSc",f:"理学院"},
  bio:{n:"生物科学",e:"Biological Sciences BSc",f:"理学院"},
  env:{n:"环境科学",e:"Environmental Science BSc",f:"环境学院"},
  // ── 医学与健康 ──
  med:{n:"医学",e:"Medicine MBBS/MD",f:"医学院"},
  dent:{n:"牙医",e:"Dentistry BDS",f:"牙医学院"},
  nurs:{n:"护理",e:"Nursing BSN",f:"护理学院"},
  pharm:{n:"药学",e:"Pharmacy BPharm",f:"药学院"},
  vet:{n:"兽医",e:"Veterinary BVSc",f:"兽医学院"},
  ph:{n:"公共卫生",e:"Public Health BSc",f:"公共卫生学院"},
  // ── 社会科学 ──
  law:{n:"法学",e:"Law LLB",f:"法学院"},
  psych:{n:"心理学",e:"Psychology BA/BSc",f:"心理学院"},
  edu:{n:"教育",e:"Education BEd",f:"教育学院"},
  ir:{n:"国际关系",e:"International Relations BA",f:"社科/政治学院"},
  pub:{n:"公共政策",e:"Public Policy BA",f:"公共政策学院"},
  sw:{n:"社会工作",e:"Social Work BSW",f:"社会工作学院"},
  soc:{n:"社会学",e:"Sociology BA",f:"社科学院"},
  // ── 人文与艺术 ──
  media:{n:"传媒/新闻",e:"Media/Journalism BA",f:"传媒学院"},
  arch:{n:"建筑",e:"Architecture BA/BSc",f:"建筑学院"},
  art:{n:"艺术设计",e:"Art/Design BFA",f:"艺术学院"},
  ling:{n:"语言学/英语",e:"Linguistics/English BA",f:"人文学院"},
  hist:{n:"历史",e:"History BA",f:"人文学院"},
  phil:{n:"哲学",e:"Philosophy BA",f:"人文学院"},
  // ── 特殊 ──
  found:{n:"预科/Foundation",e:"Foundation Year",f:"预科学院"}
};

// ══════════ Global data container ══════════
var COMPASS_DATA = {usa:[], uk:[], aus:[], nz:[], sea:[], hk:[], mo:[], ca:[], ie:[]};

// ══════════ Region metadata ══════════
var REGION_META = {
  usa:{n:"美国",e:"United States",flag:"\u{1F1FA}\u{1F1F8}"},
  uk:{n:"英国",e:"United Kingdom",flag:"\u{1F1EC}\u{1F1E7}"},
  aus:{n:"澳大利亚",e:"Australia",flag:"\u{1F1E6}\u{1F1FA}"},
  nz:{n:"新西兰",e:"New Zealand",flag:"\u{1F1F3}\u{1F1FF}"},
  sea:{n:"东南亚",e:"Southeast Asia",flag:"\u{1F30F}"},
  hk:{n:"中国香港",e:"Hong Kong",flag:"\u{1F1ED}\u{1F1F0}"},
  mo:{n:"中国澳门",e:"Macau",flag:"\u{1F1F2}\u{1F1F4}"},
  ca:{n:"加拿大",e:"Canada",flag:"\u{1F1E8}\u{1F1E6}"},
  ie:{n:"爱尔兰",e:"Ireland",flag:"\u{1F1EE}\u{1F1EA}"}
};

// ══════════ New TOEFL policy states ══════════
var NT_STATES = {
  published:{n:"已发布新版要求",e:"Published new scale",cls:"badge-green",icon:"\u2705"},
  accepted:{n:"接受新版(未发布分数)",e:"Accepted (no scores yet)",cls:"badge-green",icon:"\u2611"},
  suspended:{n:"暂停接受新版",e:"Suspended",cls:"badge-red",icon:"\u26D4"},
  old_only:{n:"仍以旧版评估",e:"Old scale only",cls:"badge-yellow",icon:"\u{1F504}"},
  pending:{n:"未表态",e:"Pending",cls:"badge-na",icon:"\u2753"}
};
// backward compat: map old yes/no/pending to new states
function resolveNtState(nt){
  if(NT_STATES[nt]) return nt;
  if(nt==='yes') return 'accepted';
  if(nt==='no') return 'suspended';
  return 'pending';
}

// ══════════ ETS Official Conversion Tables (Jan 2026) ══════════
// Source: https://www.ets.org/toefl/china/toefl/score-scale-update.html

// Section score conversion: old 0-30 → new 1-6 (per section)
var CONV_READING =  [1,1,1.5,2,2.5,2.5,3,3,3,3,3,3,3.5,3.5,3.5,3.5,3.5,3.5,4,4,4,4,4.5,4.5,5,5,5,5.5,5.5,6,6];
var CONV_LISTENING= [1,1,1.5,1.5,2,2,2.5,2.5,2.5,3,3,3,3,3.5,3.5,3.5,3.5,4,4,4,4.5,4.5,5,5,5,5,5.5,5.5,6,6,6];
var CONV_SPEAKING = [1,1,1,1,1,1.5,1.5,1.5,1.5,1.5,2,2,2,2.5,2.5,2.5,3,3,3.5,3.5,4,4,4,4.5,4.5,5,5,5.5,6,6,6];
var CONV_WRITING =  [1,1,1,1.5,1.5,1.5,1.5,2,2,2,2,2.5,2.5,3,3,3.5,3.5,4,4,4,4,4.5,4.5,4.5,5,5,5,5.5,5.5,6,6];

// Total score conversion: old 0-120 → new 1-6
var CONV_TOTAL = [
  {min:114,band:6},{min:107,band:5.5},{min:95,band:5},{min:86,band:4.5},
  {min:72,band:4},{min:58,band:3.5},{min:44,band:3},{min:34,band:2.5},
  {min:24,band:2},{min:12,band:1.5},{min:0,band:1}
];

// Reverse: new 1-6 → approximate old total
var CONV_TOTAL_REV = [
  {band:6,min:114,max:120},{band:5.5,min:107,max:113},{band:5,min:95,max:106},
  {band:4.5,min:86,max:94},{band:4,min:72,max:85},{band:3.5,min:58,max:71},
  {band:3,min:44,max:57},{band:2.5,min:34,max:43},{band:2,min:24,max:33},
  {band:1.5,min:12,max:23},{band:1,min:0,max:11}
];

// CEFR mapping for 1-6 scale
var CEFR_MAP = [
  {min:5.5,cefr:"C2",cn:"精通"},{min:5,cefr:"C1",cn:"高级"},
  {min:4,cefr:"B2",cn:"中高级"},{min:3,cefr:"B1",cn:"中级"},
  {min:2,cefr:"A2",cn:"初级"},{min:1,cefr:"A1",cn:"入门"}
];

// IELTS ↔ new TOEFL approximate mapping
var IELTS_TOEFL6_MAP = [
  {ielts:9,t6:6},{ielts:8.5,t6:6},{ielts:8,t6:5.5},{ielts:7.5,t6:5.5},
  {ielts:7,t6:5},{ielts:6.5,t6:4.5},{ielts:6,t6:4},{ielts:5.5,t6:3.5},
  {ielts:5,t6:3},{ielts:4.5,t6:2.5},{ielts:4,t6:2}
];

// ══════════ Conversion Functions ══════════
function oldToNew_R(v){return v==null?null:(v>=0&&v<=30?CONV_READING[v]:null);}
function oldToNew_L(v){return v==null?null:(v>=0&&v<=30?CONV_LISTENING[v]:null);}
function oldToNew_S(v){return v==null?null:(v>=0&&v<=30?CONV_SPEAKING[v]:null);}
function oldToNew_W(v){return v==null?null:(v>=0&&v<=30?CONV_WRITING[v]:null);}
function oldToNew_T(v){
  if(v==null) return null;
  for(var i=0;i<CONV_TOTAL.length;i++){if(v>=CONV_TOTAL[i].min) return CONV_TOTAL[i].band;}
  return 1;
}
function oldToNewSection(v,section){
  if(section==='r') return oldToNew_R(v);
  if(section==='l') return oldToNew_L(v);
  if(section==='s') return oldToNew_S(v);
  if(section==='w') return oldToNew_W(v);
  if(section==='t') return oldToNew_T(v);
  return null;
}

// Reverse: new 1-6 section → approximate old 0-30
function newToOld_section(band,convArr){
  if(band==null) return null;
  // find the lowest old score that maps to this band
  for(var i=0;i<convArr.length;i++){if(convArr[i]>=band) return i;}
  return 30;
}
function newToOld_R(v){return newToOld_section(v,CONV_READING);}
function newToOld_L(v){return newToOld_section(v,CONV_LISTENING);}
function newToOld_S(v){return newToOld_section(v,CONV_SPEAKING);}
function newToOld_W(v){return newToOld_section(v,CONV_WRITING);}
function newToOld_T(v){
  if(v==null) return null;
  for(var i=0;i<CONV_TOTAL_REV.length;i++){if(CONV_TOTAL_REV[i].band===v) return CONV_TOTAL_REV[i].min;}
  return 0;
}

// Convert entire toefl object {t,r,w,s,l} from old→new
function convertToeflOldToNew(old){
  if(!old) return null;
  return {t:oldToNew_T(old.t),r:oldToNew_R(old.r),w:oldToNew_W(old.w),s:oldToNew_S(old.s),l:oldToNew_L(old.l)};
}
// Convert entire toefl6 object → approximate old
function convertToeflNewToOld(nw){
  if(!nw) return null;
  return {t:newToOld_T(nw.t),r:newToOld_R(nw.r),w:newToOld_W(nw.w),s:newToOld_S(nw.s),l:newToOld_L(nw.l)};
}

// Get CEFR level from 1-6 band
function getCEFR(band){
  if(band==null) return {cefr:'-',cn:'-'};
  for(var i=0;i<CEFR_MAP.length;i++){if(band>=CEFR_MAP[i].min) return CEFR_MAP[i];}
  return {cefr:'A1',cn:'入门'};
}

// Get IELTS approximate from new TOEFL band
function toefl6ToIelts(band){
  if(band==null) return null;
  for(var i=0;i<IELTS_TOEFL6_MAP.length;i++){
    if(band>=IELTS_TOEFL6_MAP[i].t6) return IELTS_TOEFL6_MAP[i].ielts;
  }
  return 4;
}

// ══════════ Resolve language requirements (with toefl6) ══════════
function resolveLang(uni, prog) {
  var base = uni.ll[prog.l];
  if (!base) base = uni.ll[Object.keys(uni.ll)[0]];
  var r = JSON.parse(JSON.stringify(base));
  if (prog.o) {
    if (prog.o.toefl) Object.assign(r.toefl||{}, prog.o.toefl);
    if (prog.o.ielts) Object.assign(r.ielts||{}, prog.o.ielts);
    if (prog.o.toefl6) Object.assign(r.toefl6||{}, prog.o.toefl6);
  }
  // Auto-generate toefl6 from toefl if not officially provided
  if (!r.toefl6 && r.toefl) {
    r.toefl6 = convertToeflOldToNew(r.toefl);
    r._t6auto = true; // flag: auto-converted, not official
  }
  return r;
}

// ══════════ Program helpers ══════════
function progName(p) { var cat = PC[p.c]; return cat ? cat.n : p.c; }
function progNameEn(p) { var cat = PC[p.c]; return cat ? cat.e : p.c; }
function progFaculty(p) { var cat = PC[p.c]; return cat ? cat.f : ""; }

// ══════════ Score matching (dual-scale aware) ══════════
// examType: 'ielts' | 'toefl' | 'toefl6'
function matchScores(langReq, examType, myScores) {
  var req = langReq[examType];
  if (!req) {
    // If user inputs toefl6 but uni only has toefl, auto-convert
    if (examType==='toefl6' && langReq.toefl) {
      req = convertToeflOldToNew(langReq.toefl);
    } else if (examType==='toefl' && !langReq.toefl && langReq.toefl6) {
      req = convertToeflNewToOld(langReq.toefl6);
    }
  }
  if (!req) return {status:'na', detail:{}};
  var fields = ['t','r','w','s','l'];
  var detail = {};
  var overall = 'green';
  for (var i=0; i<fields.length; i++) {
    var f = fields[i];
    if (req[f] == null || myScores[f] == null) { detail[f]='na'; continue; }
    var diff = myScores[f] - req[f];
    var yellowThreshold;
    if (examType==='ielts') yellowThreshold = -0.5;
    else if (examType==='toefl6') yellowThreshold = -0.5;
    else yellowThreshold = -5; // old toefl
    if (diff >= 0) { detail[f]='green'; }
    else if (diff >= yellowThreshold) {
      detail[f]='yellow';
      if (overall !== 'red') overall='yellow';
    } else {
      detail[f]='red'; overall='red';
    }
  }
  return {status:overall, detail:detail};
}

// ══════════ Get all programs (flat list) ══════════
function getAllPrograms() {
  var result = [];
  var regions = Object.keys(COMPASS_DATA);
  for (var ri=0; ri<regions.length; ri++) {
    var reg = regions[ri];
    var unis = COMPASS_DATA[reg];
    for (var ui=0; ui<unis.length; ui++) {
      var uni = unis[ui];
      var progs = uni.p || [];
      for (var pi=0; pi<progs.length; pi++) {
        result.push({region:reg, uni:uni, prog:progs[pi]});
      }
    }
  }
  return result;
}

// ══════════ Filter programs ══════════
function filterPrograms(opts) {
  var all = getAllPrograms();
  var results = [];
  for (var i=0; i<all.length; i++) {
    var item = all[i];
    if (opts.region && opts.region !== 'all' && item.region !== opts.region) continue;
    if (opts.uniId && item.uni.id !== opts.uniId) continue;
    if (opts.degree) {
      var isFound = item.prog.c === 'found';
      if (opts.degree === 'bachelor' && isFound) continue;
      if (opts.degree === 'foundation' && !isFound) continue;
    }
    if (opts.progCat && item.prog.c !== opts.progCat) continue;
    if (opts.search) {
      var s = opts.search.toLowerCase();
      var pn = progName(item.prog).toLowerCase();
      var pe = progNameEn(item.prog).toLowerCase();
      var un = item.uni.n.toLowerCase();
      var ue = item.uni.e.toLowerCase();
      if (pn.indexOf(s)<0 && pe.indexOf(s)<0 && un.indexOf(s)<0 && ue.indexOf(s)<0) continue;
    }
    if (opts.myScores) {
      var lang = resolveLang(item.uni, item.prog);
      item.match = matchScores(lang, opts.examType || 'ielts', opts.myScores);
    }
    results.push(item);
  }
  if (opts.sortBy === 'rank') results.sort(function(a,b){return (a.uni.r||999)-(b.uni.r||999);});
  else if (opts.sortBy === 'score_asc') results.sort(function(a,b){
    var al = resolveLang(a.uni,a.prog), bl = resolveLang(b.uni,b.prog);
    var as = (al.ielts&&al.ielts.t)||0, bs = (bl.ielts&&bl.ielts.t)||0;
    return as-bs;
  });
  else if (opts.sortBy === 'score_desc') results.sort(function(a,b){
    var al = resolveLang(a.uni,a.prog), bl = resolveLang(b.uni,b.prog);
    var as = (al.ielts&&al.ielts.t)||0, bs = (bl.ielts&&bl.ielts.t)||0;
    return bs-as;
  });
  return results;
}

// ══════════ Score display helpers ══════════
function fmtScore(v) { return v == null ? '-' : v; }
function fmtScoreWithCefr(v) {
  if (v == null) return '-';
  var c = getCEFR(v);
  return v + ' <span class="cefr-tag">' + c.cefr + '</span>';
}
function fmtIelts(obj) {
  if (!obj) return '-';
  var s = fmtScore(obj.t);
  var parts = [];
  if (obj.r!=null) parts.push('R'+obj.r);
  if (obj.w!=null) parts.push('W'+obj.w);
  if (obj.s!=null) parts.push('S'+obj.s);
  if (obj.l!=null) parts.push('L'+obj.l);
  return parts.length ? s+' ('+parts.join(' ')+')' : ''+s;
}
function fmtToefl(obj) {
  if (!obj) return '-';
  var s = fmtScore(obj.t);
  var parts = [];
  if (obj.r!=null) parts.push('R'+obj.r);
  if (obj.w!=null) parts.push('W'+obj.w);
  if (obj.s!=null) parts.push('S'+obj.s);
  if (obj.l!=null) parts.push('L'+obj.l);
  return parts.length ? s+' ('+parts.join(' ')+')' : ''+s;
}
function fmtToefl6(obj, isAuto) {
  if (!obj) return '-';
  var s = fmtScore(obj.t);
  var parts = [];
  if (obj.r!=null) parts.push('R'+obj.r);
  if (obj.w!=null) parts.push('W'+obj.w);
  if (obj.s!=null) parts.push('S'+obj.s);
  if (obj.l!=null) parts.push('L'+obj.l);
  var str = parts.length ? s+' ('+parts.join(' ')+')' : ''+s;
  if (isAuto) str += ' <span class="auto-tag">auto</span>';
  return str;
}

// ══════════ Note translations (EN → CN) ══════════
var NOTE_CN = {
  // ── US: Harvard ──
  "Test-optional":"可选择不提交标化成绩",
  "HBS; avg GMAT 740":"哈佛商学院；GMAT均分740",
  "HLS":"哈佛法学院",
  "HMS":"哈佛医学院",
  "HGSE":"哈佛教育研究生院",
  "HSPH":"哈佛公共卫生学院",
  "HKS":"哈佛肯尼迪政府学院",
  // ── US: MIT ──
  "Recommended 100+ iBT":"建议托福100+",
  "EECS dept; extremely competitive":"电气工程与计算机科学系；竞争极其激烈",
  "Sloan MBA":"斯隆管理学院MBA",
  "Portfolio required":"需提交作品集",
  // ── US: Stanford ──
  "Not required for UG":"本科不强制要求",
  "GSB; avg GMAT 738":"斯坦福商学院；GMAT均分738",
  "Stanford Law":"斯坦福法学院",
  // ── US: Caltech ──
  "No official minimum; strongly recommended":"无官方最低分要求；强烈建议提交",
  // ── US: Princeton ──
  "Avg admitted ~108 iBT":"录取平均托福约108",
  "Speaking 28+ for TA":"担任助教需口语28+",
  "SPIA":"普林斯顿公共与国际事务学院",
  // ── US: Yale ──
  "No hard minimum; competitive 100+":"无硬性最低分；建议100+以增强竞争力",
  "SOM":"耶鲁管理学院",
  "YLS; S<=25 requires summer English":"耶鲁法学院；口语≤25需参加暑期英语课程",
  "Jackson School":"杰克逊全球事务学院",
  "School of Art MFA":"耶鲁艺术学院(美术硕士)",
  // ── US: Columbia ──
  "CBS":"哥伦比亚商学院",
  "SIPA":"哥伦比亚国际与公共事务学院",
  "Journalism School":"哥伦比亚新闻学院",
  // ── US: UPenn ──
  "Wharton MBA":"沃顿商学院MBA",
  "Wharton":"沃顿商学院",
  "GSE":"宾大教育研究生院",
  // ── US: Cornell ──
  "Johnson":"约翰逊商学院",
  // ── US: Brown ──
  "UG recommends 105":"本科建议托福105",
  // ── US: Dartmouth ──
  "Tuck MBA":"塔克商学院MBA",
  "Thayer":"塞耶工程学院",
  "Geisel":"盖泽尔医学院",
  // ── US: Duke ──
  "Fuqua":"富卡商学院",
  "Sanford":"桑福德公共政策学院",
  "Nicholas":"尼古拉斯环境学院",
  // ── US: JHU ──
  "Carey":"凯瑞商学院",
  "Bloomberg SPH - top ranked":"彭博公共卫生学院 - 全美顶尖",
  "SAIS":"高级国际研究学院",
  // ── US: Northwestern ──
  "McCormick PhD:90 MS:80":"麦考密克工程学院；博士要求90，硕士要求80",
  "Kellogg":"凯洛格管理学院",
  "Feinberg":"范伯格医学院",
  "Medill - journalism top":"梅迪尔新闻学院 - 全美顶尖",
  "MSDS requires 100":"数据科学硕士要求托福100",
  // ── US: UChicago ──
  "Booth":"布斯商学院",
  "Harris":"哈里斯公共政策学院",
  // ── US: Rice ──
  "Jones":"琼斯商学院",
  // ── US: Vanderbilt ──
  "Owen":"欧文管理学院",
  "Peabody - top ranked":"皮博迪教育学院 - 全美顶尖",
  // ── US: WashU ──
  "Olin":"奥林商学院",
  "Brown School - top ranked":"布朗社会工作学院 - 全美顶尖",
  // ── US: Emory ──
  "Goizueta":"戈伊祖塔商学院",
  "Rollins SPH":"罗林斯公共卫生学院",
  // ── US: Georgetown ──
  "McDonough":"麦克多诺商学院",
  "GULC - top law":"乔治城法学院 - 全美顶尖法学院",
  "SFS - top IR program":"沃尔什外交学院 - 全美顶尖国际关系项目",
  "McCourt":"麦考特公共政策学院",
  // ── US: NYU ──
  "Tandon Engineering":"坦登工程学院",
  "Stern":"斯特恩商学院",
  "Grossman":"格罗斯曼医学院",
  "Tisch":"蒂施艺术学院",
  "Silver":"西尔弗社会工作学院",
  "CDS":"数据科学中心",
  // ── US: USC ──
  "Avg admitted 111+":"录取平均托福111+",
  "Viterbi":"维特比工程学院",
  "Marshall":"马歇尔商学院",
  "Gould":"古尔德法学院",
  "Annenberg - top media":"安纳伯格传播学院 - 全美顶尖传媒",
  "SCA - film top":"电影艺术学院 - 全球顶尖电影学院",
  // ── US: CMU ──
  "SCS; extremely competitive":"计算机科学学院；竞争极其激烈",
  "ECE dept specific sub-scores":"电子与计算机工程系有单项分要求",
  "Tepper":"泰珀商学院",
  "School of Design/Drama":"设计学院/戏剧学院",
  "English dept: 25 per sub-test":"英语系：每个单项最低25",
  "Heinz":"海因茨信息系统与公共政策学院",
  // ── US: UC Berkeley ──
  "Haas":"哈斯商学院",
  "Goldman":"戈德曼公共政策学院",
  // ── US: UCLA ──
  "Anderson":"安德森管理学院",
  // ── US: UMich ──
  "Ross":"罗斯商学院",
  "Ford":"福特公共政策学院",
  // ── US: Georgia Tech ──
  "OMSCS online also available":"也可选择在线计算机科学硕士(OMSCS)",
  "Scheller; new TOEFL 5.0 accepted":"舍勒商学院；接受新版TOEFL 5.0",
  // ── US: UIUC ──
  "Gies":"吉斯商学院",
  "Avg admitted 105":"录取平均托福105",
  "IELTS 7.5 for full qual":"雅思7.5可直接入学(无需语言课)",
  // ── US: UVA ──
  "Darden":"达顿商学院",
  // ── US: UNC ──
  "Recommends 100+":"建议托福100+",
  "Kenan-Flagler":"凯南-弗拉格勒商学院",
  "Gillings - top ranked":"吉林斯公共卫生学院 - 全美顶尖",
  "Hussman":"赫斯曼新闻与媒体学院",
  // ── US: UW ──
  "Allen School; very competitive":"艾伦计算机科学学院；竞争非常激烈",
  "Foster":"福斯特商学院",
  // ── US: UMN ──
  "Carlson":"卡尔森管理学院",
  // ── US: Purdue ──
  "Krannert":"克兰纳特管理学院",
  // ── US: UMD ──
  "Smith":"史密斯商学院",
  // ── US: Penn State ──
  "Smeal":"斯米尔商学院",
  // ── US: Ohio State ──
  "Fisher":"费舍尔商学院",
  // ── US: UF ──
  "Warrington/Hough":"沃灵顿/霍夫商学院",
  // ── US: ASU ──
  "Lowest threshold among top publics":"主要公立大学中最低门槛",
  "W.P. Carey":"凯瑞商学院",
  "Mary Lou Fulton":"富尔顿教育学院",
  // ── US: Notre Dame ──
  "Mendoza":"门多萨商学院",
  // ── US: Tufts ──
  "Fletcher - top IR":"弗莱彻法律与外交学院 - 顶尖国际关系项目",
  "Cummings":"卡明斯兽医学院",
  // ── US: BU ──
  "Questrom":"奎斯特罗姆商学院",
  "COM":"传播学院",
  "SPH":"公共卫生学院",
  "Wheelock":"惠洛克教育学院",
  // ── US: Northeastern ──
  "Khoury; co-op program":"霍利计算机学院；含合作实习项目(Co-op)",
  "D'Amore-McKim":"达莫尔-麦金商学院",
  // ── US: LACs ──
  "Optional; expects high level":"可选提交；但期望较高英语水平",
  "Need-blind for intl":"对国际生实行Need-blind录取(不因经济条件影响录取)",
  "Not required; encouraged":"不强制要求；鼓励提交",
  "Women's college":"女子学院",
  "Test-optional since 1969":"自1969年起即为标化可选",
  "Famous for language programs; avg 109":"以语言项目闻名；录取平均托福109",
  // ── UK: Oxford ──
  "Paused new TOEFL from 21 Jan 2026":"自2026年1月21日起暂停接受新版TOEFL",
  "Said Business School":"赛德商学院",
  "Graduate entry":"研究生入学制",
  // ── UK: Cambridge ──
  "Paused new TOEFL":"暂停接受新版TOEFL",
  "Judge Business School":"贾奇商学院",
  "Part III":"第三部分(数学高级课程)",
  // ── UK: Imperial ──
  "Imperial Business School":"帝国理工商学院",
  // ── UK: UCL ──
  "Level varies by program":"语言等级因专业而异",
  "Bartlett - world leading":"巴特利特建筑学院 - 世界顶尖",
  "MBBS":"临床医学本科(内外全科医学士)",
  "IOE - top education":"教育学院(IOE) - 全球顶尖教育学院",
  // ── UK: Manchester ──
  "Alliance MBS":"联盟曼彻斯特商学院",
  // ── UK: KCL ──
  "Band A highest":"A级(最高语言要求等级)",
  "War Studies top ranked":"战争研究专业全球顶尖",
  // ── UK: Warwick ──
  "WBS - top ranked":"华威商学院 - 全英顶尖",
  // ── UK: Edinburgh ──
  "Top AI program in UK":"全英顶尖人工智能项目",
  "R6.5 L6.5 required":"阅读6.5 听力6.5(单项要求)",
  // ── UK: Glasgow ──
  "Adam Smith":"亚当·斯密商学院",
  // ── UK: Loughborough ──
  "Top for design/sport":"设计与体育专业全英顶尖",
  // ── UK: Sussex ──
  "Top for development studies":"发展研究专业全球顶尖",
  // ── UK: Dundee ──
  "Dundee top for art & design":"邓迪大学艺术与设计专业全英顶尖",
  // ── UK: Strathclyde ──
  "Strathclyde Business School - triple accredited":"思克莱德商学院 - 三重认证(AACSB/EQUIS/AMBA)",
  // ── UK: SOAS ──
  "Area studies focus":"以区域研究为特色",
  // ── UK: City ──
  "Bayes (formerly Cass) Business School":"贝叶斯商学院(原卡斯商学院)",
  // ── UK: Aston ──
  "Aston Business School":"阿斯顿商学院",
  // ── UK: Westminster ──
  "Top for media & communications":"传媒与传播专业全英顶尖",
  // ── UK: UAL ──
  "CSM/LCF/LCC - world leading art & design":"中央圣马丁/伦敦时装学院/伦敦传媒学院 - 世界顶尖艺术设计",
  // ── UK: Reading ──
  "Henley Business School":"亨利商学院",
  // ── UK: UEA ──
  "Top for environmental science":"环境科学专业全英顶尖",
  // ── AUS: Melbourne ──
  "Must use TOEFL iBT Australia for visa":"签证需使用TOEFL iBT澳洲专版",
  "Melbourne Model":"墨尔本模式(本科通识+硕士专业化)",
  "MBS reduced to 6.5 from 2026":"墨尔本商学院2026年起降至6.5",
  "GAMSAT required":"需参加GAMSAT医学入学考试",
  "AITSL: S8.0 L8.0 required":"澳洲教师协会要求：口语8.0 听力8.0",
  // ── AUS: Sydney ──
  "Must use TOEFL iBT Australia":"需使用TOEFL iBT澳洲专版",
  "AHPRA registration requirements":"需满足AHPRA(澳洲医疗从业者注册机构)注册要求",
  // ── AUS: ANU ──
  "Crawford School":"克劳福德公共政策学院",
  // ── AUS: Macquarie ──
  "Top for accounting":"会计专业全澳顶尖",
  // ── AUS: RMIT ──
  "Top for art & design":"艺术与设计专业顶尖",
  // ── NZ: Auckland ──
  "MBChB":"临床医学本科(内外全科医学士)",
  // ── NZ: Otago ──
  "Oldest medical school in NZ":"新西兰历史最悠久的医学院",
  // ── NZ: VUW ──
  "Top NZ law school":"新西兰顶尖法学院",
  // ── NZ: Waikato ──
  "Triple-accredited":"三重认证(AACSB/EQUIS/AMBA)",
  // ── NZ: Massey ──
  "Only vet school in NZ":"新西兰唯一的兽医学院",
  "Top NZ for creative arts":"新西兰创意艺术专业顶尖",
  // ── NZ: Lincoln ──
  "Agriculture & environment focus":"以农业与环境科学为特色",
  // ── SEA: NUS ──
  "NUS Business School":"新加坡国立大学商学院",
  // ── SEA: NTU ──
  "New TOEFL 5.0 / Speaking 5.0 accepted":"接受新版TOEFL 5.0 / 口语5.0",
  "Nanyang MBA":"南洋MBA",
  "WKWSCI":"黄金辉传播与信息学院",
  "NIE":"南洋理工国立教育学院",
  // ── SEA: SUTD ──
  "Design-focused":"以设计为核心的理工大学",
  // ── SEA: UPM ──
  "Agriculture/Forestry strong":"农业/林业专业实力强",
  // ── SEA: Mahidol ──
  "Top medical school in Thailand":"泰国顶尖医学院",
  // ── SEA: AIT ──
  "All-English graduate institute":"全英文授课研究生院",
  // ── SEA: FPT ──
  "Direct entry; prep available for lower scores":"可直接入学；低分可参加预科",
  // ── SEA: RMIT Vietnam ──
  // (shares "Top for art & design" with RMIT AU)
  // ── SEA: Philippines ──
  "5=highest scale; English-medium":"5分为最高等级；英文授课",
  "English-medium":"英文授课",
  // ── SEA: JCU ──
  "Tropical science focus":"以热带科学研究为特色",
  // ── HK: HKU ──
  "HKU Business School":"港大商学院",
  "Faculty of Law - IELTS 7.0 required":"法学院 - 要求雅思7.0",
  "Faculty of Education - ranked #1 globally by US News":"教育学院 - US News全球排名第一",
  "Faculty of Arts - IELTS 7.0 / TOEFL Writing 25":"文学院 - 要求雅思7.0/托福写作25",
  "Li Ka Shing Faculty of Medicine":"李嘉诚医学院",
  "Full tuition + living for outstanding students":"全额学费+生活费(优秀学生)",
  "Research postgraduate funding":"研究型研究生资助",
  "IANG visa":"IANG签证(非本地毕业生留港就业签证)",
  // ── HK: CUHK ──
  "CUHK Business School - AACSB accredited":"中大商学院 - AACSB认证",
  "School of Law":"法学院",
  "School of Journalism and Communication":"新闻与传播学院",
  "Jockey Club College of Veterinary Medicine":"赛马会公共卫生及基层医疗学院",
  "Full tuition + living for exceptional students":"全额学费+生活费(杰出学生)",
  "Full tuition + stipend for top students":"全额学费+津贴(顶尖学生)",
  // ── HK: HKUST ──
  "HKUST Business School":"科大商学院",
  "HKUST MBA - top ranked in Asia":"科大MBA - 亚洲顶尖排名",
  "HKUST MSc Finance - top ranked":"科大金融硕士 - 顶尖排名",
  "Strong CS/engineering program":"计算机/工程学科实力强劲",
  "Tuition waiver for outstanding students":"优秀学生学费减免",
  "Merit-based for PG students":"择优录取研究生奖学金",
  // ── HK: PolyU ──
  "School of Design - top ranked":"设计学院 - 排名领先",
  "Strong in engineering & applied science":"工程与应用科学实力强劲",
  "Nursing and health sciences":"护理与健康科学",
  "Merit-based for outstanding students":"择优录取(优秀学生)",
  "Partial tuition for taught postgrad":"授课型研究生部分学费减免",
  // ── HK: CityU ──
  "CityU MBA - IELTS 6.0 minimum":"城大MBA - 雅思最低6.0",
  "College of Business":"商学院",
  "AI / Big Data focus":"人工智能/大数据方向",
  "Merit-based, renewable":"择优录取，可续期",
  "Merit-based for taught PG":"授课型研究生择优奖学金",
  // ── HK: HKBU ──
  "School of Communication - top ranked in Asia":"传理学院 - 亚洲排名领先",
  "Faculty of Business":"商学院",
  "Academy of Visual Arts":"视觉艺术院",
  "Tuition waiver for top entrants":"顶尖入学者学费减免",
  // ── HK: Lingnan ──
  "Liberal arts focused university":"博雅教育为主的大学",
  "Department of Media and Communication":"媒体与传播学系",
  "Tuition waiver for outstanding entrants":"优秀入学者学费减免",
  "Tuition reduction for top students":"优秀学生学费减免",
  // ── HK: EdUHK ──
  "EdUHK flagship program - top education university in Asia":"教大旗舰项目 - 亚洲顶尖教育大学",
  "Educational psychology":"教育心理学",
  "Linguistics and language education":"语言学与语言教育",
  "Financial support for PG students":"研究生经济支持",
  "For taught and research PG":"授课型和研究型研究生均可申请",
  "Merit-based":"择优录取",
  "Faculty of Law":"法学院",
  "Faculty of Medicine":"医学院",
  "Faculty of Education":"教育学院",
  // ── MO ──
  "Faculty of Business Administration":"工商管理学院",
  "Communication program":"传播学项目",
  "No post-study work visa; need employer sponsor":"无毕业后工作签证；需雇主担保",
  "School of Business":"商学院",
  "Arts and communication programs":"文学与传播项目",
  // ── CA: Toronto ──
  "IELTS 6.5 no band <6.0; TOEFL 89 W22 S22":"雅思6.5(单项不低于6.0)；托福89(写作22口语22)",
  "Dept of Computer Science":"计算机科学系",
  "Fully funded PhD":"全额资助博士",
  "Rotman MBA; avg GMAT 680":"罗特曼商学院MBA；GMAT均分680",
  "Faculty of Applied Science & Engineering":"应用科学与工程学院",
  "OISE":"安大略教育研究院",
  "Rotman MFin/MMgt":"罗特曼金融/管理硕士",
  "Temerty Faculty of Medicine":"特默蒂医学院",
  "Dalla Lana SPH":"达拉拉纳公共卫生学院",
  // ── CA: UBC ──
  "IELTS 6.5 no band <6.0; TOEFL 90 no section <20":"雅思6.5(单项不低于6.0)；托福90(单项不低于20)",
  "Faculty of Applied Science":"应用科学学院",
  "Sauder School; IELTS 7.0 / TOEFL 100":"尚德商学院；雅思7.0/托福100",
  "Peter A. Allard School of Law":"彼得·阿拉德法学院",
  "Sauder MBAN/MM":"尚德商业分析/管理硕士",
  "PGWP based on program length":"毕业工签时长取决于项目长度",
  // ── CA: McGill ──
  "TOEFL 90 min 21 per section; Mgmt/Ed require 100":"托福90(单项不低于21)；管理/教育要求100",
  "Desautels MBA":"德索特尔商学院MBA",
  "Faculty of Law (Civil & Common Law)":"法学院(民法与普通法)",
  "Desautels MMA/MFin":"德索特尔管理分析/金融硕士",
  // ── CA: Waterloo ──
  "IELTS 7.0; TOEFL 90 W25 S25":"雅思7.0；托福90(写作25口语25)",
  "David R. Cheriton School of CS":"大卫·R·切里顿计算机科学学院",
  "Faculty of Mathematics":"数学学院",
  "Conrad School of Entrepreneurship & Business":"康拉德创业与商学院",
  "School of Accounting & Finance":"会计与金融学院",
  "Fully funded; co-op available":"全额资助；可带薪实习",
  "Faculty of Health Sciences":"健康科学学院",
  // ── CA: Alberta ──
  "IELTS 6.5 no band <6.0; TOEFL 88 no section <20":"雅思6.5(单项不低于6.0)；托福88(单项不低于20)",
  "Dept of Computing Science":"计算科学系",
  "Alberta School of Business":"阿尔伯塔商学院",
  "Alberta School of Business MACT/MFM":"阿尔伯塔商学院会计/金融管理硕士",
  "Faculty of Medicine & Dentistry":"医学与牙科学院",
  "Schulich School of Engineering":"舒立克工程学院",
  "Werklund School of Education":"韦克伦德教育学院",
  // ── CA: McMaster ──
  "IELTS 6.5 no band <5.5":"雅思6.5(单项不低于5.5)",
  "Dept of Computing & Software":"计算与软件系",
  "DeGroote MBA; IELTS 7.0 / TOEFL 100":"德格鲁特商学院MBA；雅思7.0/托福100",
  "Michael G. DeGroote School of Medicine":"迈克尔·G·德格鲁特医学院",
  "DeGroote Finance/eHealth MSc":"德格鲁特金融/电子健康硕士",
  "Schulich School of Medicine":"舒立克医学院",
  // ── CA: Western ──
  "IELTS 6.5; TOEFL 86 W22; bilingual campus":"雅思6.5；托福86(写作22)；双语校园",
  "Ivey MBA; GMAT required":"艾维商学院MBA；需GMAT",
  "Ivey MSc/MFin":"艾维管理/金融硕士",
  // ── CA: Queen's ──
  "IELTS 7.0 (Academic)":"雅思7.0(学术类)",
  "School of Computing":"计算学院",
  "Smith School of Business MBA":"史密斯商学院MBA",
  "Smith MFin/MMA":"史密斯金融/管理分析硕士",
  "School of Medicine":"医学院",
  // ── CA: Ottawa ──
  "IELTS 6.5; TOEFL 86 no section <20":"雅思6.5；托福86(单项不低于20)",
  "School of EECS":"电气工程与计算机科学学院",
  "Telfer MBA":"特尔弗商学院MBA",
  "Telfer MHA/MSc Management":"特尔弗健康管理/管理学硕士",
  "Faculty of Law; French required":"法学院；需法语",
  "Faculty of Medicine; French required":"医学院；需法语",
  "Faculty of Education; French required":"教育学院；需法语",
  // ── CA: Dalhousie ──
  "IELTS 6.5; some programs require 7.0":"雅思6.5；部分项目要求7.0",
  "Faculty of Computer Science":"计算机科学学院",
  "Rowe School of Business":"罗威商学院",
  "Schulich School of Law":"舒立克法学院",
  "Rowe MFin":"罗威金融硕士",
  "Faculty of Medicine and Health Sciences":"医学与健康科学学院",
  // ── CA: Calgary ──
  "IELTS 6.5; TOEFL 88":"雅思6.5；托福88",
  "Haskayne School of Business":"哈斯凯尼商学院",
  "Haskayne specialized masters":"哈斯凯尼专业硕士",
  "Cumming School of Medicine":"卡明医学院",
  "Faculty of Law; IELTS W7.0 / TOEFL W25":"法学院；雅思写作7.0/托福写作25",
  // ── CA: Montreal ──
  "French-language university; most programs require French (DELF/DALF)":"法语授课大学；多数项目需法语(DELF/DALF)",
  "DIRO; some English-taught options; Mila AI institute":"计算机系；部分英语授课；Mila人工智能研究所",
  "HEC Montreal (affiliated); IELTS 7.0":"蒙特利尔高等商学院(附属)；雅思7.0",
  "HEC Montreal MSc programs":"蒙特利尔高商硕士项目",
  "Polytechnique Montreal affiliated":"蒙特利尔理工学院(附属)",
  "PGWP based on program length; Quebec CAQ required":"毕业工签取决于项目长度；需魁省CAQ",
  "Faculty of Education; TOEFL 103":"教育学院；托福103",
  "Professional Master's in Big Data":"大数据专业硕士",
  // ── CA: SFU ──
  "IELTS 6.5 no band <6.0":"雅思6.5(单项不低于6.0)",
  "School of Computing Science":"计算科学学院",
  "Beedie MBA":"比迪商学院MBA",
  "Faculty of Applied Sciences":"应用科学学院",
  "Beedie MoT/MSc Finance":"比迪技术管理/金融硕士",
  // ── CA: UVic ──
  "IELTS 6.5; TOEFL 86 no section <20":"雅思6.5；托福86(单项不低于20)",
  "Gustavson School of Business":"古斯塔夫森商学院",
  "Gustavson MGB":"古斯塔夫森全球商务硕士",
  "School of Health Policy & Management":"健康政策与管理学院",
  // ── CA: York ──
  "TOEFL 100 min 22 per component":"托福100(单项不低于22)",
  "Lassonde School of Engineering":"拉松德工程学院",
  "Lassonde":"拉松德学院",
  "Schulich MBA; globally ranked":"舒立克商学院MBA；全球排名领先",
  "Schulich MBAN/MFin/MREI":"舒立克商业分析/金融/房地产硕士",
  "Osgoode Hall Law School":"奥斯古德·霍尔法学院",
  "Master of Data Science & AI":"数据科学与人工智能硕士",
  "Faculty of Engineering & Applied Science":"工程与应用科学学院",
  "Faculty of Engineering & Computer Science":"工程与计算机科学学院",
  "Faculty of Engineering; TOEFL 88":"工程学院；托福88",
  // ── IE: Trinity College Dublin ──
  "Trinity Business School":"圣三一商学院",
  "IELTS 7.0 required for law":"法学要求雅思7.0",
  "HPAT required; IELTS 7.0":"需HPAT入学测试；雅思7.0",
  "HPAT required":"需HPAT入学测试",
  // ── IE: UCD ──
  "Smurfit Graduate Business School":"斯莫菲特研究生商学院",
  "Smurfit School":"斯莫菲特商学院",
  // ── IE: Galway ──
  "J.E. Cairnes School of Business":"J.E.凯恩斯商学院",
  // ── IE: Cork ──
  "Cork University Business School":"科克大学商学院",
  // ── IE: DCU ──
  "DCU Business School":"都柏林城市大学商学院",
  "Institute of Education":"教育学院",
  // ── IE: Limerick ──
  "Kemmy Business School":"凯米商学院",
  // ── IE: General ──
  "Stay Back visa: 1yr for L8, 2yr for L9/L10":"毕业留爱签证：本科1年，硕博2年"
};

function noteCn(en){
  if(!en) return '';
  var cn = NOTE_CN[en];
  return cn ? en + ' <span class="note-cn">(' + cn + ')</span>' : en;
}

// ══════════ Data quality stats ══════════
function getDataQualityStats() {
  var stats = {total:0, toeflSub:0, ieltsSub:0, toefl6Official:0, ntStates:{}};
  var regions = Object.keys(COMPASS_DATA);
  var missing = []; // unis missing sub-scores
  for (var ri=0; ri<regions.length; ri++) {
    var unis = COMPASS_DATA[regions[ri]];
    for (var ui=0; ui<unis.length; ui++) {
      var uni = unis[ui];
      stats.total++;
      var nt = resolveNtState(uni.pol && uni.pol.nt);
      stats.ntStates[nt] = (stats.ntStates[nt]||0)+1;
      var hasTSub = false, hasISub = false, hasT6 = false;
      var keys = Object.keys(uni.ll||{});
      for (var ki=0; ki<keys.length; ki++) {
        var lv = uni.ll[keys[ki]];
        if (lv.toefl && (lv.toefl.r!=null||lv.toefl.w!=null)) hasTSub = true;
        if (lv.ielts && (lv.ielts.r!=null||lv.ielts.w!=null)) hasISub = true;
        if (lv.toefl6) hasT6 = true;
      }
      if (hasTSub) stats.toeflSub++;
      if (hasISub) stats.ieltsSub++;
      if (hasT6) stats.toefl6Official++;
      if (!hasTSub) missing.push({region:regions[ri],uni:uni,issue:'toefl_sub'});
    }
  }
  stats.missing = missing;
  return stats;
}

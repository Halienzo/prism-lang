// data-uk.js - UK Universities (50)
(function(){
var D = [
// ============ RUSSELL GROUP TOP ============
{id:"oxford",n:"牛津大学",e:"University of Oxford",c:"Oxford",r:3,cat:"russell",
 ll:{std:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:24,s:25,l:22}},
     high:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:110,r:24,w:24,s:25,l:22}}},
 pol:{nt:"suspended",mb:false,v:"2y",note:"Paused new TOEFL from 21 Jan 2026"},
 p:[
  {c:"ug",l:"std",g:"A*AA-AAA"},
  {c:"cs_ms",l:"std",g:"First/strong 2:1"},
  {c:"mba",l:"high",g:"First/2:1",note:"Said Business School"},
  {c:"law_llm",l:"high",g:"First/2:1"},
  {c:"med",l:"high",g:"A*AA",note:"Graduate entry"},
  {c:"econ_ms",l:"std",g:"First/2:1"},
  {c:"eng_ms",l:"std",g:"2:1"},
  {c:"ph_ms",l:"std",g:"2:1"},
  {c:"ir_ms",l:"high",g:"First/2:1"},
  {c:"hist_ms",l:"high",g:"First/2:1"},
  {c:"psych_ms",l:"std",g:"2:1"},
  {c:"math_ms",l:"std",g:"First/strong 2:1"}
]},

{id:"cambridge",n:"剑桥大学",e:"University of Cambridge",c:"Cambridge",r:2,cat:"russell",
 ll:{def:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:110,r:25,w:25,s:25,l:25}}},
 pol:{nt:"suspended",mb:false,v:"2y",note:"Paused new TOEFL"},
 p:[
  {c:"ug",l:"def",g:"A*A*A-A*AA"},
  {c:"cs_ms",l:"def",g:"First"},
  {c:"mba",l:"def",g:"2:1",note:"Judge Business School"},
  {c:"law_llm",l:"def",g:"First/high 2:1"},
  {c:"med",l:"def",g:"A*A*A"},
  {c:"econ_ms",l:"def",g:"First"},
  {c:"eng_ms",l:"def",g:"First/2:1"},
  {c:"math_ms",l:"def",g:"First",note:"Part III"},
  {c:"phys_ms",l:"def",g:"First"},
  {c:"hist_ms",l:"def",g:"First/2:1"},
  {c:"arch_ms",l:"def",g:"2:1"},
  {c:"edu_ms",l:"def",g:"2:1"}
]},

{id:"imperial",n:"帝国理工学院",e:"Imperial College London",c:"London",r:6,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"accepted",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"A*A*A-AAA"},
  {c:"cs_ms",l:"high",g:"First/2:1"},
  {c:"ee_ms",l:"std",g:"2:1"},
  {c:"me_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1",note:"Imperial Business School"},
  {c:"fin_ms",l:"high",g:"First/2:1"},
  {c:"ds_ms",l:"high",g:"First/2:1"},
  {c:"ai_ms",l:"high",g:"First/2:1"},
  {c:"bio_ms",l:"std",g:"2:1"},
  {c:"med",l:"high",g:"A*AA"},
  {c:"ph_ms",l:"std",g:"2:1"},
  {c:"env_ms",l:"std",g:"2:1"}
]},

{id:"ucl",n:"伦敦大学学院",e:"University College London",c:"London",r:9,cat:"russell",
 ll:{l1:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:24,w:24,s:20,l:20},toefl6:{t:4.5,r:4.0,w:4.0,s:4.0,l:4.0}},
     l2:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:96,r:24,w:24,s:22,l:22},toefl6:{t:4.5,r:4.5,w:4.5,s:4.5,l:4.5}},
     l3:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:100,r:25,w:25,s:23,l:23},toefl6:{t:5.0,r:5.0,w:5.0,s:5.0,l:5.0}},
     l4:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:109,r:27,w:27,s:23,l:23},toefl6:{t:5.5,r:5.0,w:5.0,s:5.0,l:5.0}},
     l5:{ielts:{t:8.0,r:8,w:8,s:8,l:8},toefl:{t:110,r:29,w:29,s:23,l:23},toefl6:{t:5.5,r:5.5,w:5.5,s:6.0,l:5.5}}},
 pol:{nt:"published",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"l1",g:"AAA-ABB",note:"Level varies by program"},
  {c:"cs_ms",l:"l2",g:"2:1"},
  {c:"ee_ms",l:"l1",g:"2:1"},
  {c:"arch_ms",l:"l3",g:"2:1",note:"Bartlett - world leading"},
  {c:"law_llm",l:"l4",g:"2:1"},
  {c:"med",l:"l5",g:"A*AA",note:"MBBS"},
  {c:"edu_ms",l:"l3",g:"2:1",note:"IOE - top education"},
  {c:"econ_ms",l:"l2",g:"2:1"},
  {c:"psych_ms",l:"l3",g:"2:1"},
  {c:"ds_ms",l:"l2",g:"2:1"},
  {c:"fin_ms",l:"l2",g:"2:1"},
  {c:"pub_ms",l:"l3",g:"2:1"},
  {c:"media_ms",l:"l3",g:"2:1"},
  {c:"ling_ms",l:"l4",g:"2:1"},
  {c:"ph_ms",l:"l3",g:"2:1"},
  {c:"bio_ms",l:"l1",g:"2:1"}
]},

{id:"lse",n:"伦敦政治经济学院",e:"LSE",c:"London",r:50,cat:"russell",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:23,w:24,s:22,l:22}},
     high:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:107,r:25,w:25,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"AAA-AAB"},
  {c:"econ_ms",l:"high",g:"First/2:1"},
  {c:"fin_ms",l:"def",g:"First/2:1"},
  {c:"acct_ms",l:"def",g:"2:1"},
  {c:"law_llm",l:"high",g:"First/2:1"},
  {c:"ir_ms",l:"def",g:"2:1"},
  {c:"pub_ms",l:"def",g:"2:1"},
  {c:"ds_ms",l:"def",g:"2:1"},
  {c:"media_ms",l:"def",g:"2:1"},
  {c:"stat_ms",l:"def",g:"First/2:1"},
  {c:"hist_ms",l:"high",g:"First/2:1"},
  {c:"psych_ms",l:"def",g:"2:1"}
]},

{id:"edinburgh",n:"爱丁堡大学",e:"University of Edinburgh",c:"Edinburgh",r:22,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:23,w:23,s:23,l:23}},
     bus:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:23,w:23,s:23,l:23}},
     med:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:110,r:25,w:25,s:25,l:25}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},
  {c:"cs_ms",l:"std",g:"2:1"},
  {c:"ai_ms",l:"std",g:"First/2:1",note:"Top AI program in UK"},
  {c:"mba",l:"bus",g:"2:1"},
  {c:"fin_ms",l:"bus",g:"First/2:1"},
  {c:"law_llm",l:"high",g:"2:1"},
  {c:"med",l:"med",g:"AAA"},
  {c:"econ_ms",l:"high",g:"First/2:1",note:"R6.5 L6.5 required"},
  {c:"edu_ms",l:"std",g:"2:1"},
  {c:"ling_ms",l:"std",g:"2:1"},
  {c:"ds_ms",l:"std",g:"2:1"},
  {c:"ir_ms",l:"high",g:"2:1"}
]},

{id:"manchester",n:"曼彻斯特大学",e:"University of Manchester",c:"Manchester",r:32,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},
  {c:"cs_ms",l:"std",g:"2:1"},
  {c:"ee_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1",note:"Alliance MBS"},
  {c:"law_llm",l:"high",g:"2:1"},
  {c:"med",l:"high",g:"AAA"},
  {c:"econ_ms",l:"high",g:"First/2:1"},
  {c:"ds_ms",l:"std",g:"2:1"},
  {c:"bio_ms",l:"std",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},
  {c:"env_ms",l:"std",g:"2:1"}
]},

{id:"kcl",n:"伦敦国王学院",e:"King's College London",c:"London",r:37,cat:"russell",
 ll:{a:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:109,r:27,w:27,s:23,l:23}},
     b:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:24,s:20,l:20}},
     c:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:96,r:23,w:23,s:20,l:20}},
     d:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:20,w:20,s:20,l:20}},
     e:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:18,w:18,s:18,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"d",g:"AAA-ABB"},
  {c:"cs_ms",l:"d",g:"2:1"},
  {c:"law_llm",l:"a",g:"2:1",note:"Band A highest"},
  {c:"med",l:"a",g:"A*AA",note:"MBBS"},
  {c:"dent",l:"a",g:"A*AA"},
  {c:"nurs",l:"b",g:"2:1"},
  {c:"econ_ms",l:"c",g:"2:1"},
  {c:"edu_ms",l:"b",g:"2:1"},
  {c:"psych_ms",l:"b",g:"2:1"},
  {c:"ir_ms",l:"b",g:"2:1",note:"War Studies top ranked"},
  {c:"bio_ms",l:"d",g:"2:1"},
  {c:"ds_ms",l:"d",g:"2:1"}
]},

{id:"bristol",n:"布里斯托大学",e:"University of Bristol",c:"Bristol",r:55,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"A*AA-ABB"},
  {c:"cs_ms",l:"std",g:"2:1"},
  {c:"eng_ms",l:"std",g:"2:1"},
  {c:"law_llm",l:"high",g:"2:1"},
  {c:"med",l:"high",g:"AAA"},
  {c:"econ_ms",l:"high",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},
  {c:"bio_ms",l:"std",g:"2:1"},
  {c:"vet",l:"high",g:"AAA"}
]},

{id:"warwick",n:"华威大学",e:"University of Warwick",c:"Coventry",r:67,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:22,w:21,s:23,l:21}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:23,l:21}}},
 pol:{nt:"accepted",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"A*AA-ABB"},
  {c:"cs_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1",note:"WBS - top ranked"},
  {c:"fin_ms",l:"high",g:"First/2:1"},
  {c:"law_llm",l:"high",g:"2:1"},
  {c:"econ_ms",l:"high",g:"First/2:1"},
  {c:"eng_ms",l:"std",g:"2:1"},
  {c:"ds_ms",l:"std",g:"2:1"},
  {c:"math_ms",l:"std",g:"First/2:1"},
  {c:"media_ms",l:"high",g:"2:1"}
]},

// ============ RUSSELL GROUP MID ============
{id:"glasgow",n:"格拉斯哥大学",e:"University of Glasgow",c:"Glasgow",r:76,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:23,w:23,s:23,l:23}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"high",g:"2:1",note:"Adam Smith"},
  {c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},{c:"econ_ms",l:"std",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},{c:"vet",l:"high",g:"AAA"}
]},

{id:"leeds",n:"利兹大学",e:"University of Leeds",c:"Leeds",r:75,cat:"russell",
 ll:{l60:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:18,w:18,s:20,l:17}},
     l65:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:21,s:22,l:19}},
     l70:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:96,r:22,w:22,s:23,l:21}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"l60",g:"AAA-BBB"},{c:"cs_ms",l:"l65",g:"2:1"},{c:"eng_ms",l:"l65",g:"2:1"},
  {c:"mba",l:"l70",g:"2:1"},{c:"law_llm",l:"l70",g:"2:1"},{c:"med",l:"l70",g:"AAA"},
  {c:"media_ms",l:"l70",g:"2:1"},{c:"edu_ms",l:"l65",g:"2:1"},{c:"bio_ms",l:"l65",g:"2:1"},
  {c:"ds_ms",l:"l65",g:"2:1"},{c:"econ_ms",l:"l65",g:"2:1"}
]},

{id:"sheffield",n:"谢菲尔德大学",e:"University of Sheffield",c:"Sheffield",r:91,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:19,w:19,s:22,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:95,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"arch_ms",l:"std",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},{c:"media_ms",l:"high",g:"2:1"},{c:"bio_ms",l:"std",g:"2:1"}
]},

{id:"southampton",n:"南安普顿大学",e:"University of Southampton",c:"Southampton",r:80,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"ee_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},
  {c:"env_ms",l:"std",g:"2:1"},{c:"ds_ms",l:"std",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"}
]},

{id:"nottingham",n:"诺丁汉大学",e:"University of Nottingham",c:"Nottingham",r:100,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"},
  {c:"pharm",l:"high",g:"AAB"},{c:"econ_ms",l:"std",g:"2:1"},{c:"bio_ms",l:"std",g:"2:1"}
]},

{id:"birmingham",n:"伯明翰大学",e:"University of Birmingham",c:"Birmingham",r:84,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:21,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:95,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"A*AA"},
  {c:"edu_ms",l:"std",g:"2:1"},{c:"dent",l:"high",g:"AAA"},{c:"bio_ms",l:"std",g:"2:1"}
]},

{id:"durham",n:"杜伦大学",e:"Durham University",c:"Durham",r:78,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:102,r:25,w:25,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"A*A*A-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"high",g:"2:1",note:"Durham Business School"},
  {c:"law_llm",l:"high",g:"2:1"},{c:"econ_ms",l:"high",g:"First/2:1"},{c:"edu_ms",l:"std",g:"2:1"},
  {c:"eng_ms",l:"std",g:"2:1"},{c:"hist_ms",l:"high",g:"2:1"},{c:"psych_ms",l:"std",g:"2:1"}
]},

{id:"standrews",n:"圣安德鲁斯大学",e:"University of St Andrews",c:"St Andrews",r:68,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:24,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-AAB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"ir_ms",l:"high",g:"2:1"},
  {c:"econ_ms",l:"std",g:"2:1"},{c:"hist_ms",l:"high",g:"First/2:1"},
  {c:"math_ms",l:"std",g:"First"},{c:"phys_ms",l:"std",g:"First"}
]},

{id:"exeter",n:"埃克塞特大学",e:"University of Exeter",c:"Exeter",r:130,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"high",g:"2:1"},
  {c:"law_llm",l:"high",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"},
  {c:"fin_ms",l:"high",g:"2:1"},{c:"bio_ms",l:"std",g:"2:1"}
]},

{id:"bath",n:"巴斯大学",e:"University of Bath",c:"Bath",r:148,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:21,w:21,s:21,l:21}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:24,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"A*AA-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"acct_ms",l:"high",g:"2:1"},
  {c:"psych_ms",l:"std",g:"2:1"},{c:"arch_ms",l:"std",g:"2:1"}
]},

{id:"york",n:"约克大学",e:"University of York",c:"York",r:141,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:20,w:20,s:21,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:96,r:22,w:22,s:23,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},{c:"econ_ms",l:"std",g:"2:1"},
  {c:"psych_ms",l:"std",g:"2:1"},{c:"media_ms",l:"high",g:"2:1"}
]},

{id:"lancaster",n:"兰卡斯特大学",e:"Lancaster University",c:"Lancaster",r:122,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:93,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"high",g:"2:1",note:"LUMS top ranked"},
  {c:"fin_ms",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},
  {c:"edu_ms",l:"std",g:"2:1"},{c:"env_ms",l:"std",g:"2:1"},{c:"ling_ms",l:"std",g:"2:1"}
]},

// ============ RUSSELL GROUP OTHER ============
{id:"newcastle",n:"纽卡斯尔大学",e:"Newcastle University",c:"Newcastle",r:110,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},{c:"arch_ms",l:"std",g:"2:1"},
  {c:"law_llm",l:"high",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"}
]},

{id:"liverpool",n:"利物浦大学",e:"University of Liverpool",c:"Liverpool",r:150,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:19,w:19,s:20,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:95,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},
  {c:"arch_ms",l:"std",g:"2:1"},{c:"vet",l:"high",g:"AAA"}
]},

{id:"qmul",n:"伦敦玛丽女王",e:"Queen Mary University of London",c:"London",r:125,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"law_llm",l:"high",g:"2:1",note:"Top law school"},
  {c:"econ_ms",l:"std",g:"2:1"},{c:"med",l:"high",g:"AAA"},{c:"dent",l:"high",g:"AAA"},
  {c:"eng_ms",l:"std",g:"2:1"},{c:"ling_ms",l:"std",g:"2:1"}
]},

{id:"cardiff",n:"卡迪夫大学",e:"Cardiff University",c:"Cardiff",r:154,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:90,r:17,w:17,s:20,l:17}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:20,w:20,s:22,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"high",g:"2:1"},{c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},
  {c:"arch_ms",l:"std",g:"2:1"},{c:"media_ms",l:"high",g:"2:1"}
]},

{id:"qub",n:"贝尔法斯特女王大学",e:"Queen's University Belfast",c:"Belfast",r:195,cat:"russell",
 ll:{std:{ielts:{t:6.5,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:87,r:17,w:17,s:20,l:17}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:95,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"law_llm",l:"high",g:"2:1"},{c:"med",l:"high",g:"AAA"},{c:"pharm",l:"std",g:"ABB"}
]},

// ============ OTHER RANKED ============
{id:"loughborough",n:"拉夫堡大学",e:"Loughborough University",c:"Loughborough",r:212,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"eng_ms",l:"std",g:"2:1"},{c:"mba",l:"std",g:"2:1"},
  {c:"ds_ms",l:"std",g:"2:1"},{c:"art_ms",l:"std",g:"2:1",note:"Top for design/sport"}
]},

{id:"surrey",n:"萨里大学",e:"University of Surrey",c:"Guildford",r:230,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"std",g:"2:1"},{c:"vet",l:"std",g:"AAA"}
]},

{id:"sussex",n:"萨塞克斯大学",e:"University of Sussex",c:"Brighton",r:218,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"ai_ms",l:"std",g:"2:1"},
  {c:"ir_ms",l:"std",g:"2:1",note:"Top for development studies"},{c:"media_ms",l:"std",g:"2:1"},
  {c:"psych_ms",l:"std",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"}
]},

{id:"heriotwatt",n:"赫瑞瓦特大学",e:"Heriot-Watt University",c:"Edinburgh",r:235,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"std",g:"2:1"},{c:"fin_ms",l:"std",g:"2:1"},{c:"tesol",l:"std",g:"2:1"}
]},

{id:"aberdeen",n:"阿伯丁大学",e:"University of Aberdeen",c:"Aberdeen",r:208,cat:"other",
 ll:{std:{ielts:{t:6.5,r:5.5,w:6,s:5.5,l:5.5},toefl:{t:85,r:18,w:20,s:18,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAB-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"law_llm",l:"std",g:"2:1"},{c:"med",l:"std",g:"AAA",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"dundee",n:"邓迪大学",e:"University of Dundee",c:"Dundee",r:250,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"law_llm",l:"std",g:"2:1"},{c:"med",l:"std",g:"AAA",o:{ielts:{t:7.0}}},
  {c:"art_ms",l:"std",g:"2:1",note:"Dundee top for art & design"}
]},

{id:"strathclyde",n:"思克莱德大学",e:"University of Strathclyde",c:"Glasgow",r:260,cat:"other",
 ll:{std:{ielts:{t:6.5,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:86,r:18,w:18,s:20,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAB-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"eng_ms",l:"std",g:"2:1"},
  {c:"mba",l:"std",g:"2:1",note:"Strathclyde Business School - triple accredited"},
  {c:"law_llm",l:"std",g:"2:1"},{c:"pharm",l:"std",g:"ABB"}
]},

{id:"kent",n:"肯特大学",e:"University of Kent",c:"Canterbury",r:310,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:85,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"ABB-BBC"},{c:"cs_ms",l:"std",g:"2:1"},{c:"law_llm",l:"std",g:"2:1"},
  {c:"econ_ms",l:"std",g:"2:1"},{c:"ir_ms",l:"std",g:"2:1"}
]},

{id:"rhul",n:"皇家霍洛威",e:"Royal Holloway, University of London",c:"Egham",r:280,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"std",g:"2:1"},
  {c:"media_ms",l:"std",g:"2:1"},{c:"psych_ms",l:"std",g:"2:1"}
]},

{id:"soas",n:"伦敦大学亚非学院",e:"SOAS University of London",c:"London",r:340,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:22,w:22,s:22,l:22}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:24,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-ABB"},{c:"law_llm",l:"high",g:"2:1"},
  {c:"ir_ms",l:"high",g:"2:1",note:"Area studies focus"},{c:"econ_ms",l:"std",g:"2:1"},
  {c:"ling_ms",l:"std",g:"2:1"},{c:"hist_ms",l:"high",g:"2:1"}
]},

{id:"city",n:"伦敦城市大学",e:"City, University of London",c:"London",r:320,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:89,r:20,w:20,s:20,l:20}},
     cass:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},
  {c:"mba",l:"cass",g:"2:1",note:"Bayes (formerly Cass) Business School"},
  {c:"fin_ms",l:"cass",g:"First/2:1"},{c:"acct_ms",l:"cass",g:"2:1"},
  {c:"law_llm",l:"std",g:"2:1"},{c:"media_ms",l:"std",g:"2:1"}
]},

{id:"aston",n:"阿斯顿大学",e:"Aston University",c:"Birmingham",r:350,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:85,r:18,w:18,s:20,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"ABB-BBC"},{c:"cs_ms",l:"std",g:"2:1"},{c:"mba",l:"std",g:"2:1",note:"Aston Business School"},
  {c:"eng_ms",l:"std",g:"2:1"},{c:"pharm",l:"std",g:"ABB"}
]},

{id:"coventry",n:"考文垂大学",e:"Coventry University",c:"Coventry",r:380,cat:"other",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:79,r:18,w:18,s:20,l:17}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"cs_ms",l:"std",g:"2:2"},{c:"eng_ms",l:"std",g:"2:2"},
  {c:"mba",l:"std",g:"2:2"},{c:"art_ms",l:"std",g:"2:2"},{c:"media_ms",l:"std",g:"2:2"}
]},

{id:"westminster",n:"威斯敏斯特大学",e:"University of Westminster",c:"London",r:400,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"accepted",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"cs_ms",l:"std",g:"2:2"},{c:"mba",l:"std",g:"2:2"},
  {c:"media_ms",l:"std",g:"2:2",note:"Top for media & communications"},
  {c:"arch_ms",l:"std",g:"2:2"},{c:"art_ms",l:"std",g:"2:2"}
]},

{id:"ual",n:"伦敦艺术大学",e:"University of the Arts London",c:"London",r:null,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:92,r:22,w:22,s:22,l:22}}},
 pol:{nt:"accepted",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"Portfolio-based"},{c:"art_ms",l:"std",g:"2:1",note:"CSM/LCF/LCC - world leading art & design"},
  {c:"media_ms",l:"std",g:"2:1"},{c:"arch_ms",l:"std",g:"2:1"}
]},

{id:"reading",n:"雷丁大学",e:"University of Reading",c:"Reading",r:250,cat:"other",
 ll:{std:{ielts:{t:6.5,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:85,r:18,w:18,s:18,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAB-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"bus_ms",l:"std",g:"2:1",note:"Henley Business School"},
  {c:"fin_ms",l:"std",g:"2:1"},{c:"law_llm",l:"std",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"}
]},

{id:"uea",n:"东英吉利大学",e:"University of East Anglia",c:"Norwich",r:295,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:88,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"AAA-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"env_ms",l:"std",g:"2:1",note:"Top for environmental science"},
  {c:"media_ms",l:"std",g:"2:1"},{c:"edu_ms",l:"std",g:"2:1"},{c:"law_llm",l:"std",g:"2:1"}
]},

{id:"essex",n:"埃塞克斯大学",e:"University of Essex",c:"Colchester",r:410,cat:"other",
 ll:{std:{ielts:{t:6.5,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:85,r:18,w:18,s:18,l:18}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"ABB-BBB"},{c:"cs_ms",l:"std",g:"2:1"},{c:"econ_ms",l:"std",g:"2:1"},
  {c:"ir_ms",l:"std",g:"2:1"},{c:"law_llm",l:"std",g:"2:1"},{c:"psych_ms",l:"std",g:"2:1"}
]},

{id:"northumbria",n:"诺森比亚大学",e:"Northumbria University",c:"Newcastle",r:360,cat:"other",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:79,r:18,w:17,s:20,l:17}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"cs_ms",l:"std",g:"2:2"},{c:"mba",l:"std",g:"2:2"},
  {c:"law_llm",l:"std",g:"2:2"},{c:"art_ms",l:"std",g:"2:2"}
]},

{id:"stirling",n:"斯特灵大学",e:"University of Stirling",c:"Stirling",r:420,cat:"other",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:17,w:17,s:20,l:17}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"BBB-BCC"},{c:"mba",l:"std",g:"2:2"},{c:"edu_ms",l:"std",g:"2:2"},
  {c:"media_ms",l:"std",g:"2:2"},{c:"env_ms",l:"std",g:"2:2"}
]}
];
COMPASS_DATA.uk = D;
})();

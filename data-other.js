// data-other.js - Australia (30) + New Zealand (8) + Southeast Asia (50)
(function(){

// ============ AUSTRALIA ============
var AUS = [
// Go8
{id:"melbourne",n:"墨尔本大学",e:"University of Melbourne",c:"Melbourne",r:13,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:13,w:21,s:18,l:13}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:94,r:24,w:27,s:24,l:24}},
     teach:{ielts:{t:7.5,r:7,w:7,s:8,l:8},toefl:{t:null}},
     med:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:94,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y",note:"Must use TOEFL iBT Australia for visa"},
 p:[
  {c:"ug",l:"std",g:"75%+"},{c:"cs_ms",l:"std",g:"65%+",note:"Melbourne Model"},
  {c:"eng_ms",l:"std",g:"65%+"},{c:"mba",l:"high",g:"GPA 3.0+",note:"MBS reduced to 6.5 from 2026"},
  {c:"law_llm",l:"high",g:"75%+"},{c:"med",l:"med",g:"80%+",note:"GAMSAT required"},
  {c:"edu_ms",l:"teach",g:"65%+",note:"AITSL: S8.0 L8.0 required"},
  {c:"fin_ms",l:"std",g:"65%+"},{c:"ds_ms",l:"std",g:"65%+"},
  {c:"arch_ms",l:"std",g:"65%+"},{c:"bio_ms",l:"std",g:"65%+"},
  {c:"ph_ms",l:"high",g:"65%+"}
]},

{id:"sydney",n:"悉尼大学",e:"University of Sydney",c:"Sydney",r:18,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:85,r:17,w:19,s:17,l:17}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:96,r:17,w:19,s:17,l:17}},
     med:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:96,r:24,w:25,s:23,l:24}},
     teach:{ielts:{t:7.5,r:7,w:7,s:8,l:8},toefl:{t:null}}},
 pol:{nt:"pending",mb:false,v:"2y",note:"Must use TOEFL iBT Australia"},
 p:[
  {c:"ug",l:"std",g:"75%+"},{c:"cs_ms",l:"std",g:"65%+"},{c:"eng_ms",l:"std",g:"65%+"},
  {c:"mba",l:"high",g:"GPA 3.0+"},{c:"law_llm",l:"high",g:"75%+"},
  {c:"med",l:"med",g:"80%+"},{c:"edu_ms",l:"teach",g:"65%+"},
  {c:"fin_ms",l:"std",g:"65%+"},{c:"arch_ms",l:"std",g:"65%+"},
  {c:"nurs",l:"high",g:"65%+",note:"AHPRA registration requirements"},
  {c:"ph_ms",l:"high",g:"65%+"},{c:"vet",l:"high",g:"75%+"}
]},

{id:"unsw",n:"新南威尔士大学",e:"UNSW Sydney",c:"Sydney",r:19,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:22,w:22,s:22,l:22}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:94,r:23,w:25,s:23,l:23}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"75%+"},{c:"cs_ms",l:"std",g:"65%+"},{c:"eng_ms",l:"std",g:"65%+"},
  {c:"mba",l:"high",g:"GPA 2.8+"},{c:"law_llm",l:"high",g:"70%+"},
  {c:"med",l:"high",g:"80%+"},{c:"fin_ms",l:"std",g:"65%+"},
  {c:"ds_ms",l:"std",g:"65%+"},{c:"arch_ms",l:"std",g:"65%+"},
  {c:"bio_ms",l:"std",g:"65%+"}
]},

{id:"anu",n:"澳大利亚国立大学",e:"Australian National University",c:"Canberra",r:30,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:80,r:20,w:20,s:18,l:18}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"75%+"},{c:"cs_ms",l:"std",g:"GPA 5.0/7"},
  {c:"eng_ms",l:"std",g:"GPA 5.0/7"},{c:"ir_ms",l:"high",g:"GPA 5.0/7",note:"Crawford School"},
  {c:"law_llm",l:"high",g:"GPA 5.0/7"},{c:"econ_ms",l:"std",g:"GPA 5.0/7"},
  {c:"pub_ms",l:"high",g:"GPA 5.0/7"},{c:"bio_ms",l:"std",g:"GPA 5.0/7"},
  {c:"phys_ms",l:"std",g:"GPA 5.0/7"},{c:"ds_ms",l:"std",g:"GPA 5.0/7"}
]},

{id:"monash",n:"莫纳什大学",e:"Monash University",c:"Melbourne",r:37,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:12,w:21,s:18,l:12}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:94,r:19,w:24,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"70%+"},{c:"cs_ms",l:"std",g:"60%+"},{c:"eng_ms",l:"std",g:"60%+"},
  {c:"mba",l:"high",g:"GPA 3.0+"},{c:"law_llm",l:"high",g:"65%+"},
  {c:"med",l:"high",g:"75%+"},{c:"edu_ms",l:"high",g:"60%+"},
  {c:"fin_ms",l:"std",g:"60%+"},{c:"pharm",l:"high",g:"65%+"},
  {c:"ds_ms",l:"std",g:"60%+"}
]},

{id:"uq",n:"昆士兰大学",e:"University of Queensland",c:"Brisbane",r:40,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:19,w:21,s:19,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:24,s:23,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"75%+"},{c:"cs_ms",l:"std",g:"GPA 4.5/7"},{c:"eng_ms",l:"std",g:"GPA 4.5/7"},
  {c:"mba",l:"high",g:"GPA 4.5/7"},{c:"law_llm",l:"high",g:"GPA 5.0/7"},
  {c:"med",l:"high",g:"GPA 5.0/7"},{c:"bio_ms",l:"std",g:"GPA 4.5/7"},
  {c:"env_ms",l:"std",g:"GPA 4.5/7"},{c:"vet",l:"high",g:"GPA 5.0/7"}
]},

{id:"adelaide",n:"阿德莱德大学",e:"University of Adelaide",c:"Adelaide",r:82,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:13,w:21,s:18,l:13}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:94,r:24,w:27,s:23,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"70%+"},{c:"cs_ms",l:"std",g:"GPA 5.0/7"},{c:"eng_ms",l:"std",g:"GPA 4.5/7"},
  {c:"mba",l:"high",g:"GPA 5.0/7"},{c:"law_llm",l:"high",g:"GPA 5.5/7"},
  {c:"med",l:"high",g:"GPA 5.0/7"},{c:"dent",l:"high",g:"GPA 5.0/7"},
  {c:"bio_ms",l:"std",g:"GPA 4.5/7"}
]},

{id:"uwa",n:"西澳大学",e:"University of Western Australia",c:"Perth",r:72,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:82,r:18,w:20,s:18,l:18}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:27,s:23,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"70%+"},{c:"cs_ms",l:"std",g:"GPA 5.0/7"},{c:"eng_ms",l:"std",g:"GPA 4.5/7"},
  {c:"mba",l:"high",g:"GPA 5.0/7"},{c:"law_llm",l:"high",g:"GPA 5.5/7"},
  {c:"med",l:"high",g:"GPA 5.5/7"},{c:"bio_ms",l:"std",g:"GPA 4.5/7"},
  {c:"env_ms",l:"std",g:"GPA 4.5/7"}
]},

// Other Australian
{id:"uts",n:"悉尼科技大学",e:"UTS",c:"Sydney",r:88,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"65%+"},{c:"cs_ms",l:"std",g:"GPA 2.75/4"},{c:"eng_ms",l:"std",g:"GPA 2.75/4"},
  {c:"mba",l:"std",g:"GPA 2.75/4"},{c:"ds_ms",l:"std",g:"GPA 2.75/4"},
  {c:"media_ms",l:"std",g:"GPA 2.75/4"},{c:"art_ms",l:"std",g:"Portfolio"}
]},

{id:"macquarie",n:"麦考瑞大学",e:"Macquarie University",c:"Sydney",r:130,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:83,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"GPA 4.0/7"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},
  {c:"acct_ms",l:"std",g:"GPA 4.0/7",note:"Top for accounting"},
  {c:"fin_ms",l:"std",g:"GPA 4.0/7"},{c:"ling_ms",l:"std",g:"GPA 4.0/7"},
  {c:"edu_ms",l:"std",g:"GPA 4.0/7"}
]},

{id:"deakin",n:"迪肯大学",e:"Deakin University",c:"Melbourne",r:210,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 3.0/7"},{c:"eng_ms",l:"std",g:"GPA 3.0/7"},
  {c:"mba",l:"std",g:"GPA 3.0/7"},{c:"edu_ms",l:"std",g:"GPA 3.0/7"},
  {c:"nurs",l:"std",g:"GPA 3.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"rmit",n:"皇家墨尔本理工",e:"RMIT University",c:"Melbourne",r:123,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 2.5/4"},{c:"eng_ms",l:"std",g:"GPA 2.5/4"},
  {c:"art_ms",l:"std",g:"Portfolio",note:"Top for art & design"},
  {c:"arch_ms",l:"std",g:"GPA 2.5/4"},{c:"ds_ms",l:"std",g:"GPA 2.5/4"},
  {c:"media_ms",l:"std",g:"GPA 2.5/4"}
]},

{id:"qut",n:"昆士兰科技大学",e:"QUT",c:"Brisbane",r:189,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},{c:"eng_ms",l:"std",g:"GPA 4.0/7"},
  {c:"mba",l:"std",g:"GPA 4.0/7"},{c:"edu_ms",l:"std",g:"GPA 4.0/7"},
  {c:"media_ms",l:"std",g:"GPA 4.0/7"}
]},

{id:"curtin",n:"科廷大学",e:"Curtin University",c:"Perth",r:174,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 2.7/4"},{c:"eng_ms",l:"std",g:"GPA 2.7/4"},
  {c:"mba",l:"std",g:"GPA 2.7/4"},{c:"fin_ms",l:"std",g:"GPA 2.7/4"}
]},

{id:"wollongong",n:"伍伦贡大学",e:"University of Wollongong",c:"Wollongong",r:162,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:86,r:18,w:20,s:18,l:17}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 2.5/4"},{c:"eng_ms",l:"std",g:"GPA 2.5/4"},
  {c:"mba",l:"std",g:"GPA 2.5/4"},{c:"edu_ms",l:"std",g:"GPA 2.5/4"}
]},

{id:"griffith",n:"格里菲斯大学",e:"Griffith University",c:"Brisbane/Gold Coast",r:235,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:19,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},{c:"eng_ms",l:"std",g:"GPA 4.0/7"},
  {c:"mba",l:"std",g:"GPA 4.0/7"},{c:"edu_ms",l:"std",g:"GPA 4.0/7"},
  {c:"env_ms",l:"std",g:"GPA 4.0/7"}
]},

{id:"latrobe",n:"乐卓博大学",e:"La Trobe University",c:"Melbourne",r:220,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 3.0/7"},{c:"mba",l:"std",g:"GPA 3.0/7"},
  {c:"bio_ms",l:"std",g:"GPA 3.0/7"},{c:"ph_ms",l:"std",g:"GPA 3.0/7"}
]},

{id:"newcastle_au",n:"纽卡斯尔大学(澳)",e:"University of Newcastle AU",c:"Newcastle",r:180,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"65%+"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},{c:"eng_ms",l:"std",g:"GPA 4.0/7"},
  {c:"mba",l:"std",g:"GPA 4.0/7"},{c:"med",l:"std",g:"GPA 5.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"tasmania",n:"塔斯马尼亚大学",e:"University of Tasmania",c:"Hobart",r:290,cat:"other",
 ll:{std:{ielts:{t:6.0,r:6,w:6,s:6,l:6},toefl:{t:72,r:null,w:20,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 3.0/7"},{c:"eng_ms",l:"std",g:"GPA 3.0/7"},
  {c:"mba",l:"std",g:"GPA 3.0/7"},{c:"env_ms",l:"std",g:"GPA 3.0/7"}
]},

{id:"flinders",n:"弗林德斯大学",e:"Flinders University",c:"Adelaide",r:350,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},{c:"nurs",l:"std",g:"GPA 4.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}},
  {c:"edu_ms",l:"std",g:"GPA 4.0/7"},{c:"med",l:"std",g:"GPA 5.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"jcu_au",n:"詹姆斯库克大学(澳)",e:"James Cook University AU",c:"Townsville",r:370,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 4.0/7"},
  {c:"env_ms",l:"std",g:"GPA 4.0/7",note:"Tropical science focus"},
  {c:"med",l:"std",g:"GPA 5.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}},
  {c:"vet",l:"std",g:"GPA 5.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"wsydney",n:"西悉尼大学",e:"Western Sydney University",c:"Sydney",r:400,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 3.0/7"},{c:"mba",l:"std",g:"GPA 3.0/7"},
  {c:"edu_ms",l:"std",g:"GPA 3.0/7"},{c:"nurs",l:"std",g:"GPA 3.0/7",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]},

{id:"swinburne",n:"斯威本科技大学",e:"Swinburne University",c:"Melbourne",r:280,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"cs_ms",l:"std",g:"GPA 2.5/4"},{c:"eng_ms",l:"std",g:"GPA 2.5/4"},
  {c:"art_ms",l:"std",g:"Portfolio"},{c:"ds_ms",l:"std",g:"GPA 2.5/4"}
]},

{id:"bond",n:"邦德大学",e:"Bond University",c:"Gold Coast",r:420,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"std",g:"60%+"},{c:"law_llm",l:"std",g:"GPA 2.5/4",note:"Private uni; accelerated"},
  {c:"mba",l:"std",g:"GPA 2.5/4"},{c:"med",l:"std",g:"GPA 3.0/4",o:{ielts:{t:7.0,r:7,w:7,s:7,l:7}}}
]}
];

// ============ NEW ZEALAND ============
var NZ = [
{id:"auckland",n:"奥克兰大学",e:"University of Auckland",c:"Auckland",r:68,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:21,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:21,s:null,l:null}},
     med:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:105,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"cs_ms",l:"pg",g:"GPA B+"},
  {c:"eng_ms",l:"pg",g:"GPA B+"},{c:"mba",l:"pg",g:"GPA B+"},
  {c:"law_llm",l:"pg",g:"GPA B+"},{c:"med",l:"med",g:"GPA A-",note:"MBChB"},
  {c:"edu_ms",l:"pg",g:"GPA B"},{c:"bio_ms",l:"pg",g:"GPA B+"},
  {c:"ds_ms",l:"pg",g:"GPA B+"},{c:"arch_ms",l:"pg",g:"GPA B+"}
]},

{id:"otago",n:"奥塔哥大学",e:"University of Otago",c:"Dunedin",r:206,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:20,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:20,w:20,s:20,l:20}},
     med:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:105,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"cs_ms",l:"pg",g:"GPA B+"},
  {c:"med",l:"med",g:"GPA A-",note:"Oldest medical school in NZ"},
  {c:"dent",l:"med",g:"GPA A-"},{c:"pharm",l:"pg",g:"GPA B+"},
  {c:"law_llm",l:"pg",g:"GPA B+"},{c:"bio_ms",l:"pg",g:"GPA B+"},
  {c:"ph_ms",l:"pg",g:"GPA B+"}
]},

{id:"canterbury",n:"坎特伯雷大学",e:"University of Canterbury",c:"Christchurch",r:250,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:19,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"cs_ms",l:"pg",g:"GPA B+"},
  {c:"eng_ms",l:"pg",g:"GPA B+"},{c:"law_llm",l:"pg",g:"GPA B+"},
  {c:"edu_ms",l:"pg",g:"GPA B"},{c:"psych_ms",l:"pg",g:"GPA B+"},
  {c:"env_ms",l:"pg",g:"GPA B"}
]},

{id:"victoria",n:"惠灵顿维多利亚大学",e:"Victoria University of Wellington",c:"Wellington",r:215,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:null,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"cs_ms",l:"pg",g:"GPA B+"},
  {c:"law_llm",l:"pg",g:"GPA B+",note:"Top NZ law school"},
  {c:"ir_ms",l:"pg",g:"GPA B+"},{c:"pub_ms",l:"pg",g:"GPA B+"},
  {c:"arch_ms",l:"pg",g:"GPA B+"},{c:"art_ms",l:"pg",g:"Portfolio"}
]},

{id:"waikato",n:"怀卡托大学",e:"University of Waikato",c:"Hamilton",r:340,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:21,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:21,s:21,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"cs_ms",l:"pg",g:"GPA B+"},
  {c:"mba",l:"pg",g:"GPA B+",note:"Triple-accredited"},{c:"law_llm",l:"pg",g:"GPA B+"},
  {c:"edu_ms",l:"pg",g:"GPA B"},{c:"env_ms",l:"pg",g:"GPA B"}
]},

{id:"massey",n:"梅西大学",e:"Massey University",c:"Palmerston North",r:310,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:19,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:20,s:20,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA B equivalent"},{c:"eng_ms",l:"pg",g:"GPA B+"},
  {c:"mba",l:"pg",g:"GPA B+"},{c:"edu_ms",l:"pg",g:"GPA B"},
  {c:"vet",l:"pg",g:"GPA B+",note:"Only vet school in NZ"},
  {c:"art_ms",l:"pg",g:"Portfolio",note:"Top NZ for creative arts"}
]},

{id:"lincoln",n:"林肯大学",e:"Lincoln University",c:"Christchurch",r:370,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:60,r:null,w:null,s:null,l:null}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA C+ equivalent"},{c:"eng_ms",l:"pg",g:"GPA B"},
  {c:"mba",l:"pg",g:"GPA B"},{c:"env_ms",l:"pg",g:"GPA B",note:"Agriculture & environment focus"}
]},

{id:"aut",n:"奥克兰理工大学",e:"AUT",c:"Auckland",r:395,cat:"nz",
 ll:{ug:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:65,r:15,w:18,s:17,l:15}},
     pg:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:70,r:15,w:20,s:18,l:15}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"GPA C+ equivalent"},{c:"cs_ms",l:"pg",g:"GPA B"},
  {c:"eng_ms",l:"pg",g:"GPA B"},{c:"mba",l:"pg",g:"GPA B"},
  {c:"edu_ms",l:"pg",g:"GPA B"},{c:"art_ms",l:"pg",g:"Portfolio"},
  {c:"ph_ms",l:"pg",g:"GPA B"}
]}
];

// ============ SOUTHEAST ASIA ============
var SEA = [
// Singapore
{id:"nus",n:"新加坡国立大学",e:"NUS",c:"Singapore",r:8,cat:"sg",
 ll:{def:{ielts:{t:6.5,r:6.5,w:6.5,s:null,l:null},toefl:{t:92,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.5+"},{c:"cs_ms",l:"def",g:"GPA 3.5+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"high",g:"GPA 3.3+",note:"NUS Business School"},{c:"law_llm",l:"high",g:"GPA 3.5+"},
  {c:"med",l:"high",g:"GPA 3.8+"},{c:"pub_ms",l:"def",g:"GPA 3.0+"},
  {c:"ds_ms",l:"def",g:"GPA 3.5+"}
]},

{id:"ntu",n:"南洋理工大学",e:"NTU",c:"Singapore",r:15,cat:"sg",
 ll:{def:{ielts:{t:6.0,r:null,w:6,s:6,l:null},toefl:{t:90,r:null,w:null,s:25,l:null}},
     new:{ielts:{t:6.0,r:null,w:6,s:6,l:null},toefl:{t:90,r:null,w:null,s:25,l:null}}},
 pol:{nt:"published",mb:false,v:"2y",note:"New TOEFL 5.0 / Speaking 5.0 accepted"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.5+"},{c:"cs_ms",l:"def",g:"GPA 3.3+"},{c:"ee_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+",note:"Nanyang MBA"},{c:"media_ms",l:"def",g:"GPA 3.0+",note:"WKWSCI"},
  {c:"edu_ms",l:"def",g:"GPA 3.0+",note:"NIE"},{c:"ds_ms",l:"def",g:"GPA 3.3+"},
  {c:"ai_ms",l:"def",g:"GPA 3.3+"}
]},

{id:"smu",n:"新加坡管理大学",e:"SMU",c:"Singapore",r:null,cat:"sg",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:93,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.3+"},{c:"mba",l:"high",g:"GPA 3.0+"},{c:"fin_ms",l:"high",g:"GPA 3.3+"},
  {c:"acct_ms",l:"def",g:"GPA 3.0+"},{c:"law_llm",l:"high",g:"GPA 3.3+"},
  {c:"ds_ms",l:"def",g:"GPA 3.3+"},{c:"cs_ms",l:"def",g:"GPA 3.3+"}
]},

{id:"sutd",n:"新加坡科技设计大学",e:"SUTD",c:"Singapore",r:null,cat:"sg",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.3+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"arch_ms",l:"def",g:"GPA 3.0+",note:"Design-focused"},
  {c:"ai_ms",l:"def",g:"GPA 3.3+"}
]},

{id:"jcu_sg",n:"詹姆斯库克新加坡",e:"James Cook University SG",c:"Singapore",r:null,cat:"sg",
 ll:{def:{ielts:{t:6.0,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"mba",l:"def",g:"GPA 2.5+"},
  {c:"edu_ms",l:"def",g:"GPA 2.5+"},{c:"psych_ms",l:"def",g:"GPA 2.5+"}
]},

// Malaysia
{id:"um",n:"马来亚大学",e:"University of Malaya",c:"Kuala Lumpur",r:60,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+"},{c:"law_llm",l:"def",g:"GPA 3.0+"},
  {c:"med",l:"def",g:"GPA 3.5+",o:{ielts:{t:6.5}}},{c:"edu_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"ukm",n:"马来西亚国民大学",e:"UKM",c:"Bangi",r:152,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"med",l:"def",g:"GPA 3.5+",o:{ielts:{t:6.5}}},{c:"edu_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"upm",n:"博特拉大学",e:"UPM",c:"Serdang",r:143,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"bio_ms",l:"def",g:"GPA 3.0+",note:"Agriculture/Forestry strong"},
  {c:"env_ms",l:"def",g:"GPA 3.0+"},{c:"vet",l:"def",g:"GPA 3.0+",o:{ielts:{t:6.5}}}
]},

{id:"usm",n:"理科大学",e:"USM",c:"Penang",r:137,cat:"my",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"med",l:"def",g:"GPA 3.5+",o:{ielts:{t:6.0}}},{c:"pharm",l:"def",g:"GPA 3.0+"}
]},

{id:"utm",n:"工艺大学",e:"UTM",c:"Johor Bahru",r:188,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"arch_ms",l:"def",g:"GPA 3.0+"},{c:"ds_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"taylors",n:"泰莱大学",e:"Taylor's University",c:"Subang Jaya",r:284,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"mba",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 2.5+"},
  {c:"media_ms",l:"def",g:"GPA 2.5+"},{c:"edu_ms",l:"def",g:"GPA 2.5+"}
]},

{id:"monash_my",n:"莫纳什马来西亚",e:"Monash University Malaysia",c:"Subang Jaya",r:null,cat:"my",
 ll:{def:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:12,w:21,s:18,l:12}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+"},{c:"fin_ms",l:"def",g:"GPA 3.0+"},
  {c:"bio_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"nottingham_my",n:"诺丁汉马来西亚",e:"University of Nottingham Malaysia",c:"Semenyih",r:null,cat:"my",
 ll:{def:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:20,w:20,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"BBB-BBC"},{c:"cs_ms",l:"def",g:"2:1"},{c:"eng_ms",l:"def",g:"2:1"},
  {c:"mba",l:"def",g:"2:1"},{c:"edu_ms",l:"def",g:"2:1"},{c:"pharm",l:"def",g:"2:1"}
]},

{id:"sunway",n:"双威大学",e:"Sunway University",c:"Subang Jaya",r:null,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"mba",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 2.5+"},
  {c:"acct_ms",l:"def",g:"GPA 2.5+"}
]},

{id:"apu",n:"亚太科技大学",e:"APU",c:"Kuala Lumpur",r:null,cat:"my",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:60,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 2.5+"},{c:"ds_ms",l:"def",g:"GPA 2.5+"},
  {c:"mba",l:"def",g:"GPA 2.5+"}
]},

// Thailand
{id:"chula",n:"朱拉隆功大学",e:"Chulalongkorn University",c:"Bangkok",r:211,cat:"th",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+"},{c:"econ_ms",l:"def",g:"GPA 3.0+"},{c:"med",l:"def",g:"GPA 3.5+",o:{ielts:{t:7.0}}}
]},

{id:"mahidol",n:"玛希隆大学",e:"Mahidol University",c:"Bangkok",r:255,cat:"th",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"med",l:"def",g:"GPA 3.5+",o:{ielts:{t:6.5}},note:"Top medical school in Thailand"},
  {c:"ph_ms",l:"def",g:"GPA 3.0+"},{c:"bio_ms",l:"def",g:"GPA 3.0+"},
  {c:"eng_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"thammasat",n:"法政大学",e:"Thammasat University",c:"Bangkok",r:600,cat:"th",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"mba",l:"def",g:"GPA 3.0+"},{c:"law_llm",l:"def",g:"GPA 3.0+"},
  {c:"econ_ms",l:"def",g:"GPA 3.0+"},{c:"ir_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"ait",n:"亚洲理工学院",e:"AIT",c:"Bangkok",r:null,cat:"th",
 ll:{def:{ielts:{t:6.0,r:null,w:6,s:null,l:null},toefl:{t:80,r:null,w:23,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"eng_ms",l:"def",g:"GPA 2.75+",note:"All-English graduate institute"},
  {c:"cs_ms",l:"def",g:"GPA 2.75+"},{c:"env_ms",l:"def",g:"GPA 2.75+"},
  {c:"ds_ms",l:"def",g:"GPA 2.75+"}
]},

{id:"chiangmai",n:"清迈大学",e:"Chiang Mai University",c:"Chiang Mai",r:551,cat:"th",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"eng_ms",l:"def",g:"GPA 2.5+"},{c:"med",l:"def",g:"GPA 3.0+",o:{ielts:{t:6.0}}},
  {c:"bio_ms",l:"def",g:"GPA 2.5+"}
]},

// Vietnam
{id:"vnu",n:"越南国家大学(河内)",e:"VNU Hanoi",c:"Hanoi",r:null,cat:"vn",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:65,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"econ_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"fpt",n:"FPT大学",e:"FPT University",c:"Hanoi",r:null,cat:"vn",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}},
     prep:{ielts:{t:5.0,r:null,w:null,s:null,l:null},toefl:{t:65,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+",note:"Direct entry; prep available for lower scores"},
  {c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"ds_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+"}
]},

{id:"rmit_vn",n:"RMIT越南",e:"RMIT Vietnam",c:"Ho Chi Minh City",r:null,cat:"vn",
 ll:{def:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:19,w:19,s:19,l:19}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 2.5+"},{c:"mba",l:"def",g:"GPA 2.5+"},
  {c:"eng_ms",l:"def",g:"GPA 2.5+"},{c:"media_ms",l:"def",g:"GPA 2.5+"}
]},

// Indonesia
{id:"ui",n:"印度尼西亚大学",e:"Universitas Indonesia",c:"Depok",r:207,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"law_llm",l:"def",g:"GPA 3.0+"},{c:"med",l:"def",g:"GPA 3.3+"},
  {c:"ph_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"ugm",n:"加扎马达大学",e:"UGM",c:"Yogyakarta",r:231,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"med",l:"def",g:"GPA 3.3+"},{c:"law_llm",l:"def",g:"GPA 3.0+"}
]},

{id:"itb",n:"万隆理工学院",e:"ITB",c:"Bandung",r:245,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},
  {c:"arch_ms",l:"def",g:"GPA 3.0+"},{c:"ds_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"binus",n:"建国大学",e:"Binus University",c:"Jakarta",r:null,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:55,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"mba",l:"def",g:"GPA 3.0+"},
  {c:"ds_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"airlangga",n:"艾尔朗加大学",e:"Universitas Airlangga",c:"Surabaya",r:360,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+"},{c:"med",l:"def",g:"GPA 3.3+"},{c:"pharm",l:"def",g:"GPA 3.0+"},
  {c:"law_llm",l:"def",g:"GPA 3.0+"}
]},

{id:"ipb",n:"茂物农业大学",e:"IPB University",c:"Bogor",r:410,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"bio_ms",l:"def",g:"GPA 3.0+"},{c:"env_ms",l:"def",g:"GPA 3.0+"},
  {c:"vet",l:"def",g:"GPA 3.0+"}
]},

{id:"diponegoro",n:"迪波内戈罗大学",e:"Universitas Diponegoro",c:"Semarang",r:450,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.8+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"},{c:"law_llm",l:"def",g:"GPA 3.0+"},
  {c:"med",l:"def",g:"GPA 3.3+"}
]},

{id:"telkom",n:"电信大学",e:"Telkom University",c:"Bandung",r:null,cat:"id",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:55,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},{c:"ee_ms",l:"def",g:"GPA 3.0+"},
  {c:"ds_ms",l:"def",g:"GPA 3.0+"}
]},

// Philippines
{id:"up",n:"菲律宾大学",e:"University of the Philippines",c:"Quezon City",r:330,cat:"ph",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:70,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.0/5",note:"5=highest scale; English-medium"},
  {c:"cs_ms",l:"def",g:"GPA 2.0/5"},{c:"eng_ms",l:"def",g:"GPA 2.0/5"},
  {c:"law_llm",l:"def",g:"GPA 2.0/5"},{c:"med",l:"def",g:"GPA 1.75/5"},
  {c:"pub_ms",l:"def",g:"GPA 2.0/5"}
]},

{id:"ateneo",n:"雅典耀大学",e:"Ateneo de Manila",c:"Quezon City",r:null,cat:"ph",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:70,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+",note:"English-medium"},{c:"mba",l:"def",g:"GPA 3.0+"},
  {c:"law_llm",l:"def",g:"GPA 3.0+"},{c:"edu_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"dlsu",n:"德拉萨大学",e:"De La Salle University",c:"Manila",r:null,cat:"ph",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:70,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 3.0+",note:"English-medium"},{c:"cs_ms",l:"def",g:"GPA 3.0+"},
  {c:"mba",l:"def",g:"GPA 3.0+"},{c:"eng_ms",l:"def",g:"GPA 3.0+"}
]},

{id:"ust_ph",n:"圣托马斯大学",e:"UST Manila",c:"Manila",r:null,cat:"ph",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:65,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"med",l:"def",g:"GPA 3.0+"},
  {c:"pharm",l:"def",g:"GPA 2.5+"},{c:"eng_ms",l:"def",g:"GPA 2.5+"}
]},

{id:"mapua",n:"马普阿大学",e:"Mapua University",c:"Manila",r:null,cat:"ph",
 ll:{def:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:60,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"GPA 2.5+"},{c:"eng_ms",l:"def",g:"GPA 2.5+"},{c:"cs_ms",l:"def",g:"GPA 2.5+"},
  {c:"arch_ms",l:"def",g:"GPA 2.5+"}
]}
];

COMPASS_DATA.aus = AUS;
COMPASS_DATA.nz = NZ;
COMPASS_DATA.sea = SEA;
})();

// data-other.js - Australia + New Zealand + Southeast Asia - Undergraduate Programs Only
// v4.0 - All programs are bachelor's level
(function(){

// ============ AUSTRALIA ============
var AUS = [
// Go8
{id:"melbourne",n:"墨尔本大学",e:"University of Melbourne",c:"Melbourne",r:13,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:13,w:21,s:18,l:13}},
     high:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:94,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y",note:"Must use TOEFL iBT Australia for visa"},
 fee:{ug:"AUD 40,000-53,000",currency:"AUD"},
 living:"AUD 21,000-25,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 95+ / IB 38+",note:"Melbourne Model; BSc major in Computing"},
  {c:"eng",l:"std",g:"ATAR 90+ / IB 36+",note:"No direct UG engineering; Design pathway"},
  {c:"math",l:"std",g:"ATAR 90+ / IB 36+"},
  {c:"phys",l:"std",g:"ATAR 90+ / IB 36+"},
  {c:"chem",l:"std",g:"ATAR 90+ / IB 36+"},
  {c:"bio",l:"std",g:"ATAR 88+ / IB 35+",note:"Biomedical Science popular pre-med"},
  {c:"econ",l:"std",g:"ATAR 92+ / IB 37+",note:"BCom Economics"},
  {c:"bus",l:"std",g:"ATAR 92+ / IB 37+",note:"Melbourne Business School BCom"},
  {c:"fin",l:"std",g:"ATAR 92+ / IB 37+",note:"BCom Finance"},
  {c:"acct",l:"std",g:"ATAR 92+ / IB 37+"},
  {c:"law",l:"high",g:"ATAR 99+ / IB 43+",note:"JD is post-grad; Arts/Commerce + JD pathway"},
  {c:"med",l:"high",g:"ATAR 99+ / IB 43+",note:"MD is post-grad; BSc Biomed pre-med pathway"},
  {c:"arch",l:"std",g:"ATAR 85+ / IB 33+",note:"Bachelor of Design"},
  {c:"psych",l:"std",g:"ATAR 88+ / IB 35+"},
  {c:"edu",l:"std",g:"ATAR 80+ / IB 31+",note:"BEd"},
  {c:"ds",l:"std",g:"ATAR 90+ / IB 36+",note:"BSc Data Science major"},
  {c:"env",l:"std",g:"ATAR 80+ / IB 31+",note:"Environmental Science BSc"}
]},

{id:"sydney",n:"悉尼大学",e:"University of Sydney",c:"Sydney",r:18,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:85,r:17,w:19,s:17,l:17}},
     high:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:96,r:24,w:25,s:23,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y",note:"Must use TOEFL iBT Australia"},
 fee:{ug:"AUD 42,000-55,000",currency:"AUD"},
 living:"AUD 22,000-26,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 90+ / IB 36+",note:"Advanced Computing BSc"},
  {c:"eng",l:"std",g:"ATAR 90+ / IB 36+",note:"BEng various disciplines"},
  {c:"math",l:"std",g:"ATAR 88+ / IB 35+"},
  {c:"phys",l:"std",g:"ATAR 88+ / IB 35+"},
  {c:"bio",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"econ",l:"std",g:"ATAR 93+ / IB 37+",note:"BCom Economics"},
  {c:"bus",l:"std",g:"ATAR 93+ / IB 37+",note:"BCom"},
  {c:"law",l:"high",g:"ATAR 99+ / IB 43+",note:"Combined law degrees"},
  {c:"med",l:"high",g:"ATAR 99.5+ / IB 44+",note:"BMed/MD; GAMSAT/UCAT required"},
  {c:"arch",l:"std",g:"ATAR 80+ / IB 31+",note:"Design in Architecture"},
  {c:"psych",l:"std",g:"ATAR 88+ / IB 35+"},
  {c:"nurs",l:"std",g:"ATAR 78+ / IB 29+",note:"BNursing; IELTS 7.0 for clinical"},
  {c:"vet",l:"high",g:"ATAR 95+ / IB 38+",note:"DVM pathway"},
  {c:"edu",l:"std",g:"ATAR 78+ / IB 29+"}
]},

{id:"unsw",n:"新南威尔士大学",e:"UNSW Sydney",c:"Sydney",r:19,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:90,r:22,w:22,s:22,l:22}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:94,r:23,w:25,s:23,l:23}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 40,000-50,000",currency:"AUD"},
 living:"AUD 22,000-26,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 93+ / IB 37+",note:"BSc Computer Science"},
  {c:"eng",l:"std",g:"ATAR 90+ / IB 36+",note:"BEng(Hons) various"},
  {c:"math",l:"std",g:"ATAR 88+ / IB 35+"},
  {c:"bio",l:"std",g:"ATAR 83+ / IB 33+"},
  {c:"econ",l:"std",g:"ATAR 90+ / IB 36+"},
  {c:"bus",l:"std",g:"ATAR 90+ / IB 36+",note:"BCom"},
  {c:"law",l:"high",g:"ATAR 97+ / IB 41+",note:"Combined law degrees available"},
  {c:"med",l:"high",g:"ATAR 97+ / IB 41+",note:"BMedSc/MD pathway"},
  {c:"arch",l:"std",g:"ATAR 83+ / IB 33+",note:"Bachelor of Architectural Studies"},
  {c:"ds",l:"std",g:"ATAR 90+ / IB 36+",note:"Data Science & Decisions"},
  {c:"fin",l:"std",g:"ATAR 90+ / IB 36+"},
  {c:"psych",l:"std",g:"ATAR 85+ / IB 34+"}
]},

{id:"anu",n:"澳大利亚国立大学",e:"Australian National University",c:"Canberra",r:30,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:80,r:20,w:20,s:18,l:18}},
     high:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:22,w:22,s:22,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 39,000-48,000",currency:"AUD"},
 living:"AUD 18,000-22,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 88+ / IB 35+",note:"Bachelor of Computing"},
  {c:"eng",l:"std",g:"ATAR 85+ / IB 34+",note:"BEng(R&D)"},
  {c:"math",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"phys",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"bio",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"econ",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"ir",l:"high",g:"ATAR 85+ / IB 34+",note:"Crawford School; strong in IR & politics"},
  {c:"law",l:"high",g:"ATAR 95+ / IB 39+",note:"Bachelor of Laws LLB"},
  {c:"bus",l:"std",g:"ATAR 85+ / IB 34+",note:"BCom"},
  {c:"psych",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"env",l:"std",g:"ATAR 78+ / IB 30+",note:"Environment & Sustainability"},
  {c:"ds",l:"std",g:"ATAR 85+ / IB 34+"}
]},

{id:"monash",n:"莫纳什大学",e:"Monash University",c:"Melbourne",r:37,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:12,w:21,s:18,l:12}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:94,r:19,w:24,s:20,l:20}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 38,000-50,000",currency:"AUD"},
 living:"AUD 20,000-24,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 83+ / IB 33+",note:"BSc Computer Science"},
  {c:"eng",l:"std",g:"ATAR 80+ / IB 31+",note:"BEng(Hons)"},
  {c:"math",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"bio",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"econ",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"bus",l:"std",g:"ATAR 85+ / IB 34+",note:"BCom"},
  {c:"law",l:"high",g:"ATAR 95+ / IB 39+",note:"Combined law degrees"},
  {c:"med",l:"high",g:"ATAR 95+ / IB 39+",note:"BMedSc pathway; UCAT"},
  {c:"pharm",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"psych",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"edu",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"ds",l:"std",g:"ATAR 83+ / IB 33+"},
  {c:"art",l:"std",g:"ATAR 70+ / IB 28+",note:"Fine Arts / Design"}
]},

{id:"uq",n:"昆士兰大学",e:"University of Queensland",c:"Brisbane",r:40,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:87,r:19,w:21,s:19,l:19}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:22,w:24,s:23,l:22}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 38,000-48,000",currency:"AUD"},
 living:"AUD 18,000-22,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 87+ / IB 34+"},{c:"eng",l:"std",g:"ATAR 85+ / IB 34+"},
  {c:"math",l:"std",g:"ATAR 85+ / IB 34+"},{c:"bio",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"econ",l:"std",g:"ATAR 85+ / IB 34+"},{c:"bus",l:"std",g:"ATAR 85+ / IB 34+",note:"BCom"},
  {c:"law",l:"high",g:"ATAR 95+ / IB 39+",note:"LLB combined"},
  {c:"med",l:"high",g:"ATAR 99+ / IB 43+",note:"MD post-grad pathway"},
  {c:"vet",l:"high",g:"ATAR 95+ / IB 39+",note:"BVSc"},
  {c:"env",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"psych",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"edu",l:"std",g:"ATAR 70+ / IB 28+"}
]},

{id:"adelaide",n:"阿德莱德大学",e:"University of Adelaide",c:"Adelaide",r:82,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:13,w:21,s:18,l:13}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:94,r:24,w:27,s:23,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 36,000-46,000",currency:"AUD"},
 living:"AUD 16,000-20,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 80+ / IB 31+"},{c:"eng",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"math",l:"std",g:"ATAR 80+ / IB 31+"},{c:"bio",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"econ",l:"std",g:"ATAR 78+ / IB 30+"},{c:"bus",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"law",l:"high",g:"ATAR 95+ / IB 39+",note:"LLB combined"},
  {c:"med",l:"high",g:"ATAR 99+ / IB 43+",note:"MBBS"},
  {c:"dent",l:"high",g:"ATAR 95+ / IB 39+",note:"BDS"},
  {c:"env",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"psych",l:"std",g:"ATAR 75+ / IB 29+"}
]},

{id:"uwa",n:"西澳大学",e:"University of Western Australia",c:"Perth",r:72,cat:"go8",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:82,r:18,w:20,s:18,l:18}},
     high:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:24,w:27,s:23,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"AUD 36,000-45,000",currency:"AUD"},
 living:"AUD 16,000-20,000/yr",
 p:[
  {c:"cs",l:"std",g:"ATAR 80+ / IB 31+"},{c:"eng",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"math",l:"std",g:"ATAR 80+ / IB 31+"},{c:"bio",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"econ",l:"std",g:"ATAR 78+ / IB 30+"},{c:"bus",l:"std",g:"ATAR 78+ / IB 30+"},
  {c:"law",l:"high",g:"ATAR 95+ / IB 39+",note:"LLB"},
  {c:"med",l:"high",g:"ATAR 99+ / IB 43+",note:"MD pathway; UCAT required"},
  {c:"env",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"psych",l:"std",g:"ATAR 75+ / IB 29+"}
]},

// Other Australian
{id:"uts",n:"悉尼科技大学",e:"UTS",c:"Sydney",r:88,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 83+ / IB 33+"},{c:"eng",l:"std",g:"ATAR 80+ / IB 31+"},
  {c:"bus",l:"std",g:"ATAR 78+ / IB 30+",note:"BCom / BBus"},
  {c:"ds",l:"std",g:"ATAR 83+ / IB 33+"},{c:"media",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"art",l:"std",g:"ATAR 70+ / Portfolio",note:"Design & Architecture"},
  {c:"nurs",l:"std",g:"ATAR 73+ / IB 28+",note:"BN"}
]},

{id:"macquarie",n:"麦考瑞大学",e:"Macquarie University",c:"Sydney",r:130,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:83,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 78+ / IB 30+"},{c:"bus",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"acct",l:"std",g:"ATAR 75+ / IB 29+",note:"Top for accounting"},
  {c:"fin",l:"std",g:"ATAR 78+ / IB 30+"},{c:"ling",l:"std",g:"ATAR 72+ / IB 28+"},
  {c:"edu",l:"std",g:"ATAR 70+ / IB 27+"},{c:"psych",l:"std",g:"ATAR 75+ / IB 29+"}
]},

{id:"rmit",n:"皇家墨尔本理工",e:"RMIT University",c:"Melbourne",r:123,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 75+ / IB 29+"},{c:"eng",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"art",l:"std",g:"Portfolio",note:"Top for art & design; portfolio essential"},
  {c:"arch",l:"std",g:"ATAR 78+ / IB 30+",note:"Bachelor of Architectural Design"},
  {c:"ds",l:"std",g:"ATAR 75+ / IB 29+"},{c:"media",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"bus",l:"std",g:"ATAR 73+ / IB 28+"}
]},

{id:"deakin",n:"迪肯大学",e:"Deakin University",c:"Melbourne",r:210,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 70+ / IB 28+"},{c:"eng",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"bus",l:"std",g:"ATAR 68+ / IB 27+"},{c:"edu",l:"std",g:"ATAR 65+ / IB 26+"},
  {c:"nurs",l:"std",g:"ATAR 68+ / IB 27+",note:"IELTS 7.0 for clinical registration"},
  {c:"psych",l:"std",g:"ATAR 70+ / IB 28+"}
]},

{id:"qut",n:"昆士兰科技大学",e:"QUT",c:"Brisbane",r:189,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 75+ / IB 29+"},{c:"eng",l:"std",g:"ATAR 75+ / IB 29+"},
  {c:"bus",l:"std",g:"ATAR 73+ / IB 28+"},{c:"edu",l:"std",g:"ATAR 65+ / IB 26+"},
  {c:"media",l:"std",g:"ATAR 70+ / IB 28+",note:"Creative Industries"},
  {c:"nurs",l:"std",g:"ATAR 68+ / IB 27+"}
]},

{id:"curtin",n:"科廷大学",e:"Curtin University",c:"Perth",r:174,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 73+ / IB 28+"},{c:"eng",l:"std",g:"ATAR 73+ / IB 28+"},
  {c:"bus",l:"std",g:"ATAR 70+ / IB 27+"},{c:"fin",l:"std",g:"ATAR 70+ / IB 27+"},
  {c:"nurs",l:"std",g:"ATAR 70+ / IB 27+"}
]},

{id:"wollongong",n:"伍伦贡大学",e:"University of Wollongong",c:"Wollongong",r:162,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:86,r:18,w:20,s:18,l:17}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 70+ / IB 28+"},{c:"eng",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"bus",l:"std",g:"ATAR 68+ / IB 27+"},{c:"edu",l:"std",g:"ATAR 65+ / IB 26+"},
  {c:"nurs",l:"std",g:"ATAR 68+ / IB 27+"}
]},

{id:"griffith",n:"格里菲斯大学",e:"Griffith University",c:"Brisbane/Gold Coast",r:235,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:19,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 70+ / IB 28+"},{c:"eng",l:"std",g:"ATAR 70+ / IB 28+"},
  {c:"bus",l:"std",g:"ATAR 68+ / IB 27+"},{c:"edu",l:"std",g:"ATAR 65+ / IB 26+"},
  {c:"env",l:"std",g:"ATAR 65+ / IB 26+",note:"Environmental Science"},
  {c:"nurs",l:"std",g:"ATAR 68+ / IB 27+"}
]},

{id:"swinburne",n:"斯威本科技大学",e:"Swinburne University",c:"Melbourne",r:280,cat:"other",
 ll:{std:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"ATAR 68+ / IB 27+"},{c:"eng",l:"std",g:"ATAR 68+ / IB 27+"},
  {c:"art",l:"std",g:"Portfolio",note:"Design & animation strong"},
  {c:"ds",l:"std",g:"ATAR 68+ / IB 27+"},{c:"bus",l:"std",g:"ATAR 65+ / IB 26+"}
]}
];

// ============ NEW ZEALAND ============
var NZ = [
{id:"auckland",n:"奥克兰大学",e:"University of Auckland",c:"Auckland",r:68,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:21,s:null,l:null}},
     high:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:105,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 38,000-48,000",currency:"NZD"},
 living:"NZD 18,000-22,000/yr",
 p:[
  {c:"cs",l:"std",g:"NCEA L3: 260pts / IB 33+ / A-Level ABB"},
  {c:"eng",l:"std",g:"NCEA L3: 260pts / IB 33+ / ABB",note:"BEng(Hons)"},
  {c:"math",l:"std",g:"NCEA L3: 250pts / IB 33+ / ABB"},
  {c:"bio",l:"std",g:"NCEA L3: 230pts / IB 31+ / ABB"},
  {c:"econ",l:"std",g:"NCEA L3: 230pts / IB 31+ / ABB"},
  {c:"bus",l:"std",g:"NCEA L3: 230pts / IB 31+ / ABB",note:"BCom"},
  {c:"law",l:"std",g:"NCEA L3: 290pts / IB 36+ / AAA",note:"LLB Part I then competitive entry"},
  {c:"med",l:"high",g:"NCEA L3: 300pts / IB 38+ / A*AA",note:"MBChB; UCAT required"},
  {c:"arch",l:"std",g:"NCEA L3: 230pts / IB 31+ / ABB",note:"BArch"},
  {c:"psych",l:"std",g:"NCEA L3: 230pts / IB 31+ / ABB"},
  {c:"edu",l:"std",g:"NCEA L3: 200pts / IB 28+ / BBB"},
  {c:"ds",l:"std",g:"NCEA L3: 250pts / IB 33+ / ABB"}
]},

{id:"otago",n:"奥塔哥大学",e:"University of Otago",c:"Dunedin",r:206,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:20,s:null,l:null}},
     high:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:105,r:24,w:27,s:24,l:24}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 30,000-40,000",currency:"NZD"},
 living:"NZD 15,000-18,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 31+ / A-Level ABB"},{c:"bio",l:"std",g:"IB 30+ / ABB"},
  {c:"chem",l:"std",g:"IB 30+ / ABB"},{c:"phys",l:"std",g:"IB 30+ / ABB"},
  {c:"med",l:"high",g:"IB 38+ / A*AA",note:"MBChB; Health Sciences First Year competitive entry"},
  {c:"dent",l:"high",g:"IB 38+ / A*AA",note:"BDS via HSFY"},
  {c:"pharm",l:"std",g:"IB 31+ / ABB",note:"BPharm"},
  {c:"law",l:"std",g:"IB 33+ / AAA",note:"LLB"},
  {c:"bus",l:"std",g:"IB 30+ / ABB",note:"BCom"},
  {c:"psych",l:"std",g:"IB 30+ / ABB"},
  {c:"edu",l:"std",g:"IB 28+ / BBB"}
]},

{id:"canterbury",n:"坎特伯雷大学",e:"University of Canterbury",c:"Christchurch",r:250,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:19,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 28,000-38,000",currency:"NZD"},
 living:"NZD 14,000-17,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 28+ / ABB"},{c:"eng",l:"std",g:"IB 28+ / ABB",note:"BEng(Hons)"},
  {c:"math",l:"std",g:"IB 28+ / ABB"},{c:"bio",l:"std",g:"IB 26+ / BBB"},
  {c:"law",l:"std",g:"IB 30+ / AAB"},{c:"bus",l:"std",g:"IB 26+ / BBB",note:"BCom"},
  {c:"psych",l:"std",g:"IB 26+ / BBB"},{c:"edu",l:"std",g:"IB 24+ / BCC"},
  {c:"env",l:"std",g:"IB 26+ / BBB",note:"Environmental Science"}
]},

{id:"victoria",n:"惠灵顿维多利亚大学",e:"Victoria University of Wellington",c:"Wellington",r:215,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 28,000-36,000",currency:"NZD"},
 living:"NZD 15,000-18,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 28+ / ABB"},{c:"eng",l:"std",g:"IB 28+ / ABB"},
  {c:"law",l:"std",g:"IB 30+ / AAB",note:"Top NZ law school"},
  {c:"ir",l:"std",g:"IB 28+ / ABB",note:"International Relations / Political Science"},
  {c:"pub",l:"std",g:"IB 28+ / ABB",note:"Public Policy BA"},
  {c:"bus",l:"std",g:"IB 26+ / BBB",note:"BCom"},
  {c:"arch",l:"std",g:"IB 26+ / BBB",note:"BArch"},
  {c:"art",l:"std",g:"IB 24+ / BCC+Portfolio"}
]},

{id:"waikato",n:"怀卡托大学",e:"University of Waikato",c:"Hamilton",r:340,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 26,000-33,000",currency:"NZD"},
 living:"NZD 13,000-16,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 26+ / BBB"},{c:"eng",l:"std",g:"IB 26+ / BBB",note:"BEng(Hons)"},
  {c:"bus",l:"std",g:"IB 24+ / BCC",note:"BMS; triple-accredited management school"},
  {c:"law",l:"std",g:"IB 28+ / ABB"},{c:"edu",l:"std",g:"IB 24+ / BCC"},
  {c:"env",l:"std",g:"IB 24+ / BCC",note:"Environmental Sciences / Earth Sciences"}
]},

{id:"massey",n:"梅西大学",e:"Massey University",c:"Palmerston North",r:310,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:80,r:null,w:19,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 26,000-33,000",currency:"NZD"},
 living:"NZD 13,000-16,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 24+ / BCC"},{c:"eng",l:"std",g:"IB 24+ / BCC",note:"BEngTech"},
  {c:"bus",l:"std",g:"IB 24+ / BCC",note:"BBus / BBS"},
  {c:"edu",l:"std",g:"IB 24+ / BCC"},{c:"vet",l:"std",g:"IB 31+ / ABB",note:"BVSc - only vet school in NZ"},
  {c:"art",l:"std",g:"IB 24+ / Portfolio",note:"Top NZ for creative arts"},
  {c:"env",l:"std",g:"IB 24+ / BCC",note:"Agriculture / Food Technology"}
]},

{id:"lincoln",n:"林肯大学",e:"Lincoln University",c:"Christchurch",r:370,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:60,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 26,000-32,000",currency:"NZD"},
 living:"NZD 12,000-15,000/yr",
 p:[
  {c:"bus",l:"std",g:"IB 24+ / BCC",note:"BCom"},
  {c:"env",l:"std",g:"IB 24+ / BCC",note:"Agriculture & environment focus; BSc(Env)"},
  {c:"bio",l:"std",g:"IB 24+ / BCC",note:"Viticulture & Oenology"},
  {c:"eng",l:"std",g:"IB 24+ / BCC",note:"Landscape Architecture"}
]},

{id:"aut",n:"奥克兰理工大学",e:"AUT",c:"Auckland",r:395,cat:"nz",
 ll:{std:{ielts:{t:6.0,r:5.5,w:5.5,s:5.5,l:5.5},toefl:{t:65,r:15,w:18,s:17,l:15}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"NZD 28,000-35,000",currency:"NZD"},
 living:"NZD 16,000-20,000/yr",
 p:[
  {c:"cs",l:"std",g:"IB 24+ / BCC"},{c:"eng",l:"std",g:"IB 24+ / BCC",note:"BEng(Hons)"},
  {c:"bus",l:"std",g:"IB 24+ / BCC",note:"BBus"},
  {c:"edu",l:"std",g:"IB 24+ / BCC"},{c:"art",l:"std",g:"IB 24+ / Portfolio"},
  {c:"nurs",l:"std",g:"IB 24+ / BCC",note:"BHSc Nursing; IELTS 6.5 for clinical"}
]}
];

// ============ SOUTHEAST ASIA ============
var SEA = [
// Singapore
{id:"nus",n:"新加坡国立大学",e:"NUS",c:"Singapore",r:8,cat:"sg",
 ll:{std:{ielts:{t:6.5,r:6.5,w:6.5,s:null,l:null},toefl:{t:92,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"SGD 37,550-75,000 (subsidised: ~17,550)",currency:"SGD"},
 p:[
  {c:"cs",l:"std",g:"IB 40+ / A*A*A / SAT 1500+",note:"NUS Computing BSc; extremely competitive"},
  {c:"eng",l:"std",g:"IB 38+ / A*AA",note:"Faculty of Engineering BEng"},
  {c:"math",l:"std",g:"IB 38+ / A*AA"},
  {c:"phys",l:"std",g:"IB 36+ / AAA"},
  {c:"bio",l:"std",g:"IB 36+ / AAA"},
  {c:"econ",l:"std",g:"IB 38+ / A*AA"},
  {c:"bus",l:"std",g:"IB 38+ / A*AA",note:"NUS Business School BBA"},
  {c:"law",l:"std",g:"IB 42+ / A*A*A",note:"NUS Law LLB"},
  {c:"med",l:"std",g:"IB 43+ / A*A*A",note:"Yong Loo Lin School MBBS"},
  {c:"arch",l:"std",g:"IB 34+ / AAA",note:"BArch; portfolio"},
  {c:"ds",l:"std",g:"IB 38+ / A*AA",note:"Data Science & Analytics"},
  {c:"psych",l:"std",g:"IB 36+ / AAA"}
]},

{id:"ntu",n:"南洋理工大学",e:"NTU",c:"Singapore",r:15,cat:"sg",
 ll:{std:{ielts:{t:6.0,r:null,w:6,s:6,l:null},toefl:{t:90,r:null,w:null,s:25,l:null}}},
 pol:{nt:"published",mb:false,v:"2y",note:"New TOEFL accepted"},
 fee:{ug:"SGD 37,550-75,000 (subsidised: ~17,550)",currency:"SGD"},
 p:[
  {c:"cs",l:"std",g:"IB 38+ / A*AA / SAT 1480+",note:"SCSE BSc"},
  {c:"ee",l:"std",g:"IB 36+ / AAA",note:"EEE BEng"},
  {c:"me",l:"std",g:"IB 36+ / AAA"},
  {c:"ds",l:"std",g:"IB 38+ / A*AA",note:"Data Science & AI"},
  {c:"ai",l:"std",g:"IB 38+ / A*AA",note:"BSc(AI)"},
  {c:"math",l:"std",g:"IB 36+ / AAA"},
  {c:"bio",l:"std",g:"IB 34+ / AAA",note:"Biological Sciences"},
  {c:"bus",l:"std",g:"IB 36+ / AAA",note:"NBS BBus"},
  {c:"media",l:"std",g:"IB 34+ / AAA",note:"WKWSCI Communication Studies"},
  {c:"edu",l:"std",g:"IB 34+ / AAA",note:"NIE BEd"},
  {c:"art",l:"std",g:"IB 30+ / Portfolio",note:"ADM School of Art Design & Media"}
]},

{id:"smu",n:"新加坡管理大学",e:"SMU",c:"Singapore",r:null,cat:"sg",
 ll:{std:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:93,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"SGD 39,200-45,000",currency:"SGD"},
 p:[
  {c:"bus",l:"std",g:"IB 36+ / AAA / SAT 1400+",note:"BSc Business Management"},
  {c:"acct",l:"std",g:"IB 34+ / AAA",note:"BAcc; highly regarded"},
  {c:"fin",l:"std",g:"IB 36+ / AAA",note:"BSc Finance / Quantitative Finance"},
  {c:"econ",l:"std",g:"IB 36+ / AAA",note:"BSc Economics"},
  {c:"cs",l:"std",g:"IB 36+ / A*AA",note:"BSc Information Systems / CS"},
  {c:"law",l:"std",g:"IB 40+ / A*A*A",note:"LLB"},
  {c:"ds",l:"std",g:"IB 36+ / AAA",note:"BSc Data Science & Analytics"}
]},

{id:"sutd",n:"新加坡科技设计大学",e:"SUTD",c:"Singapore",r:null,cat:"sg",
 ll:{std:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"eng",l:"std",g:"IB 36+ / AAA",note:"Design-focused; MIT collaboration"},
  {c:"arch",l:"std",g:"IB 34+ / AAA",note:"Architecture & Sustainable Design"},
  {c:"cs",l:"std",g:"IB 36+ / AAA",note:"Computer Science & Design"},
  {c:"ai",l:"std",g:"IB 36+ / AAA",note:"DAI pillar"}
]},

// Malaysia
{id:"um_my",n:"马来亚大学",e:"University of Malaya",c:"Kuala Lumpur",r:60,cat:"my",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 fee:{ug:"MYR 15,000-40,000/yr",currency:"MYR"},
 p:[
  {c:"cs",l:"std",g:"A-Level ABB / IB 30+",note:"Faculty of Computer Science & IT"},
  {c:"eng",l:"std",g:"A-Level ABB / IB 30+"},{c:"math",l:"std",g:"A-Level ABB / IB 30+"},
  {c:"bio",l:"std",g:"A-Level ABB / IB 30+"},{c:"econ",l:"std",g:"A-Level ABB / IB 30+"},
  {c:"bus",l:"std",g:"A-Level ABB / IB 30+",note:"BCom / BBA"},
  {c:"law",l:"std",g:"A-Level AAA / IB 33+"},
  {c:"med",l:"std",g:"A-Level AAA / IB 35+",note:"MBBS; IELTS 6.5 for medicine"},
  {c:"edu",l:"std",g:"A-Level ABB / IB 30+"}
]},

{id:"ukm",n:"马来西亚国民大学",e:"UKM",c:"Bangi",r:152,cat:"my",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"A-Level BBB / IB 28+"},{c:"eng",l:"std",g:"A-Level BBB / IB 28+"},
  {c:"bio",l:"std",g:"A-Level BBB / IB 28+"},{c:"med",l:"std",g:"A-Level AAA / IB 33+",note:"IELTS 6.5"},
  {c:"edu",l:"std",g:"A-Level BBB / IB 28+"},{c:"bus",l:"std",g:"A-Level BBB / IB 28+"}
]},

{id:"upm",n:"博特拉大学",e:"UPM",c:"Serdang",r:143,cat:"my",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"A-Level BBB / IB 28+"},{c:"eng",l:"std",g:"A-Level BBB / IB 28+"},
  {c:"bio",l:"std",g:"A-Level BBB / IB 28+",note:"Agriculture & Forestry strong"},
  {c:"env",l:"std",g:"A-Level BCC / IB 26+"},{c:"vet",l:"std",g:"A-Level ABB / IB 30+",note:"IELTS 6.5"},
  {c:"bus",l:"std",g:"A-Level BBB / IB 28+"}
]},

{id:"utm",n:"工艺大学",e:"UTM",c:"Johor Bahru",r:188,cat:"my",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"A-Level BBB / IB 28+"},{c:"eng",l:"std",g:"A-Level BBB / IB 28+"},
  {c:"arch",l:"std",g:"A-Level BBB / IB 28+"},{c:"ds",l:"std",g:"A-Level BBB / IB 28+"},
  {c:"bus",l:"std",g:"A-Level BCC / IB 26+"}
]},

{id:"taylors",n:"泰莱大学",e:"Taylor's University",c:"Subang Jaya",r:284,cat:"my",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"A-Level BCC / IB 26+"},{c:"bus",l:"std",g:"A-Level BCC / IB 26+"},
  {c:"media",l:"std",g:"A-Level BCC / IB 26+"},{c:"edu",l:"std",g:"A-Level BCC / IB 26+"},
  {c:"art",l:"std",g:"A-Level BCC / Portfolio"}
]},

// Thailand
{id:"chula",n:"朱拉隆功大学",e:"Chulalongkorn University",c:"Bangkok",r:211,cat:"th",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"GPA 3.0+ / SAT 1200+",note:"International programme"},
  {c:"eng",l:"std",g:"GPA 3.0+ / SAT 1200+"},{c:"econ",l:"std",g:"GPA 3.0+ / SAT 1200+"},
  {c:"bus",l:"std",g:"GPA 3.0+ / SAT 1200+",note:"BBA International"},
  {c:"med",l:"std",g:"GPA 3.5+ / SAT 1350+",note:"IELTS 7.0 for medicine"},
  {c:"arch",l:"std",g:"GPA 3.0+ / Portfolio"}
]},

{id:"mahidol",n:"玛希隆大学",e:"Mahidol University",c:"Bangkok",r:255,cat:"th",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"bio",l:"std",g:"GPA 3.0+",note:"BSc Biomedical Science"},
  {c:"med",l:"std",g:"GPA 3.5+ / BMAT",note:"Top medical school in Thailand; IELTS 6.5"},
  {c:"eng",l:"std",g:"GPA 3.0+"},{c:"nurs",l:"std",g:"GPA 2.8+",note:"BN International"},
  {c:"ph",l:"std",g:"GPA 3.0+",note:"Public Health / Biomedical"}
]},

// Singapore continued
{id:"jcu_sg",n:"詹姆斯库克新加坡",e:"James Cook University SG",c:"Singapore",r:null,cat:"sg",
 ll:{std:{ielts:{t:6.0,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"IB 24+ / A-Level CCC",note:"IT / Data Science"},
  {c:"bus",l:"std",g:"IB 24+ / CCC",note:"BBus"},
  {c:"psych",l:"std",g:"IB 24+ / CCC",note:"BA Psychology"},
  {c:"edu",l:"std",g:"IB 24+ / CCC",note:"BEd (Early Childhood)"},
  {c:"env",l:"std",g:"IB 24+ / CCC",note:"Aquaculture / Marine Biology"}
]},

// Indonesia
{id:"ui",n:"印度尼西亚大学",e:"Universitas Indonesia",c:"Depok",r:207,cat:"id",
 ll:{std:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"Strong senior secondary",note:"Faculty of CS; some English tracks"},
  {c:"eng",l:"std",g:"Strong senior secondary"},{c:"law",l:"std",g:"Strong senior secondary"},
  {c:"med",l:"std",g:"Top 5% senior secondary",note:"Faculty of Medicine"},
  {c:"econ",l:"std",g:"Strong senior secondary"},{c:"bus",l:"std",g:"Strong senior secondary"}
]},

{id:"itb",n:"万隆理工学院",e:"ITB",c:"Bandung",r:245,cat:"id",
 ll:{std:{ielts:{t:5.5,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"Strong senior secondary"},{c:"eng",l:"std",g:"Strong senior secondary"},
  {c:"arch",l:"std",g:"Strong senior secondary",note:"Top architecture in Indonesia"},
  {c:"ds",l:"std",g:"Strong senior secondary"},{c:"math",l:"std",g:"Strong senior secondary"}
]},

// Philippines
{id:"up",n:"菲律宾大学",e:"University of the Philippines",c:"Quezon City",r:330,cat:"ph",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:70,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"UPCAT top percentile",note:"English-medium; most competitive in PH"},
  {c:"eng",l:"std",g:"UPCAT top percentile"},{c:"law",l:"std",g:"UPCAT top percentile",note:"Pre-law; LLB post-grad"},
  {c:"med",l:"std",g:"UPCAT top percentile",note:"Pre-med; MD post-grad"},
  {c:"bus",l:"std",g:"UPCAT top percentile"},{c:"edu",l:"std",g:"UPCAT top percentile"}
]},

{id:"ateneo",n:"雅典耀大学",e:"Ateneo de Manila",c:"Quezon City",r:null,cat:"ph",
 ll:{std:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:70,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"cs",l:"std",g:"Strong senior secondary",note:"English-medium"},
  {c:"bus",l:"std",g:"Strong senior secondary"},{c:"law",l:"std",g:"Strong senior secondary",note:"Pre-law"},
  {c:"edu",l:"std",g:"Strong senior secondary"},{c:"psych",l:"std",g:"Strong senior secondary"}
]}
];

COMPASS_DATA.aus = AUS;
COMPASS_DATA.nz = NZ;
COMPASS_DATA.sea = SEA;
})();

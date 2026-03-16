// data-us.js - US Universities (50)
// Pushes into COMPASS_DATA.usa
(function(){
var D = [
// ============ IVY LEAGUE ============
{id:"harvard",n:"哈佛大学",e:"Harvard University",c:"Cambridge, MA",r:4,cat:"ivy",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.5,r:7,w:7,s:7,l:7},toefl:{t:109,r:25,w:25,s:25,l:25}},
     edu:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Test-optional"},
  {c:"cs_ms",l:"def",g:"3.5+",o:{toefl:{t:100}}},
  {c:"mba",l:"high",g:"3.5+",note:"HBS; avg GMAT 740"},
  {c:"law_jd",l:"def",g:"3.7+",o:{toefl:{t:100}},note:"HLS"},
  {c:"med",l:"def",g:"3.8+",note:"HMS"},
  {c:"edu_ms",l:"edu",g:"3.3+",note:"HGSE"},
  {c:"econ_phd",l:"def",g:"3.7+",o:{toefl:{t:100}}},
  {c:"ph_ms",l:"def",g:"3.5+",note:"HSPH"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"HKS"},
  {c:"bio_ms",l:"def",g:"3.5+",o:{toefl:{t:100}}}
]},

{id:"mit",n:"MIT",e:"Massachusetts Institute of Technology",c:"Cambridge, MA",r:1,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}},
     sloan:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Recommended 100+ iBT"},
  {c:"cs_ms",l:"high",g:"3.5+",note:"EECS dept; extremely competitive"},
  {c:"cs_phd",l:"high",g:"3.7+"},
  {c:"ee_ms",l:"high",g:"3.5+"},
  {c:"me_ms",l:"high",g:"3.5+"},
  {c:"ce_ms",l:"high",g:"3.3+",o:{ielts:{t:7.5}}},
  {c:"mba",l:"sloan",g:"3.5+",note:"Sloan MBA"},
  {c:"arch_ms",l:"def",g:"3.0+",o:{toefl:{t:100}},note:"Portfolio required"},
  {c:"econ_phd",l:"high",g:"3.7+"},
  {c:"math_ms",l:"high",g:"3.5+"},
  {c:"phys_ms",l:"high",g:"3.5+"},
  {c:"ds_ms",l:"high",g:"3.5+"},
  {c:"ling_ms",l:"def",g:"3.3+"}
]},

{id:"stanford",n:"斯坦福大学",e:"Stanford University",c:"Stanford, CA",r:2,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:89,r:null,w:null,s:null,l:null}},
     gsb:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}},
     edu:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:true,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Not required for UG"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"cs_phd",l:"def",g:"3.7+"},
  {c:"ee_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"gsb",g:"3.5+",note:"GSB; avg GMAT 738"},
  {c:"law_jd",l:"def",g:"3.7+",note:"Stanford Law"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"edu_ms",l:"edu",g:"3.3+"},
  {c:"econ_phd",l:"def",g:"3.7+"},
  {c:"ds_ms",l:"def",g:"3.5+"},
  {c:"pub_ms",l:"def",g:"3.5+"},
  {c:"env_ms",l:"def",g:"3.3+"}
]},

{id:"caltech",n:"加州理工",e:"California Institute of Technology",c:"Pasadena, CA",r:5,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"No official minimum; strongly recommended"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.5+"},
  {c:"phys_ms",l:"def",g:"3.5+"},
  {c:"chem_ms",l:"def",g:"3.5+"},
  {c:"math_ms",l:"def",g:"3.5+"},
  {c:"bio_ms",l:"def",g:"3.5+"},
  {c:"env_ms",l:"def",g:"3.3+"}
]},

{id:"princeton",n:"普林斯顿大学",e:"Princeton University",c:"Princeton, NJ",r:12,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Avg admitted ~108 iBT"},
  {c:"cs_ms",l:"def",g:"3.5+",o:{toefl:{s:28}},note:"Speaking 28+ for TA"},
  {c:"ee_ms",l:"def",g:"3.5+"},
  {c:"econ_phd",l:"def",g:"3.7+"},
  {c:"math_ms",l:"def",g:"3.7+"},
  {c:"phys_ms",l:"def",g:"3.7+"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"SPIA"},
  {c:"hist_ms",l:"def",g:"3.5+"}
]},

{id:"yale",n:"耶鲁大学",e:"Yale University",c:"New Haven, CT",r:9,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"No hard minimum; competitive 100+"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"def",g:"3.5+",note:"SOM"},
  {c:"law_jd",l:"def",g:"3.7+",note:"YLS; S<=25 requires summer English"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"econ_phd",l:"def",g:"3.7+"},
  {c:"ph_ms",l:"def",g:"3.5+"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"Jackson School"},
  {c:"art_ms",l:"def",g:"3.3+",note:"School of Art MFA"},
  {c:"ling_ms",l:"def",g:"3.5+"}
]},

{id:"columbia",n:"哥伦比亚大学",e:"Columbia University",c:"New York, NY",r:6,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:105,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"high",g:"3.5+",note:"CBS"},
  {c:"law_jd",l:"high",g:"3.7+"},
  {c:"med",l:"high",g:"3.8+"},
  {c:"ds_ms",l:"def",g:"3.5+"},
  {c:"ir_ms",l:"def",g:"3.5+",note:"SIPA"},
  {c:"pub_ms",l:"def",g:"3.5+"},
  {c:"media_ms",l:"def",g:"3.3+",note:"Journalism School"}
]},

{id:"upenn",n:"宾夕法尼亚大学",e:"University of Pennsylvania",c:"Philadelphia, PA",r:11,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"def",g:"3.5+",note:"Wharton MBA"},
  {c:"fin_ms",l:"def",g:"3.5+",note:"Wharton"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"edu_ms",l:"def",g:"3.3+",note:"GSE"},
  {c:"sw_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.5+"}
]},

{id:"cornell",n:"康奈尔大学",e:"Cornell University",c:"Ithaca, NY",r:13,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:20,w:20,s:22,l:15}},
     lower:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:88,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:true,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Johnson"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"eng_ms",l:"lower",g:"3.3+"},
  {c:"arch_ms",l:"def",g:"3.0+"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"vet",l:"def",g:"3.5+"}
]},

{id:"brown",n:"布朗大学",e:"Brown University",c:"Providence, RI",r:19,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",o:{toefl:{t:105}},note:"UG recommends 105"},
  {c:"cs_ms",l:"def",g:"3.5+",o:{toefl:{t:105}}},
  {c:"econ_phd",l:"def",g:"3.5+"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"bio_ms",l:"def",g:"3.5+"},
  {c:"math_ms",l:"def",g:"3.5+"}
]},

{id:"dartmouth",n:"达特茅斯学院",e:"Dartmouth College",c:"Hanover, NH",r:24,cat:"ivy",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"def",g:"3.5+",note:"Tuck MBA"},
  {c:"eng_ms",l:"def",g:"3.3+",note:"Thayer"},
  {c:"med",l:"def",g:"3.7+",note:"Geisel"},
  {c:"econ_phd",l:"def",g:"3.5+"}
]},

// ============ TOP PRIVATE ============
{id:"duke",n:"杜克大学",e:"Duke University",c:"Durham, NC",r:16,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"def",g:"3.5+",note:"Fuqua"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"Sanford"},
  {c:"env_ms",l:"def",g:"3.3+",note:"Nicholas"},
  {c:"ds_ms",l:"def",g:"3.5+"},
  {c:"bio_ms",l:"def",g:"3.5+"}
]},

{id:"jhu",n:"约翰霍普金斯大学",e:"Johns Hopkins University",c:"Baltimore, MD",r:15,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"mba",l:"def",g:"3.3+",note:"Carey"},
  {c:"ph_ms",l:"def",g:"3.5+",note:"Bloomberg SPH - top ranked"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"bio_ms",l:"def",g:"3.5+"},
  {c:"ir_ms",l:"def",g:"3.5+",note:"SAIS"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.5+"}
]},

{id:"northwestern",n:"西北大学",e:"Northwestern University",c:"Evanston, IL",r:17,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:90,r:null,w:null,s:null,l:null}},
     kellogg:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+",note:"McCormick PhD:90 MS:80"},
  {c:"mba",l:"kellogg",g:"3.5+",note:"Kellogg"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"med",l:"def",g:"3.8+",note:"Feinberg"},
  {c:"media_ms",l:"def",g:"3.3+",note:"Medill - journalism top"},
  {c:"ds_ms",l:"kellogg",g:"3.5+",note:"MSDS requires 100"},
  {c:"edu_ms",l:"def",g:"3.3+"}
]},

{id:"uchicago",n:"芝加哥大学",e:"University of Chicago",c:"Chicago, IL",r:10,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}},
     biosci:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:100,r:26,w:26,s:22,l:26}},
     human:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:104,r:26,w:26,s:26,l:26}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+",o:{toefl:{t:100}}},
  {c:"mba",l:"def",g:"3.5+",note:"Booth"},
  {c:"law_jd",l:"human",g:"3.7+"},
  {c:"econ_phd",l:"def",g:"3.7+"},
  {c:"bio_ms",l:"biosci",g:"3.5+"},
  {c:"stat_ms",l:"def",g:"3.5+"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"Harris"},
  {c:"hist_ms",l:"human",g:"3.5+"},
  {c:"ds_ms",l:"def",g:"3.5+"}
]},

{id:"rice",n:"莱斯大学",e:"Rice University",c:"Houston, TX",r:26,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Jones"},
  {c:"bio_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"arch_ms",l:"def",g:"3.0+"}
]},

{id:"vanderbilt",n:"范德堡大学",e:"Vanderbilt University",c:"Nashville, TN",r:35,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:89,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Owen"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"edu_ms",l:"def",g:"3.3+",note:"Peabody - top ranked"},
  {c:"eng_ms",l:"def",g:"3.3+"},
  {c:"nurs",l:"def",g:"3.3+"}
]},

{id:"washu",n:"华盛顿大学圣路易斯",e:"Washington University in St. Louis",c:"St. Louis, MO",r:28,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+",o:{toefl:{t:100}}},
  {c:"mba",l:"def",g:"3.3+",note:"Olin"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"med",l:"def",g:"3.8+"},
  {c:"sw_ms",l:"def",g:"3.3+",note:"Brown School - top ranked"},
  {c:"fin_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"}
]},

{id:"emory",n:"埃默里大学",e:"Emory University",c:"Atlanta, GA",r:40,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Goizueta"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"ph_ms",l:"def",g:"3.3+",note:"Rollins SPH"},
  {c:"nurs",l:"def",g:"3.3+"},
  {c:"bio_ms",l:"def",g:"3.3+"}
]},

{id:"georgetown",n:"乔治城大学",e:"Georgetown University",c:"Washington, DC",r:52,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:null,w:null,s:null,l:null}},
     high:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"McDonough"},
  {c:"law_jd",l:"high",g:"3.5+",note:"GULC - top law"},
  {c:"ir_ms",l:"def",g:"3.5+",note:"SFS - top IR program"},
  {c:"pub_ms",l:"def",g:"3.3+",note:"McCourt"},
  {c:"med",l:"def",g:"3.7+"},
  {c:"ling_ms",l:"def",g:"3.3+"}
]},

{id:"nyu",n:"纽约大学",e:"New York University",c:"New York, NY",r:38,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}},
     tandon:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"tandon",g:"3.3+",note:"Tandon Engineering"},
  {c:"mba",l:"def",g:"3.5+",note:"Stern"},
  {c:"fin_ms",l:"def",g:"3.5+",note:"Stern"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"med",l:"def",g:"3.8+",note:"Grossman"},
  {c:"media_ms",l:"def",g:"3.3+"},
  {c:"art_ms",l:"def",g:"3.0+",note:"Tisch"},
  {c:"sw_ms",l:"def",g:"3.3+",note:"Silver"},
  {c:"ds_ms",l:"def",g:"3.5+",note:"CDS"}
]},

{id:"usc",n:"南加州大学",e:"University of Southern California",c:"Los Angeles, CA",r:42,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:20,w:20,s:20,l:20}},
     higher:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:100,r:20,w:20,s:20,l:20}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Avg admitted 111+"},
  {c:"cs_ms",l:"def",g:"3.5+",note:"Viterbi"},
  {c:"ee_ms",l:"def",g:"3.3+",note:"Viterbi"},
  {c:"mba",l:"def",g:"3.3+",note:"Marshall"},
  {c:"law_jd",l:"def",g:"3.5+",note:"Gould"},
  {c:"media_ms",l:"def",g:"3.3+",note:"Annenberg - top media"},
  {c:"art_ms",l:"def",g:"3.0+",note:"SCA - film top"},
  {c:"sw_ms",l:"def",g:"3.3+"},
  {c:"arch_ms",l:"def",g:"3.0+"},
  {c:"ds_ms",l:"def",g:"3.5+"},
  {c:"ph_ms",l:"def",g:"3.3+"}
]},

{id:"cmu",n:"卡内基梅隆大学",e:"Carnegie Mellon University",c:"Pittsburgh, PA",r:24,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}},
     scs:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}},
     ece:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:86,r:22,w:22,s:20,l:22}},
     english:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:102,r:25,w:25,s:25,l:25}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"scs",g:"3.5+",note:"SCS; extremely competitive"},
  {c:"cs_phd",l:"scs",g:"3.7+"},
  {c:"ee_ms",l:"ece",g:"3.3+",note:"ECE dept specific sub-scores"},
  {c:"mba",l:"def",g:"3.3+",note:"Tepper"},
  {c:"ds_ms",l:"scs",g:"3.5+"},
  {c:"ai_ms",l:"scs",g:"3.5+"},
  {c:"art_ms",l:"def",g:"3.0+",note:"School of Design/Drama"},
  {c:"ling_ms",l:"english",g:"3.3+",note:"English dept: 25 per sub-test"},
  {c:"pub_ms",l:"def",g:"3.3+",note:"Heinz"}
]},

// ============ TOP PUBLIC ============
{id:"ucb",n:"加州大学伯克利",e:"UC Berkeley",c:"Berkeley, CA",r:8,cat:"public",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:90,r:null,w:null,s:null,l:null}},
     ug:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.5+",note:"Haas"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"pub_ms",l:"def",g:"3.5+",note:"Goldman"},
  {c:"ds_ms",l:"def",g:"3.5+"},
  {c:"env_ms",l:"def",g:"3.3+"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"arch_ms",l:"def",g:"3.0+"}
]},

{id:"ucla",n:"加州大学洛杉矶",e:"UCLA",c:"Los Angeles, CA",r:14,cat:"public",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:87,r:null,w:null,s:null,l:null}},
     ug:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Anderson"},
  {c:"law_jd",l:"def",g:"3.7+"},
  {c:"med",l:"def",g:"3.7+"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"art_ms",l:"def",g:"3.0+"},
  {c:"ds_ms",l:"def",g:"3.5+"}
]},

{id:"umich",n:"密歇根大学",e:"University of Michigan",c:"Ann Arbor, MI",r:18,cat:"public",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:100,r:null,w:null,s:null,l:null}},
     lower:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:84,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Ross"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"eng_ms",l:"lower",g:"3.3+"},
  {c:"pub_ms",l:"def",g:"3.3+",note:"Ford"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"}
]},

{id:"gatech",n:"佐治亚理工",e:"Georgia Institute of Technology",c:"Atlanta, GA",r:36,cat:"public",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}},
     cs:{ielts:{t:7.5,r:6.5,w:5.5,s:6.5,l:6.5},toefl:{t:100,r:19,w:19,s:19,l:19}},
     mse:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:19,w:19,s:26,l:19}}},
 pol:{nt:"partial",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"cs",g:"3.3+",note:"OMSCS online also available"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"me_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Scheller; new TOEFL 5.0 accepted"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"bio_ms",l:"def",g:"3.3+"},
  {c:"arch_ms",l:"def",g:"3.0+"},
  {c:"pub_ms",l:"def",g:"3.3+"}
]},

{id:"uiuc",n:"伊利诺伊大学香槟",e:"UIUC",c:"Champaign, IL",r:33,cat:"public",
 ll:{def:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:100,r:20,w:20,s:20,l:20}},
     lower:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"lower",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Gies"},
  {c:"chem_phd",l:"def",g:"3.3+",note:"Avg admitted 105"},
  {c:"ling_ms",l:"def",g:"3.3+",o:{toefl:{t:103}},note:"IELTS 7.5 for full qual"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"eng_ms",l:"def",g:"3.3+"}
]},

{id:"uva",n:"弗吉尼亚大学",e:"University of Virginia",c:"Charlottesville, VA",r:58,cat:"public",
 ll:{def:{ielts:{t:7.0,r:7,w:7,s:7,l:7},toefl:{t:90,r:23,w:22,s:22,l:23}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Darden"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"eng_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"med",l:"def",g:"3.7+"}
]},

{id:"unc",n:"北卡教堂山",e:"UNC Chapel Hill",c:"Chapel Hill, NC",r:45,cat:"public",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Recommends 100+"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Kenan-Flagler"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"ph_ms",l:"def",g:"3.3+",note:"Gillings - top ranked"},
  {c:"media_ms",l:"def",g:"3.3+",note:"Hussman"},
  {c:"edu_ms",l:"def",g:"3.3+"},
  {c:"sw_ms",l:"def",g:"3.3+"}
]},

{id:"wisc",n:"威斯康星麦迪逊",e:"UW-Madison",c:"Madison, WI",r:44,cat:"public",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:92,r:null,w:null,s:null,l:null}},
     ug:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.3+"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"bio_ms",l:"def",g:"3.3+"},
  {c:"ds_ms",l:"def",g:"3.3+"}
]},

{id:"utexas",n:"德克萨斯大学奥斯汀",e:"UT Austin",c:"Austin, TX",r:39,cat:"public",
 ll:{def:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+",o:{toefl:{t:90}}},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"McCombs"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"pub_ms",l:"def",g:"3.3+",note:"LBJ"}
]},

{id:"uw",n:"华盛顿大学西雅图",e:"UW Seattle",c:"Seattle, WA",r:21,cat:"public",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:null,l:null},toefl:{t:92,r:null,w:null,s:null,l:null}},
     ug:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:76,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"ug",g:"-"},
  {c:"cs_ms",l:"def",g:"3.5+",note:"Allen School; very competitive"},
  {c:"ee_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Foster"},
  {c:"ph_ms",l:"def",g:"3.3+"},
  {c:"med",l:"def",g:"3.7+"},
  {c:"ds_ms",l:"def",g:"3.3+"},
  {c:"env_ms",l:"def",g:"3.0+"}
]},

{id:"minn",n:"明尼苏达大学",e:"University of Minnesota",c:"Minneapolis, MN",r:60,cat:"public",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:21,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Carlson"},
  {c:"ph_ms",l:"def",g:"3.0+"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"psych_ms",l:"def",g:"3.0+"}
]},

{id:"purdue",n:"普渡大学",e:"Purdue University",c:"W. Lafayette, IN",r:50,cat:"public",
 ll:{def:{ielts:{t:6.5,r:6,w:6,s:6,l:6},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"ee_ms",l:"def",g:"3.0+"},
  {c:"me_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Krannert"},
  {c:"ds_ms",l:"def",g:"3.0+"},
  {c:"pharm",l:"def",g:"3.0+"}
]},

{id:"umd",n:"马里兰大学",e:"University of Maryland",c:"College Park, MD",r:55,cat:"public",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:96,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:true,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Smith"},
  {c:"pub_ms",l:"def",g:"3.3+"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"ds_ms",l:"def",g:"3.3+"}
]},

{id:"psu",n:"宾州州立",e:"Penn State",c:"State College, PA",r:68,cat:"public",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Smeal"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"ds_ms",l:"def",g:"3.0+"}
]},

{id:"osu",n:"俄亥俄州立",e:"Ohio State University",c:"Columbus, OH",r:65,cat:"public",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Fisher"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"ph_ms",l:"def",g:"3.0+"},
  {c:"sw_ms",l:"def",g:"3.0+"}
]},

{id:"ufl",n:"佛罗里达大学",e:"University of Florida",c:"Gainesville, FL",r:62,cat:"public",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Warrington/Hough"},
  {c:"law_jd",l:"def",g:"3.3+"},
  {c:"edu_ms",l:"def",g:"3.0+"},
  {c:"ph_ms",l:"def",g:"3.0+"}
]},

{id:"asu",n:"亚利桑那州立",e:"Arizona State University",c:"Tempe, AZ",r:78,cat:"public",
 ll:{def:{ielts:{t:6.0,r:null,w:null,s:null,l:null},toefl:{t:61,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-",note:"Lowest threshold among top publics"},
  {c:"cs_ms",l:"def",g:"3.0+",o:{toefl:{t:80}}},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"W.P. Carey"},
  {c:"edu_ms",l:"def",g:"3.0+",note:"Mary Lou Fulton"},
  {c:"ds_ms",l:"def",g:"3.0+"},
  {c:"pub_ms",l:"def",g:"3.0+"}
]},

// ============ MORE PRIVATE ============
{id:"notre_dame",n:"圣母大学",e:"University of Notre Dame",c:"Notre Dame, IN",r:47,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6,w:6,s:6,l:6},toefl:{t:80,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"mba",l:"def",g:"3.3+",note:"Mendoza"},
  {c:"law_jd",l:"def",g:"3.5+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"econ_ms",l:"def",g:"3.3+"},
  {c:"psych_ms",l:"def",g:"3.3+"}
]},

{id:"tufts",n:"塔夫茨大学",e:"Tufts University",c:"Medford, MA",r:56,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.3+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"ir_ms",l:"def",g:"3.3+",note:"Fletcher - top IR"},
  {c:"med",l:"def",g:"3.7+"},
  {c:"vet",l:"def",g:"3.3+",note:"Cummings"}
]},

{id:"bu",n:"波士顿大学",e:"Boston University",c:"Boston, MA",r:61,cat:"private",
 ll:{def:{ielts:{t:7.0,r:6.5,w:6.5,s:6.5,l:6.5},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"Questrom"},
  {c:"law_jd",l:"def",g:"3.3+"},
  {c:"media_ms",l:"def",g:"3.0+",note:"COM"},
  {c:"ph_ms",l:"def",g:"3.0+",note:"SPH"},
  {c:"edu_ms",l:"def",g:"3.0+",note:"Wheelock"}
]},

{id:"northeastern",n:"东北大学",e:"Northeastern University",c:"Boston, MA",r:59,cat:"private",
 ll:{def:{ielts:{t:6.5,r:null,w:null,s:null,l:null},toefl:{t:79,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"cs_ms",l:"def",g:"3.0+",note:"Khoury; co-op program"},
  {c:"eng_ms",l:"def",g:"3.0+"},
  {c:"mba",l:"def",g:"3.0+",note:"D'Amore-McKim"},
  {c:"ds_ms",l:"def",g:"3.0+"},
  {c:"ai_ms",l:"def",g:"3.0+"},
  {c:"ph_ms",l:"def",g:"3.0+"},
  {c:"media_ms",l:"def",g:"3.0+"}
]},

{id:"wake_forest",n:"维克森林大学",e:"Wake Forest University",c:"Winston-Salem, NC",r:65,cat:"private",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:90,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[
  {c:"ug",l:"def",g:"-"},
  {c:"mba",l:"def",g:"3.0+"},
  {c:"law_jd",l:"def",g:"3.3+"},
  {c:"bus_ms",l:"def",g:"3.0+"},
  {c:"bio_ms",l:"def",g:"3.0+"},
  {c:"med",l:"def",g:"3.5+"}
]},

// ============ LAC ============
{id:"williams",n:"威廉姆斯学院",e:"Williams College",c:"Williamstown, MA",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Optional; expects high level"}]},

{id:"amherst",n:"阿默斯特学院",e:"Amherst College",c:"Amherst, MA",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Need-blind for intl"}]},

{id:"swarthmore",n:"斯沃斯莫尔学院",e:"Swarthmore College",c:"Swarthmore, PA",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Not required; encouraged"}]},

{id:"wellesley",n:"韦尔斯利学院",e:"Wellesley College",c:"Wellesley, MA",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Women's college"}]},

{id:"pomona",n:"波莫纳学院",e:"Pomona College",c:"Claremont, CA",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-"}]},

{id:"bowdoin",n:"鲍登学院",e:"Bowdoin College",c:"Brunswick, ME",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Test-optional since 1969"}]},

{id:"middlebury",n:"明德学院",e:"Middlebury College",c:"Middlebury, VT",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.5,r:null,w:null,s:null,l:null},toefl:{t:109,r:null,w:null,s:null,l:null}}},
 pol:{nt:"pending",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-",note:"Famous for language programs; avg 109"}]},

{id:"hamilton",n:"汉密尔顿学院",e:"Hamilton College",c:"Clinton, NY",r:null,cat:"lac",
 ll:{def:{ielts:{t:7.0,r:null,w:null,s:null,l:null},toefl:{t:100,r:null,w:null,s:null,l:null}}},
 pol:{nt:"yes",mb:false,v:"2y"},
 p:[{c:"ug",l:"def",g:"-"}]}
];
COMPASS_DATA.usa = D;
})();

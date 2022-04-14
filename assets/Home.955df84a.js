var R=Object.defineProperty,V=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(o,t,l)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,m=(o,t)=>{for(var l in t||(t={}))I.call(t,l)&&j(o,l,t[l]);if(g)for(var l of g(t))P.call(t,l)&&j(o,l,t[l]);return o},v=(o,t)=>V(o,T(t));import{T as A}from"./Timer.df621dae.js";import{_ as B,r as E}from"./index.83936c7c.js";import{r as S,o as r,b as i,a as s,z as f,A as b,B as x,C as w,D as H,G as U,d as D,H as c,I as _,w as C,c as N,J as k,K as F}from"./vendor.7bb76c09.js";const L={data(){return{routine:[],allchapters:[],upcomings:[],papers:new Set,subjects:new Set,instructors:new Set,chapters:new Set,paper:"all",chapter:"all",subject:"all",instructor:"all",exam:!1}},methods:{async getRoutine(){let t=await(await fetch(E)).json();this.routine=t.routines.map((n,h)=>v(m({},n),{class_sl:`Day ${h+1}`,paper:n.paper==1?"1st Paper":"2nd Paper"})),this.allchapters=this.routine,this.setFilterCriterias();let p=t.routines.sort((n,h)=>n.id-h.id).filter(n=>new Date(n.date).getTime()>=Date.now()),a=new Date(p[0].date);a.setDate(a.getDate()+1),this.upcomings=[v(m({},p[0]),{end:a})];for(let n=1;n<6;n++)p[n]&&p[0].date==p[n].date&&this.upcomings.push(v(m({},p[n]),{end:a}));this.upcomings=this.upcomings.sort((n,h)=>n.id-h.id)},setFilterCriterias(){this.routine.forEach(o=>{o.paper&&this.papers.add(o.paper),o.subject&&this.subjects.add(o.subject),o.chapter&&this.chapters.add(o.chapter),o.instructor&&this.instructors.add(o.instructor)})},filterRoutine(o){let t=this.allchapters;this.subject!="all"&&(t=t.filter(l=>l.subject==this.subject)),o=="sub"&&(this.papers=new Set,this.chapters=new Set,this.instructors=new Set,t.forEach(l=>{l.paper&&this.papers.add(l.paper),l.chapter&&this.chapters.add(l.chapter),l.instructor&&this.instructors.add(l.instructor)}),this.paper="all",this.chapter="all",this.instructor="all"),this.paper!="all"&&(t=t.filter(l=>l.paper==this.paper)),o=="paper"&&(this.chapters=new Set,this.instructors=new Set,t.forEach(l=>{l.chapter&&this.chapters.add(l.chapter),l.instructor&&this.instructors.add(l.instructor)}),this.chapter="all",this.instructor="all"),this.chapter!="all"&&(t=t.filter(l=>l.chapter==this.chapter)),o=="chapter"&&(this.instructors=new Set,t.forEach(l=>{l.instructor&&this.instructors.add(l.instructor)}),this.instructor="all"),this.instructor!="all"&&(t=t.filter(l=>l.instructor==this.instructor)),this.routine=t,this.routine.length==0&&(this.routine=this.allchapters)}},created(){this.getRoutine()},components:{Timer:A}},d=o=>(H("data-v-1b02256b"),o=o(),U(),o),z={key:0,class:"container px-2 py-10 mx-auto"},q={class:"flex flex-wrap items-center justify-center gap-3"},G={key:0,class:"max-w-lg p-4 mx-auto my-3 space-y-4 text-xl font-semibold text-center border border-dashed rounded bg-gray-50 bangla"},J={key:0,class:"text-2xl font-semibold text-red-500"},K={key:1,class:"text-2xl font-semibold text-red-500 ongoing"},M={class:"max-w-md mx-auto"},Y={key:2,class:"w-full text-2xl font-semibold text-center border border-gray-400 border-dashed"},O={class:"flex items-center justify-center gap-3"},Q={key:0,class:"px-3 py-2 text-sm text-white bg-blue-500 rounded-full shadow"},W={key:1,class:"px-3 py-2 text-sm text-white bg-blue-500 rounded-full shadow"},X=F("View Details"),Z={class:"flex flex-wrap items-center justify-center gap-3 my-5"},$={class:"w-full max-w-sm form-control"},ee=d(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Subject")],-1)),te=d(()=>s("option",{disabled:"",selected:"",value:""},"Select Paper",-1)),se=d(()=>s("option",{value:"all"},"All",-1)),le=["value"],oe={class:"w-full max-w-sm form-control"},re=d(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Paper")],-1)),ie=d(()=>s("option",{disabled:"",selected:"",value:""},"Select Paper",-1)),ae=d(()=>s("option",{value:"all"},"All",-1)),ne=["value"],ce={class:"w-full max-w-sm form-control"},de=d(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Chapter")],-1)),ue=d(()=>s("option",{disabled:"",selected:"",value:""},"Select Chapter",-1)),pe=d(()=>s("option",{value:"all"},"All",-1)),he=["value"],_e={class:"w-full max-w-sm form-control"},fe=d(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Instructor")],-1)),be=d(()=>s("option",{disabled:"",selected:"",value:""},"Select Instructor",-1)),me=d(()=>s("option",{value:"all"},"All",-1)),ve=["value"],xe={class:"grid items-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},we={key:0,class:"overflow-hidden rounded aspect-video"},ye=["src"],ge={key:1,class:"flex items-center justify-center w-full h-full text-2xl text-white rounded aspect-video bg-gradient-to-r from-gray-700 via-gray-900 to-black bangla"},je={key:2,class:"flex justify-between"},Se={class:"p-5 font-semibold bangla"},De={class:"flex flex-col items-center justify-center gap-3 px-3"},Ce={key:0,class:"inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded-full shadow min-w-[130px] text-center"},ke={key:1,class:"inline-block px-3 py-1 text-sm text-white bg-blue-500 rounded-full shadow min-w-[130px] text-center"},Re={key:1,class:"py-20 text-center"},Ve=d(()=>s("button",{class:"btn btn-circle loading"},null,-1)),Te=[Ve];function Ie(o,t,l,p,a,n){const h=S("Timer"),y=S("router-link");return a.routine.length>0?(r(),i("div",z,[s("div",q,[(r(!0),i(f,null,b(a.upcomings,(e,u)=>(r(),i("div",{key:u},[e?(r(),i("div",G,[new Date(e.date).getTime()>Date.now()+864e3?(r(),i("h3",J," Upcoming Challenge...")):(r(),i("h3",K,"Remaining time...")),s("div",M,[D(h,{end:new Date(e.end).getTime()+86400},null,8,["end"])]),s("p",null,c(e.subject)+" "+c(e.paper==1?"1st":"2nd")+" Paper | "+c(e.chapter),1),s("h1",null,c(e.video_description),1),s("h3",null,c(new Date(e.date).toDateString()),1),e.examtitle?(r(),i("div",Y,"You have an exam today ")):_("",!0),s("div",O,[e.video?(r(),i("span",Q,"Recorded Class")):_("",!0),e.lecture_sheet?(r(),i("span",W,"Lecture Sheet")):_("",!0)]),D(y,{to:`/details/${e.id}`,class:"btn btn-primary"},{default:C(()=>[X]),_:2},1032,["to"])])):_("",!0)]))),128))]),s("div",Z,[s("div",$,[ee,x(s("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.subject=e),onChange:t[1]||(t[1]=e=>n.filterRoutine("sub")),class:"select select-bordered"},[te,se,(r(!0),i(f,null,b(a.subjects,(e,u)=>(r(),i("option",{key:u,value:e},c(e),9,le))),128))],544),[[w,a.subject]])]),s("div",oe,[re,x(s("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.paper=e),onChange:t[3]||(t[3]=e=>n.filterRoutine("paper")),class:"select select-bordered"},[ie,ae,(r(!0),i(f,null,b(a.papers,(e,u)=>(r(),i("option",{key:u,value:e},c(e),9,ne))),128))],544),[[w,a.paper]])]),s("div",ce,[de,x(s("select",{class:"select select-bordered","onUpdate:modelValue":t[4]||(t[4]=e=>a.chapter=e),onChange:t[5]||(t[5]=e=>n.filterRoutine("chapter"))},[ue,pe,(r(!0),i(f,null,b(a.chapters,(e,u)=>(r(),i("option",{key:u,value:e},c(e),9,he))),128))],544),[[w,a.chapter]])]),s("div",_e,[fe,x(s("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>a.instructor=e),onChange:t[7]||(t[7]=e=>n.filterRoutine("instructor")),class:"select select-bordered"},[be,me,(r(!0),i(f,null,b(a.instructors,(e,u)=>(r(),i("option",{key:u,value:e},c(e),9,ve))),128))],544),[[w,a.instructor]])])]),s("div",xe,[(r(!0),i(f,null,b(a.routine,(e,u)=>(r(),N(y,{tag:"div",key:u,to:`/details/${u+1}`,class:k({"pointer-events-none":!e.video})},{default:C(()=>[s("div",{class:k(["relative transition-all duration-200 border border-gray-200 border-dashed rounded shadow hover:border-2 hover:border-blue-400",{"pointer-events-none":!e.video}])},[e.video?(r(),i("div",we,[s("img",{src:`https://img.youtube.com/vi/${e.video}/hqdefault.jpg`,class:"w-full mx-auto -my-8"},null,8,ye)])):(r(),i("div",ge," Holiday")),e.subject!="Holiday"?(r(),i("div",je,[s("div",Se,[s("p",null,c(e.subject)+" "+c(e.paper)+" | "+c(e.chapter),1),s("h1",null,c(e.video_description),1),s("p",null,c(new Date(e.date).toDateString()),1)]),s("div",De,[e.video?(r(),i("span",Ce,"Recorded Class")):_("",!0),e.lecture_sheet?(r(),i("span",ke,"Lecture Sheet")):_("",!0)])])):_("",!0)],2)]),_:2},1032,["to","class"]))),128))])])):(r(),i("div",Re,Te))}var He=B(L,[["render",Ie],["__scopeId","data-v-1b02256b"]]);export{He as default};

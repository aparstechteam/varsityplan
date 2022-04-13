import{r as m,o as y,c as $,w as b,a as E,b as w,d as p,e as S,f as O,F as k,g as x,E as A,h as i,i as h,m as I,j as L,k as P,l as R,n as q,p as F,q as N,s as _,t as H,u as j,v as B,x as D,y as M,V as C}from"./vendor.7bb76c09.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};K();var T=(t,e)=>{const s=t.__vccOpts||t;for(const[o,r]of e)s[o]=r;return s};const W={},J=E("img",{src:"https://drive.google.com/uc?id=1WdFr2wlwpasze5MbdsS06TEFxf6myvMW",class:"object-cover h-16 mx-auto mt-2",alt:""},null,-1),Q=E("h2",{class:"my-2 font-semibold text-center"},"Revision Plan",-1);function U(t,e,s,o,r,a){const n=m("router-link");return y(),$(n,{to:"/",tag:"div"},{default:b(()=>[J,Q]),_:1})}var X=T(W,[["render",U]]);const Z={setup(){return{}},methods:{},created(){let t=localStorage.getItem("rb85");t!=null&&(t=JSON.parse(t),this.$store.commit("SET_USER",t))},components:{Header:X}};function z(t,e,s,o,r,a){const n=m("Header"),c=m("router-view");return y(),w("div",null,[p(n),p(c)])}var Y=T(Z,[["render",z]]);const G="modulepreload",g={},ee="/varsityplan/",u=function(e,s){return!s||s.length===0?e():Promise.all(s.map(o=>{if(o=`${ee}${o}`,o in g)return;g[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":G,r||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),r)return new Promise((c,d)=>{n.addEventListener("load",c),n.addEventListener("error",d)})})).then(()=>e())},te=[{path:"/",name:"Home",component:()=>u(()=>import("./Home.9a5fc39f.js"),["assets/Home.9a5fc39f.js","assets/Home.52e4410d.css","assets/Timer.c3ad510f.js","assets/vendor.7bb76c09.js"]),meta:{requiresAuth:!0}},{path:"/details/:id",name:"Details",component:()=>u(()=>import("./DetailsPage.e209a4c4.js"),["assets/DetailsPage.e209a4c4.js","assets/Timer.c3ad510f.js","assets/vendor.7bb76c09.js"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>u(()=>import("./Auth.2d8b9eba.js"),["assets/Auth.2d8b9eba.js","assets/vendor.7bb76c09.js"])},{path:"/restricted",name:"restricted",component:()=>u(()=>import("./accessrestricted.9e3cdcdc.js"),["assets/accessrestricted.9e3cdcdc.js","assets/vendor.7bb76c09.js"])}],V=S({history:O("/varsityplan"),routes:te});V.beforeEach((t,e,s)=>{if(!t.matched.some(o=>o.meta.requiresAuth)){s();return}if(localStorage.getItem("vr21")){s();return}s({name:"restricted"})});var re={install(t){t.component("VeeForm",k),t.component("VeeField",x),t.component("ErrorMessage",A),i("required",h),i("tos",h),i("min",I),i("max",L),i("alpha_spaces",P),i("email",R),i("min_value",q),i("max_value",F),i("password_mismatch",N),i("excluded",_),i("country_excluded",_),H({generateMessage:e=>{const s={required:`The field ${e.field} is required.`,min:`The field ${e.field} is too short.`,max:`The field ${e.field} is too long.`,alpha_spaces:`The field ${e.field} may only contain alphabetic characters and spaces.`,email:`The field ${e.field} must contain a valid email address.`,min_value:`The field ${e.field} is too low.`,max_value:`The field ${e.field} is too high.`,excluded:`You are not allowed to use this value for this field ${e.field}`,password_mismatch:"The password don't match.",country_excluded:"Due to restrictions, we do not accept from this country",tos:"You must accept the Terms of Service"};return s[e.rule.name]?s[e.rule.name]:`The field ${e.field} is invalid`},validateOnBlur:!0,vlidateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}};const v="https://script.google.com/macros/s/AKfycbzp6tlaRsIcQLWycrXfeo-5FmJfbJjsXkIgvgB6yb4kNHbnAVlx03iAHF5ftjlyQbbXXA/exec",ae="https://script.google.com/macros/s/AKfycbx8QP1xA3KjxqoeTPGMHS5E-0nZMn6cdj0BhET6IB_CN7H3eFIv7NkkZPIDkKPZwDvRtQ/exec?type=Combined";var oe=j({state:{user:null,userLoggedIn:!1},mutations:{toggleAuth(t){t.userLoggedIn=!t.userLoggedIn},SET_USER(t,e){t.user=e}},actions:{setOptions({commit:t},e){t("SET_OPTIONS",e.options)},async register({dispatch:t},e){(await(await fetch(v,{method:"POST",body:e.body})).json()).status==200&&(delete e.body,t("login",e))},async login({commit:t},e){const o=await(await fetch(v+"?phone="+e.phone)).json();if(o.user){let[r,a,n,c,d]=o.user,f={phone:r,roll:a,name:n,email:c,college:d};localStorage.setItem("rb85",JSON.stringify(f)),t("SET_USER",f),t("toggleAuth"),e.router.push("/")}else e.router.push("/register?phone="+e.phone)}},getters:{getTheme:t=>t.theme},modules:{}});window.katex=B;let l=D(Y);l.use(V);l.use(re);l.use(M,{plyr:{}});l.use(C);l.use(oe);l.mount("#app");export{T as _,ae as r};

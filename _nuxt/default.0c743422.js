import{_ as y}from"./SvgIcon.vue.b7d2c8cb.js";import{a as b,l as w,o as u,b as m,e,w as $,v as S,u as _,m as V,q as r,p as j,j as I,k as g,s as B,r as v,t as C,x as M,y as h,i as n,z as f,A as U}from"./entry.eb475e30.js";const H=s=>(j("data-v-15fbc516"),s=s(),I(),s),z={class:"flex items-center justify-center w-full"},E={for:"switch",class:"flex items-center cursor-pointer"},L={class:"relative"},D=["value"],N=H(()=>e("div",{class:"block bg-gray-600 w-12 h-7 rounded-full"},null,-1)),q={class:"dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"},A={class:"ml-3 text-gray-700 font-medium"},G=b({__name:"Switch",props:{modelValue:{type:Boolean},value:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:l}){const t=s,a=w({get(){return t.modelValue},set(o){l("update:modelValue",o)}});return(o,d)=>(u(),m("div",z,[e("label",E,[e("div",L,[$(e("input",{type:"checkbox",id:"switch",class:"sr-only","onUpdate:modelValue":d[0]||(d[0]=c=>V(a)?a.value=c:null),value:s.value},null,8,D),[[S,_(a)]]),N,e("div",q,[_(a)?r(o.$slots,"active",{key:0},void 0,!0):r(o.$slots,"inactive",{key:1},void 0,!0)])]),e("div",A,[r(o.$slots,"default",{},void 0,!0)])])]))}});const P=g(G,[["__scopeId","data-v-15fbc516"]]),R=()=>B("color-mode").value,Y=e("div",{class:"flex items-center"},[e("span",{class:"logo font-black text-xl"},"jbanas.dev")],-1),F={class:"font-montserrat flex items-center"},J={class:"mx-3"},K={class:"github",href:"https://github.com/jban-as",target:"_blank"},O={class:"mx-3"},Q={class:"linkedin",href:"https://linkedin.com/in/joven-ban-as",target:"_blank"},T={class:"mx-3"},W={class:"instagram",href:"https://instagram.com/iamjovenb",target:"_blank"},X={class:"font-montserrat block"},Z=b({__name:"Header",setup(s){const l=R(),t=v(!1),a=v(0),o=()=>{a.value=window.scrollY},d=w(()=>a.value>0?`${t.value?"bg-slate-900 shadow-gray-800":"bg-white"} shadow-lg`:"");return C(()=>{t.value=l.value==="dark",window.addEventListener("scroll",o)}),M(()=>{window.removeEventListener("scroll",o)}),h(t,c=>{l.preference=c?"dark":"light"}),h(l,c=>{t.value=c.preference==="dark"}),(c,p)=>{const i=y,x=P;return u(),m("nav",{class:U(`fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10 ${_(d)}`)},[Y,e("ul",F,[e("li",J,[e("a",K,[n(i,{name:"github",title:"GitHub"})])]),e("li",O,[e("a",Q,[n(i,{name:"linkedin",title:"LinkedIn"})])]),e("li",T,[e("a",W,[n(i,{name:"instagram",title:"Instagram"})])])]),e("div",X,[n(x,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=k=>t.value=k)},{active:f(()=>[n(i,{name:"moon",class:"w-5 h-5"})]),inactive:f(()=>[n(i,{name:"sun",class:"w-5 h-5 text-yellow-500"})]),_:1},8,["modelValue"])])],2)}}});const ee={},te={class:"app-container"};function se(s,l){const t=Z;return u(),m("div",te,[n(t),r(s.$slots,"default")])}const ne=g(ee,[["render",se]]);export{ne as default};

import{_ as y}from"./SvgIcon.vue.9276b9ee.js";import{m as b,q as w,o as u,f as m,h as e,w as $,v as S,u as _,s as V,t as r,p as I,l as B,a as g,x as j,b as v,y as C,z as H,A as h,k as n,B as f,C as M}from"./entry.e7dc11b8.js";const U=s=>(I("data-v-d29a0d07"),s=s(),B(),s),L={class:"flex items-center justify-center w-full"},z={for:"switch",class:"flex items-center cursor-pointer"},E={class:"relative"},D=["value"],G=U(()=>e("div",{class:"block bg-gray-600 w-12 h-7 rounded-full"},null,-1)),N={class:"dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"},q={class:"ml-3 text-gray-700 font-medium"},A=b({__name:"Switch",props:{modelValue:{type:Boolean},value:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:l}){const t=s,o=w({get(){return t.modelValue},set(a){l("update:modelValue",a)}});return(a,d)=>(u(),m("div",L,[e("label",z,[e("div",E,[$(e("input",{type:"checkbox",id:"switch",class:"sr-only","onUpdate:modelValue":d[0]||(d[0]=c=>V(o)?o.value=c:null),value:s.value,"aria-label":"Switch"},null,8,D),[[S,_(o)]]),G,e("div",N,[_(o)?r(a.$slots,"active",{key:0},void 0,!0):r(a.$slots,"inactive",{key:1},void 0,!0)])]),e("div",q,[r(a.$slots,"default",{},void 0,!0)])])]))}});const P=g(A,[["__scopeId","data-v-d29a0d07"]]),R=()=>j("color-mode").value,Y=e("div",{class:"flex items-center"},[e("span",{class:"logo font-black text-xl font-montserrat-black"},"jbanas.dev")],-1),F={class:"font-montserrat flex items-center"},J={class:"mx-3"},K={class:"github",href:"https://github.com/jban-as",target:"_blank","aria-label":"GitHub"},O={class:"mx-3"},Q={class:"linkedin",href:"https://linkedin.com/in/joven-ban-as",target:"_blank","aria-label":"LinkedIn"},T={class:"mx-3"},W={class:"instagram",href:"https://instagram.com/iamjovenb",target:"_blank","aria-label":"Instagram"},X={class:"font-montserrat block"},Z=b({__name:"Header",setup(s){const l=R(),t=v(!1),o=v(0),a=()=>{o.value=window.scrollY},d=w(()=>o.value>0?`${t.value?"bg-slate-900 shadow-gray-800":"bg-white"} shadow-lg`:"");return C(()=>{t.value=l.value==="dark",window.addEventListener("scroll",a)}),H(()=>{window.removeEventListener("scroll",a)}),h(t,c=>{l.preference=c?"dark":"light"}),h(l,c=>{t.value=c.preference==="dark"}),(c,p)=>{const i=y,x=P;return u(),m("nav",{class:M(`fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10 ${_(d)}`)},[Y,e("ul",F,[e("li",J,[e("a",K,[n(i,{name:"github",title:"GitHub"})])]),e("li",O,[e("a",Q,[n(i,{name:"linkedin",title:"LinkedIn"})])]),e("li",T,[e("a",W,[n(i,{name:"instagram",title:"Instagram"})])])]),e("div",X,[n(x,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=k=>t.value=k)},{active:f(()=>[n(i,{name:"moon",class:"w-5 h-5"})]),inactive:f(()=>[n(i,{name:"sun",class:"w-5 h-5 text-yellow-500"})]),_:1},8,["modelValue"])])],2)}}});const ee={},te={class:"app-container"};function se(s,l){const t=Z;return u(),m("div",te,[n(t),r(s.$slots,"default")])}const ne=g(ee,[["render",se]]);export{ne as default};

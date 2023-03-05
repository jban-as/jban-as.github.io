import{_ as g}from"./SvgIcon.vue.4677d361.js";import{h as f,i as b,o as r,b as _,e,w as x,v as w,u,j as k,r as i,p as y,k as $,a as h,l as V,m as S,q as j,s as m,f as l,t as p}from"./entry.99326ccd.js";const I=t=>(y("data-v-15fbc516"),t=t(),$(),t),B={class:"flex items-center justify-center w-full"},M={for:"switch",class:"flex items-center cursor-pointer"},C={class:"relative"},U=["value"],H=I(()=>e("div",{class:"block bg-gray-600 w-12 h-7 rounded-full"},null,-1)),D={class:"dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"},N={class:"ml-3 text-gray-700 font-medium"},q=f({__name:"Switch",props:{modelValue:{type:Boolean},value:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:c}){const s=t,o=b({get(){return s.modelValue},set(n){c("update:modelValue",n)}});return(n,a)=>(r(),_("div",B,[e("label",M,[e("div",C,[x(e("input",{type:"checkbox",id:"switch",class:"sr-only","onUpdate:modelValue":a[0]||(a[0]=d=>k(o)?o.value=d:null),value:t.value},null,8,U),[[w,u(o)]]),H,e("div",D,[u(o)?i(n.$slots,"active",{key:0},void 0,!0):i(n.$slots,"inactive",{key:1},void 0,!0)])]),e("div",N,[i(n.$slots,"default",{},void 0,!0)])])]))}});const z=h(q,[["__scopeId","data-v-15fbc516"]]),E=()=>V("color-mode").value,G={class:"fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10"},L=e("div",{class:"flex items-center"},[e("span",{class:"logo font-black text-xl"},"iamjovenb.")],-1),R={class:"font-montserrat flex items-center"},A={class:"mx-3"},F={class:"growing-underline",href:"https://github.com/jban-as",target:"_blank"},J={class:"mx-3"},K={class:"growing-underline",href:"https://linkedin.com/in/joven-ban-as",target:"_blank"},O={class:"mx-3"},P={class:"growing-underline",href:"https://instagram.com/iamjovenb",target:"_blank"},Q={class:"font-montserrat block"},T=f({__name:"Header",setup(t){const c=E(),s=S(!1);return j(()=>{s.value=c.value==="dark"}),m(s,o=>{c.preference=o?"dark":"light"}),m(c,o=>{s.value=o.preference==="dark"}),(o,n)=>{const a=g,d=z;return r(),_("nav",G,[L,e("ul",R,[e("li",A,[e("a",F,[l(a,{name:"github",title:"GitHub"})])]),e("li",J,[e("a",K,[l(a,{name:"linkedin",title:"LinkedIn"})])]),e("li",O,[e("a",P,[l(a,{name:"instagram",title:"Instagram"})])])]),e("div",Q,[l(d,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=v=>s.value=v)},{active:p(()=>[l(a,{name:"moon",class:"w-5 h-5"})]),inactive:p(()=>[l(a,{name:"sun",class:"w-5 h-5 text-yellow-500"})]),_:1},8,["modelValue"])])])}}});const W={},X={class:"app-container"};function Y(t,c){const s=T;return r(),_("div",X,[l(s),i(t.$slots,"default")])}const te=h(W,[["render",Y]]);export{te as default};

import{r as u,j as e}from"./index-Duc4ZoM_.js";import{U as b}from"./UIContainer-fqZbFePv.js";import"./index-KGsAQAl1.js";import"./MainRouter-l7Z1Z1jr.js";import"./zoom-1qZDylxx.js";import"./Compact-BtIEhQqw.js";import"./AntdIcon-jwWmiLqW.js";import"./useZIndex-c7eQO3Zz.js";import"./index-AfMii643.js";import"./Help-Q6DYu7mz.js";function k(d){const{value:r,defaultValue:n,disabled:l,options:s,onChange:i,...m}=d,p=u.useRef("radio_"+Math.random().toString(36).substr(2,9)),o=r!==void 0&&n===void 0,[f,v]=u.useState(o?r:n),x=o?r:f,h=a=>{const t=a.target.value;i&&i(t),o||v(t)},j=()=>s==null?void 0:s.map((a,t)=>{let c=!1;return a.value===x&&(c=!0),e.jsxs("label",{className:"radio-button",style:{cursor:`${l?"not-allowed":"pointer"}`},children:[e.jsx("input",{checked:c,disabled:l,onChange:h,value:a.value,name:p.current,type:"radio"}),e.jsx("div",{className:"radio-circle"}),e.jsx("span",{className:"radio-label",children:a.label})]},t+"")});return e.jsx(b,{...m,className:"lc-radio",children:e.jsx("div",{className:"radio-buttons",children:j()})})}export{k as default};
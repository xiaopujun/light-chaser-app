import{r as u,j as e}from"./index-OsS9UfkW.js";import{U as b}from"./UIContainer-QUMruXjD.js";import"./index-hcrqZ8so.js";import"./MainRouter-Z3gK7D7G.js";import"./ResizeObserver.es-B32NGzNS.js";import"./useZIndex-g2cfol2D.js";import"./Help-EfSmZBRS.js";import"./index-K2O65-hP.js";function U(d){const{value:r,defaultValue:n,disabled:l,options:s,onChange:i,...m}=d,p=u.useRef("radio_"+Math.random().toString(36).substr(2,9)),o=r!==void 0&&n===void 0,[f,v]=u.useState(o?r:n),x=o?r:f,h=a=>{const t=a.target.value;i&&i(t),o||v(t)},j=()=>s==null?void 0:s.map((a,t)=>{let c=!1;return a.value===x&&(c=!0),e.jsxs("label",{className:"radio-button",style:{cursor:`${l?"not-allowed":"pointer"}`},children:[e.jsx("input",{checked:c,disabled:l,onChange:h,value:a.value,name:p.current,type:"radio"}),e.jsx("div",{className:"radio-circle"}),e.jsx("span",{className:"radio-label",children:a.label})]},t+"")});return e.jsx(b,{...m,className:"lc-radio",children:e.jsx("div",{className:"radio-buttons",children:j()})})}export{U as default};
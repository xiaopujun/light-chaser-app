import{r as x,j as e}from"./index-qpgUsgf4.js";import{U as m}from"./UIContainer-NqFQXah1.js";import"./AntdIcon-ivfCf0x2.js";import"./MainRouter-hTbgP2_-.js";import"./useZIndex-06b_ptW1.js";function y(c){const{value:t,defaultValue:a,disabled:i,onChange:o,...l}=c,s=t!==void 0&&a===void 0,[r,d]=x.useState(!!(s?t:a)),p=!!(s?t:r),h=u=>{const{checked:n}=u.target;o&&o(n),s||d(n)};return e.jsx(m,{...l,className:"lc-switch",children:e.jsx("div",{style:{display:"flex"},children:e.jsxs("label",{className:"lc-switch-body",children:[e.jsx("input",{disabled:i,checked:p,onChange:h,type:"checkbox"}),e.jsx("span",{})]})})})}export{y as default};
import{r as p,j as a}from"./index-Duc4ZoM_.js";import{U as x}from"./UIContainer-fqZbFePv.js";import"./index-KGsAQAl1.js";import"./MainRouter-l7Z1Z1jr.js";import"./zoom-1qZDylxx.js";import"./Compact-BtIEhQqw.js";import"./AntdIcon-jwWmiLqW.js";import"./useZIndex-c7eQO3Zz.js";import"./index-AfMii643.js";import"./Help-Q6DYu7mz.js";const T=e=>{const{value:r,defaultValue:o,...i}=e,s=!!r&&!o,[c,m]=p.useState(o),l=t=>{t.stopPropagation();const{onChange:n}=e;n&&n(t.target.value),s||m(t.target.value)};return a.jsx(x,{...i,children:a.jsx("div",{className:"lc-text-area-container",children:a.jsx("textarea",{value:s?r:c,onChange:l,className:"lc-text-area"})})})};export{T as TextArea,T as default};
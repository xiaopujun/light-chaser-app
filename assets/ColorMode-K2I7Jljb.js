import{r as a,j as t}from"./index--8X3ERCh.js";import{e as v}from"./ColorPicker-0m0NZG9p.js";import j from"./Select-iJVZAcsT.js";import V from"./ColorsPicker-2pfsJF8E.js";import{U as R}from"./UIContainer-CFSq1isU.js";import"./index-q1cTw6o4.js";import"./Overflow-B6v4saUZ.js";import"./RightOutlined-9Q6vRlBe.js";import"./QuestionCircleOutlined-xlC2lqrD.js";import"./AntdIcon-XkPc6D7I.js";function U(d){const{value:s,defaultValue:i,onChange:l,...f}=d,o=s!==void 0&&i===void 0,[p,u]=a.useState(o?s:i),[n,g]=a.useState(Array.isArray(o?s:i)?"multi":"single"),c=o?s:p,h=a.useRef("#252525"),x=a.useRef(["#252525"]),C=e=>{let r="#252525";e==="multi"&&(r=x.current),e==="single"&&(r=h.current),l&&l(r),o||(u(r),g(e))},m=e=>{l&&l(e),o||u(e)};return t.jsx(R,{...f,children:t.jsxs("div",{className:"lc-color-mode",children:[t.jsx("div",{className:"mode-select",style:{width:80},children:t.jsx(j,{value:n,onChange:e=>C(e),options:[{value:"single",label:"单色"},{value:"multi",label:"多色"}]})}),n==="single"&&t.jsx(v,{value:c,onChange:m,showText:!0}),n==="multi"&&t.jsx(V,{onChange:m,canAdd:!0,value:c||["#a9a9a9"]})]})})}export{U as default};
import{r as s,j as c}from"./index--8X3ERCh.js";import E from"./Switch-wLC4YXHi.js";import{T as O}from"./index-q1cTw6o4.js";import{A as k,_ as h}from"./AntdIcon-XkPc6D7I.js";import{R as C}from"./RightOutlined-9Q6vRlBe.js";import{Q as L}from"./QuestionCircleOutlined-xlC2lqrD.js";import"./UIContainer-CFSq1isU.js";var x=function(r,o){return s.createElement(k,h(h({},r),{},{ref:o,icon:C}))};x.displayName="RightOutlined";const R=s.forwardRef(x);function M(u){const{label:r,tip:o,showSwitch:l,value:a,defaultValue:m,titleStyle:j,bodyStyle:g,onChange:f,children:S}=u,i=s.useRef(null),t=s.useRef(null),d=a!==void 0&&m===void 0,[N,b]=s.useState(d?!!a:!!m),p=d?a:N,y=()=>{var e;v(!((e=t==null?void 0:t.current)!=null&&e.classList.contains("accordion-active")))},v=e=>{var n;!t.current||!i.current||(l||(n=t==null?void 0:t.current)==null||n.classList.toggle("accordion-active"),e?i.current.style.display="block":i.current.style.display="none")},w=e=>{v(e),f&&f(e),d||b(e)};return s.useEffect(()=>{var e;return l||((e=t==null?void 0:t.current)==null||e.addEventListener("click",y),i.current.style.display="none"),l&&p?i.current.style.display="block":i.current.style.display="none",()=>{var n;return(n=t==null?void 0:t.current)==null?void 0:n.removeEventListener("click",y)}},[]),c.jsxs("div",{className:"lc-accordion",children:[c.jsxs("div",{className:"accordion-header",ref:t,style:{...j},children:[c.jsxs("div",{className:"title-content",children:[r,"  ",o&&c.jsxs(O,{title:o,children:[c.jsx(L,{}),"  "]})]}),c.jsx("div",{className:"title-switch",children:l?c.jsx(E,{value:p,onChange:w}):c.jsx(R,{className:"accordion-icon"})})]}),c.jsx("div",{className:"lc-accordion-body",style:{...g},ref:i,children:S})]})}export{M as default};
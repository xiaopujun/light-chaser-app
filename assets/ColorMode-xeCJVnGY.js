import{r as s,j as t}from"./index-OsS9UfkW.js";import v from"./ColorPicker-Zriz_5ra.js";import j from"./Select-QnvNqaJ3.js";import V from"./ColorsPicker-4VOG4ibE.js";import{U as R}from"./UIContainer-QUMruXjD.js";import"./MainRouter-Z3gK7D7G.js";import"./index-hcrqZ8so.js";import"./ResizeObserver.es-B32NGzNS.js";import"./useZIndex-g2cfol2D.js";import"./index-p8ckIXOR.js";import"./CheckOutlined-r3grTFMw.js";import"./Overflow-UKUJyBo6.js";import"./omit--0Qnqbh8.js";import"./GlobalMessage-FQtvcjbG.js";import"./index-wIpC5sck.js";import"./index-4x1LRhOc.js";import"./EyeOutlined-32DaWiZk.js";import"./collapse-aS6vX33V.js";import"./Help-EfSmZBRS.js";import"./index-K2O65-hP.js";function J(p){const{value:r,defaultValue:a,onChange:i,...d}=p,o=r!==void 0&&a===void 0,[f,m]=s.useState(o?r:a),[n,g]=s.useState(Array.isArray(o?r:a)?"multi":"single"),u=o?r:f,h=s.useRef("#252525"),x=s.useRef(["#252525"]),C=e=>{let l="#252525";e==="multi"&&(l=x.current),e==="single"&&(l=h.current),i&&i(l),o||(m(l),g(e))},c=e=>{i&&i(e),o||m(e)};return t.jsx(R,{...d,children:t.jsxs("div",{className:"lc-color-mode",children:[t.jsx("div",{className:"mode-select",style:{width:80},children:t.jsx(j,{value:n,onChange:e=>C(e),options:[{value:"single",label:"单色"},{value:"multi",label:"多色"}]})}),n==="single"&&t.jsx(v,{value:u,onChange:c,showText:!0}),n==="multi"&&t.jsx(V,{onChange:c,canAdd:!0,value:u||["#a9a9a9"]})]})})}export{J as default};
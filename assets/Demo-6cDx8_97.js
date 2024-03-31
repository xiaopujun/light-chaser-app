import{r as e,j as n}from"./index-AnGvN2i1.js";import{L as a}from"./LCGUI-myOdFqK5.js";function m(){const[o,s]=e.useState(0),t=e.useRef(`function test() {
    console.log("test");
}`),r=[{id:"btnTest",type:"button"},{id:"code",type:"code-editor",value:t.current,reRender:!0,config:{readonly:!0,height:160}}],c=i=>{const{id:u,reRender:d}=i;u==="btnTest"&&(t.current='const test = "niubi"'),d&&s(o+1)};return n.jsx("div",{style:{width:400},children:n.jsx(a,{schema:r,onFieldChange:c})})}export{m as default};

var s=Object.defineProperty;var p=(n,o,t)=>o in n?s(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t;var i=(n,o,t)=>(p(n,typeof o!="symbol"?o+"":o,t),t);import{r as l,j as r}from"./index-3GqucBfC.js";import{b3 as a,b5 as c,b4 as m}from"./LayerManager-Id64Dr7s.js";import{AntdLineCommonGraphics as d}from"./AntdLineCommonConfig-96vq18xI.js";import"./AntdIcon-OHmKKYpl.js";import"./MainRouter-5S0GgxtQ.js";import"./AntdIcon-BYoPKEuB.js";import"./Compact-PqrPY0tm.js";import"./useZIndex-9IcJXe4E.js";import"./Button-BktP6eFA.js";import"./button-bA6D7oLy.js";import"./omit-snSLv_vL.js";import"./render-IWbIHfGq.js";import"./Overflow-blYa_Cc8.js";import"./GlobalMessage-uqw5jbrt.js";class U extends l.Component{constructor(){super(...arguments);i(this,"lineCoordinateSysChange",t=>{this.props.controller.update({style:t})});i(this,"lineGraphicsChange",t=>{this.props.controller.update({style:t})})}render(){const{controller:t}=this.props,e=t.getConfig().style;return r.jsxs(r.Fragment,{children:[r.jsx(d,{onChange:this.lineGraphicsChange,config:e}),r.jsx(a,{onChange:this.lineCoordinateSysChange,config:e})]})}}const I=({controller:n})=>{const o=c.getDataFieldOptions(n),t={type:"grid",config:{columns:2},children:[{type:"select",label:"X字段",config:{options:o}},{type:"select",label:"Y字段",config:{options:o}}]},e=g=>{};return r.jsx(m,{schema:t,onFieldChange:e})};export{I as AntdStepLineFieldMapping,U as AntdStepLineStyleConfig};
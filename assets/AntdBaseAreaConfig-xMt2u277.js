var x=Object.defineProperty;var v=(l,e,t)=>e in l?x(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var p=(l,e,t)=>(v(l,typeof e!="symbol"?e+"":e,t),t);import{r as C,j as a}from"./index-qpgUsgf4.js";import{aQ as f,aR as A}from"./LayerManager-SijuLkyZ.js";import{k}from"./Dialog-fCvBoQ8s.js";import"./AntdIcon-ivfCf0x2.js";import"./MainRouter-hTbgP2_-.js";import"./useZIndex-06b_ptW1.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-Fkd2Gg_g.js";import"./Switch-hw7ERO3O.js";import"./UIContainer-NqFQXah1.js";import"./Radio-7Z4qZSfI.js";import"./GlobalMessage--_KJnNPS.js";import"./KeyCode-YcuPRYAO.js";import"./ColorPicker-yP6MOfjy.js";import"./Overflow-oAlFaljK.js";import"./CardPanel-ZSj37rdp.js";import"./Button-QtVDhbOy.js";import"./Grid-F1N_QB8k.js";class X extends C.Component{constructor(){super(...arguments);p(this,"AreaCoordinateSysChange",t=>{this.props.controller.update({style:t})});p(this,"baseAreaGraphicsChange",t=>{this.props.controller.update({style:t})})}render(){const{controller:t}=this.props,r=t.getConfig().style;return a.jsxs(a.Fragment,{children:[a.jsx(F,{controller:t}),a.jsx(f,{onChange:this.AreaCoordinateSysChange,config:r})]})}}const F=({controller:l})=>{var n,i,o,s,c,y,d,m,h,u,b;const e=l.getConfig().style,t=g=>{l.update(g.dataFragment)},r={key:"style",type:"accordion",label:"图形",children:[{type:"grid",config:{containerStyle:{marginBottom:10}},children:[{label:"基准填充",type:"switch",key:"startOnZero",value:!!(e!=null&&e.startOnZero),config:{containerStyle:{marginBottom:10}}}]},{label:"数据点",type:"card-panel",children:[{type:"grid",config:{columns:2},children:[{key:"point",children:[{label:"尺寸",type:"number-input",key:"size",value:((n=e==null?void 0:e.point)==null?void 0:n.size)||0,config:{min:0,max:10}},{key:"style",children:[{key:"fill",type:"color-picker",label:"颜色",value:(o=(i=e==null?void 0:e.point)==null?void 0:i.style)==null?void 0:o.fill,config:{showText:!0}},{key:"lineWidth",type:"number-input",label:"描边宽",value:(c=(s=e==null?void 0:e.point)==null?void 0:s.style)==null?void 0:c.lineWidth,config:{min:0}},{key:"stroke",type:"color-picker",label:"描边色",value:(d=(y=e==null?void 0:e.point)==null?void 0:y.style)==null?void 0:d.stroke,config:{showText:!0}}]},{key:"shape",type:"select",label:"形状",value:((m=e==null?void 0:e.point)==null?void 0:m.shape)||"circle",config:{options:[{value:"circle",label:"圈形"},{value:"square",label:"方形"},{value:"bowtie",label:"领结"},{value:"diamond",label:"钻石"},{value:"hexagon",label:"六角形"},{value:"triangle",label:"三角形"}]}}]}]}]},{label:"数据线",type:"card-panel",children:[{type:"grid",config:{gridGap:"15px",columns:2},children:[{label:"平滑",type:"switch",key:"smooth",value:!!(e!=null&&e.smooth)},{key:"line",children:[{key:"size",type:"number-input",label:"宽度",value:((h=e==null?void 0:e.line)==null?void 0:h.size)||0,config:{min:0,max:10}},{key:"color",type:"color-picker",label:"颜色",value:((u=e==null?void 0:e.line)==null?void 0:u.color)||"#fff",config:{showText:!0}}]}]}]},{label:"数据面",type:"card-panel",key:"areaStyle",children:[{type:"grid",config:{columns:2},children:[{key:"fill",type:"color-picker",label:"颜色",value:((b=e==null?void 0:e.areaStyle)==null?void 0:b.fill)||"#fff",config:{showText:!0}}]}]}]};return a.jsx(k,{schema:r,onFieldChange:t})},Y=l=>{var o;const{controller:e}=l,t=(o=e==null?void 0:e.config)==null?void 0:o.style,r=A.getDataFieldOptions(e),n={key:"style",type:"grid",config:{columns:2},children:[{key:"xField",type:"select",label:"X字段",value:t==null?void 0:t.xField,config:{options:r}},{key:"yField",type:"select",label:"Y字段",value:t==null?void 0:t.yField,config:{options:r}}]},i=s=>{e.update(s.dataFragment)};return a.jsx(k,{schema:n,onFieldChange:i})};export{Y as AntdBaseAreaFieldMapping,F as AntdBaseAreaGraphics,X as AntdBaseAreaStyleConfig};
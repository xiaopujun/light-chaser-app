import{j as o}from"./index-HCNf1S-V.js";import{aQ as g,aR as v}from"./LayerManager-zhrKdHEt.js";import{k as h}from"./Dialog-SklbesEj.js";import"./AntdIcon-ZsdTX9-8.js";import"./MainRouter-vXEG6WuJ.js";import"./useZIndex-xI4tNDcU.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-bNaHuwjf.js";import"./Switch-ltkI4ep5.js";import"./Button-JU0EM1ll.js";import"./Radio-fGyZ8eIZ.js";import"./GlobalMessage-WoHhAzE1.js";import"./ColorPicker-S1Y4dxEi.js";import"./Overflow-oCu9IEgM.js";import"./CardPanel-KPlWi45L.js";import"./Grid-2ISsVXHm.js";function E(l){const{controller:t}=l,e=t.getConfig().style,n=i=>{t.update({style:i})};return o.jsxs(o.Fragment,{children:[o.jsx(x,{controller:t}),o.jsx(g,{onChange:n,config:e})]})}const I=({controller:l})=>{var a;const t=v.getDataFieldOptions(l),e=(a=l.getConfig())==null?void 0:a.style,n={type:"grid",key:"style",config:{columns:2},children:[{type:"select",label:"X字段",key:"xField",value:e==null?void 0:e.xField,config:{options:t}},{type:"select",label:"Y字段",key:"yField",value:e==null?void 0:e.yField,config:{options:t}}]},i=r=>{l.update(r.dataFragment)};return o.jsx(h,{schema:n,onFieldChange:i})};function x(l){var a,r,s,p,y,m,c,d,u;const{controller:t}=l,e=(a=t.getConfig())==null?void 0:a.style,n=b=>{const{dataFragment:k}=b;t.update(k)},i={type:"accordion",label:"图形",key:"style",config:{bodyStyle:{marginTop:10}},children:[{type:"card-panel",label:"线条",children:[{type:"grid",config:{columns:2},children:[{key:"smooth",type:"switch",label:"平滑",tip:"对阶梯图无效",value:e==null?void 0:e.smooth},{key:"lineStyle",children:[{key:"lineWidth",type:"number-input",label:"宽度",value:(r=e==null?void 0:e.lineStyle)==null?void 0:r.lineWidth,config:{min:0,max:10}}]},{key:"color",type:"color-picker",label:"颜色",value:e==null?void 0:e.color,config:{showText:!0}}]}]},{type:"card-panel",label:"数据点",children:[{key:"point",type:"grid",config:{columns:2},children:[{key:"size",type:"number-input",label:"尺寸",value:(s=e==null?void 0:e.point)==null?void 0:s.size,config:{min:0,max:10}},{key:"color",type:"color-picker",label:"颜色",value:(p=e==null?void 0:e.point)==null?void 0:p.color,config:{showText:!0}},{key:"style",children:[{key:"lineWidth",type:"number-input",label:"描边宽",value:(m=(y=e==null?void 0:e.point)==null?void 0:y.style)==null?void 0:m.lineWidth,config:{min:0}},{key:"stroke",type:"color-picker",label:"描边色",value:(d=(c=e==null?void 0:e.point)==null?void 0:c.style)==null?void 0:d.stroke,config:{showText:!0}}]},{key:"shape",type:"select",label:"形状",value:(u=e==null?void 0:e.point)==null?void 0:u.shape,config:{options:[{value:"circle",label:"圈形"},{value:"square",label:"方形"},{value:"bowtie",label:"领结"},{value:"diamond",label:"钻石"},{value:"hexagon",label:"六角形"},{value:"triangle",label:"三角形"}]}}]}]}]};return o.jsx(h,{schema:i,onFieldChange:n})}export{I as AntdLineCommonFieldMapping,x as AntdLineCommonGraphics,E as AntdLineCommonStyleConfig};
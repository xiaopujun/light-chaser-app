import{j as o}from"./index-qpgUsgf4.js";import{aQ as g,aR as v}from"./LayerManager-SijuLkyZ.js";import{k as h}from"./Dialog-fCvBoQ8s.js";import"./AntdIcon-ivfCf0x2.js";import"./MainRouter-hTbgP2_-.js";import"./useZIndex-06b_ptW1.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-Fkd2Gg_g.js";import"./Switch-hw7ERO3O.js";import"./UIContainer-NqFQXah1.js";import"./Radio-7Z4qZSfI.js";import"./GlobalMessage--_KJnNPS.js";import"./KeyCode-YcuPRYAO.js";import"./ColorPicker-yP6MOfjy.js";import"./Overflow-oAlFaljK.js";import"./CardPanel-ZSj37rdp.js";import"./Button-QtVDhbOy.js";import"./Grid-F1N_QB8k.js";function M(l){const{controller:t}=l,e=t.getConfig().style,n=i=>{t.update({style:i})};return o.jsxs(o.Fragment,{children:[o.jsx(x,{controller:t}),o.jsx(g,{onChange:n,config:e})]})}const O=({controller:l})=>{var a;const t=v.getDataFieldOptions(l),e=(a=l.getConfig())==null?void 0:a.style,n={type:"grid",key:"style",config:{columns:2},children:[{type:"select",label:"X字段",key:"xField",value:e==null?void 0:e.xField,config:{options:t}},{type:"select",label:"Y字段",key:"yField",value:e==null?void 0:e.yField,config:{options:t}}]},i=r=>{l.update(r.dataFragment)};return o.jsx(h,{schema:n,onFieldChange:i})};function x(l){var a,r,p,s,m,y,c,d,u;const{controller:t}=l,e=(a=t.getConfig())==null?void 0:a.style,n=b=>{const{dataFragment:k}=b;t.update(k)},i={type:"accordion",label:"图形",key:"style",config:{bodyStyle:{marginTop:10}},children:[{type:"card-panel",label:"线条",children:[{type:"grid",config:{columns:2},children:[{key:"smooth",type:"switch",label:"平滑",tip:"对阶梯图无效",value:e==null?void 0:e.smooth},{key:"lineStyle",children:[{key:"lineWidth",type:"number-input",label:"宽度",value:(r=e==null?void 0:e.lineStyle)==null?void 0:r.lineWidth,config:{min:0,max:10}}]},{key:"color",type:"color-picker",label:"颜色",value:e==null?void 0:e.color,config:{showText:!0}}]}]},{type:"card-panel",label:"数据点",children:[{key:"point",type:"grid",config:{columns:2},children:[{key:"size",type:"number-input",label:"尺寸",value:(p=e==null?void 0:e.point)==null?void 0:p.size,config:{min:0,max:10}},{key:"color",type:"color-picker",label:"颜色",value:(s=e==null?void 0:e.point)==null?void 0:s.color,config:{showText:!0}},{key:"style",children:[{key:"lineWidth",type:"number-input",label:"描边宽",value:(y=(m=e==null?void 0:e.point)==null?void 0:m.style)==null?void 0:y.lineWidth,config:{min:0}},{key:"stroke",type:"color-picker",label:"描边色",value:(d=(c=e==null?void 0:e.point)==null?void 0:c.style)==null?void 0:d.stroke,config:{showText:!0}}]},{key:"shape",type:"select",label:"形状",value:(u=e==null?void 0:e.point)==null?void 0:u.shape,config:{options:[{value:"circle",label:"圈形"},{value:"square",label:"方形"},{value:"bowtie",label:"领结"},{value:"diamond",label:"钻石"},{value:"hexagon",label:"六角形"},{value:"triangle",label:"三角形"}]}}]}]}]};return o.jsx(h,{schema:i,onFieldChange:n})}export{O as AntdLineCommonFieldMapping,x as AntdLineCommonGraphics,M as AntdLineCommonStyleConfig};
import{j as a}from"./index-qpgUsgf4.js";import{aQ as w,aR as A}from"./LayerManager-SijuLkyZ.js";import{k as f}from"./Dialog-fCvBoQ8s.js";import"./AntdIcon-ivfCf0x2.js";import"./MainRouter-hTbgP2_-.js";import"./useZIndex-06b_ptW1.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-Fkd2Gg_g.js";import"./Switch-hw7ERO3O.js";import"./UIContainer-NqFQXah1.js";import"./Radio-7Z4qZSfI.js";import"./GlobalMessage--_KJnNPS.js";import"./KeyCode-YcuPRYAO.js";import"./ColorPicker-yP6MOfjy.js";import"./Overflow-oAlFaljK.js";import"./CardPanel-ZSj37rdp.js";import"./Button-QtVDhbOy.js";import"./Grid-F1N_QB8k.js";function N(l){var n,r,y,m,d,c,u,h,k,b,x,v,g,C,F,S;const{controller:t}=l,e=(n=t.getConfig())==null?void 0:n.style,o=s=>{t.update({style:s})},p=s=>{const{dataFragment:j}=s;t.update(j)},i={type:"accordion",label:"图形",key:"style",config:{titleStyle:{height:49}},children:[{type:"card-panel",label:"基础",children:[{type:"grid",config:{columns:2},children:[{type:"number-input",label:"半径",key:"radius",value:e==null?void 0:e.radius,config:{min:.1,max:1,step:.1}},{type:"switch",label:"平滑",key:"smooth",value:e==null?void 0:e.smooth}]}]},{type:"card-panel",label:"辅助点",key:"point",children:[{type:"grid",config:{columns:2},children:[{type:"number-input",label:"大小",key:"size",value:(r=e==null?void 0:e.point)==null?void 0:r.size},{type:"select",label:"形状",key:"shape",value:(y=e==null?void 0:e.point)==null?void 0:y.shape,config:{options:[{label:"圆",value:"circle"},{label:"钻石",value:"diamond"},{label:"三角",value:"triangle"}]}},{key:"style",children:[{type:"color-picker",label:"颜色",key:"fill",value:(m=e==null?void 0:e.point)==null?void 0:m.color,config:{showText:!0}},{type:"color-picker",label:"边框",key:"stroke",value:(c=(d=e==null?void 0:e.point)==null?void 0:d.style)==null?void 0:c.stroke,config:{showText:!0}},{type:"number-input",label:"边框宽度",key:"lineWidth",value:(h=(u=e==null?void 0:e.point)==null?void 0:u.style)==null?void 0:h.lineWidth,config:{min:0,max:10,step:1}}]}]}]},{type:"card-panel",label:"面积边框",key:"lineStyle",children:[{type:"grid",config:{columns:2},children:[{type:"color-picker",label:"颜色",key:"stroke",value:(k=e==null?void 0:e.lineStyle)==null?void 0:k.stroke,config:{showText:!0}},{type:"number-input",label:"宽度",key:"lineWidth",value:(b=e==null?void 0:e.lineStyle)==null?void 0:b.lineWidth,config:{min:0,max:10,step:1}},{type:"number-input",label:"透明度",key:"opacity",value:(x=e==null?void 0:e.lineStyle)==null?void 0:x.opacity,config:{min:0,max:1,step:.1}}]}]},{type:"card-panel",label:"雷达面",key:"area",children:[{type:"grid",key:"style",config:{columns:2},children:[{type:"color-picker",label:"颜色",key:"fill",value:(g=(v=e==null?void 0:e.area)==null?void 0:v.style)==null?void 0:g.fill,config:{showText:!0}},{type:"number-input",label:"透明度",key:"fillOpacity",value:(F=(C=e==null?void 0:e.area)==null?void 0:C.style)==null?void 0:F.fillOpacity,config:{min:0,max:1,step:.1}}]}]}]};return a.jsxs(a.Fragment,{children:[a.jsx(f,{schema:i,onFieldChange:p}),a.jsx(w,{onChange:o,config:(S=t.getConfig())==null?void 0:S.style})]})}const P=({controller:l})=>{var i;const t=(i=l.getConfig())==null?void 0:i.style,e=A.getDataFieldOptions(l),o={type:"grid",key:"style",config:{columns:2},children:[{type:"select",label:"x轴字段",key:"xField",value:t==null?void 0:t.xField,config:{options:e}},{type:"select",label:"y轴字段",key:"yField",value:t==null?void 0:t.yField,config:{options:e}}]},p=n=>{const{dataFragment:r}=n;l.update(r)};return a.jsx(f,{schema:o,onFieldChange:p})};export{P as AntdRadarFieldMapping,N as default};
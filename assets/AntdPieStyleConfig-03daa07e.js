var ae=Object.defineProperty;var se=(l,t,e)=>t in l?ae(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var r=(l,t,e)=>(se(l,typeof t!="symbol"?t+"":t,e),e);import{r as ee,j as o,aD as ce,aC as te,aF as re,aB as ye,O as c}from"./index-deca68b0.js";class de extends ee.Component{constructor(){super(...arguments);r(this,"pieGraphicsChange",e=>{this.props.controller.update({style:e})});r(this,"legendChange",e=>{this.props.controller.update({style:{legend:e}})})}render(){const e=this.props.controller,i=e.getConfig().style;return o.jsxs(o.Fragment,{children:[o.jsx(ce,{controller:e}),o.jsx(pe,{onChange:this.pieGraphicsChange,config:i})]})}}const pe=({config:l,onChange:t})=>{var p,u,f,d,h,g,b,m,k,x,v,w,S,C,A,R,j,P,z,F,I,W,M,B,G,T,U,O,X,Y,D,L,E,K,_,q,H,J,N,Q,V,Z;const[e,i]=ee.useState(l),y=ie=>{let{id:a,data:n,dataKeyPath:ne,dataFragment:$,reRender:oe}=ie;if(a==="startAngle"||a==="endAngle")n=Math.PI*n,t&&t(ye.createObjectFromArray(ne,n));else if(a==="titleSwitch")if(n){const s={statistic:{title:{style:{fontSize:12,color:"#fff"},content:"text"}}};t(s),i({...c.merge(e,s)})}else t({statistic:{content:!1}}),i({...c.merge(e,{statistic:{title:!1}})});else if(a==="contentSwitch")if(n){const s={statistic:{content:{style:{fontSize:12,color:"#fff"},content:"content"}}};t(s),i({...c.merge(e,s)})}else t({statistic:{title:!1}}),i({...c.merge(e,{statistic:{content:!1}})});else a==="labelRotate"?t({label:{rotate:n*Math.PI}}):t&&t($);oe&&i({...e,...$})},le={children:[{type:"accordion",label:"图形",children:[{type:"grid",config:{columns:2},children:[{key:"radius",type:"input",label:"外径",value:l.radius,config:{type:"number",min:0,max:1,step:.01}},{id:"startAngle",key:"startAngle",type:"input",label:"起始角",value:(l.startAngle||0)/Math.PI,config:{suffix:"Π",type:"number",min:0,max:2,step:.01}},{key:"innerRadius",type:"input",label:"内径",value:l.innerRadius,config:{type:"number",min:0,max:1,step:.01}},{id:"endAngle",key:"endAngle",type:"input",label:"结束角",value:(l.endAngle||2*Math.PI)/Math.PI,config:{suffix:"Π",type:"number",min:0,max:2,step:.01}},{key:"pieStyle",children:[{key:"stroke",type:"color-picker",label:"描边色",value:"#1c1c1c",config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}},{key:"lineWidth",type:"input",label:"描边宽",value:0,config:{type:"number",min:0,max:30}}]},{key:"color",type:"color-mode",label:"颜色",value:"#1c1c1c",config:{gridColumn:"1 / 3"}}]}]},{key:"statistic",type:"accordion",label:"标题",children:[{key:"title",type:"grid",config:{columns:2},children:[{id:"titleSwitch",key:"titleSwitch",type:"switch",label:"开启",value:!!((p=e.statistic)!=null&&p.title)},{rules:"{titleSwitch} === 'true'",children:[{key:"content",type:"input",label:"内容",value:(f=(u=e.statistic)==null?void 0:u.title)==null?void 0:f.content},{key:"style",children:[{key:"fontSize",type:"input",label:"字号",value:((g=(h=(d=e.statistic)==null?void 0:d.title)==null?void 0:h.style)==null?void 0:g.fontSize)||12,config:{type:"number",min:0,max:100}},{key:"fontWeight",type:"input",label:"加粗",value:((k=(m=(b=e.statistic)==null?void 0:b.title)==null?void 0:m.style)==null?void 0:k.fontWeight)||500,config:{type:"number",min:100,max:900,step:100}},{key:"color",type:"color-picker",label:"颜色",value:(w=(v=(x=e.statistic)==null?void 0:x.title)==null?void 0:v.style)==null?void 0:w.color,config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{key:"offsetX",type:"input",label:"x偏移",value:((C=(S=e.statistic)==null?void 0:S.title)==null?void 0:C.offsetX)||0,config:{type:"number"}},{key:"offsetY",type:"input",label:"y偏移",value:((R=(A=e.statistic)==null?void 0:A.title)==null?void 0:R.offsetY)||0,config:{type:"number"}}]}]}]},{key:"statistic",type:"accordion",label:"内容",children:[{key:"content",type:"grid",config:{columns:2},children:[{id:"contentSwitch",key:"contentSwitch",type:"switch",label:"开启",value:!!((j=e.statistic)!=null&&j.content)},{rules:"{contentSwitch} === 'true'",children:[{key:"content",type:"input",label:"内容",value:(z=(P=e.statistic)==null?void 0:P.content)==null?void 0:z.content},{key:"style",children:[{key:"fontSize",type:"input",label:"字号",value:((W=(I=(F=e.statistic)==null?void 0:F.content)==null?void 0:I.style)==null?void 0:W.fontSize)||12,config:{type:"number",min:0,max:100}},{key:"fontWeight",type:"input",label:"加粗",value:((G=(B=(M=e.statistic)==null?void 0:M.content)==null?void 0:B.style)==null?void 0:G.fontWeight)||500,config:{type:"number",min:100,max:900,step:100}},{key:"color",type:"color-picker",label:"颜色",value:(O=(U=(T=e.statistic)==null?void 0:T.content)==null?void 0:U.style)==null?void 0:O.color,config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{key:"offsetX",type:"input",label:"x偏移",value:((Y=(X=e.statistic)==null?void 0:X.content)==null?void 0:Y.offsetX)||0,config:{type:"number"}},{key:"offsetY",type:"input",label:"y偏移",value:((L=(D=e.statistic)==null?void 0:D.content)==null?void 0:L.offsetY)||0,config:{type:"number"}}]}]}]},{type:"accordion",label:"标签",children:[{key:"label",type:"grid",config:{columns:2},children:[{key:"type",type:"select",label:"位置",value:((E=e.label)==null?void 0:E.type)||"inner",config:{options:[{value:"inner",label:"内测"},{value:"outer",label:"外侧"}]}},{key:"offset",type:"input",label:"偏移",value:((K=e.label)==null?void 0:K.offset)||0,config:{type:"number",min:0,max:100}},{key:"style",children:[{key:"fontSize",type:"input",label:"字号",value:((q=(_=e.label)==null?void 0:_.style)==null?void 0:q.fontSize)||12,config:{type:"number",min:0,max:100}},{key:"fontWeight",type:"input",label:"加粗",value:((J=(H=e.label)==null?void 0:H.style)==null?void 0:J.fontWeight)||500,config:{type:"number",min:100,max:900,step:100}},{key:"fill",type:"color-picker",label:"颜色",value:(Q=(N=e.label)==null?void 0:N.style)==null?void 0:Q.fill,config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{key:"autoRotate",type:"switch",label:"自动旋转",reRender:!0,value:(V=e.label)==null?void 0:V.autoRotate},{id:"labelRotate",key:"rotate",type:"input",label:"旋转角度",rules:"{autoRotate} === 'false'",value:((Z=e.label)==null?void 0:Z.rotate)||0,config:{type:"number",min:0,max:2,step:.01}}]}]}]};return o.jsx(te,{schema:le,onFieldChange:y})},he=({controller:l})=>{const t=re.getDataFieldOptions(l),e={type:"grid",config:{columns:2},children:[{type:"select",label:"角度字段",config:{options:t}},{type:"select",label:"颜色字段",config:{options:t}}]},i=y=>{};return o.jsx(te,{schema:e,onFieldChange:i})};export{he as AntdPieFieldMapping,pe as AntdPieGraphicsConfig,de as default};
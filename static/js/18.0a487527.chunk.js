(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[18],{522:function(t,e,i){"use strict";i.r(e),i.d(e,"AntdRingProgressStyleConfig",(function(){return v})),i.d(e,"AntdRingProgressGraphicsConfig",(function(){return p}));var l=i(11),n=i(39),o=i(14),c=i(15),s=i(16),r=i(17),a=i(0),u=i(105),d=i(219),y=i(2),v=function(t){Object(s.a)(i,t);var e=Object(r.a)(i);function i(){var t;Object(o.a)(this,i);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).ringProgressGraphicsChange=function(e){t.props.controller.update({style:e})},t}return Object(c.a)(i,[{key:"render",value:function(){var t=this.props.controller.getConfig().style;return Object(y.jsx)(p,{config:t,onChange:this.ringProgressGraphicsChange})}}]),i}(a.Component),p=function(t){var e,i,o,c,s,r,v,p,f,h,g,b,m,k,w,S,x,C,j,O,z,W,A,B,F,P,R,X,Y,G,T,J,q,D,E=t.config,H=t.onChange,I=Object(a.useState)(E),K=Object(n.a)(I,2),L=K[0],M=K[1],N={children:[{type:"accordion",label:"\u56fe\u5f62",children:[{type:"grid",config:{columns:2},children:[{key:"radius",type:"input",label:"\u5916\u5f84",value:(null===L||void 0===L?void 0:L.radius)||.8,config:{type:"number",min:0,max:1,step:.01}},{key:"innerRadius",type:"input",label:"\u5185\u5f84",value:(null===L||void 0===L?void 0:L.innerRadius)||.75,config:{type:"number",min:0,max:1,step:.01}},{key:"progressStyle",children:[{key:"lineWidth",type:"input",label:"\u63cf\u8fb9",value:(null===(e=L.progressStyle)||void 0===e?void 0:e.lineWidth)||1,config:{type:"number",min:0,max:10}},{key:"stroke",type:"color-picker",label:"\u63cf\u8fb9\u8272",value:(null===(i=L.progressStyle)||void 0===i?void 0:i.stroke)||"#555555",config:{width:"90%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{id:"progressColor",type:"color-mode",label:"\u989c\u8272",value:(null===L||void 0===L?void 0:L.color)||"#5B8FF9",config:{gridColumn:"1/3"}}]}]},{key:"statistic",type:"accordion",label:"\u6807\u9898",children:[{key:"title",type:"grid",config:{columns:2},children:[{id:"titleSwitch",key:"titleSwitch",type:"switch",label:"\u5f00\u542f",value:!(null===(o=L.statistic)||void 0===o||!o.title)},{rules:"{titleSwitch} === 'true'",children:[{key:"content",type:"input",label:"\u5185\u5bb9",value:null===(c=L.statistic)||void 0===c||null===(s=c.title)||void 0===s?void 0:s.content},{key:"style",children:[{key:"fontSize",type:"input",label:"\u5b57\u53f7",value:(null===(r=L.statistic)||void 0===r||null===(v=r.title)||void 0===v||null===(p=v.style)||void 0===p?void 0:p.fontSize)||12,config:{type:"number",min:0,max:100}},{key:"fontWeight",type:"input",label:"\u52a0\u7c97",value:(null===(f=L.statistic)||void 0===f||null===(h=f.title)||void 0===h||null===(g=h.style)||void 0===g?void 0:g.fontWeight)||500,config:{type:"number",min:100,max:900,step:100}},{key:"color",type:"color-picker",label:"\u989c\u8272",value:null===(b=L.statistic)||void 0===b||null===(m=b.title)||void 0===m||null===(k=m.style)||void 0===k?void 0:k.color,config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{key:"offsetX",type:"input",label:"x\u504f\u79fb",value:(null===(w=L.statistic)||void 0===w||null===(S=w.title)||void 0===S?void 0:S.offsetX)||0,config:{type:"number"}},{key:"offsetY",type:"input",label:"y\u504f\u79fb",value:(null===(x=L.statistic)||void 0===x||null===(C=x.title)||void 0===C?void 0:C.offsetY)||0,config:{type:"number"}}]}]}]},{key:"statistic",type:"accordion",label:"\u5185\u5bb9",children:[{key:"content",type:"grid",config:{columns:2},children:[{id:"contentSwitch",key:"contentSwitch",type:"switch",label:"\u5f00\u542f",value:!(null===(j=L.statistic)||void 0===j||!j.content)},{rules:"{contentSwitch} === 'true'",children:[{key:"content",type:"input",label:"\u5185\u5bb9",value:null===(O=L.statistic)||void 0===O||null===(z=O.content)||void 0===z?void 0:z.content},{key:"style",children:[{key:"fontSize",type:"input",label:"\u5b57\u53f7",value:(null===(W=L.statistic)||void 0===W||null===(A=W.content)||void 0===A||null===(B=A.style)||void 0===B?void 0:B.fontSize)||12,config:{type:"number",min:0,max:100}},{key:"fontWeight",type:"input",label:"\u52a0\u7c97",value:(null===(F=L.statistic)||void 0===F||null===(P=F.content)||void 0===P||null===(R=P.style)||void 0===R?void 0:R.fontWeight)||500,config:{type:"number",min:100,max:900,step:100}},{key:"color",type:"color-picker",label:"\u989c\u8272",value:null===(X=L.statistic)||void 0===X||null===(Y=X.content)||void 0===Y||null===(G=Y.style)||void 0===G?void 0:G.color,config:{width:"100%",radius:3,showBorder:!0,showText:!0,height:16,hideControls:!0}}]},{key:"offsetX",type:"input",label:"x\u504f\u79fb",value:(null===(T=L.statistic)||void 0===T||null===(J=T.content)||void 0===J?void 0:J.offsetX)||0,config:{type:"number"}},{key:"offsetY",type:"input",label:"y\u504f\u79fb",value:(null===(q=L.statistic)||void 0===q||null===(D=q.content)||void 0===D?void 0:D.offsetY)||0,config:{type:"number"}}]}]}]}]};return Object(y.jsx)(u.a,{schema:N,onFieldChange:function(t){var e=t.id,i=t.data,n=t.dataFragment;if("progressColor"===e)i&&Array.isArray(i)?H({color:i,progressStyle:{fill:void 0}}):H({color:void 0,progressStyle:{fill:i}});else if("titleSwitch"===e)if(i){var o={statistic:{title:{style:{fontSize:12,color:"#fff"},content:"text"}}};H(o),M(Object(l.a)({},d.a.merge(L,o)))}else H({statistic:{title:!1}}),M(Object(l.a)({},d.a.merge(L,{statistic:{title:!1}})));else if("contentSwitch"===e)if(i){var c={statistic:{content:{style:{fontSize:12,color:"#fff"},content:"content"}}};H(c),M(Object(l.a)({},d.a.merge(L,c)))}else H({statistic:{content:!1}}),M(Object(l.a)({},d.a.merge(L,{statistic:{content:!1}})));else H(n)}})}}}]);
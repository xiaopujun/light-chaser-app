(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[1],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"ApiDataConfig",(function(){return T})),a.d(t,"StaticDataConfig",(function(){return w}));var n=a(13),r=a(9),c=a(10),i=a(11),l=a(12),u=a(0),s=a(74),o=a(125),d=a(81),h=(a(557),a(99)),j=a(304),f=a(78),b=a(332),p=a(568),O=a(126),g=a(29),v=a(44),x=a(558),y=a.n(x),S=a(3),C=function(e){var t=e.value,a=e.onChange,n=e.language,r=e.width,c=e.height,i=e.readonly,l=void 0!==i&&i,u=y()(t,{indent_size:2,space_in_empty_paren:!0,end_with_newline:!0});return Object(S.jsx)("div",{style:{width:r,height:c,border:"1px solid #414141"},className:"monaco-editor-container",children:Object(S.jsx)(v.a,{defaultLanguage:n||"json",theme:"vs-dark",onChange:a,height:"100%",width:"100%",options:{minimap:{enabled:!1},quickSuggestions:!1,folding:!1,readOnly:l},loading:Object(S.jsx)(g.a,{}),value:u||""})})},m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).state={dataSource:"static"},n.allDataTypes=[{value:"static",label:"\u9759\u6001\u6570\u636e"},{value:"api",label:"\u63a5\u53e3(API)"}],n.dataSourcesChange=function(e){n.props.instance.update({data:{dataSource:e}},{reRender:!1}),n.setState({dataSource:e})};var c=e.instance.getConfig().data;return n.state={dataSource:(null===c||void 0===c?void 0:c.dataSource)||"static"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.instance,n=t.dataTypes,r=this.state.dataSource;return this.allDataTypes=n?this.allDataTypes.filter((function(e){return null===n||void 0===n?void 0:n.includes(e.value)})):this.allDataTypes,Object(S.jsxs)("div",{className:"lc-data-config",children:[Object(S.jsx)(s.a,{title:"\u6570\u636e\u6e90",contentStyle:{width:100},children:Object(S.jsx)(d.default,{onChange:function(t){return e.dataSourcesChange(t)},defaultValue:r,options:this.allDataTypes})}),"static"===r&&Object(S.jsx)(w,{instance:a}),"api"===r&&Object(S.jsx)(T,{instance:a})]})}}]),a}(u.Component),T=function(e){var t=e.instance,a=e.apiDataConvert,r=t.getConfig().data.apiData,c=Object(u.useRef)((null===r||void 0===r?void 0:r.url)||""),i=Object(u.useRef)((null===r||void 0===r?void 0:r.method)||""),l=Object(u.useRef)(JSON.stringify((null===r||void 0===r?void 0:r.header)||{})),g=Object(u.useRef)(JSON.stringify((null===r||void 0===r?void 0:r.params)||{})),v=Object(u.useRef)((null===r||void 0===r?void 0:r.flashFrequency)||5),x=Object(u.useState)(null),y=Object(n.a)(x,2),m=y[0],T=y[1],w=null,D=null,J=function(){return""===c.current?(p.b.error("\u63a5\u53e3\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a"),!1):""===i.current?(p.b.error("\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u80fd\u4e3a\u7a7a"),!1):(D=O.a.stringToJsObj(l.current))?!!(w=O.a.stringToJsObj(g.current))||(p.b.error("\u8bf7\u6c42\u53c2\u6570\u4e0d\u7b26\u5408json\u683c\u5f0f"),!1):(p.b.error("\u8bf7\u6c42\u5934\u4e0d\u7b26\u5408json\u683c\u5f0f"),!1)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(s.a,{title:"\u63a5\u53e3\u5730\u5740",contentStyle:{width:240},children:Object(S.jsx)(f.default,{defaultValue:c.current,onChange:function(e){return c.current=e.target.value}})}),Object(S.jsx)(s.a,{title:"\u8bf7\u6c42\u65b9\u5f0f",contentStyle:{width:100},children:Object(S.jsx)(d.default,{options:[{value:"get",label:"GET"},{value:"post",label:"POST"},{value:"put",label:"PUT"},{value:"delete",label:"DELETE"}],defaultValue:i.current,onChange:function(e){return i.current=e}})}),Object(S.jsxs)(s.a,{title:"\u5237\u65b0\u9891\u7387",contentStyle:{color:"#c6c9cd",display:"flex",width:40,alignItems:"center"},children:[Object(S.jsx)(f.default,{type:"number",defaultValue:v.current,onChange:function(e){return v.current=parseInt(e.target.value)}}),Object(S.jsx)("div",{children:"\u79d2"})]}),Object(S.jsx)(b.a,{title:"\u8bf7\u6c42\u5934(JSON)",contentStyle:{width:"95%"},children:Object(S.jsx)(C,{height:100,onChange:function(e){return function(e){l.current=e}(e)},value:l.current})}),Object(S.jsx)(b.a,{title:"\u8bf7\u6c42\u53c2\u6570(JSON)",contentStyle:{width:"95%"},children:Object(S.jsx)(C,{height:100,onChange:function(e){return function(e){g.current=e}(e)},value:g.current})}),Object(S.jsx)(b.a,{title:"\u54cd\u5e94\u7ed3\u679c",contentStyle:{width:"95%"},children:Object(S.jsx)(C,{height:200,value:m})}),Object(S.jsx)(o.a,{style:{width:"calc(50% - 16px)",margin:"0 7px"},onClick:function(){J()&&Object(j.a)(c.current,i.current,D,w).then((function(e){T(a&&"function"===typeof a?a(e):JSON.stringify(e))})).catch((function(){T("\u8bf7\u6c42\u5931\u8d25")}))},children:"\u6d4b\u8bd5\u63a5\u53e3"}),Object(S.jsx)(o.a,{style:{width:"calc(50% - 16px)",margin:"0 7px"},onClick:function(){if(J()){var e={apiData:{url:c.current,method:i.current,header:D,params:w,flashFrequency:v.current}};m&&(e.staticData={data:a?a(m):JSON.parse(m)}),t.update({data:e},{reRender:!0,operateType:h.OperateType.DATA})}},children:"\u4fdd\u5b58"})]})},w=function(e){var t,a=e.instance,n=a.getConfig().data,r=JSON.stringify(null===(t=n.staticData)||void 0===t?void 0:t.data);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{height:400,onChange:function(e){return r=e},value:r}),Object(S.jsx)("div",{className:"static-data-btn-arr",children:Object(S.jsx)(o.a,{onClick:function(){try{var e=r.replace(/'/g,'"').replace(/\s/g,""),t=JSON.parse(e);a.update({data:{staticData:{data:t}}},{reRender:!0,operateType:h.OperateType.DATA})}catch(n){p.b.error("\u6570\u636e\u683c\u5f0f\u9519\u8bef")}},children:"\u4fdd\u5b58\u5e76\u5237\u65b0\u6570\u636e"})})]})};t.default=m},557:function(e,t,a){}}]);
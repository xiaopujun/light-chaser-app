(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[13],{315:function(e,t,n){"use strict";var a=n(14),i=n(15),o=n(16),r=n(17),c=n(0),s=n.n(c),l=n(248),d=n(254),u=n(300),h=n(71),p=n(2),v=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e,i;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(i=t.call.apply(t,[this].concat(r))).ref=null,i.mode=(null===(e=Object(l.d)())||void 0===e?void 0:e.action)||"edit",i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.layout;d.a.doAdd(this.ref,e)}},{key:"render",value:function(){var e=this,t=this.props.layout,n=u.a.auxiliaryBorder;return Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)(h.a,{}),children:Object(p.jsx)("div",{id:t.id,"data-type":t.type,"data-lock":t.lock,"data-hide":t.hide,style:{width:t.width,height:t.height,transform:"translate(".concat(t.position[0],"px, ").concat(t.position[1],"px)"),position:"absolute",display:t.hide?"none":"block",border:n?"1px solid #65eafc":"none"},className:"lc-comp-item",children:Object(p.jsx)("div",{ref:function(t){return e.ref=t},style:{width:"100%",height:"100%",pointerEvents:"".concat("view"===this.mode?"auto":"none"),position:"relative"}})},t.id+"")})}}]),n}(s.a.PureComponent);t.a=v},477:function(e,t,n){},515:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n(15),o=n(16),r=n(17),c=n(0),s=(n(477),n(210)),l=n(315),d=n(211),u=n(71),h=n(234),p=n(2),v=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).generateElement=function(){var e=s.a.layoutConfigs;return Object.values(e).sort((function(e,t){return e.order-t.order})).map((function(e){return Object(p.jsx)(l.a,{layout:e},e.id)}))},h.a.getLoader().load(),i}return Object(i.a)(n,[{key:"render",value:function(){var e=s.a,t=e.loaded,n=e.canvasConfig,a=n.width,i=n.height;return console.log("view render",t),t?Object(p.jsx)("div",{style:{width:a,height:i,background:"black",overflow:"hidden",position:"relative"},children:this.generateElement()}):Object(p.jsx)(u.a,{})}}]),n}(c.Component);t.default=Object(d.a)(v)}}]);
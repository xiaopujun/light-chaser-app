(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[12],{401:function(e,t,a){},402:function(e,t,a){},524:function(e,t,a){"use strict";a.r(t);var n=a(47),c=a(11),i=a(14),s=a(15),o=a(16),l=a(17),r=a(0),d=(a(401),a(402),a(252)),j=a(106),b=a(108),h=a(107),p=a(75),m=a(2),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).projectInfo={name:"",description:"",width:500,height:300},e.onOk=function(t){t.preventDefault();var a=e.props.onOk;a&&a(e.projectInfo)},e.onCancel=function(){console.log("\u5173\u95ed");var t=e.props.onCancel;t&&t()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.visible,a=void 0!==t&&t;return Object(m.jsx)(d.a,{title:"\u65b0\u5efa\u5927\u5c4f",visible:a,className:"add-new-screen-dialog",onClose:this.onCancel,children:Object(m.jsxs)("form",{onSubmit:this.onOk,children:[Object(m.jsx)("div",{className:"lc-add-new-screen",children:Object(m.jsxs)(b.a,{gridGap:"15px",columns:2,children:[Object(m.jsx)(h.a,{label:"\u540d\u79f0",required:!0,maxLength:20,onChange:function(t){return e.projectInfo.name=t}}),Object(m.jsx)(h.a,{label:"\u63cf\u8ff0",maxLength:20,onChange:function(t){return e.projectInfo.description=t}}),Object(m.jsx)(h.a,{label:"\u5bbd\u5ea6",type:"number",min:300,required:!0,onChange:function(t){return e.projectInfo.width=t}}),Object(m.jsx)(h.a,{label:"\u9ad8\u5ea6",type:"number",min:300,required:!0,onChange:function(t){return e.projectInfo.height=t}}),Object(m.jsx)(p.a,{label:"\u5b58\u50a8",options:[{value:"1",label:"\u672c\u5730\u5b58\u50a8"}],defaultValue:"1"})]})}),Object(m.jsxs)("div",{className:"add-new-screen-explain",children:[Object(m.jsx)("p",{children:"\u8bf4\u660e\uff1a"}),Object(m.jsx)("p",{children:"1\u3001\u540d\u79f0\u4e0d\u8d85\u8fc720\u5b57\uff0c\u63cf\u8ff0\u4e0d\u8d85\u8fc760\u5b57"}),Object(m.jsx)("p",{children:"2\u3001\u5bbd\u5ea6\u5fc5\u987b\u2265500\uff0c\u9ad8\u5ea6\u5fc5\u987b\u2265300"})]}),Object(m.jsxs)("div",{className:"add-new-screen-footer",children:[Object(m.jsx)(j.a,{type:"submit",children:"\u4fdd\u5b58"}),Object(m.jsx)(j.a,{onClick:this.onCancel,children:"\u53d6\u6d88"})]})]})})}}]),a}(r.Component),v=O,u=a.p+"static/media/list-bottom.5389dd50.svg",x=a.p+"static/media/template-market.b6765c6d.svg",f=a.p+"static/media/datasource.7f397ca1.svg",g=a.p+"static/media/list-del.19d35f77.svg",C=a.p+"static/media/list-display.31b224dd.svg",w=a.p+"static/media/list-edit.ce8d908b.svg",N=a.p+"static/media/list-clone.1586d6b1.svg",y=a(248),k=a(296),D=a(253),I=a(210),S=a(329),L=a(479),T=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={showAddDialog:!1,showDelDialog:!1,showCloneDialog:!1,addNewData:{},data:[],imageIdToUrl:{}},e.toBeDelId="",e.toBeCloneId="",e.loadProjectList=function(){S.a.getInstance().scannerProjectOperators();var t=I.a.projectConfig.saveType,a=void 0===t?D.b.LOCAL:t;S.a.getInstance().abstractOperatorMap[a].getProjectSimpleInfoList().then((function(t){if(t&&t.length>0){e.setState({data:t});var a=[];t.forEach((function(e){var t=e.screenshot;t&&""!==t&&a.push(t)}));var n=a.map((function(e){return k.a.getImageFromLocalWithKey(e)})),c={};Promise.all(n).then((function(t){t.forEach((function(e){var t=Object.keys(e)[0];c[t]=e[t]})),e.setState({imageIdToUrl:c})}))}}))},e.toggleNewProVisible=function(){var t=e.state.addNewScreen;e.setState({addNewScreen:!t})},e.onOk=function(t){var a=Object(y.b)(Object(c.a)(Object(c.a)({},t),{action:"create"}));e.setState({addNewScreen:!1}),window.open("/light-chaser-app/#/designer?".concat(a),"_blank")},e.onCancel=function(){return e.setState({addNewScreen:!1})},e.operateHandler=function(t){var a=t.target.dataset,n=a.type,c=a.savetype;if(n){var i=t.currentTarget.id;switch(n){case"edit":var s=Object(y.b)({id:i,action:"edit"});window.open("/light-chaser-app/#/designer?".concat(s),"_blank");break;case"show":window.open("/light-chaser-app/#/view?id=".concat(i,"&saveType=").concat(c,"&action=view"),"_blank");break;case"del":e.toBeDelId=i,e.setState({showDelDialog:!0});break;case"clone":e.toBeCloneId=i,e.setState({showCloneDialog:!0})}}},e.confirmDel=function(){S.a.getInstance().abstractOperatorMap[D.b.LOCAL].deleteProject(e.toBeDelId);var t=e.state.data;t=t.filter((function(t){return t.id!==e.toBeDelId})),e.setState({data:t,showDelDialog:!1})},e.cancelDel=function(){e.setState({showDelDialog:!1})},e.confirmClone=function(t){var a=S.a.getInstance().abstractOperatorMap[D.b.LOCAL];a.copyProject(e.toBeCloneId,t).then((function(t){a.getProjectSimpleInfoList().then((function(a){var i=a.filter((function(e){return e.id===t}));k.a.getImageFromLocalWithKey(i[0].screenshot).then((function(t){L.b.success("\u514b\u9686\u6210\u529f"),e.setState({data:[].concat(Object(n.a)(e.state.data),Object(n.a)(i)),imageIdToUrl:Object(c.a)(Object(c.a)({},e.state.imageIdToUrl),t),showCloneDialog:!1})}))}))}))},e.cancelClone=function(){e.setState({showCloneDialog:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadProjectList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.addNewScreen,n=t.data,c=t.imageIdToUrl,i=t.showDelDialog,s=t.showCloneDialog,o=(window.innerWidth-230-100)/5,l=o*(9/16);return Object(m.jsxs)("div",{className:"lc-console",children:[Object(m.jsx)("div",{className:"console-head",children:Object(m.jsx)("div",{className:"console-head-title",children:"LC \u63a7\u5236\u53f0"})}),Object(m.jsxs)("div",{className:"console-body",children:[Object(m.jsxs)("div",{className:"console-list",children:[Object(m.jsxs)("div",{className:"console-list-item",children:[Object(m.jsx)("div",{className:"item-icon",children:Object(m.jsx)("img",{src:u,alt:"\u9879\u76ee\u5217\u8868"})}),Object(m.jsx)("div",{className:"item-text",children:"\u9879\u76ee\u5217\u8868"})]}),Object(m.jsxs)("div",{className:"console-list-item",children:[Object(m.jsx)("div",{className:"item-icon",children:Object(m.jsx)("img",{src:f,alt:"\u6570\u636e\u6e90\u7ba1\u7406"})}),Object(m.jsx)("div",{className:"item-text",children:"\u6570\u636e\u6e90\u7ba1\u7406"})]}),Object(m.jsxs)("div",{className:"console-list-item",children:[Object(m.jsx)("div",{className:"item-icon",children:Object(m.jsx)("img",{src:x,alt:"\u6a21\u677f\u5e02\u573a"})}),Object(m.jsx)("div",{className:"item-text",children:"\u6a21\u677f\u5e02\u573a"})]})]}),Object(m.jsx)("div",{className:"console-content",children:Object(m.jsx)("div",{className:"content-body",children:Object(m.jsxs)("div",{className:"project-list",children:[Object(m.jsx)("div",{style:{width:o,height:l,margin:"0 20px 20px 0"},children:Object(m.jsx)(j.a,{onClick:this.toggleNewProVisible,style:{width:o,height:l,fontSize:20},children:"+ \u65b0\u5efa\u9879\u76ee"})}),n&&n.map((function(t){var a,n,i=c[null===t||void 0===t?void 0:t.screenshot];return t.state===D.a.DRAFT?(a="\u8349\u7a3f",n="#FFB800"):t.state===D.a.PUBLISH&&(a="\u5df2\u53d1\u5e03",n="#00CC66"),Object(m.jsxs)("div",{style:{width:o,height:l,backgroundImage:i&&"url(".concat(i,")")},onClick:e.operateHandler,id:t.id+"",className:"project-item",children:[Object(m.jsxs)("div",{className:"pro-list-content",style:{zIndex:1},children:[Object(m.jsx)("div",{className:"pro-content-title",children:null===t||void 0===t?void 0:t.name}),Object(m.jsxs)("div",{className:"pro-content-operates",children:[Object(m.jsx)("div",{className:"operate-item","data-type":"edit",children:Object(m.jsx)("img",{src:w,alt:"\u7f16\u8f91"})}),Object(m.jsx)("div",{className:"operate-item","data-type":"show","data-savetype":t.saveType,children:Object(m.jsx)("img",{src:C,alt:"\u5c55\u793a"})}),Object(m.jsx)("div",{className:"operate-item","data-type":"del",children:Object(m.jsx)("img",{src:g,alt:"\u5220\u9664"})}),Object(m.jsx)("div",{className:"operate-item","data-type":"clone",children:Object(m.jsx)("img",{src:N,alt:"\u514b\u9686"})})]})]}),Object(m.jsxs)("div",{className:"pro-content-footer",children:[Object(m.jsx)("div",{className:"state-point",style:{backgroundColor:n}}),Object(m.jsx)("div",{className:"state-text",style:{color:n},children:a})]})]},t.id+"")}))]})})})]}),Object(m.jsx)(v,{onOk:this.onOk,onCancel:this.onCancel,visible:a}),Object(m.jsx)(P,{visible:i,onOk:this.confirmDel,onCancel:this.cancelDel}),Object(m.jsx)(B,{onOk:function(t){return e.confirmClone(t)},onCancel:this.cancelClone,visible:s})]})}}]),a}(r.Component),P=(t.default=T,function(e){var t=e.onOk,a=e.onCancel,n=e.visible;return Object(m.jsxs)(d.a,{title:"\u5220\u9664\u786e\u8ba4",visible:n,onClose:a,children:[Object(m.jsx)("div",{style:{color:"#aeaeae",padding:10},children:"\u786e\u5b9a\u8981\u5220\u9664\u8be5\u9879\u76ee\u5417\uff1f"}),Object(m.jsxs)("div",{className:"del-pro-confirm",style:{display:"flex",justifyContent:"flex-end",borderTop:"2px solid #272b34",paddingTop:5},children:[Object(m.jsx)(j.a,{onClick:t,children:"\u786e\u8ba4"}),Object(m.jsx)(j.a,{onClick:a,children:"\u53d6\u6d88"})]})]})}),B=function(e){var t=e.onOk,a=e.onCancel,n=e.visible,c="";return Object(m.jsx)(d.a,{title:"\u514b\u9686\u9879\u76ee",visible:n,onClose:a,children:Object(m.jsxs)("form",{onSubmit:function(e){console.log(c),e.preventDefault(),t(c)},children:[Object(m.jsx)(h.a,{label:"\u9879\u76ee\u540d\u79f0",required:!0,defaultValue:c,onChange:function(e){return c=e}}),Object(m.jsxs)("div",{className:"del-pro-confirm",style:{display:"flex",justifyContent:"flex-end",borderTop:"2px solid #272b34",paddingTop:10},children:[Object(m.jsx)(j.a,{type:"submit",children:"\u786e\u8ba4"}),Object(m.jsx)(j.a,{onClick:a,children:"\u53d6\u6d88"})]})]})})}}}]);
import{S as w}from"./index-sPMe31k_.js";import{AntdBaseDesignerController as E}from"./AntdBaseDesignerController-Vb_0FpH4.js";import"./index-OsS9UfkW.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-K2O65-hP.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";class f extends E{async create(r,i){await super.commonCreate(r,w,i)}destroy(){this.instance.destroy(),this.instance=null,this.config=null,this.interval&&clearInterval(this.interval)}getConfig(){return this.config}update(r,i){super.commonUpdate(r,w,i)}updateTheme(r){var A,m,a,l,c,p,d,u,k,b,h,L,T,S,v,n,o,N,B,D,F,I,R,U,j,q;if(!r)return;const i=(A=this.config)==null?void 0:A.style,{colors:{main:z,mainText:t,supplementSecond:x,supplementFirst:e,subText:s}}=r;i!=null&&i.color&&(i.color=[z,t,s,e,x]),i.legend&&((m=i.legend.itemName)!=null&&m.style)&&(i.legend.itemName.style.fill=t),i!=null&&i.xAxis&&((l=(a=i==null?void 0:i.xAxis)==null?void 0:a.label)!=null&&l.style)&&(i.xAxis.label.style.fill=s),i!=null&&i.xAxis&&((c=i==null?void 0:i.xAxis)!=null&&c.title)&&(i.xAxis.title.style.fill=t),i!=null&&i.xAxis&&((d=(p=i==null?void 0:i.xAxis)==null?void 0:p.line)!=null&&d.style)&&(i.xAxis.line.style.stroke=e),i!=null&&i.xAxis&&((b=(k=(u=i==null?void 0:i.xAxis)==null?void 0:u.grid)==null?void 0:k.line)!=null&&b.style)&&(i.xAxis.grid.line.style.stroke=e),i!=null&&i.xAxis&&((L=(h=i==null?void 0:i.xAxis)==null?void 0:h.tickLine)!=null&&L.style)&&(i.xAxis.tickLine.style.stroke=e),i!=null&&i.xAxis&&((S=(T=i==null?void 0:i.xAxis)==null?void 0:T.subTickLine)!=null&&S.style)&&(i.xAxis.subTickLine.style.stroke=x),i!=null&&i.yAxis&&((n=(v=i==null?void 0:i.yAxis)==null?void 0:v.label)!=null&&n.style)&&(i.yAxis.label.style.fill=s),i!=null&&i.yAxis&&((o=i==null?void 0:i.yAxis)!=null&&o.title)&&(i.yAxis.title.style.fill=t),i!=null&&i.yAxis&&((B=(N=i==null?void 0:i.yAxis)==null?void 0:N.line)!=null&&B.style)&&(i.yAxis.line.style.stroke=e),i!=null&&i.yAxis&&((I=(F=(D=i==null?void 0:i.yAxis)==null?void 0:D.grid)==null?void 0:F.line)!=null&&I.style)&&(i.yAxis.grid.line.style.stroke=e),i!=null&&i.yAxis&&((U=(R=i==null?void 0:i.yAxis)==null?void 0:R.tickLine)!=null&&U.style)&&(i.yAxis.tickLine.style.stroke=e),i!=null&&i.yAxis&&((q=(j=i==null?void 0:i.yAxis)==null?void 0:j.subTickLine)!=null&&q.style)&&(i.yAxis.subTickLine.style.stroke=x),this.update({style:i},{reRender:!0})}}export{f as default};
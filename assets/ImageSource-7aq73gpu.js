import{r as p,j as a}from"./index-9HRRaiAT.js";import{aW as M,j as A,U as x,o as y,e as I,l as C,aX as S}from"./LayerManager-VZvizn0l.js";import{D as B}from"./DragAddProvider-_IIQLnDx.js";import{P as E,M as R}from"./DesignerPage-NWfRyIc9.js";import{Q as O}from"./Button-I8g-a3mm.js";import"./Dialog-zSzMu_Kg.js";import"./MainRouter-RJOuNalv.js";import"./AntdIcon-HHnanCFf.js";import"./useZIndex-jf7RdiJ7.js";import"./Overflow-cY8uLRw2.js";import"./GlobalMessage-YmTFHLN4.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-QZecLODC.js";import"./Switch-nY0zP6zi.js";import"./Radio-uKn8r_jl.js";import"./ColorPicker-CILYDljY.js";import"./CardPanel-EF85JJoG.js";import"./Grid-9fFUumjJ.js";import"./LayerBuilder-JsSE65Wx.js";import"./EyeFilled-2zd9K_Tr.js";import"./MonacoEditor-ELVUROvw.js";import"./PlusOutlined-nWJHgaxP.js";import"./useForceUpdate-_eu-TMHr.js";import"./PlusOutlined-VdblB-UP.js";import"./NumberInput-Ol6JprMQ.js";import"./Select-exgMy8cK.js";import"./AlertOutlined-m16H3Sx3.js";function de(){const[j,v]=p.useState([]),g=p.useRef(null),D=e=>{var t,r;if(e.target.classList.contains("droppable-element")){const i=e.target;(t=e.dataTransfer)==null||t.setData("imageUrl",i.getAttribute("data-url")),(r=e.dataTransfer)==null||r.setData("imageHash",i.getAttribute("data-hash"))}},b=e=>{e.preventDefault()},N=e=>{var m,d;e.preventDefault();const t=(m=e.dataTransfer)==null?void 0:m.getData("imageUrl"),r=(d=e.dataTransfer)==null?void 0:d.getData("imageHash");if(!t)return;const{scale:i,dsContentRef:o}=I,s=o==null?void 0:o.getBoundingClientRect(),l=(e.clientX-((s==null?void 0:s.x)||0))/i,n=(e.clientY-((s==null?void 0:s.y)||0))/i;T("BaseImage",[l,n],t,r)},T=(e,t=[0,0],r,i)=>{const{elemConfigs:o}=C;let{setAddRecordCompId:s}=I;const{definitionMap:l}=S,n=l[e],{compName:m,width:d=320,height:L=200}=n.getBaseInfo(),h=M.generateId(),f={name:m,type:e,x:Math.round(t[0]),y:Math.round(t[1]),id:h,lock:!1,hide:!1,width:d,height:L};s(f.id),A.doAdd(f);const c=n.getInitConfig();c.style.type="local",c.style.localUrl=r,c.style.hash=i,o[h]=c},u=()=>{const{saveType:e,id:t}=x.parseUrlParams();y[e].getImageSourceList(t).then(r=>{v(r)})};p.useEffect(()=>(u(),g.current=new B(document.getElementById("image-source-list"),document.getElementById("designer-ds-content"),D,b,N),()=>{var e;return(e=g.current)==null?void 0:e.destroy()}),[]);const U=e=>{const{saveType:t}=x.parseUrlParams();y[t].delImageSource(e).then(r=>{r&&u()})};return a.jsx("div",{className:"image-source",children:a.jsx("div",{className:"image-source-list",id:"image-source-list",children:j.map((e,t)=>a.jsxs("div",{className:"image-source-item droppable-element",draggable:!0,"data-url":e.url,"data-hash":e.hash,children:[a.jsxs("div",{className:"image-source-item-header",children:[a.jsx("div",{className:"isi-title",children:e.name||"无名称信息"}),a.jsx("div",{className:"isi-operate",children:a.jsx(E,{title:"确认删除吗?",icon:a.jsx(O,{style:{color:"red"}}),description:"可能会导致已经使用的图片组件失效!",onConfirm:()=>U(e.id),okText:"是",cancelText:"否",children:a.jsx(R,{})})})]}),a.jsx("div",{className:"image-source-item-body",children:a.jsx("div",{className:"item-bg-image",style:{backgroundImage:`url(${e.url})`}})})]},t))})})}export{de as default};
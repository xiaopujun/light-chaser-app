import{r as t,_ as d,j as r,L as a}from"./index-9HRRaiAT.js";import{D as l,a as c,l as g,d as f,c as u,U as v}from"./LayerManager-VZvizn0l.js";import{o as x}from"./Dialog-zSzMu_Kg.js";import{l as y}from"./LayerBuilder-JsSE65Wx.js";import"./AntdIcon-HHnanCFf.js";import"./MainRouter-RJOuNalv.js";import"./useZIndex-jf7RdiJ7.js";import"./FetchUtil-Ivd_z0Im.js";import"./Accordion-QZecLODC.js";import"./Switch-nY0zP6zi.js";import"./Button-I8g-a3mm.js";import"./Radio-uKn8r_jl.js";import"./GlobalMessage-YmTFHLN4.js";import"./ColorPicker-CILYDljY.js";import"./Overflow-cY8uLRw2.js";import"./CardPanel-EF85JJoG.js";import"./Grid-9fFUumjJ.js";import"./EyeFilled-2zd9K_Tr.js";const j=t.lazy(()=>d(()=>import("./ScreenFit-BE42PefP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),_=x(e=>{const{id:o,type:n}=e;t.useEffect(()=>{l.getLoader(c.VIEW).load(o,n)},[]);const{layerConfigs:p}=g,{loaded:m}=f,{canvasConfig:{width:i,height:s}}=u;return m?r.jsx(t.Suspense,{fallback:r.jsx(a,{}),children:r.jsx(j,{width:i,height:s,children:r.jsx("div",{style:{width:i,height:s,background:"black",overflow:"hidden",position:"relative"},children:y.buildCanvasComponents(p)})})}):r.jsx(a,{})}),h=_;function B(){const{saveType:e,id:o}=v.parseUrlParams();return r.jsx(h,{id:o,type:e})}export{B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ScreenFit-BE42PefP.js","assets/index-9HRRaiAT.js","assets/index-IyM4ICh1.css","assets/Dialog-zSzMu_Kg.js","assets/MainRouter-RJOuNalv.js","assets/MainRouter-KAAIpN4X.css","assets/AntdIcon-HHnanCFf.js","assets/useZIndex-jf7RdiJ7.js","assets/Overflow-cY8uLRw2.js","assets/GlobalMessage-YmTFHLN4.js","assets/Dialog-IKScJss1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as e,_ as i}from"./index-OsS9UfkW.js";import r from"./AntdGaugeController-t403V2rL.js";import{A as n}from"./AbstractDesignerDefinition-DDM0UTNU.js";import"./index-sPMe31k_.js";import"./AntdBaseDesignerController-Vb_0FpH4.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-K2O65-hP.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./SettingOne-xM8hO7YS.js";import"./Optimize-YUjdtYCD.js";import"./Data-pPdI-aL-.js";import"./ColorFilter-ddOi3CZ0.js";import"./Theme-XU3oEXi4.js";const o="/light-chaser-app/assets/gauge-2HjQIWKp.png",a=e.lazy(()=>i(()=>import("./AntdGaugeConfig-dXxGrkZa.js"),__vite__mapDeps([0,1,2,3])));class T extends n{getController(){return r}getMenuToConfigContentMap(){const t=super.getMenuToConfigContentMap();return t.style=a,t}getBaseInfo(){return{compName:"Antd仪表盘",compKey:"AntdGauge",categorize:"chart",subCategorize:"progress"}}getChartImg(){return o}getInitConfig(){return{base:{id:"",name:"Antd仪表盘",type:"AntdGauge"},style:{percent:.75,radius:.75,innerRadius:.95,startAngle:-7/6*Math.PI,endAngle:1/6*Math.PI,range:{color:["#6bc2ff","#5d9eff59"]},indicator:{pointer:{style:{stroke:"#37b3ff",lineWidth:2}},pin:{style:{stroke:"#37b3ff",fill:"#053b5d",r:2,lineWidth:2}}},axis:{tickLine:{style:{stroke:"#89d2ff",lineWidth:1},length:-4},subTickLine:{count:11,style:{stroke:"#2caaff",lineWidth:1},length:-2},label:{style:{fill:"#69c6ff",fontSize:12,textAlign:"center",textBaseline:"middle"}}},statistic:{content:{style:{color:"#49c1ff",fontSize:"11px"}}},animation:{appear:{animation:"grow-in-x",duration:3e3},update:{animation:"grow-in-x",duration:3e3}}},filter:{enable:!1,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:"static",staticData:.75}}}}export{T as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AntdGaugeConfig-dXxGrkZa.js","assets/index-OsS9UfkW.js","assets/index-IyM4ICh1.css","assets/LCGUI-GANd_WR1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
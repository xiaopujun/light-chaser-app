import e from"./AbstractColumnDefinition-zXvZw77Q.js";import"./index-OsS9UfkW.js";import"./util-L56dy1y6.js";import"./SettingOne-xM8hO7YS.js";import"./index-K2O65-hP.js";import"./Optimize-YUjdtYCD.js";import"./Deeplink-xMvyLSBR.js";import"./ColorFilter-ddOi3CZ0.js";import"./Data-pPdI-aL-.js";import"./Theme-XU3oEXi4.js";import"./AntdCommonColumnController-PiU0CUIW.js";import"./index-sPMe31k_.js";import"./AntdBaseDesignerController-Vb_0FpH4.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./AntdCommonDefinition-Zwy5qWam.js";const i="/light-chaser-app/assets/stack-column-vyea8mUD.png";class I extends e{getBaseInfo(){return{compName:"Antd堆叠柱状图",compKey:"AntdStackColumn",categorize:"chart",subCategorize:"column"}}getChartImg(){return i}getInitConfig(){const t=[{year:"1991",value:3,type:"Lon"},{year:"1992",value:4,type:"Lon"},{year:"1993",value:3.5,type:"Lon"},{year:"1991",value:3,type:"Bor"},{year:"1992",value:4,type:"Bor"},{year:"1993",value:3.5,type:"Bor"}];return{base:{id:"",name:"Antd堆叠柱状图",type:"AntdStackColumn"},style:{data:t,xField:"year",yField:"value",seriesField:"type",isStack:!0,maxColumnWidth:8,supportCSSTransform:!0,color:["#00c0df","#298aff"],columnStyle:{},xAxis:{grid:null,label:{style:{fill:"#c7c7c7ff",fontSize:10}},line:null,tickLine:null,subTickLine:null,position:"left",title:null},yAxis:{grid:null,label:{style:{fill:"#b7b7b7ff"}},line:{style:{stroke:"#9e9e9e75",lineWidth:1}},tickLine:null,subTickLine:null,position:"bottom",title:null},legend:{position:"top",layout:"horizontal",itemName:{style:{fill:"#aaaaaaff",fontSize:12}}},animation:{appear:{animation:"scale-in-y",duration:3e3}}},data:{sourceType:"static",staticData:t}}}}export{I as default};
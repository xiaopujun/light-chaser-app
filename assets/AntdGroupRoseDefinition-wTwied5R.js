import e from"./AbstractRoseDefinition-e5WZa5Va.js";import"./index-OsS9UfkW.js";import"./util-L56dy1y6.js";import"./SettingOne-xM8hO7YS.js";import"./index-K2O65-hP.js";import"./Optimize-YUjdtYCD.js";import"./Deeplink-xMvyLSBR.js";import"./ColorFilter-ddOi3CZ0.js";import"./Data-pPdI-aL-.js";import"./Theme-XU3oEXi4.js";import"./AntdCommonRoseController-ICAaXy_I.js";import"./index-sPMe31k_.js";import"./AntdBaseDesignerController-Vb_0FpH4.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./AntdCommonDefinition-Zwy5qWam.js";const r="/light-chaser-app/assets/group-rose-vO5lvahu.png";class G extends e{getBaseInfo(){return{compName:"Antd分组玫瑰图",compKey:"AntdGroupRose",categorize:"chart",subCategorize:"rose"}}getChartImg(){return r}getInitConfig(){const t=[{type:"sort1",value:27,user:"user1"},{type:"sort2",value:25,user:"user2"},{type:"sort3",value:18,user:"user1"},{type:"sort4",value:15,user:"user2"},{type:"sort5",value:18,user:"user1"},{type:"sort6",value:20,user:"user2"}];return{base:{id:"",name:"Antd基础玫瑰图",type:"AntdBaseRose"},style:{data:t,xField:"type",yField:"value",isGroup:!0,seriesField:"user",padding:[60,0,0,0],radius:.8,innerRadius:0,startAngle:0,endAngle:2*Math.PI,label:{offset:14,style:{fill:"#aaaaaaff"}},legend:{position:"top",layout:"horizontal",itemName:{style:{fill:"#a8a8a8ff",fontSize:12}}},supportCSSTransform:!0,animation:{appear:{animation:"grow-in-xy",duration:3e3}},color:["#00b7ffff","#81dbffff"],sectorStyle:{lineWidth:0}},data:{sourceType:"static",staticData:t}}}}export{G as default};
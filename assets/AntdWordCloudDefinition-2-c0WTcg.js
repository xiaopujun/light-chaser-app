import v from"./AntdWordCloudController-s68IYdK4.js";import{j as u}from"./index-OsS9UfkW.js";import y from"./AntdCommonUtil-n1O0a4X_.js";import{L as p}from"./LCGUI-GANd_WR1.js";import{A as b}from"./AbstractDesignerDefinition-DDM0UTNU.js";import{D as C}from"./Deeplink-xMvyLSBR.js";import"./index-sPMe31k_.js";import"./AntdBaseDesignerController-Vb_0FpH4.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-K2O65-hP.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./SettingOne-xM8hO7YS.js";import"./Optimize-YUjdtYCD.js";import"./Data-pPdI-aL-.js";import"./ColorFilter-ddOi3CZ0.js";import"./Theme-XU3oEXi4.js";const h="/light-chaser-app/assets/word-cloud-XRdg6nIQ.png",k=o=>{var n,i,r,m;const{controller:t}=o,{style:e}=t.getConfig(),a={type:"grid",key:"style",config:{columns:2},children:[{type:"input",label:"遮罩",key:"imageMask",value:e==null?void 0:e.imageMask,config:{containerStyle:{gridColumn:"1/3",marginBottom:"10px"}}},{type:"color-mode",key:"color",label:"颜色",value:e==null?void 0:e.color,config:{containerStyle:{gridColumn:"1/3"}}},{id:"randomPosition",type:"switch",key:"random",label:"随机",tip:"开启后词云图每次更新数据，词语位置随机展示",value:typeof(e==null?void 0:e.random)!="number"},{key:"spiral",type:"select",label:"形状",value:e==null?void 0:e.spiral,config:{options:[{label:"椭圆",value:"archimedean"},{label:"矩形",value:"rectangular"}]}},{key:"wordStyle",children:[{type:"select",key:"fontFamily",label:"字体",value:(n=e==null?void 0:e.wordStyle)==null?void 0:n.fontFamily,config:{options:[{label:"钉钉进步体",value:"DingTalk JinBuTi"},{label:"抖音美好体",value:"DouyinSansBold"},{label:"优设标题黑",value:"优设标题黑"},{label:"庞门正道标题",value:"庞门正道标题体免费版"}]}},{key:"fontWeight",type:"number-input",label:"粗细",value:((i=e==null?void 0:e.wordStyle)==null?void 0:i.fontWeight)||500,config:{min:100,max:900,step:100}},{key:"fontSize",type:"range-slider",label:"字号",value:(r=e==null?void 0:e.wordStyle)==null?void 0:r.fontSize,config:{min:0}},{key:"padding",type:"number-input",label:"间距",value:(m=e==null?void 0:e.wordStyle)==null?void 0:m.padding,config:{min:0}}]}]},l=d=>{const{dataFragment:c,data:s,id:g}=d;if(g==="randomPosition"){const f=s?void 0:.5;t.update({style:{random:f}})}else t.update(c)};return u.jsx(p,{schema:a,onFieldChange:l})},F=o=>{const{controller:t}=o,e=y.getDataFieldOptions(t),{style:a}=t.getConfig(),l={type:"grid",key:"style",config:{columns:2},children:[{type:"select",label:"颜色字段",key:"colorField",value:a==null?void 0:a.colorField,config:{options:e}},{type:"select",label:"权重字段",key:"weightField",value:a==null?void 0:a.weightField,config:{options:e}},{type:"select",label:"内容字段",key:"wordField",value:a==null?void 0:a.wordField,config:{options:e}}]},n=i=>{const{dataFragment:r}=i;t.update(r)};return u.jsx(p,{schema:l,onFieldChange:n})};class X extends b{getBaseInfo(){return{compName:"Antd词云图",compKey:"AntdWordCloud",categorize:"chart",subCategorize:"wordCloud"}}getController(){return v}getMenuList(){const t=super.getMenuList();return t.splice(3,0,{icon:C,name:"映射",key:"mapping"}),t}getChartImg(){return h}getMenuToConfigContentMap(){const t=super.getMenuToConfigContentMap();return t.style=k,t.mapping=F,t}getInitConfig(){const t=[{value:9,name:"AntV"},{value:8,name:"F2"},{value:8,name:"G2"},{value:8,name:"G6"},{value:8,name:"DataSet"},{value:8,name:"墨者学院"},{value:6,name:"Analysis"},{value:6,name:"Data Mining"},{value:6,name:"Data Vis"},{value:6,name:"Design"},{value:6,name:"Grammar"},{value:6,name:"Graphics"},{value:6,name:"Graph"},{value:6,name:"Hierarchy"},{value:6,name:"Labeling"},{value:6,name:"Layout"},{value:6,name:"Quantitative"}];return{base:{id:"",name:"基础面积图",type:"AntdBaseWordCloud"},style:{data:t,wordField:"name",weightField:"value",colorField:"name",supportCSSTransform:!0,spiral:"rectangular",wordStyle:{fontFamily:"优设标题黑",fontWeight:500,fontSize:[8,32],rotation:0,padding:1}},filter:{enable:!1,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0},data:{sourceType:"static",staticData:t}}}}export{X as default};
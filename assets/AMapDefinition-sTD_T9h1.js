import{r as l,j as d,R as r,_ as n}from"./index-OsS9UfkW.js";import{AMapController as y}from"./AMapController-gaYvQIgP.js";import{L as g}from"./LCGUI-GANd_WR1.js";import{A as f}from"./AbstractDesignerDefinition-DDM0UTNU.js";import"./AMapScaleObserver-CbK9Z4xK.js";import"./ScaleAction-O7o3lc4T.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./MapLoader-ChbldQan.js";import"./FontGlobal-I0xzNbJH.js";import"./LayerManager-yWnDoBOm.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-K2O65-hP.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./FetchUtil-Ivd_z0Im.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./SettingOne-xM8hO7YS.js";import"./Optimize-YUjdtYCD.js";import"./Data-pPdI-aL-.js";import"./ColorFilter-ddOi3CZ0.js";import"./Theme-XU3oEXi4.js";const _="/light-chaser-app/assets/a-map-IlIujPqK.png",C=({controller:e})=>{var i;const t=(i=e.getConfig())==null?void 0:i.style,o=l.useRef((t==null?void 0:t.customCode)||`function(container, AMap) {







}`),s=m=>{const{id:a,data:c,dataFragment:u}=m;if(a==="customCode"){o.current=c;return}a==="refreshMap"?e.update({style:{customCode:o.current}}):e.update(u)},p={key:"style",type:"grid",children:[{type:"input",label:"KEY",key:"key",value:t==null?void 0:t.key},{type:"input",label:"密钥",key:"securityJsCode",value:t==null?void 0:t.securityJsCode,config:{type:"password"}},{type:"card-panel",config:{contentStyle:{padding:0}},children:[{id:"customCode",type:"code-editor",value:o.current,config:{language:"javascript",height:600}}]},{type:"button",id:"refreshMap",config:{children:"刷新地图",style:{width:"100%"}}}]};return d.jsx(g,{schema:p,onFieldChange:s})},h=r.lazy(()=>n(()=>import("./BaseInfo-mKTyYi5H.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),M=r.lazy(()=>n(()=>import("./ThemeConfig-9bG7Ns59.js"),__vite__mapDeps([19,1,2,20,6,21,22,23,24,25,10,26,11,27,28,29,30,31,32,9,33,34,35,36,37,4,3,5,7,8,12,13,38,39,40,41,42,43,44,45,46]))),A=r.lazy(()=>n(()=>import("./AnimationConfig-mDRJMCuB.js"),__vite__mapDeps([47,1,2,48]))),v=r.lazy(()=>n(()=>import("./FilterConfig-P506txzv.js"),__vite__mapDeps([49,1,2,14,5,50])));class Y extends f{getBaseInfo(){return{compName:"自定义高德地图",compKey:"AMap",categorize:"map"}}getChartImg(){return _}getController(){return y}getInitConfig(){return{base:{id:"",name:"自定义高德地图",type:"AMap"},style:{key:"",securityJsCode:"",customCode:`function(container, AMap, bpTriggers) {
    let map = new AMap.Map(container, {
        zoom: 11.43,
        center: [120.2446746826172, 30.199146446037616],
        pitch: 55,
        rotation: 20,
        showLabel: true,
        viewMode: '3D',
        mapStyle: 'amap://styles/dark',
    });
    return map;
}`},filter:{enable:!1,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0}}}getMenuList(){return super.getMenuList().filter(t=>t.key!=="theme"&&t.key!=="data")}getMenuToConfigContentMap(){return{base:h,style:C,animation:A,theme:M,filter:v}}getEventList(){return super.getEventList().concat([{id:"click",name:"点击时"}])}}export{Y as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseInfo-mKTyYi5H.js","assets/index-OsS9UfkW.js","assets/index-IyM4ICh1.css","assets/LayerManager-yWnDoBOm.js","assets/mobxreact.esm-rNVktGB7.js","assets/ObjectUtil-nMvTrJhh.js","assets/index-K2O65-hP.js","assets/index-APrWN4Qi.js","assets/LocalOperator-BbYzoZ36.js","assets/GlobalMessage-FQtvcjbG.js","assets/MainRouter-Z3gK7D7G.js","assets/useZIndex-g2cfol2D.js","assets/FetchUtil-Ivd_z0Im.js","assets/LayerManager-V988xSA9.css","assets/LCGUI-GANd_WR1.js","assets/BaseInfoStore-VzdD0w4k.js","assets/AlignVerticalCenterTwo-VMNHMjLd.js","assets/Info-a_timmp6.js","assets/BaseInfo-7tXTZcyW.css","assets/ThemeConfig-9bG7Ns59.js","assets/Dialog-BERcuBcz.js","assets/Dialog-IKScJss1.css","assets/ThemeEditor-tlpmIS3d.js","assets/ColorPicker-Zriz_5ra.js","assets/UIContainer-QUMruXjD.js","assets/index-hcrqZ8so.js","assets/ResizeObserver.es-B32NGzNS.js","assets/Help-EfSmZBRS.js","assets/UIContainer-2wM5o6qv.css","assets/index-p8ckIXOR.js","assets/CheckOutlined-r3grTFMw.js","assets/Overflow-UKUJyBo6.js","assets/omit--0Qnqbh8.js","assets/index-wIpC5sck.js","assets/index-4x1LRhOc.js","assets/EyeOutlined-32DaWiZk.js","assets/collapse-aS6vX33V.js","assets/ColorPicker-V9ASUd98.css","assets/CardPanel-UxpYECmD.js","assets/CardPanel-CjUkb6la.css","assets/Input-0x6URBKt.js","assets/Input-ulYyAdl_.css","assets/Grid-pJgl1oS6.js","assets/Grid-p4FjUlc6.css","assets/Button-tVc5ioar.js","assets/Button-Vi-JaWc8.css","assets/ThemeEditor-G8RSs6OM.css","assets/AnimationConfig-mDRJMCuB.js","assets/AnimationConfig-PWl4scXB.css","assets/FilterConfig-P506txzv.js","assets/FilterConfig-BDlFlVfy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as l,j as d,R as n,_ as r}from"./index-CIZzpp4t.js";import{AMapController as y}from"./AMapController-Lh25vXZj.js";import{L as g}from"./LCGUI-KhPNl-Yd.js";import{A as f}from"./AbstractDesignerDefinition-TZiOBB7o.js";import"./AMapScaleObserver-CbK9Z4xK.js";import"./ScaleAction-O7o3lc4T.js";import"./GlobalMessage-b_IUatJJ.js";import"./MainRouter-LJqlNU58.js";import"./useZIndex-C48Dwtsu.js";import"./MapLoader-vz3ubJEQ.js";import"./FontGlobal-OJzIEJBO.js";import"./LayerManager-9_OZ_v7l.js";import"./mobxreact.esm-QmaNsbsC.js";import"./FetchUtil-FMEOVjjY.js";import"./index-PQsxm07c.js";import"./index-Ky8VuNT2.js";import"./PreviewOpen-ZH2J-uf_.js";import"./SettingOne-r_dAPHom.js";import"./Optimize-UHrB4Jap.js";import"./Data-KlI0SKS_.js";import"./ColorFilter-lp84y7G0.js";import"./Theme-80el66_R.js";const _="/light-chaser-app/assets/a-map-IlIujPqK.png",C=({controller:e})=>{var a;const t=(a=e.getConfig())==null?void 0:a.style,o=l.useRef((t==null?void 0:t.customCode)||`function(container, AMap) {







}`),s=m=>{const{id:i,data:c,dataFragment:u}=m;if(i==="customCode"){o.current=c;return}i==="refreshMap"?e.update({style:{customCode:o.current}}):e.update(u)},p={key:"style",type:"grid",children:[{type:"input",label:"KEY",key:"key",value:t==null?void 0:t.key},{type:"input",label:"密钥",key:"securityJsCode",value:t==null?void 0:t.securityJsCode,config:{type:"password"}},{type:"card-panel",config:{contentStyle:{padding:0}},children:[{id:"customCode",type:"code-editor",value:o.current,config:{language:"javascript",height:600}}]},{type:"button",id:"refreshMap",config:{children:"刷新地图",style:{width:"100%"}}}]};return d.jsx(g,{schema:p,onFieldChange:s})},h=n.lazy(()=>r(()=>import("./BaseInfo-eOP_lIJq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),M=n.lazy(()=>r(()=>import("./ThemeConfig-e1ASU2OC.js"),__vite__mapDeps([17,1,2,18,6,19,20,21,22,23,9,24,10,25,26,27,28,29,30,8,31,32,33,34,35,4,3,5,7,11,36,37,38,39,40,41,42,43,44]))),A=n.lazy(()=>r(()=>import("./AnimationConfig-4enkt7em.js"),__vite__mapDeps([45,1,2,46]))),v=n.lazy(()=>r(()=>import("./FilterConfig-WKUjE5wH.js"),__vite__mapDeps([47,1,2,12,5,48])));class N extends f{getBaseInfo(){return{compName:"自定义高德地图",compKey:"AMap",categorize:"map"}}getChartImg(){return _}getController(){return y}getInitConfig(){return{base:{id:"",name:"自定义高德地图",type:"AMap"},style:{key:"",securityJsCode:"",customCode:`function(container, AMap, bpTriggers) {
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
}`},filter:{enable:!1,blur:0,brightness:1,contrast:1,opacity:1,saturate:1,hueRotate:0}}}getMenuList(){return super.getMenuList().filter(t=>t.key!=="theme"&&t.key!=="data")}getMenuToConfigContentMap(){return{base:h,style:C,animation:A,theme:M,filter:v}}getEventList(){return super.getEventList().concat([{id:"click",name:"点击时"}])}}export{N as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseInfo-eOP_lIJq.js","assets/index-CIZzpp4t.js","assets/index-IyM4ICh1.css","assets/LayerManager-9_OZ_v7l.js","assets/mobxreact.esm-QmaNsbsC.js","assets/FetchUtil-FMEOVjjY.js","assets/index-PQsxm07c.js","assets/index-Ky8VuNT2.js","assets/GlobalMessage-b_IUatJJ.js","assets/MainRouter-LJqlNU58.js","assets/useZIndex-C48Dwtsu.js","assets/LayerManager-V988xSA9.css","assets/LCGUI-KhPNl-Yd.js","assets/BaseInfoStore-AycIuJ-7.js","assets/AlignVerticalCenterTwo-5iGa1reK.js","assets/Info-zCxj-AqR.js","assets/BaseInfo-7tXTZcyW.css","assets/ThemeConfig-e1ASU2OC.js","assets/Dialog-ghulqU4P.js","assets/Dialog-IKScJss1.css","assets/ThemeEditor-qDaqfJ0b.js","assets/ColorPicker-03QYOEOg.js","assets/UIContainer-NEWVGUQ0.js","assets/index-za7E6pLK.js","assets/ResizeObserver.es-B32NGzNS.js","assets/Help-nAWCz3FQ.js","assets/UIContainer-2wM5o6qv.css","assets/index-ZwO4HOcB.js","assets/CheckOutlined-nCXWjWxa.js","assets/Overflow-BoBVZI_w.js","assets/omit-avBY8roT.js","assets/index-1tJ-Ni-s.js","assets/index-oAg62ljS.js","assets/EyeOutlined-c7TT5NI5.js","assets/collapse-aS6vX33V.js","assets/ColorPicker-V9ASUd98.css","assets/CardPanel-wZh9GTN_.js","assets/CardPanel-CjUkb6la.css","assets/Input-y8ttkQ4v.js","assets/Input-ulYyAdl_.css","assets/Grid-Ng_M152z.js","assets/Grid-p4FjUlc6.css","assets/Button-DQqSxazJ.js","assets/Button-Vi-JaWc8.css","assets/ThemeEditor-G8RSs6OM.css","assets/AnimationConfig-4enkt7em.js","assets/AnimationConfig-PWl4scXB.css","assets/FilterConfig-WKUjE5wH.js","assets/FilterConfig-BDlFlVfy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
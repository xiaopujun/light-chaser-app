import{R as React,r as reactExports,j as jsxRuntimeExports}from"./index-OsS9UfkW.js";import AMapScaleObserver from"./AMapScaleObserver-CbK9Z4xK.js";import{g as globalMessage}from"./GlobalMessage-FQtvcjbG.js";import mapLoader from"./MapLoader-ChbldQan.js";import{A as AbstractDesignerController,B as BPExecutor}from"./FontGlobal-I0xzNbJH.js";import{C as ComponentUtil}from"./LayerManager-yWnDoBOm.js";import{O as ObjectUtil}from"./ObjectUtil-nMvTrJhh.js";import"./ScaleAction-O7o3lc4T.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./mobxreact.esm-rNVktGB7.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./index-K2O65-hP.js";import"./LocalOperator-BbYzoZ36.js";import"./FetchUtil-Ivd_z0Im.js";import"./index-APrWN4Qi.js";const AMapComponent=React.forwardRef((props,ref)=>{var o,t;const[config,setConfig]=reactExports.useState({...props}),mapContainerRef=reactExports.useRef(null),mapRef=reactExports.useRef(),eventHandlerMap=reactExports.useRef({});return reactExports.useImperativeHandle(ref,()=>({updateConfig:e=>setConfig({...e}),setEventHandler:e=>eventHandlerMap.current=e,map:mapRef})),reactExports.useEffect(()=>{new AMapScaleObserver(mapContainerRef.current)},[]),reactExports.useEffect(()=>{const{key,securityJsCode}=config.style;mapLoader.load(key,securityJsCode).then(AMap=>{var e,r;if(!AMap)return;const code=(e=config.style)==null?void 0:e.customCode,fun=eval(`(${code})`);typeof fun=="function"?mapRef.current=fun(mapContainerRef.current,AMap,eventHandlerMap):(r=globalMessage.messageApi)==null||r.error("自定义代码错误,请检查")})},[config]),jsxRuntimeExports.jsx("div",{className:"a-map",ref:mapContainerRef,children:(o=config.style)!=null&&o.key&&((t=config.style)!=null&&t.securityJsCode)?void 0:jsxRuntimeExports.jsx("div",{className:"no-key-message",style:{display:"flex",alignItems:"center"},children:"请配置Key和密钥"})})});class AMapController extends AbstractDesignerController{async create(t,e){this.config=e,this.container=t,this.instance=await ComponentUtil.createAndRender(t,AMapComponent,e),this.registerEvent(),window.AMap&&(window.AMap_Key&&(this.config.style.key=window.AMap_Key),window.AMap_securityJsCode&&(this.config.style.securityJsCode=window.AMap_securityJsCode))}destroy(){this.instance=null,this.config=null}getConfig(){return this.config}update(t,e){var r;this.config=ObjectUtil.merge(this.config,t),e=e||{reRender:!0},e.reRender&&((r=this.instance)==null||r.updateConfig(this.config))}updateTheme(t){}registerEvent(){var e,r,s;const t=(r=(e=this.config)==null?void 0:e.base)==null?void 0:r.id;(s=this.instance)==null||s.setEventHandler({click:()=>BPExecutor.triggerComponentEvent(t,"click",this.config)})}}export{AMapController};
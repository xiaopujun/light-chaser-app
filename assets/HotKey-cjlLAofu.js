var a=Object.defineProperty;var h=(n,i,t)=>i in n?a(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t;var e=(n,i,t)=>(h(n,typeof i!="symbol"?i+"":i,t),t);import{r as u}from"./index-OsS9UfkW.js";import{e as y}from"./LayerManager-yWnDoBOm.js";import{H as s}from"./DesignerPage-eo07yA5W.js";import"./mobxreact.esm-rNVktGB7.js";import"./ObjectUtil-nMvTrJhh.js";import"./index-K2O65-hP.js";import"./index-APrWN4Qi.js";import"./LocalOperator-BbYzoZ36.js";import"./GlobalMessage-FQtvcjbG.js";import"./MainRouter-Z3gK7D7G.js";import"./useZIndex-g2cfol2D.js";import"./FetchUtil-Ivd_z0Im.js";import"./System-UGwVndg7.js";import"./index-hcrqZ8so.js";import"./ResizeObserver.es-B32NGzNS.js";import"./Dialog-BERcuBcz.js";import"./FontGlobal-I0xzNbJH.js";import"./PreviewOpen-nQ2Iv4_U.js";import"./Grid-pJgl1oS6.js";import"./UIContainer-QUMruXjD.js";import"./Help-EfSmZBRS.js";import"./Input-0x6URBKt.js";import"./MonacoEditor-ov8BpsQ9.js";import"./Button-tVc5ioar.js";import"./Plus-s0Jz5-eZ.js";import"./CheckOutlined-r3grTFMw.js";import"./collapse-aS6vX33V.js";import"./useForceUpdate-FVo-4i1b.js";import"./EyeOutlined-32DaWiZk.js";import"./omit--0Qnqbh8.js";import"./index-wIpC5sck.js";import"./Info-a_timmp6.js";import"./Switch-Xsscl7VA.js";import"./NumberInput-jcBc5L4J.js";import"./Select-QnvNqaJ3.js";import"./Radio-gqYk-AVU.js";import"./ThemeEditor-tlpmIS3d.js";import"./ColorPicker-Zriz_5ra.js";import"./index-p8ckIXOR.js";import"./Overflow-UKUJyBo6.js";import"./index-4x1LRhOc.js";import"./CardPanel-UxpYECmD.js";import"./Theme-XU3oEXi4.js";import"./BaseInfoStore-VzdD0w4k.js";const d=["control + s","alt","control + l","control + shift + l","control + h","control + f","control + k","control + 1","control + 2","control + 3","control + 4","control + 5","control + g","control + shift + g"];class mt extends u.Component{constructor(t){super(t);e(this,"handlerMapping",{});e(this,"currHotKey",[]);e(this,"existHandlerKey","");e(this,"specialDomCache",{});e(this,"getSpecialDomCache",t=>{const r=this.specialDomCache[t];if(r)return r;{const o=document.querySelector(t);return o?(this.specialDomCache[t]=o,o):null}});e(this,"doHandler",(t,r)=>{const{handler:o,triggerType:p=s.SINGLE,range:c}=this.handlerMapping[r]||{};if(o&&(p===s.SINGLE&&this.existHandlerKey!==r||p===s.COILED)){const{pointerTarget:l}=y;if(c){const m=this.getSpecialDomCache(c);if(!m||!m.contains(l))return}Array.isArray(o)?o.forEach(m=>m(t)):o(t),this.existHandlerKey=r}});e(this,"keyDown",t=>{const r=t.key.toLowerCase();this.currHotKey.some(p=>p===r)||this.currHotKey.push(r);const o=this.currHotKey.join(" + ");d.some(p=>p===o)&&t.preventDefault(),this.doHandler(t,o)});e(this,"keyUp",t=>{const r=t.key.toLowerCase();this.currHotKey.some(o=>o===r)&&(this.currHotKey=this.currHotKey.filter(o=>o!==r),this.existHandlerKey="")});e(this,"onBlur",()=>{this.currHotKey=[],this.existHandlerKey=""});this.handlerMapping=t.handlerMapping}componentDidMount(){document.addEventListener("keydown",this.keyDown),document.addEventListener("keyup",this.keyUp),window.onblur=this.onBlur}componentWillUnmount(){document.removeEventListener("keydown",this.keyDown),document.removeEventListener("keyup",this.keyUp),window.onblur=null}render(){return null}}export{mt as default};
var h=Object.defineProperty;var p=(a,t,i)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var e=(a,t,i)=>(p(a,typeof t!="symbol"?t+"":t,i),i);class d{constructor(){e(this,"max",3);e(this,"min",.05);e(this,"scale",1);e(this,"ratio",1);e(this,"compute",t=>{let i=1.2;t===0&&(i=1/1.2);let s=this.scale*i;s>this.max?(i=this.max/this.scale,s=this.max):s<this.min&&(i=this.min/this.scale,s=this.min),this.scale=s,this.ratio=i})}}class g{constructor(t){e(this,"container",null);e(this,"content",null);e(this,"position",{x:0,y:0});e(this,"dragCallback");e(this,"scaleCallback");e(this,"dragStartCallback");e(this,"dragEndCallback");e(this,"scaleCore",new d);e(this,"contextMenu",t=>t.preventDefault());e(this,"onDragStart",()=>{var t;return(t=this.container)==null?void 0:t.addEventListener("pointerdown",this.pointerDown)});e(this,"onDragMove",t=>{if(t.buttons===2&&(this.position.x+=t.movementX,this.position.y+=t.movementY,this.content.style.transform="translate3d("+this.position.x+"px, "+this.position.y+"px, 0) scale("+this.scaleCore.scale+")",this.dragCallback)){const{scale:i,ratio:s}=this.scaleCore;this.dragCallback({scale:i,ratio:s,position:this.position},t)}});e(this,"onDragEnd",()=>{var t;return(t=this.container)==null?void 0:t.addEventListener("pointerup",this.pointerUp)});e(this,"pointerDown",t=>{var i,s;if(t.button===2&&((i=this.container)==null||i.setPointerCapture(t.pointerId),(s=this.container)==null||s.addEventListener("pointermove",this.onDragMove),this.dragStartCallback)){const{scale:n,ratio:o}=this.scaleCore;this.dragStartCallback({scale:n,ratio:o,position:this.position},t)}});e(this,"pointerUp",t=>{var i,s;if(t.button===2&&((i=this.container)==null||i.releasePointerCapture(t.pointerId),(s=this.container)==null||s.removeEventListener("pointermove",this.onDragMove),this.dragEndCallback)){const{scale:n,ratio:o}=this.scaleCore;this.dragEndCallback({scale:n,ratio:o,position:this.position},t)}});e(this,"registerScale",()=>{var t;return(t=this.container)==null?void 0:t.addEventListener("wheel",this.doWheel)});e(this,"doWheel",t=>{var i;if(t.altKey&&t.buttons!==2){this.scaleCore.compute(t.deltaY>0?0:1);const{x:s,y:n}=this.container.getBoundingClientRect(),{width:o,height:r}=(i=this.content)==null?void 0:i.style;if(this.position.x=this.position.x-(this.scaleCore.ratio-1)*(t.clientX-s-this.position.x-parseFloat(o)*.5),this.position.y=this.position.y-(this.scaleCore.ratio-1)*(t.clientY-n-this.position.y-parseFloat(r)*.5),this.content.style.transform="translate3d("+this.position.x+"px, "+this.position.y+"px, 0) scale("+this.scaleCore.scale+")",this.scaleCallback){const{scale:l,ratio:c}=this.scaleCore;this.scaleCallback({scale:l,ratio:c,position:this.position},t)}}});const{container:i,content:s,position:n,dragCallback:o,scaleCallback:r,dragStartCallback:l,dragEndCallback:c}=t;this.container=i,this.content=s,n&&(this.position=n),o&&(this.dragCallback=o),r&&(this.scaleCallback=r),l&&(this.dragStartCallback=l),c&&(this.dragEndCallback=c),this.registerDrag(),this.registerScale()}destroy(){var t,i,s,n;(t=this.container)==null||t.removeEventListener("pointerdown",this.pointerDown),(i=this.container)==null||i.removeEventListener("pointerup",this.pointerUp),(s=this.container)==null||s.removeEventListener("wheel",this.doWheel),(n=this.container)==null||n.removeEventListener("contextmenu",this.contextMenu),this.container=null,this.content=null}registerDrag(){var t;this.content.style.transform="translate3d("+this.position.x+"px, "+this.position.y+"px, 0) scale("+this.scaleCore.scale+")",(t=this.container)==null||t.addEventListener("contextmenu",this.contextMenu),this.onDragStart(),this.onDragEnd()}}export{g as D};
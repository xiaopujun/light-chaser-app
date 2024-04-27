import{z as W,h as U,g as i,a0 as G,a1 as p,a2 as B,m as P,i as w,a3 as Q,c as V,k as M,_ as z,v as Y}from"./MainRouter-axq8us8m.js";import{b as R,r as C}from"./index-4oef3wIY.js";import{c as $}from"./useZIndex-LzRx996R.js";function Z(e){return e.replace(/-(.)/g,function(a,o){return o.toUpperCase()})}function j(e,a){W(e,"[@ant-design/icons] ".concat(a))}function O(e){return U(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(U(e.icon)==="object"||typeof e.icon=="function")}function v(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(a,o){var t=e[o];switch(o){case"class":a.className=t,delete a.class;break;default:delete a[o],a[Z(o)]=t}return a},{})}function y(e,a,o){return o?R.createElement(e.tag,i(i({key:a},v(e.attrs)),o),(e.children||[]).map(function(t,r){return y(t,"".concat(a,"-").concat(e.tag,"-").concat(r))})):R.createElement(e.tag,i({key:a},v(e.attrs)),(e.children||[]).map(function(t,r){return y(t,"".concat(a,"-").concat(e.tag,"-").concat(r))}))}function L(e){return G(e)[0]}function b(e){return e?Array.isArray(e)?e:[e]:[]}var X=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,J=function(a){var o=C.useContext(p),t=o.csp,r=o.prefixCls,l=X;r&&(l=l.replace(/anticon/g,r)),C.useEffect(function(){var s=a.current,E=$(s);B(l,"@ant-design-icons",{prepend:!0,csp:t,attachTo:E})},[])},q=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function ee(e){var a=e.primaryColor,o=e.secondaryColor;f.primaryColor=a,f.secondaryColor=o||L(a),f.calculated=!!o}function ne(){return i({},f)}var m=function(a){var o=a.icon,t=a.className,r=a.onClick,l=a.style,s=a.primaryColor,E=a.secondaryColor,N=P(a,q),T=C.useRef(),u=f;if(s&&(u={primaryColor:s,secondaryColor:E||L(s)}),J(T),j(O(o),"icon should be icon definiton, but got ".concat(o)),!O(o))return null;var c=o;return c&&typeof c.icon=="function"&&(c=i(i({},c),{},{icon:c.icon(u.primaryColor,u.secondaryColor)})),y(c.icon,"svg-".concat(c.name),i(i({className:t,onClick:r,style:l,"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},N),{},{ref:T}))};m.displayName="IconReact";m.getTwoToneColors=ne;m.setTwoToneColors=ee;const I=m;function x(e){var a=b(e),o=w(a,2),t=o[0],r=o[1];return I.setTwoToneColors({primaryColor:t,secondaryColor:r})}function ae(){var e=I.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var oe=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];x(Q.primary);var d=C.forwardRef(function(e,a){var o,t=e.className,r=e.icon,l=e.spin,s=e.rotate,E=e.tabIndex,N=e.onClick,T=e.twoToneColor,u=P(e,oe),c=C.useContext(p),g=c.prefixCls,_=g===void 0?"anticon":g,K=c.rootClassName,h=V(K,_,(o={},M(o,"".concat(_,"-").concat(r.name),!!r.name),M(o,"".concat(_,"-spin"),!!l||r.name==="loading"),o),t),S=E;S===void 0&&N&&(S=-1);var F=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,H=b(T),A=w(H,2),D=A[0],k=A[1];return C.createElement("span",z({role:"img","aria-label":r.name},u,{ref:a,tabIndex:S,onClick:N,className:h}),C.createElement(I,{icon:r,primaryColor:D,secondaryColor:k,style:F}))});d.displayName="AntdIcon";d.getTwoToneColor=ae;d.setTwoToneColor=x;const ie=d,re=e=>{const[,,,,a]=Y();return a?`${e}-css-var`:""},le=re;var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(a){var o=a.keyCode;if(a.altKey&&!a.ctrlKey||a.metaKey||o>=n.F1&&o<=n.F12)return!1;switch(o){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(a){if(a>=n.ZERO&&a<=n.NINE||a>=n.NUM_ZERO&&a<=n.NUM_MULTIPLY||a>=n.A&&a<=n.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&a===0)return!0;switch(a){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};export{ie as A,n as K,le as u};

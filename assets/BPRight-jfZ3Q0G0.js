import{j as i}from"./index-HCNf1S-V.js";import{o as a}from"./Dialog-SklbesEj.js";import{aD as c}from"./LayerManager-zhrKdHEt.js";import{b as l}from"./BPRightStore-fhOUxxuo.js";import r from"./Accordion-bNaHuwjf.js";import"./MainRouter-vXEG6WuJ.js";import"./AntdIcon-ZsdTX9-8.js";import"./useZIndex-xI4tNDcU.js";import"./Overflow-oCu9IEgM.js";import"./GlobalMessage-WoHhAzE1.js";import"./FetchUtil-Ivd_z0Im.js";import"./Radio-fGyZ8eIZ.js";import"./Button-JU0EM1ll.js";import"./ColorPicker-S1Y4dxEi.js";import"./CardPanel-KPlWi45L.js";import"./Grid-2ISsVXHm.js";import"./Switch-ltkI4ep5.js";const D=a(()=>{const{bpNodeControllerInsMap:n}=c,{activeNode:p}=l,e=n[p],t=e==null?void 0:e.getConfig();if(!t)return i.jsx("div",{className:"bp-right node-config-empty-info",children:"请激活节点配置..."});const m=[...t.input,...t.output],s=e.getConfigComponent();return i.jsxs("div",{className:"bp-right bp-node-config",children:[i.jsxs("div",{className:"bp-node-config-header",children:[i.jsx("div",{className:"bp-node-config-name",children:t==null?void 0:t.name}),i.jsx("div",{className:"bp-node-config-info",children:`${t==null?void 0:t.id} | ${t==null?void 0:t.type}`})]}),i.jsx("div",{className:"bp-ap-info-list",children:i.jsx(r,{label:"锚点信息",children:m.map(o=>i.jsxs("div",{className:"bp-ap-info-item",children:[i.jsx("div",{className:`bp-ap-info-type ${o.type===0?"type-input":"type-output"}`,children:o.type===0?"输入":"输出"}),i.jsx("div",{className:"bp-ap-info-name",children:o.name})]},o.id))})}),s&&i.jsx("div",{className:"bp-node-config-detail",children:i.jsx(r,{label:"节点配置",children:i.jsx(s,{controller:e})})})]})});export{D as default};
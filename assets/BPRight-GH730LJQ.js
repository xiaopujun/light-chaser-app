import{j as i}from"./index-Duc4ZoM_.js";import{o as a}from"./mobxreact.esm-AXuQb6fD.js";import{aB as c}from"./ViewDesignerLoader-8rMP9FZs.js";import{b as l}from"./BPRightStore-swFcvk-U.js";import p from"./Accordion-Kjxp7g3P.js";import"./LocalOperator-t4oOcFvM.js";import"./GlobalMessage-I0KrOayq.js";import"./MainRouter-l7Z1Z1jr.js";import"./render-8hUH_M6B.js";import"./AntdIcon-jwWmiLqW.js";import"./InfoCircleFilled-JfnNzh3b.js";import"./useZIndex-c7eQO3Zz.js";import"./index-AfMii643.js";import"./FetchUtil-5ZwtxN_0.js";import"./Data-_fslVRGK.js";import"./index--SWnmJ5Q.js";import"./Switch-Xw0MHp-o.js";import"./UIContainer-fqZbFePv.js";import"./index-KGsAQAl1.js";import"./zoom-1qZDylxx.js";import"./Compact-BtIEhQqw.js";import"./Help-Q6DYu7mz.js";import"./Right-5BVu1toC.js";const w=a(()=>{const{bpNodeControllerInsMap:s}=c,{activeNode:n}=l,o=s[n],t=o==null?void 0:o.getConfig();if(!t)return i.jsx("div",{className:"bp-right node-config-empty-info",children:"请激活节点配置..."});const m=[...t.input,...t.output],e=o.getConfigComponent();return i.jsxs("div",{className:"bp-right bp-node-config",children:[i.jsxs("div",{className:"bp-node-config-header",children:[i.jsx("div",{className:"bp-node-config-name",children:t==null?void 0:t.name}),i.jsx("div",{className:"bp-node-config-info",children:`${t==null?void 0:t.id} | ${t==null?void 0:t.type}`})]}),i.jsx("div",{className:"bp-ap-info-list",children:i.jsx(p,{label:"锚点信息",children:m.map(r=>i.jsxs("div",{className:"bp-ap-info-item",children:[i.jsx("div",{className:`bp-ap-info-type ${r.type===0?"type-input":"type-output"}`,children:r.type===0?"输入":"输出"}),i.jsx("div",{className:"bp-ap-info-name",children:r.name})]},r.id))})}),e&&i.jsx("div",{className:"bp-node-config-detail",children:i.jsx(p,{label:"节点配置",children:i.jsx(e,{controller:o})})})]})});export{w as default};
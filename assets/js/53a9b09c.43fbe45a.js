"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[8599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(r),f=o,g=b["".concat(l,".").concat(f)]||b[f]||c[f]||a;return r?n.createElement(g,u(u({ref:t},s),{},{components:r})):n.createElement(g,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var p=2;p<a;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"ubuntu-2204-lts",title:"OS Upgrade",date:"2022-08-27T14:32",authors:["bpepple"],tags:["server","ubuntu"]},u=void 0,i={permalink:"/blog/ubuntu-2204-lts",source:"@site/blog/2022-08-26-ubuntu-22-04/index.md",title:"OS Upgrade",description:"Finally got around to upgrading the OS for Metron to Ubuntu 22.04.1 LTS, which overall, was fairly painless. Tests didn't find anything obviously broken, but if you do run across something that is, please open a bug for it. Thx!",date:"2022-08-27T14:32:00.000Z",formattedDate:"August 27, 2022",tags:[{label:"server",permalink:"/blog/tags/server"},{label:"ubuntu",permalink:"/blog/tags/ubuntu"}],readingTime:.2,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"ubuntu-2204-lts",title:"OS Upgrade",date:"2022-08-27T14:32",authors:["bpepple"],tags:["server","ubuntu"]},nextItem:{title:"Esak-1.3.2",permalink:"/blog/esak-132"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Finally got around to upgrading the OS for Metron to ",(0,o.kt)("a",{parentName:"p",href:"https://releases.ubuntu.com/22.04.1/"},"Ubuntu 22.04.1 LTS"),", which overall, was fairly painless. Tests didn't find anything obviously broken, but if you do run across something that is, please open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bpepple/metron/issues/new/choose"},"bug")," for it. Thx!"))}c.isMDXComponent=!0}}]);
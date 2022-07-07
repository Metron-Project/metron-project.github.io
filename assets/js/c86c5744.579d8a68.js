"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:30,label:"Mokkari"},i="Mokkari",s={unversionedId:"mokkari",id:"mokkari",title:"Mokkari",description:"What is it?",source:"@site/docs/mokkari.md",sourceDirName:".",slug:"/mokkari",permalink:"/docs/mokkari",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,label:"Mokkari"},sidebar:"tutorialSidebar",previous:{title:"Version 1.0 (Draft)",permalink:"/docs/metroninfo/schemas/v1.0"},next:{title:"Esak",permalink:"/docs/esak"}},l={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"Installation",id:"installation",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Code",id:"code",level:2},{value:"Bugs / Feature Requests",id:"bugs--feature-requests",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mokkari"},"Mokkari"),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Mokkari is a python wrapper for the Metron Comic Book Database API."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip3 install --user mokkari\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import mokkari\n\n# Your own config file to keep your credentials secret\nfrom config import username, password\n\nm = mokkari.api(username, password)\n\n# Get all Marvel comics for the week of 2021-06-07\nthis_week = m.issues_list({"store_date_range_after": "2021-06-07", "store_date_range_before": "2021-06-13", "publisher_name": "marvel"})\n\n# Print the results\nfor i in this_week:\n    print(f"{i.id} {i.issue_name}")\n\n# Retrieve the detail for an individual issue\nasm_68 = m.issue(31660)\n\n# Print the issue Description\nprint(asm_68.desc)\n')),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://mokkari.readthedocs.io/en/latest/"},"ReadTheDocs"),"."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"The projects code can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/mokkari"},"GitHub"),"."),(0,a.kt)("h2",{id:"bugs--feature-requests"},"Bugs / Feature Requests"),(0,a.kt)("p",null,"Any bugs or feature requests can be filed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/mokkari/issues"},"here"),"."))}p.isMDXComponent=!0}}]);
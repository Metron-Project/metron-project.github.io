"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:40,label:"Esak"},i="Esak",s={unversionedId:"esak",id:"esak",title:"Esak",description:"What is it?",source:"@site/docs/esak.md",sourceDirName:".",slug:"/esak",permalink:"/docs/esak",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,label:"Esak"},sidebar:"tutorialSidebar",previous:{title:"Mokkari",permalink:"/docs/mokkari"},next:{title:"Simyan",permalink:"/docs/simyan"}},l={},c=[{value:"What is it?",id:"what-is-it",level:2},{value:"Installation",id:"installation",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Code",id:"code",level:2},{value:"Bugs / Feature Requests",id:"bugs--feature-requests",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esak"},"Esak"),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Esak is a python wrapper for ",(0,a.kt)("a",{parentName:"p",href:"https://developer.marvel.com/docs"},"Marvel's API"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ pip3 install --user esak\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import esak\n\n# Your own config file to keep your private key local and secret\nfrom config import public_key, private_key\n\n# Authenticate with Marvel, with keys I got from http://developer.marvel.com/\nm = esak.api(public_key, private_key)\n\n# Get all comics from this week, sorted alphabetically by title\npulls = sorted(m.comics_list({\n    'format': \"comic\",\n    'formatType': \"comic\",\n    'noVariants': True,\n    'dateDescriptor': \"thisWeek\",\n    'limit': 100}),\n    key=lambda comic: comic.title)\n\nfor comic in pulls:\n    # Write a line to the file with the name of the issue, and the\n    # id of the series\n    print(f'{comic.title} (series #{comic.series.id})')\n")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://esak.readthedocs.io/en/stable/"},"ReadTheDocs"),"."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"The projects code can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/esak"},"GitHub"),"."),(0,a.kt)("h2",{id:"bugs--feature-requests"},"Bugs / Feature Requests"),(0,a.kt)("p",null,"Any bugs or feature requests can be filed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/esak/issues"},"here"),"."))}u.isMDXComponent=!0}}]);
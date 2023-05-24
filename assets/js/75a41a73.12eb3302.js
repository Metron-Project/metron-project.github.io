"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[9022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=a,u=g["".concat(l,".").concat(h)]||g[h]||m[h]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"latest-happenings",title:"Latest Happenings",date:"2023-05-24T10:35",authors:["bpepple"],tags:["comic","database","series","api","comicvine","comictagger"]},i="New Indexed Issues Milestone",s={permalink:"/blog/latest-happenings",source:"@site/blog/2023-05-23-latest-happenings/index.md",title:"Latest Happenings",description:"The Metron Project reached a milestone today by having 65,000 issues added to its database. I wish to give big thanks to everyone who has helped with the project. Thanks!",date:"2023-05-24T10:35:00.000Z",formattedDate:"May 24, 2023",tags:[{label:"comic",permalink:"/blog/tags/comic"},{label:"database",permalink:"/blog/tags/database"},{label:"series",permalink:"/blog/tags/series"},{label:"api",permalink:"/blog/tags/api"},{label:"comicvine",permalink:"/blog/tags/comicvine"},{label:"comictagger",permalink:"/blog/tags/comictagger"}],readingTime:.855,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"latest-happenings",title:"Latest Happenings",date:"2023-05-24T10:35",authors:["bpepple"],tags:["comic","database","series","api","comicvine","comictagger"]},nextItem:{title:"Limited Series Type",permalink:"/blog/series-type-change"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://metron.cloud/"},"Metron Project")," reached a milestone today by having 65,000 issues added to its database. I wish to give big thanks to everyone who has helped with the project. Thanks!"),(0,a.kt)("h1",{id:"post-api"},"POST API"),(0,a.kt)("p",null,"Been spending the last few months working on a POST API to make it easier to add/update information on Metron. Currently it's only available to users with Adminstrators permissions, but later this year I'll look at the feasability of making it more readily available."),(0,a.kt)("h1",{id:"comic-vine-ids"},"Comic Vine ID's"),(0,a.kt)("p",null,"Another project I've been working on is adding ",(0,a.kt)("a",{parentName:"p",href:"https://comicvine.gamespot.com/"},"Comic Vine")," identification numbers to the various resource items. This should help users match items between the two data sources. Currently, about 40% of the issues have been updated with this information and with any luck the majority of issues will be finished by the end of the month."),(0,a.kt)("h1",{id:"comictagger"},"ComicTagger"),(0,a.kt)("p",null,"One of the developers of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/comictagger/comictagger"},"Comic Tagger")," has been working on adding support for tagging digital comics with data from Metron, and hopefully in the next couple of months that merged."))}m.isMDXComponent=!0}}]);
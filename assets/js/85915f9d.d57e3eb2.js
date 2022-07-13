"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[5722],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=m(o),u=r,f=g["".concat(l,".").concat(u)]||g[u]||s[u]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},6066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=o(7462),r=(o(7294),o(3905));const a={slug:"welcome-metroninfo",title:"MetronInfo.xml",authors:["bpepple"],tags:["metron","comic","metadata","tagging","comicvine","comic-tagger","anansi-project"]},i=void 0,c={permalink:"/blog/welcome-metroninfo",source:"@site/blog/2022-07-13-metroninfo/index.md",title:"MetronInfo.xml",description:"So, one of the new projects I've been working on in my spare time is a new comic book xml schema called MetronInfo.",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"metron",permalink:"/blog/tags/metron"},{label:"comic",permalink:"/blog/tags/comic"},{label:"metadata",permalink:"/blog/tags/metadata"},{label:"tagging",permalink:"/blog/tags/tagging"},{label:"comicvine",permalink:"/blog/tags/comicvine"},{label:"comic-tagger",permalink:"/blog/tags/comic-tagger"},{label:"anansi-project",permalink:"/blog/tags/anansi-project"}],readingTime:1.75,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"welcome-metroninfo",title:"MetronInfo.xml",authors:["bpepple"],tags:["metron","comic","metadata","tagging","comicvine","comic-tagger","anansi-project"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},m=[],p={toc:m};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So, one of the new projects I've been working on in my spare time is a new comic book xml schema called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/metroninfo"},"MetronInfo"),"."),(0,r.kt)("p",null,"Currently, most applications use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/anansi-project/comicinfo"},"ComicInfo")," which originated from the ",(0,r.kt)("a",{parentName:"p",href:"https://comicrack.en.softonic.com/"},"ComicRack")," application, but due to it's history this format has some limitations like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Poor handling of data.")," For example, cover date information that is split into separate integer types, instead of just using a date type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limited types metadata stored.")," For example, when tagging a comic book archive with an application like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/comictagger/comictagger"},"ComicTagger")," it would be useful to know where the metadata information was retrieved from (i.e. Comic Vine, GCD, Metron, etc.) and the resources identification number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lack of documentation.")," The ",(0,r.kt)("a",{parentName:"li",href:"https://anansi-project.github.io/"},"Anansi Project")," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"is"))," working on improving this, tho.")),(0,r.kt)("p",null,"For now, the Anansi Project is working on documenting and extending (non-breaking changes) the ComicInfo schema, but in my opinion that time spent would be better spent on creating a new format not tied to a dead application. Due to the fairly unstructured nature of comic book archives it's trivial to tag one with the existing ComicInfo format ",(0,r.kt)("strong",{parentName:"p"},"and")," also a new format. That way users who use applications that only support ComicInfo.xml can still use them, but also gives them the option to use applications that could support the MetronInfo format."),(0,r.kt)("p",null,"My goals for MetronInfo.xml are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix some of the deficiencies of the ComicInfo format."),(0,r.kt)("li",{parentName:"ul"},"Add information to make it easier for Plex-like application to identify data (series, character, etc/) when importing comics into their application."),(0,r.kt)("li",{parentName:"ul"},"Document the elements clearly so their use is not ambiguous.")),(0,r.kt)("p",null,"Currently I'm working right now on finalizing the new format, and would appreciate any help or feedback from the comic book community in this. Feel free to leave suggestions either at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/metroninfo/discussions"},"Discussions Page")," or contact use over on ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#metrondb:matrix.org"},"Matrix"),"."),(0,r.kt)("p",null,"Once the new format is finalized I plan on writing a tool that will create a MetronInfo.xml file for any existing comic book archive that was tagged with ComicTagger or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/metron-tagger"},"Metron-Tagger"),", and also retrieve any missing data from the source of information (Metron or Comic Vine)."))}s.isMDXComponent=!0}}]);
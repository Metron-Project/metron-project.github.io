"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[5722],{6269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(5893),r=n(3905);const i={slug:"welcome-metroninfo",title:"MetronInfo.xml",authors:["bpepple"],tags:["metron","comic","metadata","tagging","comicvine","comic-tagger","anansi-project"]},a=void 0,c={permalink:"/blog/welcome-metroninfo",source:"@site/blog/2022-07-13-metroninfo/index.md",title:"MetronInfo.xml",description:"So, one of the new projects I've been working on in my spare time is a new comic book xml schema called MetronInfo.",date:"2022-07-13T00:00:00.000Z",tags:[{label:"metron",permalink:"/blog/tags/metron"},{label:"comic",permalink:"/blog/tags/comic"},{label:"metadata",permalink:"/blog/tags/metadata"},{label:"tagging",permalink:"/blog/tags/tagging"},{label:"comicvine",permalink:"/blog/tags/comicvine"},{label:"comic-tagger",permalink:"/blog/tags/comic-tagger"},{label:"anansi-project",permalink:"/blog/tags/anansi-project"}],readingTime:1.75,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"welcome-metroninfo",title:"MetronInfo.xml",authors:["bpepple"],tags:["metron","comic","metadata","tagging","comicvine","comic-tagger","anansi-project"]},unlisted:!1,prevItem:{title:"50,000 issues indexed",permalink:"/blog/50000-issues"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},l=[];function m(e){const t={a:"a",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["So, one of the new projects I've been working on in my spare time is a new comic book xml schema called ",(0,o.jsx)(t.a,{href:"https://github.com/Metron-Project/metroninfo",children:"MetronInfo"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Currently, most applications use ",(0,o.jsx)(t.a,{href:"https://github.com/anansi-project/comicinfo",children:"ComicInfo"})," which originated from the ",(0,o.jsx)(t.a,{href:"https://comicrack.en.softonic.com/",children:"ComicRack"})," application, but due to it's history this format has some limitations like:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Poor handling of data."})," For example, cover date information that is split into separate integer types, instead of just using a date type."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Limited types metadata stored."})," For example, when tagging a comic book archive with an application like ",(0,o.jsx)(t.a,{href:"https://github.com/comictagger/comictagger",children:"ComicTagger"})," it would be useful to know where the metadata information was retrieved from (i.e. Comic Vine, GCD, Metron, etc.) and the resources identification number."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Lack of documentation."})," The ",(0,o.jsx)(t.a,{href:"https://anansi-project.github.io/",children:"Anansi Project"})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"is"})})," working on improving this, tho."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For now, the Anansi Project is working on documenting and extending (non-breaking changes) the ComicInfo schema, but in my opinion that time spent would be better spent on creating a new format not tied to a dead application. Due to the fairly unstructured nature of comic book archives it's trivial to tag one with the existing ComicInfo format ",(0,o.jsx)(t.strong,{children:"and"})," also a new format. That way users who use applications that only support ComicInfo.xml can still use them, but also gives them the option to use applications that could support the MetronInfo format."]}),"\n",(0,o.jsx)(t.p,{children:"My goals for MetronInfo.xml are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Fix some of the deficiencies of the ComicInfo format."}),"\n",(0,o.jsx)(t.li,{children:"Add information to make it easier for Plex-like application to identify data (series, character, etc/) when importing comics into their application."}),"\n",(0,o.jsx)(t.li,{children:"Document the elements clearly so their use is not ambiguous."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Currently I'm working right now on finalizing the new format, and would appreciate any help or feedback from the comic book community in this. Feel free to leave suggestions either at the ",(0,o.jsx)(t.a,{href:"https://github.com/Metron-Project/metroninfo/discussions",children:"Discussions Page"})," or contact use over on ",(0,o.jsx)(t.a,{href:"https://matrix.to/#/#metrondb:matrix.org",children:"Matrix"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Once the new format is finalized I plan on writing a tool that will create a MetronInfo.xml file for any existing comic book archive that was tagged with ComicTagger or ",(0,o.jsx)(t.a,{href:"https://github.com/Metron-Project/metron-tagger",children:"Metron-Tagger"}),", and also retrieve any missing data from the source of information (Metron or Comic Vine)."]})]})}function p(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),g=r,u=h["".concat(s,".").concat(g)]||h[g]||m[g]||i;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));p.displayName="MDXCreateElement"}}]);
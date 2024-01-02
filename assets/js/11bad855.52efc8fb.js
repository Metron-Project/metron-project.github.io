"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[4700],{823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(5893),a=n(3905);const o={slug:"october-2023-update",title:"October 2023 Update",date:"2023-10-29T10:04",authors:["bpepple"],tags:["comic","database","metron","metrontagger","comictagger"]},i="October 2023 News",s={permalink:"/blog/october-2023-update",source:"@site/blog/2023-10-29-october-update/index.md",title:"October 2023 Update",description:"New Indexed Issues Milestone",date:"2023-10-29T10:04:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"comic",permalink:"/blog/tags/comic"},{label:"database",permalink:"/blog/tags/database"},{label:"metron",permalink:"/blog/tags/metron"},{label:"metrontagger",permalink:"/blog/tags/metrontagger"},{label:"comictagger",permalink:"/blog/tags/comictagger"}],readingTime:1.6,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"october-2023-update",title:"October 2023 Update",date:"2023-10-29T10:04",authors:["bpepple"],tags:["comic","database","metron","metrontagger","comictagger"]},unlisted:!1,prevItem:{title:"November 2023 Update",permalink:"/blog/november-2023-update"},nextItem:{title:"Latest Happenings",permalink:"/blog/latest-happenings"}},c={authorsImageUrls:[void 0]},l=[{value:"New Indexed Issues Milestone",id:"new-indexed-issues-milestone",level:2},{value:"Metron-Tagger v1.6.4",id:"metron-tagger-v164",level:2},{value:"Duplicate Page Removal",id:"duplicate-page-removal",level:3},{value:"Miscellaneous Maintenance",id:"miscellaneous-maintenance",level:3},{value:"Comic-Tagger",id:"comic-tagger",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"new-indexed-issues-milestone",children:"New Indexed Issues Milestone"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://metron.cloud/",children:"Metron Project"})," reached a milestone this month by having more than 77,000 issues added to\nits database. I wish to give big thanks to everyone who has helped with the project. Thanks!"]}),"\n",(0,r.jsx)(t.h2,{id:"metron-tagger-v164",children:"Metron-Tagger v1.6.4"}),"\n",(0,r.jsx)(t.h3,{id:"duplicate-page-removal",children:"Duplicate Page Removal"}),"\n",(0,r.jsxs)(t.p,{children:["Just released a new version of ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/metron-tagger",children:"Metron-Tagger"}),", which adds a new\nexperimental feature of finding / removing duplicate pages in a directory of comics. The feature will get the hashes for\nall the pages of the comics in a directory, and then ask the user if the image should be removed from the comics. This\nis done by using the user's system image viewer to display the duplicate image. Once the user has reviewed all the\nduplicated images it will ask the user whether to write the changes to the comics and then prompt them if they also want\nto update the ",(0,r.jsx)(t.a,{href:"https://anansi-project.github.io/docs/comicinfo/intro",children:"ComicInfo.xml"})," (if it exists) for the page\nchanges."]}),"\n",(0,r.jsxs)(t.p,{children:["This feature most likely will work best when running on a weekly basis, instead of on a ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"whole"})})," comic collection,\nsince it's asking the user to review all the duplicate images ",(0,r.jsx)(t.em,{children:"before"})," writing the changes. I'm planning on reworking\nthis to make it more feasible to use on a large comic collection, but that is pretty far down on my TODO list (but if\nsomeone wants to work on this I'm more than willing to review a Pull Request)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": I've been using this for the last month and haven't had any issues, but if you plan on using this I would\nsuggest backing up any files when using this initially, and verifying it works correctly for you since once the changes\nare written they can't be undone! \ud83d\udca3"]}),"\n",(0,r.jsx)(t.h3,{id:"miscellaneous-maintenance",children:"Miscellaneous Maintenance"}),"\n",(0,r.jsx)(t.p,{children:"The rest of v1.6.4 changes are primarily developer-side changes updating the toolsets for Metron-Tagger."}),"\n",(0,r.jsx)(t.h2,{id:"comic-tagger",children:"Comic-Tagger"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/comictagger/comictagger",children:"Comic-Tagger"})," recently released\ntheir ",(0,r.jsx)(t.a,{href:"https://github.com/comictagger/metron_talker",children:"Metron-Talker"})," plugin which adds support for tagging any comic with\nmetadata from ",(0,r.jsx)(t.a,{href:"https://metron.cloud/",children:"Metron"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));g.displayName="MDXCreateElement"}}]);
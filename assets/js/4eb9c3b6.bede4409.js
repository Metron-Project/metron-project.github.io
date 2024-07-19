"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[8351],{1258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(5893),r=n(3905);const i={slug:"june-2024-update",title:"Database Series Type Changes",date:"2024-07-19T10:09",authors:["bpepple"],tags:["comic","database","metron","series","format"]},a="Latest News",o={permalink:"/blog/june-2024-update",source:"@site/blog/2024-06-01-june-update/index.md",title:"Database Series Type Changes",description:"Monthly Statistics",date:"2024-07-19T10:09:00.000Z",tags:[{label:"comic",permalink:"/blog/tags/comic"},{label:"database",permalink:"/blog/tags/database"},{label:"metron",permalink:"/blog/tags/metron"},{label:"series",permalink:"/blog/tags/series"},{label:"format",permalink:"/blog/tags/format"}],readingTime:2.67,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"june-2024-update",title:"Database Series Type Changes",date:"2024-07-19T10:09",authors:["bpepple"],tags:["comic","database","metron","series","format"]},unlisted:!1,nextItem:{title:"May 2024 Update",permalink:"/blog/may-2024-update"}},l={authorsImageUrls:[void 0]},c=[{value:"Monthly Statistics",id:"monthly-statistics",level:2},{value:"Database Series Type Changes",id:"database-series-type-changes",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"monthly-statistics",children:"Monthly Statistics"}),"\n",(0,s.jsxs)(t.p,{children:["During June the ",(0,s.jsx)(t.a,{href:"https://metron.cloud/",children:"Metron Project"})," added the following to its database:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Users: ",(0,s.jsx)(t.strong,{children:"26"})]}),"\n",(0,s.jsxs)(t.li,{children:["Issues: ",(0,s.jsx)(t.strong,{children:"3,025"})]}),"\n",(0,s.jsxs)(t.li,{children:["Creators: ",(0,s.jsx)(t.strong,{children:"189"})]}),"\n",(0,s.jsxs)(t.li,{children:["Characters: ",(0,s.jsx)(t.strong,{children:"822"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Thanks to everyone that contributed!"}),"\n",(0,s.jsx)(t.h2,{id:"database-series-type-changes",children:"Database Series Type Changes"}),"\n",(0,s.jsxs)(t.p,{children:["Was discussing changes to the ",(0,s.jsx)(t.a,{href:"https://github.com/Metron-Project/metroninfo",children:"MetronInfo"})," schema with the developer of\n",(0,s.jsx)(t.a,{href:"https://github.com/Kareadita/Kavita",children:"Kavita"}),", and it got me thinking about the Series Types that Metron uses."]}),"\n",(0,s.jsxs)(t.p,{children:["Based on that discussion, we've consolidated ",(0,s.jsx)(t.code,{children:"Cancelled"})," and ",(0,s.jsx)(t.code,{children:"Ongoing"})," types to ",(0,s.jsx)(t.code,{children:"Single Issue"}),", changed ",(0,s.jsx)(t.code,{children:"Annual Series"})," to ",(0,s.jsx)(t.code,{children:"Annual"}),", and also add ",(0,s.jsx)(t.code,{children:"Omnibus"})," which would give us the following values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Annual"}),": An over-sized special of a comic book that is released in addition to the regular comics in that series."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Digital Chapters"}),": This is where a comic is released in a digital format, but can sometimes be released in print later."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Graphic Novel"}),": This is a comic book that comes out in the trade paperback/hardcover format without being in the serial single issue format beforehand."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hardcover"}),": Similar to a Trade Paperback but the cover has a very thick stock just like a hardcover novel."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Limited Series"}),": This is a comic series that has a set number of issues."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Omnibus"}),": These are very large number of single issues collected in one edition."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"One-Shot"}),": A story that is contained to a single issue."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Single Issue"}),": This is the serial magazine-style format of a comic. For example, ",(0,s.jsx)(t.code,{children:"Action Comics v1 #2"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Trade Paperback"}),": This is the most common kind of collected edition where it is usually collecting 6-12 single issues."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": Series Types descriptions are from this excellent article at ",(0,s.jsx)(t.a,{href:"https://www.howtolovecomics.com/comic-book-glossary-of-terms/",children:"How to Love Comics"})]}),"\n",(0,s.jsxs)(t.p,{children:["In addition to those changes, we've added a new database field ",(0,s.jsx)(t.code,{children:"status"})," to the ",(0,s.jsx)(t.code,{children:"Series"})," model to track a series' status. The values for this field are as follows:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cancelled"}),": Used when a ",(0,s.jsx)(t.em,{children:"Single Issue"})," or ",(0,s.jsx)(t.em,{children:"Annual"})," series is ended. Sometimes can be used when a ",(0,s.jsx)(t.em,{children:"Limited"})," series is abandoned before completing its story."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Complete"}),": Commonly used when a ",(0,s.jsx)(t.em,{children:"Limited"}),", ",(0,s.jsx)(t.em,{children:"One-Shot"}),", ",(0,s.jsx)(t.em,{children:"Graphic Novel"}),", ",(0,s.jsx)(t.em,{children:"Hardcover"}),", ",(0,s.jsx)(t.em,{children:"Omnibus"}),", or ",(0,s.jsx)(t.em,{children:"Digital Chapters"})," series is ended."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Hiatus"}),": When a series stops publishing before ending with the expectation that it will be finished at a later date."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ongoing"}),": Used with the ",(0,s.jsx)(t.em,{children:"Single Issue"})," or ",(0,s.jsx)(t.em,{children:"Annual"})," series while it is still being published."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To help users update their existing comics with the new values without having to use Metron's API to re-tag their comics, I've written ",(0,s.jsx)(t.a,{href:"https://github.com/bpepple/karkas",children:"Karkas"})," which will change the ",(0,s.jsx)(t.em,{children:"Format"})," element of a comics ",(0,s.jsx)(t.code,{children:"ComicInfo.xml"})," to ",(0,s.jsx)(t.strong,{children:"Single Issue"})," if they are currently ",(0,s.jsx)(t.strong,{children:"Cancelled"})," or ",(0,s.jsx)(t.strong,{children:"Ongoing"}),", and ",(0,s.jsx)(t.strong,{children:"Annual"})," if the value is ",(0,s.jsx)(t.strong,{children:"Annual Series"}),". Since this is a program that most likely will only be used once I've decided to not publish it to ",(0,s.jsx)(t.a,{href:"https://pypi.org/",children:"PyPi"}),", but you can grab the wheel from ",(0,s.jsx)(t.a,{href:"https://static.metron.cloud/misc/karkas-1.0.0-py3-none-any.whl",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To install it you just need to run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"wget https://static.metron.cloud/misc/karkas-1.0.0-py3-none-any.whl\npipx install karkas-1.0.0-py3-none-any.whl\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then just run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"karkas /path/to/comics\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the next day or so, I'll be releasing a new version of Mokkari that will include the new ",(0,s.jsx)(t.strong,{children:"Series Status"})," field."]}),"\n",(0,s.jsx)(t.p,{children:"If you run into any problems, please open a bug report with the appropriate project, i.e. Metron, Karkas, Mokkari, etc."}),"\n",(0,s.jsx)(t.p,{children:"Anyway, that's all I've got for this month. Take care!"})]})}function d(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?s.createElement(m,a(a({ref:t},d),{},{components:n})):s.createElement(m,a({ref:t},d))}));d.displayName="MDXCreateElement"}}]);
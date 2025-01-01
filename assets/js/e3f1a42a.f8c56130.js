"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[8750],{9362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(5893),o=n(3905);const i={slug:"november-2024-update",title:"November 2024 Update",date:"2024-12-01T15:52",authors:["bpepple"],tags:["comic","metadata","comicvine","opencollective","metron","api"]},a="November 2024 News",s={permalink:"/blog/november-2024-update",source:"@site/blog/2024-12-01-nov-update/index.md",title:"November 2024 Update",description:"Monthly Statistics",date:"2024-12-01T15:52:00.000Z",tags:[{label:"comic",permalink:"/blog/tags/comic"},{label:"metadata",permalink:"/blog/tags/metadata"},{label:"comicvine",permalink:"/blog/tags/comicvine"},{label:"opencollective",permalink:"/blog/tags/opencollective"},{label:"metron",permalink:"/blog/tags/metron"},{label:"api",permalink:"/blog/tags/api"}],readingTime:2.1,hasTruncateMarker:!1,authors:[{name:"Brian Pepple",title:"Founder of the Metron Project / Code Monkey",url:"https://github.com/bpepple",imageURL:"https://github.com/bpepple.png",key:"bpepple"}],frontMatter:{slug:"november-2024-update",title:"November 2024 Update",date:"2024-12-01T15:52",authors:["bpepple"],tags:["comic","metadata","comicvine","opencollective","metron","api"]},unlisted:!1,prevItem:{title:"Donating to the Project",permalink:"/blog/added-opencollective"},nextItem:{title:"MetronInfo V1.0",permalink:"/blog/metroninfo-v1"}},l={authorsImageUrls:[void 0]},c=[{value:"Monthly Statistics",id:"monthly-statistics",level:2},{value:"Metron-Tagger v3.1.0",id:"metron-tagger-v310",level:2},{value:"Server Upgrade",id:"server-upgrade",level:2},{value:"OpenCollective",id:"opencollective",level:2},{value:"Future",id:"future",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"monthly-statistics",children:"Monthly Statistics"}),"\n",(0,r.jsxs)(t.p,{children:["During November the ",(0,r.jsx)(t.a,{href:"https://metron.cloud/",children:"Metron Project"})," added the following to its database:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Users: ",(0,r.jsx)(t.strong,{children:"31"})]}),"\n",(0,r.jsxs)(t.li,{children:["Issues: ",(0,r.jsx)(t.strong,{children:"2,210"})]}),"\n",(0,r.jsxs)(t.li,{children:["Creators: ",(0,r.jsx)(t.strong,{children:"104"})]}),"\n",(0,r.jsxs)(t.li,{children:["Characters: ",(0,r.jsx)(t.strong,{children:"426"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Thanks to everyone that contributed!"}),"\n",(0,r.jsx)(t.h2,{id:"metron-tagger-v310",children:"Metron-Tagger v3.1.0"}),"\n",(0,r.jsxs)(t.p,{children:["I released a new ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/metron-tagger/releases/tag/v3.1.0",children:"version"}),"\nof ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/metron-tagger",children:"Metron-Tagger"})," today that adds the ability to migrate data from a\ncomic that contains a ",(0,r.jsx)(t.code,{children:"ComicInfo.xml"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The conversion from ",(0,r.jsx)(t.code,{children:"ComicInfo.xml"})," -> ",(0,r.jsx)(t.code,{children:"MetronInfo.xml"})," does have some caveats though:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Elements containing data with a comma in a delimited ComicInfo element. If for example, the ",(0,r.jsx)(t.code,{children:"Title"})," element contained\na story call ",(0,r.jsx)(t.em,{children:'"Babs: True Blue, I Love You"'})," and it was originally written with a tool other than Metron-Tagger it\nwill split the story into two element items: ",(0,r.jsx)(t.em,{children:"Babs: True Blue"})," and ",(0,r.jsx)(t.em,{children:"I Love You"})," ."]}),"\n",(0,r.jsxs)(t.li,{children:["Ratings.\nWe ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/darkseid/blob/2abac78a972a460482cf48be4580295179f45ffe/darkseid/metroninfo.py#L138",children:"map"}),"\nthese to the enums used in MetronInfo, but it's not perfect since the ComicInfo documentation isn't terribly clear how\nit defines it values, so if you feel our mapping is incorrect please notify us and explain what it should be. Also,\nI've seen some users use non-valid values which obviously won't work."]}),"\n",(0,r.jsxs)(t.li,{children:["Series Format. We've also done our best\nto ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/darkseid/blob/2abac78a972a460482cf48be4580295179f45ffe/darkseid/metroninfo.py#L148",children:"map"}),"\nthe series format, but this is even ",(0,r.jsx)(t.em,{children:"less"})," defined the age rating since this is just a text element in the schema, and\ncould be anything. We've used\nthe ",(0,r.jsx)(t.a,{href:"https://github.com/comictagger/comictagger/blob/5df935915140d2dd443efd0ee5a5619726a95e48/comictaggerlib/taggerwindow.py#L1436",children:"values"}),"\nin Comic-Tagger to handle the conversion, but this isn't perfect."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To migrate your ",(0,r.jsx)(t.code,{children:"ComicInfo.xml"})," to ",(0,r.jsx)(t.code,{children:"MetronInfo.xml"})," without any online lookup would simply run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"metron-tagger --migrate /path/to/comics\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you wanted to tag you comics with data from the Metron Comic Book Database, and migrate the data from the existing\n",(0,r.jsx)(t.code,{children:"ComicInfo.xml"})," for those comics not on Metron, you would run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"metron-tagger -om --migrate /path/to/comics\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you run across any bugs or have suggestions for improvements, please file\na ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/metron-tagger/issues/new/choose",children:"Bug Report or Feature Request"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"server-upgrade",children:"Server Upgrade"}),"\n",(0,r.jsxs)(t.p,{children:["Finally got around to ",(0,r.jsx)(t.a,{href:"https://metron-project.github.io/blog/october-2024-update#server-os-upgrade",children:"upgrading"})," the\nserver, and it was fairly uneventful. Yay! \ud83c\udf89"]}),"\n",(0,r.jsx)(t.h2,{id:"opencollective",children:"OpenCollective"}),"\n",(0,r.jsxs)(t.p,{children:["The main repository has finally reached 100 stars, and so most likely in the next week or two, I'll set up a funding\noption at ",(0,r.jsx)(t.a,{href:"https://opencollective.com/",children:"Open Collective"})," to help defray the server costs and help with increasing future\nserver capacity."]}),"\n",(0,r.jsx)(t.h2,{id:"future",children:"Future"}),"\n",(0,r.jsxs)(t.p,{children:["Now the bulk of the work is done with getting the ",(0,r.jsx)(t.a,{href:"https://github.com/Metron-Project/metroninfo",children:"MetronInfo"})," out the\ndoor and some initial tooling to generate them, I'm planning to work on some low-hanging bugs with the website over the next month\nor so, before starting any large scale projects."]}),"\n",(0,r.jsx)(t.p,{children:"Anyway, that's all I've got for this month. Take care!"})]})}function d(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,u=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));d.displayName="MDXCreateElement"}}]);
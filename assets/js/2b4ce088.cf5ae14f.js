"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[4030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:70,label:"Metron-Tagger"},i="Metron-Tagger",l={unversionedId:"metron-tagger",id:"metron-tagger",title:"Metron-Tagger",description:"What is it?",source:"@site/docs/metron-tagger.md",sourceDirName:".",slug:"/metron-tagger",permalink:"/docs/metron-tagger",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,label:"Metron-Tagger"},sidebar:"tutorialSidebar",previous:{title:"Darkseid",permalink:"/docs/darkseid"}},s={},c=[{value:"What is it?",id:"what-is-it",level:2},{value:"Installation",id:"installation",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Code",id:"code",level:2},{value:"Bugs / Feature Requests",id:"bugs--feature-requests",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metron-tagger"},"Metron-Tagger"),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Metron-Tagger is a command line tool to tag comic archives with metadata from Metron Comic Book Database. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ pip3 install --user metron-tagger\n")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: metron-tagger [-h] [-r] [-o] [--id ID] [-d] [--ignore-existing] [-i] [--missing] [-s]\n                     [-e] [-z] [--delete-original] [--version]\n                     path [path ...]\n\nRead in a file or set of files, and return the result.\n\npositional arguments:\n  path                 Path of a file or a folder of files.\n\noptions:\n  -h, --help           show this help message and exit\n  -r, --rename         Rename comic archive from the files metadata. (default: False)\n  -o, --online         Search online and attempt to identify comic archive. (default: False)\n  --id ID              Identify file for tagging with the Metron Issue Id. (default: None)\n  -d, --delete         Delete the metadata tags from the file. (default: False)\n  --ignore-existing    Ignore files that have existing metadata tag. (default: False)\n  -i, --interactive    Interactively query the user when there are matches for an online search.\n                       (default: False)\n  --missing            List files without metadata. (default: False)\n  -s, --sort           Sort files that contain metadata tags. (default: False)\n  -e, --export-to-cb7  Export a CBZ (zip) or CBR (rar) archive to a CB7 (7zip) archive.\n                       (default: False)\n  -z, --export-to-cbz  Export a CB7 (7zip) or CBR (rar) archive to a CBZ (zip) archive.\n                       (default: False)\n  --delete-original    Delete the original archive after successful export to another format.\n                       (default: False)\n  --version            Show the version number and exit\n\n")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"The projects code can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/metron-tagger"},"GitHub"),"."),(0,a.kt)("h2",{id:"bugs--feature-requests"},"Bugs / Feature Requests"),(0,a.kt)("p",null,"Any bugs or feature requests can be filed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Metron-Project/metron-tagger/issues"},"here"),"."))}p.isMDXComponent=!0}}]);
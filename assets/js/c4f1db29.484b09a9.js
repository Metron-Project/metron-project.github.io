"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[8353],{691:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(5893),s=i(3905);const t={sidebar_position:10,title:"Schema documentation"},l=void 0,o={id:"metroninfo/documentation",title:"Schema documentation",description:"This page aims at clarifying the various elements of the schema, as well as their intended use and observed usage.",source:"@site/docs/metroninfo/documentation.md",sourceDirName:"metroninfo",slug:"/metroninfo/documentation",permalink:"/docs/metroninfo/documentation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Schema documentation"},sidebar:"tutorialSidebar",previous:{title:"MetronInfo.xml",permalink:"/docs/metroninfo/intro"},next:{title:"Schemas",permalink:"/docs/category/schemas"}},c={},d=[{value:"ID",id:"id",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Series",id:"series",level:3},{value:"Name",id:"name",level:4},{value:"SortName",id:"sortname",level:4},{value:"Volume",id:"volume",level:4},{value:"Format",id:"format",level:4},{value:"CollectionTitle",id:"collectiontitle",level:3},{value:"Number",id:"number",level:3},{value:"Stories",id:"stories",level:3},{value:"Summary",id:"summary",level:3},{value:"Prices",id:"prices",level:3},{value:"CoverDate",id:"coverdate",level:3},{value:"StoreDate",id:"storedate",level:3},{value:"PageCount",id:"pagecount",level:3},{value:"Notes",id:"notes",level:3},{value:"Genres",id:"genres",level:3},{value:"Tags",id:"tags",level:3},{value:"Arcs",id:"arcs",level:3},{value:"Characters",id:"characters",level:3},{value:"Teams",id:"teams",level:3},{value:"Universes",id:"universes",level:3},{value:"Locations",id:"locations",level:3},{value:"Reprints",id:"reprints",level:3},{value:"GTIN",id:"gtin",level:3},{value:"AgeRating",id:"agerating",level:3},{value:"URL",id:"url",level:3},{value:"Credits",id:"credits",level:3}];function a(e){const n={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page aims at clarifying the various elements of the schema, as well as their intended use and observed usage."}),"\n",(0,r.jsx)(n.h3,{id:"id",children:"ID"}),"\n",(0,r.jsx)(n.p,{children:"The identification number from the source of information."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"source"})," attribute is required and has to be one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Comic Vine"}),"\n",(0,r.jsx)(n.li,{children:"Grand Comics Database"}),"\n",(0,r.jsx)(n.li,{children:"Metron"}),"\n",(0,r.jsx)(n.li,{children:"League of Comic Geeks"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"publisher",children:"Publisher"}),"\n",(0,r.jsxs)(n.p,{children:["A person or organization responsible for publishing, releasing, or issuing a book. It can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n",(0,r.jsx)(n.h3,{id:"series",children:"Series"}),"\n",(0,r.jsxs)(n.p,{children:["Contains information about the series the book is part of. It can have a ",(0,r.jsx)(n.code,{children:"lang"})," attribute which is defined as a 2-letter language code (ISO 639-3)."]}),"\n",(0,r.jsx)(n.p,{children:"It also has the following children elements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"The name of the series."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Name"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"sortname",children:"SortName"}),"\n",(0,r.jsxs)(n.p,{children:["The name of the series that should be used for sorting purposes. Normally this is the same as the ",(0,r.jsx)(n.code,{children:"Name"})," element, but\nwithout any leading articles like ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"the"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"volume",children:"Volume"}),"\n",(0,r.jsx)(n.p,{children:"Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple volumes."}),"\n",(0,r.jsx)(n.p,{children:"Volumes can be referenced by number (1, 2, 3\u2026) or by year (2018, 2020\u2026)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"format",children:"Format"}),"\n",(0,r.jsx)(n.p,{children:"The type of series. It must be one of the following values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Annual"}),"\n",(0,r.jsx)(n.li,{children:"Graphic Novel"}),"\n",(0,r.jsx)(n.li,{children:"Limited Series (which covers mini/maxi series)"}),"\n",(0,r.jsx)(n.li,{children:"One-Shot"}),"\n",(0,r.jsx)(n.li,{children:"Series (which covers ongoing/cancelled series)"}),"\n",(0,r.jsx)(n.li,{children:"Trade Paperback"}),"\n",(0,r.jsx)(n.li,{children:"Hardcover"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"collectiontitle",children:"CollectionTitle"}),"\n",(0,r.jsx)(n.p,{children:"Trade Paperback and other collections can sometimes have a name for individual Trade Paperback in a series."}),"\n",(0,r.jsx)(n.h3,{id:"number",children:"Number"}),"\n",(0,r.jsxs)(n.p,{children:["Number of the book in the series which can accept alphanumeric values like ",(0,r.jsx)(n.code,{children:"1MU"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"stories",children:"Stories"}),"\n",(0,r.jsx)(n.p,{children:"Contains information about the stories contained within an issues."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Story"})," children elements for the individual story names. It can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n",(0,r.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"A description or summary of the book."}),"\n",(0,r.jsx)(n.h3,{id:"prices",children:"Prices"}),"\n",(0,r.jsx)(n.p,{children:"The cost of the book when published."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Price"})," children elements which ",(0,r.jsx)(n.strong,{children:"must"})," have an ",(0,r.jsx)(n.code,{children:"country"})," attribute (2-letter country code defined in ISO 3166)."]}),"\n",(0,r.jsx)(n.h3,{id:"coverdate",children:"CoverDate"}),"\n",(0,r.jsx)(n.p,{children:"The cover date of a periodical publication is the date displayed on the cover, which is not necessarily the true date of publication."}),"\n",(0,r.jsxs)(n.p,{children:["For most publishers, it would be a value like ",(0,r.jsx)(n.code,{children:"2022-07-01"})," if it was released to the stores on July 6, 2022. Due to legacy industry practices both Marvel and DC\nComics have a cover date two months in the future, so if was release on July 6, 2022 it would have a cover date of ",(0,r.jsx)(n.code,{children:"2022-09-01"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"storedate",children:"StoreDate"}),"\n",(0,r.jsx)(n.p,{children:"Contains the release date of the book."}),"\n",(0,r.jsx)(n.h3,{id:"pagecount",children:"PageCount"}),"\n",(0,r.jsx)(n.p,{children:"The number of pages in the book."}),"\n",(0,r.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.p,{children:"A free text field for additional information."}),"\n",(0,r.jsx)(n.h3,{id:"genres",children:"Genres"}),"\n",(0,r.jsx)(n.p,{children:"The genres of the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Genre"})," children elements that can only contain the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adult"}),"\n",(0,r.jsx)(n.li,{children:"Crime"}),"\n",(0,r.jsx)(n.li,{children:"Espionage"}),"\n",(0,r.jsx)(n.li,{children:"Fantasy"}),"\n",(0,r.jsx)(n.li,{children:"Historical"}),"\n",(0,r.jsx)(n.li,{children:"Horror"}),"\n",(0,r.jsx)(n.li,{children:"Humor"}),"\n",(0,r.jsx)(n.li,{children:"Manga"}),"\n",(0,r.jsx)(n.li,{children:"Parody"}),"\n",(0,r.jsx)(n.li,{children:"Romance"}),"\n",(0,r.jsx)(n.li,{children:"Science Fiction"}),"\n",(0,r.jsx)(n.li,{children:"Sport"}),"\n",(0,r.jsx)(n.li,{children:"Super-Hero"}),"\n",(0,r.jsx)(n.li,{children:"War"}),"\n",(0,r.jsx)(n.li,{children:"Western"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Genre"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n",(0,r.jsx)(n.h3,{id:"tags",children:"Tags"}),"\n",(0,r.jsx)(n.p,{children:"Any tags associated with the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Tag"})," children elements for the individual tag values. For example, ",(0,r.jsx)(n.em,{children:"ninja"})," or ",(0,r.jsx)(n.em,{children:"school life"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Tag"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n",(0,r.jsx)(n.h3,{id:"arcs",children:"Arcs"}),"\n",(0,r.jsx)(n.p,{children:"Any story arcs the book is a part of."}),"\n",(0,r.jsxs)(n.p,{children:["It has a ",(0,r.jsx)(n.code,{children:"Arc"})," element that can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Arc"})," element has children elements that contain the following elements:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Name"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the story arc."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Name"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Number"})}),"\n",(0,r.jsx)(n.p,{children:"An optional story arc number for the book."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"characters",children:"Characters"}),"\n",(0,r.jsx)(n.p,{children:"Any characters in the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Character"})," children elements for the individual character names."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Character"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n",(0,r.jsx)(n.h3,{id:"teams",children:"Teams"}),"\n",(0,r.jsx)(n.p,{children:"Any teams in the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Team"})," children elements for the individual team names."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Team"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n",(0,r.jsx)(n.h3,{id:"universes",children:"Universes"}),"\n",(0,r.jsx)(n.p,{children:"Any universes in the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has a ",(0,r.jsx)(n.code,{children:"Universe"})," element that can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Universe"})," element has children elements that contain the following elements:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Name"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the universe."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Designation"})}),"\n",(0,r.jsx)(n.p,{children:"An optional designation for the universe."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"locations",children:"Locations"}),"\n",(0,r.jsx)(n.p,{children:"Any locations in the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Location"})," children element for the individual location names."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Location"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n",(0,r.jsx)(n.h3,{id:"reprints",children:"Reprints"}),"\n",(0,r.jsx)(n.p,{children:"Any books that are reprint in the book."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Reprint"})," children elements that contain the following element:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Name"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the book reprinted, for example ",(0,r.jsx)(n.code,{children:"Strange Academy (2020) #1"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Name"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"gtin",children:"GTIN"}),"\n",(0,r.jsx)(n.p,{children:"The Global Trade Item Numbers for the book."}),"\n",(0,r.jsx)(n.p,{children:"It has the following children elements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ISBN"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The International Standard Book Number is used for books & magazine. It can be\nten or thirteen digits."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UPC"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The Uniform Product Code which is usually twelve digits."}),"\n",(0,r.jsx)(n.h3,{id:"agerating",children:"AgeRating"}),"\n",(0,r.jsx)(n.p,{children:"The age rating for the book which is usually determined by the book publisher."}),"\n",(0,r.jsx)(n.p,{children:"Currently, there is no governing body to determine the age rating choices so each publisher has created their own.\nSo, for simplicity's sake we've settled on the following values (with ages given as a guideline):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Unknown"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Everyone"})," - Appropriate for readers of all ages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Teen"})," - Appropriate for readers age 12 and older."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Teen Plus"})," - Appropriate for readers age 15 and older."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mature"})," - Appropriate for readers age 17 and older."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:"A URL pointing to a reference website for the book."}),"\n",(0,r.jsx)(n.h3,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(n.p,{children:"The schema specifies each creator element can only be present once."}),"\n",(0,r.jsxs)(n.p,{children:["It has ",(0,r.jsx)(n.code,{children:"Credit"})," children elements that contains the following elements:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Creator"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the creator. It can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Roles"})," which has ",(0,r.jsx)(n.code,{children:"Role"})," children elements that can have the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Writer"}),"\n",(0,r.jsx)(n.li,{children:"Script"}),"\n",(0,r.jsx)(n.li,{children:"Story"}),"\n",(0,r.jsx)(n.li,{children:"Plot"}),"\n",(0,r.jsx)(n.li,{children:"Interviewer"}),"\n",(0,r.jsx)(n.li,{children:"Artist"}),"\n",(0,r.jsx)(n.li,{children:"Penciller"}),"\n",(0,r.jsx)(n.li,{children:"Breakdowns"}),"\n",(0,r.jsx)(n.li,{children:"Illustrator"}),"\n",(0,r.jsx)(n.li,{children:"Layouts"}),"\n",(0,r.jsx)(n.li,{children:"Inker"}),"\n",(0,r.jsx)(n.li,{children:"Embellisher"}),"\n",(0,r.jsx)(n.li,{children:"Finishes"}),"\n",(0,r.jsx)(n.li,{children:"Ink Assists"}),"\n",(0,r.jsx)(n.li,{children:"Colorist"}),"\n",(0,r.jsx)(n.li,{children:"Color Separations"}),"\n",(0,r.jsx)(n.li,{children:"Color Assists"}),"\n",(0,r.jsx)(n.li,{children:"Color Flats"}),"\n",(0,r.jsx)(n.li,{children:"Digital Art Technician"}),"\n",(0,r.jsx)(n.li,{children:"Gray Tone"}),"\n",(0,r.jsx)(n.li,{children:"Letterer"}),"\n",(0,r.jsx)(n.li,{children:"Cover"}),"\n",(0,r.jsx)(n.li,{children:"Editor"}),"\n",(0,r.jsx)(n.li,{children:"Consulting Editor"}),"\n",(0,r.jsx)(n.li,{children:"Assistant Editor"}),"\n",(0,r.jsx)(n.li,{children:"Associate Editor"}),"\n",(0,r.jsx)(n.li,{children:"Group Editor"}),"\n",(0,r.jsx)(n.li,{children:"Senior Editor"}),"\n",(0,r.jsx)(n.li,{children:"Managing Editor"}),"\n",(0,r.jsx)(n.li,{children:"Collection Editor"}),"\n",(0,r.jsx)(n.li,{children:"Production"}),"\n",(0,r.jsx)(n.li,{children:"Designer"}),"\n",(0,r.jsx)(n.li,{children:"Logo Design"}),"\n",(0,r.jsx)(n.li,{children:"Translator"}),"\n",(0,r.jsx)(n.li,{children:"Supervising Editor"}),"\n",(0,r.jsx)(n.li,{children:"Executive Editor"}),"\n",(0,r.jsx)(n.li,{children:"Editor In Chief"}),"\n",(0,r.jsx)(n.li,{children:"President"}),"\n",(0,r.jsx)(n.li,{children:"Publisher"}),"\n",(0,r.jsx)(n.li,{children:"Chief Creative Officer"}),"\n",(0,r.jsx)(n.li,{children:"Executive Producer"}),"\n",(0,r.jsx)(n.li,{children:"Other"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Role"})," element can also have an ",(0,r.jsx)(n.code,{children:"id"})," attribute that can be used to add the identification number from the source of information."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3905:(e,n,i)=>{i.d(n,{ah:()=>d});var r=i(7294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var c=r.createContext({}),d=function(e){var n=r.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},a={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var i=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),j=d(i),x=s,u=j["".concat(c,".").concat(x)]||j[x]||a[x]||t;return i?r.createElement(u,l(l({ref:n},h),{},{components:i})):r.createElement(u,l({ref:n},h))}));h.displayName="MDXCreateElement"}}]);
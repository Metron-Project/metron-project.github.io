"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=l,d=k["".concat(u,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:10,title:"Schema documentation"},r=void 0,o={unversionedId:"metroninfo/documentation",id:"metroninfo/documentation",title:"Schema documentation",description:"This page aims at clarifying the various elements of the schema, as well as their intended use and observed ussage.",source:"@site/docs/metroninfo/documentation.md",sourceDirName:"metroninfo",slug:"/metroninfo/documentation",permalink:"/docs/metroninfo/documentation",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Schema documentation"},sidebar:"tutorialSidebar",previous:{title:"MetronInfo.xml",permalink:"/docs/metroninfo/intro"},next:{title:"Schemas",permalink:"/docs/category/schemas"}},u={},s=[{value:"ID",id:"id",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Series",id:"series",level:3},{value:"Volume",id:"volume",level:3},{value:"CollectionTitle",id:"collectiontitle",level:3},{value:"Number",id:"number",level:3},{value:"Stories",id:"stories",level:3},{value:"Summary",id:"summary",level:3},{value:"Price",id:"price",level:3},{value:"CoverDate",id:"coverdate",level:3},{value:"StoreDate",id:"storedate",level:3},{value:"PageCount",id:"pagecount",level:3},{value:"Genres",id:"genres",level:3},{value:"Tags",id:"tags",level:3},{value:"Arcs",id:"arcs",level:3},{value:"Characters",id:"characters",level:3},{value:"Teams",id:"teams",level:3},{value:"Locations",id:"locations",level:3},{value:"Reprints",id:"reprints",level:3},{value:"GTIN",id:"gtin",level:3},{value:"BlackAndWhite",id:"blackandwhite",level:3},{value:"AgeRating",id:"agerating",level:3},{value:"URL",id:"url",level:3},{value:"Credits",id:"credits",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page aims at clarifying the various elements of the schema, as well as their intended use and observed ussage."),(0,l.kt)("h3",{id:"id"},"ID"),(0,l.kt)("p",null,"The identification number from the source of information."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," attribute is required and has to be one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Comic Vine"),(0,l.kt)("li",{parentName:"ul"},"Grand Comics Database"),(0,l.kt)("li",{parentName:"ul"},"Metron"),(0,l.kt)("li",{parentName:"ul"},"League of Comic Geeks")),(0,l.kt)("h3",{id:"publisher"},"Publisher"),(0,l.kt)("p",null,"A person or organization responsible for publishing, releasing, or issuing a book."),(0,l.kt)("h3",{id:"series"},"Series"),(0,l.kt)("p",null,"Contains information about the series the book is part of. It has the following children elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"name"},"Name"),(0,l.kt)("p",{parentName:"li"},"  The name of the series.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"sortname"},"SortName"),(0,l.kt)("p",{parentName:"li"},"  The name of the series that should be used for sorting purposes. Normally this is the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},"Name")," element, but\nwithout any leading articles like ",(0,l.kt)("inlineCode",{parentName:"p"},"the"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"type"},"Type"),(0,l.kt)("p",{parentName:"li"},"  The type of series. If must be one of the following values:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Annual"),(0,l.kt)("li",{parentName:"ul"},"Graphic Novel"),(0,l.kt)("li",{parentName:"ul"},"Limited (which covers mini/maxi series)"),(0,l.kt)("li",{parentName:"ul"},"One-Shot"),(0,l.kt)("li",{parentName:"ul"},"Series (which covers ongoing/cancelled series)"),(0,l.kt)("li",{parentName:"ul"},"Trade Paperback")))),(0,l.kt)("h3",{id:"volume"},"Volume"),(0,l.kt)("p",null,"Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple volumes."),(0,l.kt)("p",null,"Volumes can be referenced by numer (1, 2, 3\u2026) or by year (2018, 2020\u2026)."),(0,l.kt)("h3",{id:"collectiontitle"},"CollectionTitle"),(0,l.kt)("p",null,"Trade Paperback and other collections can sometimes have a name for individual Trade Paperback in a series."),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"Number of the book in the series which can accept alphanumeric values like ",(0,l.kt)("inlineCode",{parentName:"p"},"1MU"),"."),(0,l.kt)("h3",{id:"stories"},"Stories"),(0,l.kt)("p",null,"Contains information about the stories contained within an issues."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Story")," children elements for the individual story names."),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("p",null,"A description or summary of the book."),(0,l.kt)("h3",{id:"price"},"Price"),(0,l.kt)("p",null,"The cost of the book when published."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"currency")," attribute has to be one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pounds"),(0,l.kt)("li",{parentName:"ul"},"euros"),(0,l.kt)("li",{parentName:"ul"},"dollars")),(0,l.kt)("h3",{id:"coverdate"},"CoverDate"),(0,l.kt)("p",null,"The cover date of a periodical publication is the date displayed on the cover, which is not necessarily the true date of publication."),(0,l.kt)("p",null,"For most publishers, it would be a value like ",(0,l.kt)("inlineCode",{parentName:"p"},"2022-07-01")," if it was released to the stores on July 6, 2022. Due to legacy industry practices both Marvel and DC\nComics have a cover date two months in the future, so if was release on July 6, 2022 it would have a cover date of ",(0,l.kt)("inlineCode",{parentName:"p"},"2022-09-01"),"."),(0,l.kt)("h3",{id:"storedate"},"StoreDate"),(0,l.kt)("p",null,"Contains the release date of the book."),(0,l.kt)("h3",{id:"pagecount"},"PageCount"),(0,l.kt)("p",null,"The number of pages in the book."),(0,l.kt)("h3",{id:"genres"},"Genres"),(0,l.kt)("p",null,"The genres of the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Genre")," children elements that can only contain the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Adult"),(0,l.kt)("li",{parentName:"ul"},"Crime"),(0,l.kt)("li",{parentName:"ul"},"Espionage"),(0,l.kt)("li",{parentName:"ul"},"Fantasy"),(0,l.kt)("li",{parentName:"ul"},"Historical"),(0,l.kt)("li",{parentName:"ul"},"Horror"),(0,l.kt)("li",{parentName:"ul"},"Humor"),(0,l.kt)("li",{parentName:"ul"},"Manga"),(0,l.kt)("li",{parentName:"ul"},"Parody"),(0,l.kt)("li",{parentName:"ul"},"Romance"),(0,l.kt)("li",{parentName:"ul"},"Science Fiction"),(0,l.kt)("li",{parentName:"ul"},"Sport"),(0,l.kt)("li",{parentName:"ul"},"Super-Hero"),(0,l.kt)("li",{parentName:"ul"},"War"),(0,l.kt)("li",{parentName:"ul"},"Western")),(0,l.kt)("h3",{id:"tags"},"Tags"),(0,l.kt)("p",null,"Any tags asscociated with the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag")," children elements for the individual tag values. For example, ",(0,l.kt)("em",{parentName:"p"},"ninja")," or ",(0,l.kt)("em",{parentName:"p"},"school life"),"."),(0,l.kt)("h3",{id:"arcs"},"Arcs"),(0,l.kt)("p",null,"Any story arcs the book is a part of."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," children elements that contain the following elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Name")),(0,l.kt)("p",{parentName:"li"},"  The name of the story arc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Number")),(0,l.kt)("p",{parentName:"li"},"  An optional story arc number for the book."))),(0,l.kt)("h3",{id:"characters"},"Characters"),(0,l.kt)("p",null,"Any characters in the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Character")," children elements for the individual character names."),(0,l.kt)("h3",{id:"teams"},"Teams"),(0,l.kt)("p",null,"Any teams in the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Team")," children elements for the individual team names."),(0,l.kt)("h3",{id:"locations"},"Locations"),(0,l.kt)("p",null,"Any locations in the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")," children element for the individual location names."),(0,l.kt)("h3",{id:"reprints"},"Reprints"),(0,l.kt)("p",null,"Any books that are reprint in the book."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Reprint")," children elements that contain the following elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ID")),(0,l.kt)("p",{parentName:"li"},"  The identification number from the source of information."),(0,l.kt)("p",{parentName:"li"},"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," attribute is required and has to be one of the following:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Comic Vine"),(0,l.kt)("li",{parentName:"ul"},"Grand Comics Database"),(0,l.kt)("li",{parentName:"ul"},"Metron"),(0,l.kt)("li",{parentName:"ul"},"League of Comic Geeks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Name")),(0,l.kt)("p",{parentName:"li"},"  The name of the book reprinted, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"Strange Academy (2020) #1")))),(0,l.kt)("h3",{id:"gtin"},"GTIN"),(0,l.kt)("p",null,"The Global Trade Item Numbers for the book."),(0,l.kt)("p",null,"It has the following children elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ISBN"))),(0,l.kt)("p",null,"The International Standard Book Number is used for books & magazine. It can be\nten or thirteen digits."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UPC"))),(0,l.kt)("p",null,"The Uniform Product Code which is usually twelve digits."),(0,l.kt)("h3",{id:"blackandwhite"},"BlackAndWhite"),(0,l.kt)("p",null,"An optional boolean element to signify if the book is color or black and white."),(0,l.kt)("h3",{id:"agerating"},"AgeRating"),(0,l.kt)("p",null,"The age rating for the book which is usually determined by the book publisher."),(0,l.kt)("p",null,"Currently, there is no governing body to determine the age rating choices so each publisher has created their own.\nSo, for simplicity's sake the following values are currently specified in the schema:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TODO: Add value list here.")),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("p",null,"A URL pointing to a reference website for the book."),(0,l.kt)("h3",{id:"credits"},"Credits"),(0,l.kt)("p",null,"The schema specifies each creator element can only be present once."),(0,l.kt)("p",null,"It has ",(0,l.kt)("inlineCode",{parentName:"p"},"Credit")," children elements that contains the following elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Creator")),(0,l.kt)("p",{parentName:"li"},"  The name of the creator.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Roles")," which has ",(0,l.kt)("inlineCode",{parentName:"p"},"Role")," children elements that can have the following values:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Writer"),(0,l.kt)("li",{parentName:"ul"},"Script"),(0,l.kt)("li",{parentName:"ul"},"Story"),(0,l.kt)("li",{parentName:"ul"},"Plot"),(0,l.kt)("li",{parentName:"ul"},"Interviewer"),(0,l.kt)("li",{parentName:"ul"},"Artist"),(0,l.kt)("li",{parentName:"ul"},"Penciller"),(0,l.kt)("li",{parentName:"ul"},"Breakdowns"),(0,l.kt)("li",{parentName:"ul"},"Illustrator"),(0,l.kt)("li",{parentName:"ul"},"Layouts"),(0,l.kt)("li",{parentName:"ul"},"Inker"),(0,l.kt)("li",{parentName:"ul"},"Embellisher"),(0,l.kt)("li",{parentName:"ul"},"Finishes"),(0,l.kt)("li",{parentName:"ul"},"Ink Assists"),(0,l.kt)("li",{parentName:"ul"},"Colorist"),(0,l.kt)("li",{parentName:"ul"},"Color Separations"),(0,l.kt)("li",{parentName:"ul"},"Color Assists"),(0,l.kt)("li",{parentName:"ul"},"Color Flats"),(0,l.kt)("li",{parentName:"ul"},"Digital Art Technician"),(0,l.kt)("li",{parentName:"ul"},"Gray Tone"),(0,l.kt)("li",{parentName:"ul"},"Letterer"),(0,l.kt)("li",{parentName:"ul"},"Cover"),(0,l.kt)("li",{parentName:"ul"},"Editor"),(0,l.kt)("li",{parentName:"ul"},"Consulting Editor"),(0,l.kt)("li",{parentName:"ul"},"Assistant Editor"),(0,l.kt)("li",{parentName:"ul"},"Associate Editor"),(0,l.kt)("li",{parentName:"ul"},"Group Editor"),(0,l.kt)("li",{parentName:"ul"},"Senior Editor"),(0,l.kt)("li",{parentName:"ul"},"Managing Editor"),(0,l.kt)("li",{parentName:"ul"},"Collection Editor"),(0,l.kt)("li",{parentName:"ul"},"Production"),(0,l.kt)("li",{parentName:"ul"},"Designer"),(0,l.kt)("li",{parentName:"ul"},"Logo Design"),(0,l.kt)("li",{parentName:"ul"},"Translator"),(0,l.kt)("li",{parentName:"ul"},"Supervising Editor"),(0,l.kt)("li",{parentName:"ul"},"Executive Editor"),(0,l.kt)("li",{parentName:"ul"},"Editor In Chief"),(0,l.kt)("li",{parentName:"ul"},"President"),(0,l.kt)("li",{parentName:"ul"},"Publisher"),(0,l.kt)("li",{parentName:"ul"},"Chief Creative Officer"),(0,l.kt)("li",{parentName:"ul"},"Executive Producer"),(0,l.kt)("li",{parentName:"ul"},"Other")))))}m.isMDXComponent=!0}}]);
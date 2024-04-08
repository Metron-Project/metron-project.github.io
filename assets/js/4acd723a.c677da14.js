"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[9653],{264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>x,toc:()=>c});var t=s(5893),r=s(3905),a=s(9286);const i='<?xml version="1.0" encoding="utf-8"?>\n<xs:schema elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">\n    <xs:element name="MetronInfo" type="metroninfoType" />\n\n    \x3c!-- Complex Types --\x3e\n    <xs:complexType name="metroninfoType">\n        <xs:all>\n            <xs:element name="ID" type="sourcesType" minOccurs="0" />\n            <xs:element name="Publisher" type="resourceType" />\n            <xs:element name="Series" type="seriesType" />\n            <xs:element name="CollectionTitle" type="xs:string" minOccurs="0" />\n            <xs:element name="Number" type="xs:string" minOccurs="0" />\n            <xs:element name="Stories" type="storyType" minOccurs="0" /> \x3c!-- Story titles in issue --\x3e\n            <xs:element name="Summary" type="xs:string" minOccurs="0" />\n            <xs:element name="Prices" type="pricesType" minOccurs="0" />\n            <xs:element name="CoverDate" type="xs:date" minOccurs="0" />\n            <xs:element name="StoreDate" type="xs:date" minOccurs="0" />\n            <xs:element name="PageCount" type="xs:int" minOccurs="0" default="0" />\n            <xs:element name="Notes" type="xs:string" minOccurs="0" />\n            <xs:element name="Genres" type="genresType" minOccurs="0" />\n            <xs:element name="Tags" type="tagsType" minOccurs="0" />\n            <xs:element name="Arcs" type="arcsType" minOccurs="0" />\n            <xs:element name="Characters" type="charactersType" minOccurs="0" />\n            <xs:element name="Teams" type="teamsType" minOccurs="0" />\n            <xs:element name="Universes" type="universesType" minOccurs="0" />\n            <xs:element name="Locations" type="locationsType" minOccurs="0" />\n            <xs:element name="Reprints" type="reprintsType" minOccurs="0" />\n            <xs:element name="GTIN" type="gtinType" minOccurs="0" />\n            <xs:element name="AgeRating" type="ageRatingType" minOccurs="0" default="Unknown" />\n            <xs:element name="URL" type="xs:string" minOccurs="0" /> \x3c!-- Should we make this an array? --\x3e\n            <xs:element name="Credits" type="creditsType" minOccurs="0" />\n            <xs:element name="Pages" type="ArrayOfComicPageInfo" minOccurs="0" />\n        </xs:all>\n    </xs:complexType>\n\n    <xs:complexType name="sourcesType">\n        <xs:sequence>\n            \x3c!-- The following element should be used for the primary source of metadata information. --\x3e\n            <xs:element name="Primary" type="sourceType" />\n            \x3c!-- The following should be used for linking to other resources for the same issue. --\x3e\n            <xs:element name="Alternative" type="sourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="sourceType">\n        <xs:simpleContent>\n            <xs:extension base="xs:positiveInteger">\n                <xs:attribute name="source" type="informationSource" use="required" />\n            </xs:extension>\n        </xs:simpleContent>\n    </xs:complexType>\n\n    <xs:complexType name="storyType">\n        <xs:sequence>\n            <xs:element name="Story" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    \x3c!-- Base type to add \'id\' attribute to the various resources --\x3e\n    <xs:complexType name="resourceType">\n        <xs:simpleContent>\n            <xs:extension base="xs:string">\n                <xs:attribute name="id" type="xs:positiveInteger" />\n            </xs:extension>\n        </xs:simpleContent>\n    </xs:complexType>\n\n    <xs:complexType name="seriesType">\n        <xs:all>\n            <xs:element name="Name" type="xs:string" />\n            <xs:element name="SortName" type="xs:string" minOccurs="0" />\n            <xs:element name="Volume" type="xs:int" minOccurs="0" />\n            <xs:element name="Format" type="formatType" minOccurs="0" />\n        </xs:all>\n        <xs:attribute name="lang" type="languageCode" default="en" />\n        <xs:attribute name="id" type="xs:positiveInteger" />\n    </xs:complexType>\n\n    <xs:complexType name="charactersType">\n        <xs:sequence>\n            <xs:element name="Character" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="teamsType">\n        <xs:sequence>\n            <xs:element name="Team" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="locationsType">\n        <xs:sequence>\n            <xs:element name="Location" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="tagsType">\n        <xs:sequence>\n            <xs:element name="Tag" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="reprintsType">\n        <xs:sequence>\n            <xs:element name="Reprint" type="resourceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="universesType">\n        <xs:sequence>\n            <xs:element name="Universe" type="universeType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="universeType">\n        <xs:all>\n            <xs:element name="Name" type="xs:string" />\n            <xs:element name="Designation" type="xs:string" minOccurs="0" />\n        </xs:all>\n        <xs:attribute name="id" type="xs:positiveInteger" />\n    </xs:complexType>\n\n    <xs:complexType name="arcsType">\n        <xs:sequence>\n            <xs:element name="Arc" type="arcType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="arcType">\n        <xs:all>\n            <xs:element name="Name" type="xs:string" />\n            <xs:element name="Number" type="xs:positiveInteger" minOccurs="0" />\n        </xs:all>\n        <xs:attribute name="id" type="xs:positiveInteger" />\n    </xs:complexType>\n\n    <xs:complexType name="creditsType">\n        <xs:sequence>\n            <xs:element name="Credit" type="creditType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="roleType">\n        <xs:simpleContent>\n            <xs:extension base="roleValues">\n                <xs:attribute name="id" type="xs:positiveInteger" />\n            </xs:extension>\n        </xs:simpleContent>\n    </xs:complexType>\n\n    <xs:complexType name="rolesType">\n        <xs:sequence>\n            <xs:element name="Role" type="roleType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="creditType">\n        <xs:all>\n            <xs:element name="Creator" type="resourceType" />\n            <xs:element name="Roles" type="rolesType" minOccurs="0" />\n        </xs:all>\n    </xs:complexType>\n\n    <xs:complexType name="genreType">\n        <xs:simpleContent>\n            <xs:extension base="genreValues">\n                <xs:attribute name="id" type="xs:positiveInteger" />\n            </xs:extension>\n        </xs:simpleContent>\n    </xs:complexType>\n\n    <xs:complexType name="genresType">\n        <xs:sequence>\n            <xs:element name="Genre" type="genreType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="pricesType">\n        <xs:sequence>\n            <xs:element name="Price" type="priceType" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="priceType">\n        <xs:simpleContent>\n            <xs:extension base="xs:decimal">\n                <xs:attribute name="country" type="countryCode" use="required" />\n            </xs:extension>\n        </xs:simpleContent>\n    </xs:complexType>\n\n    <xs:complexType name="gtinType">\n        <xs:all>\n            <xs:element name="ISBN" minOccurs="0" />\n            <xs:element name="UPC" minOccurs="0" />\n        </xs:all>\n    </xs:complexType>\n\n    <xs:complexType name="ArrayOfComicPageInfo">\n        <xs:sequence>\n            <xs:element name="Page" type="ComicPageInfo" minOccurs="0" maxOccurs="unbounded" />\n        </xs:sequence>\n    </xs:complexType>\n\n    <xs:complexType name="ComicPageInfo">\n        <xs:attribute name="Image" type="xs:int" use="required" />\n        <xs:attribute name="Type" type="ComicPageType" default="Story" />\n        <xs:attribute name="DoublePage" type="xs:boolean" default="false" />\n        <xs:attribute name="ImageSize" type="xs:long" default="0" />\n        <xs:attribute name="Key" type="xs:string" default="" />\n        <xs:attribute name="Bookmark" type="xs:string" default="" />\n        <xs:attribute name="ImageWidth" type="xs:int" default="-1" />\n        <xs:attribute name="ImageHeight" type="xs:int" default="-1" />\n    </xs:complexType>\n\n    \x3c!-- Simple Types --\x3e\n    <xs:simpleType name="formatType">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Annual" />\n            <xs:enumeration value="Graphic Novel" />\n            <xs:enumeration value="Limited Series" /> \x3c!-- Used for mini/maxi series --\x3e\n            <xs:enumeration value="One-Shot" />\n            <xs:enumeration value="Series" /> \x3c!-- Needs better name, but used for Ongoing/Cancelled series --\x3e\n            <xs:enumeration value="Trade Paperback" />\n            <xs:enumeration value="Hardcover" />\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="informationSource">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Comic Vine" />\n            <xs:enumeration value="Grand Comics Database" />\n            <xs:enumeration value="Marvel" />\n            <xs:enumeration value="Metron" />\n            <xs:enumeration value="League of Comic Geeks" />\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="roleValues">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Writer" />\n            <xs:enumeration value="Script" />\n            <xs:enumeration value="Story" />\n            <xs:enumeration value="Plot" />\n            <xs:enumeration value="Interviewer" />\n            <xs:enumeration value="Artist" />\n            <xs:enumeration value="Penciller" />\n            <xs:enumeration value="Breakdowns" />\n            <xs:enumeration value="Illustrator" />\n            <xs:enumeration value="Layouts" />\n            <xs:enumeration value="Inker" />\n            <xs:enumeration value="Embellisher" />\n            <xs:enumeration value="Finishes" />\n            <xs:enumeration value="Ink Assists" />\n            <xs:enumeration value="Colorist" />\n            <xs:enumeration value="Color Separations" />\n            <xs:enumeration value="Color Assists" />\n            <xs:enumeration value="Color Flats" />\n            <xs:enumeration value="Digital Art Technician" />\n            <xs:enumeration value="Gray Tone" />\n            <xs:enumeration value="Letterer" />\n            <xs:enumeration value="Cover" />\n            <xs:enumeration value="Editor" />\n            <xs:enumeration value="Consulting Editor" />\n            <xs:enumeration value="Assistant Editor" />\n            <xs:enumeration value="Associate Editor" />\n            <xs:enumeration value="Group Editor" />\n            <xs:enumeration value="Senior Editor" />\n            <xs:enumeration value="Managing Editor" />\n            <xs:enumeration value="Collection Editor" />\n            <xs:enumeration value="Production" />\n            <xs:enumeration value="Designer" />\n            <xs:enumeration value="Logo Design" />\n            <xs:enumeration value="Translator" />\n            <xs:enumeration value="Supervising Editor" />\n            <xs:enumeration value="Executive Editor" />\n            <xs:enumeration value="Editor In Chief" />\n            <xs:enumeration value="President" />\n            <xs:enumeration value="Publisher" />\n            <xs:enumeration value="Chief Creative Officer" />\n            <xs:enumeration value="Executive Producer" />\n            <xs:enumeration value="Other" />\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="genreValues">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Adult" />\n            <xs:enumeration value="Crime" />\n            <xs:enumeration value="Espionage" />\n            <xs:enumeration value="Fantasy" />\n            <xs:enumeration value="Historical" />\n            <xs:enumeration value="Horror" />\n            <xs:enumeration value="Humor" />\n            <xs:enumeration value="Manga" />\n            <xs:enumeration value="Parody" />\n            <xs:enumeration value="Romance" />\n            <xs:enumeration value="Science Fiction" />\n            <xs:enumeration value="Sport" />\n            <xs:enumeration value="Super-Hero" />\n            <xs:enumeration value="War" />\n            <xs:enumeration value="Western" />\n        </xs:restriction>\n    </xs:simpleType>\n    \x3c!--\n        There\'s no governing body for age ratings, so let\'s use something fairly simple to cover most cases.\n        It won\'t be perfect, but adding different values for all the different ways publishers use them seems\n        unnecessarily difficult. The age ranges are just suggestions.\n    --\x3e\n    <xs:simpleType name="ageRatingType">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Unknown" />\n            <xs:enumeration value="Everyone" /> \x3c!-- Appropriate for readers of all ages. --\x3e\n            <xs:enumeration value="Teen" /> \x3c!-- Appropriate for readers age 12 and older. --\x3e\n            <xs:enumeration value="Teen Plus" /> \x3c!-- Appropriate for readers age 15 and older. --\x3e\n            <xs:enumeration value="Mature" /> \x3c!-- Appropriate for readers age 17 and older. --\x3e\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="countryCode">\n        <xs:restriction base="xs:string">\n            <xs:pattern value="[A-Z][A-Z]" />\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="languageCode">\n        <xs:restriction base="xs:string">\n            <xs:pattern value="[a-z][a-z]" />\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="ComicPageType">\n        <xs:list>\n            <xs:simpleType>\n                <xs:restriction base="xs:string">\n                    <xs:enumeration value="FrontCover" />\n                    <xs:enumeration value="InnerCover" />\n                    <xs:enumeration value="Roundup" />\n                    <xs:enumeration value="Story" />\n                    <xs:enumeration value="Advertisement" />\n                    <xs:enumeration value="Editorial" />\n                    <xs:enumeration value="Letters" />\n                    <xs:enumeration value="Preview" />\n                    <xs:enumeration value="BackCover" />\n                    <xs:enumeration value="Other" />\n                    <xs:enumeration value="Deleted" />\n                </xs:restriction>\n            </xs:simpleType>\n        </xs:list>\n    </xs:simpleType>\n</xs:schema>',o={sidebar_position:25,title:"Version 1.0 (Draft)"},m=void 0,x={id:"metroninfo/schemas/v1.0",title:"Version 1.0 (Draft)",description:"Source on GitHub",source:"@site/docs/metroninfo/schemas/v1.0.md",sourceDirName:"metroninfo/schemas",slug:"/metroninfo/schemas/v1.0",permalink:"/docs/metroninfo/schemas/v1.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Version 1.0 (Draft)"},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/docs/category/schemas"},next:{title:"Mokkari",permalink:"/docs/mokkari"}},u={},c=[];function l(e){const n={a:"a",p:"p",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Metron-Project/metroninfo/blob/master/drafts/v1.0/MetronInfo.xsd",children:"Source"})," on GitHub"]}),"\n","\n","\n",(0,t.jsx)(a.Z,{className:"language-xml",children:i})]})}function p(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3905:(e,n,s)=>{s.d(n,{ah:()=>x});var t=s(7294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var m=t.createContext({}),x=function(e){var n=t.useContext(m),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=x(s),p=r,y=l["".concat(m,".").concat(p)]||l[p]||u[p]||a;return s?t.createElement(y,i(i({ref:n},c),{},{components:s})):t.createElement(y,i({ref:n},c))}));c.displayName="MDXCreateElement"}}]);
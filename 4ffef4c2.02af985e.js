(window.webpackJsonp=window.webpackJsonp||[]).push([[863],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,p(p({ref:t},b),{},{components:r})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},936:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2837)),c=["components"],p={},i={unversionedId:"puppeteer.browsercontextemittedevents",id:"version-10.0.0/puppeteer.browsercontextemittedevents",isDocsHomePage:!1,title:"puppeteer.browsercontextemittedevents",description:"Home &gt; puppeteer &gt; BrowserContextEmittedEvents",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.browsercontextemittedevents.md",slug:"/puppeteer.browsercontextemittedevents",permalink:"/docs/10.0.0/puppeteer.browsercontextemittedevents",version:"10.0.0"},b=[{value:"BrowserContextEmittedEvents enum",id:"browsercontextemittedevents-enum",children:[]},{value:"Enumeration Members",id:"enumeration-members",children:[]}],l={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.browsercontextemittedevents"},"BrowserContextEmittedEvents")),Object(o.b)("h2",{id:"browsercontextemittedevents-enum"},"BrowserContextEmittedEvents enum"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserContextEmittedEvents \n")),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration Members"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Member"),Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetChanged"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetchanged",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when the url of a target inside the browser context changes. Contains a ",Object(o.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.target"},"Target")," instance.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetCreated"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetcreated",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when a target is created within the browser context, for example when a new page is opened by ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",Object(o.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.browsercontext.newpage"},"browserContext.newPage"),"Contains a ",Object(o.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.target"},"Target")," instance.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetDestroyed"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetdestroyed",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed within the browser context, for example when a page is closed. Contains a ",Object(o.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.target"},"Target")," instance.")))))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1410],{1483:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(2837)),p=["components"],c={},i={unversionedId:"puppeteer.page.emulatetimezone",id:"puppeteer.page.emulatetimezone",isDocsHomePage:!1,title:"puppeteer.page.emulatetimezone",description:"Home &gt; puppeteer &gt; Page &gt; emulateTimezone",source:"@site/docs\\puppeteer.page.emulatetimezone.md",slug:"/puppeteer.page.emulatetimezone",permalink:"/docs/next/puppeteer.page.emulatetimezone",version:"current"},u=[{value:"Page.emulateTimezone() method",id:"pageemulatetimezone-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.page.emulatetimezone"},"emulateTimezone")),Object(o.b)("h2",{id:"pageemulatetimezone-method"},"Page.emulateTimezone() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"emulateTimezone(timezoneId?: string): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"timezoneId"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Changes the timezone of the page. See ",Object(o.b)("a",{parentName:"td",href:"https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt"},"ICU\u2019s metaZones.txt")," for a list of supported timezone IDs. Passing ",Object(o.b)("code",null,"null")," disables timezone emulation.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),s=r,d=m["".concat(p,".").concat(s)]||m[s]||b[s]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var u=2;u<o;u++)p[u]=n[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
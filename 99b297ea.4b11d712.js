(window.webpackJsonp=window.webpackJsonp||[]).push([[1686],{1759:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(2837)),p=["components"],o={},u={unversionedId:"puppeteer.touchscreen.tap",id:"version-10.0.0/puppeteer.touchscreen.tap",isDocsHomePage:!1,title:"puppeteer.touchscreen.tap",description:"Home &gt; puppeteer &gt; Touchscreen &gt; tap",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.touchscreen.tap.md",slug:"/puppeteer.touchscreen.tap",permalink:"/docs/10.0.0/puppeteer.touchscreen.tap",version:"10.0.0"},i=[{value:"Touchscreen.tap() method",id:"touchscreentap-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,p);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.touchscreen"},"Touchscreen")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.touchscreen.tap"},"tap")),Object(c.b)("h2",{id:"touchscreentap-method"},"Touchscreen.tap() method"),Object(c.b)("p",null,"Dispatches a ",Object(c.b)("inlineCode",{parentName:"p"},"touchstart")," and ",Object(c.b)("inlineCode",{parentName:"p"},"touchend")," event."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"tap(x: number, y: number): Promise<void>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"number"),Object(c.b)("td",{parentName:"tr",align:null},"Horizontal position of the tap.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"y"),Object(c.b)("td",{parentName:"tr",align:null},"number"),Object(c.b)("td",{parentName:"tr",align:null},"Vertical position of the tap.")))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"))}b.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(p,".").concat(m)]||b[m]||s[m]||c;return r?a.a.createElement(d,o(o({ref:t},i),{},{components:r})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,p=new Array(c);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var i=2;i<c;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
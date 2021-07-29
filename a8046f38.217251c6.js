(window.webpackJsonp=window.webpackJsonp||[]).push([[1824],{1898:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2837)),c=["components"],u={},o={unversionedId:"puppeteer.httprequest.enqueueinterceptaction",id:"puppeteer.httprequest.enqueueinterceptaction",isDocsHomePage:!1,title:"puppeteer.httprequest.enqueueinterceptaction",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; enqueueInterceptAction",source:"@site/docs\\puppeteer.httprequest.enqueueinterceptaction.md",slug:"/puppeteer.httprequest.enqueueinterceptaction",permalink:"/docs/next/puppeteer.httprequest.enqueueinterceptaction",version:"current"},i=[{value:"HTTPRequest.enqueueInterceptAction() method",id:"httprequestenqueueinterceptaction-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.httprequest.enqueueinterceptaction"},"enqueueInterceptAction")),Object(p.b)("h2",{id:"httprequestenqueueinterceptaction-method"},"HTTPRequest.enqueueInterceptAction() method"),Object(p.b)("p",null,"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guarnateed to resolve before the request interception is finalized."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"enqueueInterceptAction(pendingHandler: () => void | PromiseLike<unknown>): void;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pendingHandler"),Object(p.b)("td",{parentName:"tr",align:null},"() =",">"," void ","|"," PromiseLike","<","unknown",">"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"void"))}b.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||s[d]||p;return n?a.a.createElement(m,u(u({ref:t},i),{},{components:n})):a.a.createElement(m,u({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,c=new Array(p);c[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<p;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
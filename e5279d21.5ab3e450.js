(window.webpackJsonp=window.webpackJsonp||[]).push([[2483],{2556:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2837)),o=["components"],c={},i={unversionedId:"puppeteer.eventemitter.off",id:"version-6.0.0/puppeteer.eventemitter.off",isDocsHomePage:!1,title:"puppeteer.eventemitter.off",description:"Home &gt; puppeteer &gt; EventEmitter &gt; off",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.eventemitter.off.md",slug:"/puppeteer.eventemitter.off",permalink:"/docs/6.0.0/puppeteer.eventemitter.off",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.eventemitter.listenercount",permalink:"/docs/6.0.0/puppeteer.eventemitter.listenercount"},next:{title:"puppeteer.eventemitter.on",permalink:"/docs/6.0.0/puppeteer.eventemitter.on"}},l=[{value:"EventEmitter.off() method",id:"eventemitteroff-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.eventemitter.off"},"off")),Object(p.b)("h2",{id:"eventemitteroff-method"},"EventEmitter.off() method"),Object(p.b)("p",null,"Remove an event listener from firing."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"off(event: EventType, handler: Handler): EventEmitter;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"event"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.eventtype"},"EventType")),Object(p.b)("td",{parentName:"tr",align:null},"the event type you'd like to stop listening to.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"handler"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.handler"},"Handler")),Object(p.b)("td",{parentName:"tr",align:null},"the function that should be removed.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.eventemitter"},"EventEmitter")),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}b.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(o,".").concat(f)]||b[f]||m[f]||p;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
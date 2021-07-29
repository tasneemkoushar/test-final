(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,s=u["".concat(l,".").concat(m)]||u[m]||b[m]||p;return r?a.a.createElement(s,o(o({ref:t},c),{},{components:r})):a.a.createElement(s,o({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},967:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2837)),l=["components"],o={},d={unversionedId:"puppeteer.elementhandle.draganddrop",id:"version-10.0.0/puppeteer.elementhandle.draganddrop",isDocsHomePage:!1,title:"puppeteer.elementhandle.draganddrop",description:"Home &gt; puppeteer &gt; ElementHandle &gt; dragAndDrop",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.elementhandle.draganddrop.md",slug:"/puppeteer.elementhandle.draganddrop",permalink:"/docs/10.0.0/puppeteer.elementhandle.draganddrop",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.elementhandle.drag",permalink:"/docs/10.0.0/puppeteer.elementhandle.drag"},next:{title:"puppeteer.elementhandle.dragenter",permalink:"/docs/10.0.0/puppeteer.elementhandle.dragenter"}},c=[{value:"ElementHandle.dragAndDrop() method",id:"elementhandledraganddrop-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.elementhandle.draganddrop"},"dragAndDrop")),Object(p.b)("h2",{id:"elementhandledraganddrop-method"},"ElementHandle.dragAndDrop() method"),Object(p.b)("p",null,"This method triggers a dragenter, dragover, and drop on the element."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"dragAndDrop(target: ElementHandle, options?: {\n        delay: number;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"target"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ delay: number; }"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),l=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},s=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),s=n,d=f["".concat(o,".").concat(s)]||f[s]||y[s]||c;return r?p.a.createElement(d,a(a({ref:t},u),{},{components:r})):p.a.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},372:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(3),p=r(7),c=(r(0),r(2837)),o=["components"],a={},i={unversionedId:"puppeteer.puppeteerlifecycleevent",id:"version-6.0.0/puppeteer.puppeteerlifecycleevent",isDocsHomePage:!1,title:"puppeteer.puppeteerlifecycleevent",description:"Home &gt; puppeteer &gt; PuppeteerLifeCycleEvent",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.puppeteerlifecycleevent.md",slug:"/puppeteer.puppeteerlifecycleevent",permalink:"/docs/6.0.0/puppeteer.puppeteerlifecycleevent",version:"6.0.0"},u=[{value:"PuppeteerLifeCycleEvent type",id:"puppeteerlifecycleevent-type",children:[]}],l={toc:u};function f(e){var t=e.components,r=Object(p.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")),Object(c.b)("h2",{id:"puppeteerlifecycleevent-type"},"PuppeteerLifeCycleEvent type"),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type PuppeteerLifeCycleEvent = 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';\n")))}f.isMDXComponent=!0}}]);
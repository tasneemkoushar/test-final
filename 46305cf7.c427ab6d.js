(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{2837:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),i=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),s=r,f=d["".concat(o,".").concat(s)]||d[s]||m[s]||p;return t?a.a.createElement(f,c(c({ref:n},u),{},{components:t})):a.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<p;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},842:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),p=(t(0),t(2837)),o=["components"],c={},l={unversionedId:"puppeteer.unwrapelementhandle",id:"version-10.0.0/puppeteer.unwrapelementhandle",isDocsHomePage:!1,title:"puppeteer.unwrapelementhandle",description:"Home &gt; puppeteer &gt; UnwrapElementHandle",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.unwrapelementhandle.md",slug:"/puppeteer.unwrapelementhandle",permalink:"/docs/10.0.0/puppeteer.unwrapelementhandle",version:"10.0.0"},u=[{value:"UnwrapElementHandle type",id:"unwrapelementhandle-type",children:[]}],i={toc:u};function d(e){var n=e.components,t=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.unwrapelementhandle"},"UnwrapElementHandle")),Object(p.b)("h2",{id:"unwrapelementhandle-type"},"UnwrapElementHandle type"),Object(p.b)("p",null,"Unwraps a DOM element out of an ElementHandle instance"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type UnwrapElementHandle<X> = X extends ElementHandle<infer E> ? E : X;\n")),Object(p.b)("b",null,"References:")," [ElementHandle](/docs/10.0.0/puppeteer.elementhandle)")}d.isMDXComponent=!0}}]);
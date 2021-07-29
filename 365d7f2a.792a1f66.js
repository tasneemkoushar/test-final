(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,b=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return n?o.a.createElement(b,c(c({ref:t},i),{},{components:n})):o.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},667:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(2837)),p=["components"],c={},l={unversionedId:"puppeteer.elementhandle.hover",id:"version-5.4.0/puppeteer.elementhandle.hover",isDocsHomePage:!1,title:"puppeteer.elementhandle.hover",description:"Home &gt; puppeteer &gt; ElementHandle &gt; hover",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.hover.md",slug:"/puppeteer.elementhandle.hover",permalink:"/docs/puppeteer.elementhandle.hover",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.focus",permalink:"/docs/puppeteer.elementhandle.focus"},next:{title:"puppeteer.elementhandle.clickablepoint",permalink:"/docs/puppeteer.elementhandle.clickablepoint"}},i=[{value:"ElementHandle.hover() method",id:"elementhandlehover-method",children:[]}],u={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer.elementhandle.hover"},"hover")),Object(a.b)("h2",{id:"elementhandlehover-method"},"ElementHandle.hover() method"),Object(a.b)("p",null,"This method scrolls element into view if needed, and then uses ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element. If the element is detached from DOM, the method throws an error."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"hover(): Promise<void>;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);
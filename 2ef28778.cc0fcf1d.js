(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||m[b]||p;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<p;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},592:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),p=(n(0),n(2837)),a=["components"],c={},i={unversionedId:"puppeteer.launchoptions.timeout",id:"puppeteer.launchoptions.timeout",isDocsHomePage:!1,title:"puppeteer.launchoptions.timeout",description:"Home &gt; puppeteer &gt; LaunchOptions &gt; timeout",source:"@site/docs\\puppeteer.launchoptions.timeout.md",slug:"/puppeteer.launchoptions.timeout",permalink:"/docs/next/puppeteer.launchoptions.timeout",version:"current"},u=[{value:"LaunchOptions.timeout property",id:"launchoptionstimeout-property",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.launchoptions"},"LaunchOptions")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.launchoptions.timeout"},"timeout")),Object(p.b)("h2",{id:"launchoptionstimeout-property"},"LaunchOptions.timeout property"),Object(p.b)("p",null,"Maximum time in milliseconds to wait for the browser to start. Pass ",Object(p.b)("inlineCode",{parentName:"p"},"0")," to disable the timeout."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"timeout?: number;\n")))}s.isMDXComponent=!0}}]);
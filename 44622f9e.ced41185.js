(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,h=s["".concat(p,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(h,c(c({ref:t},i),{},{components:n})):a.a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},819:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(2837)),p=["components"],c={},u={unversionedId:"puppeteer.launchoptions.executablepath",id:"puppeteer.launchoptions.executablepath",isDocsHomePage:!1,title:"puppeteer.launchoptions.executablepath",description:"Home &gt; puppeteer &gt; LaunchOptions &gt; executablePath",source:"@site/docs\\puppeteer.launchoptions.executablepath.md",slug:"/puppeteer.launchoptions.executablepath",permalink:"/docs/next/puppeteer.launchoptions.executablepath",version:"current"},i=[{value:"LaunchOptions.executablePath property",id:"launchoptionsexecutablepath-property",children:[]}],l={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.launchoptions"},"LaunchOptions")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.launchoptions.executablepath"},"executablePath")),Object(o.b)("h2",{id:"launchoptionsexecutablepath-property"},"LaunchOptions.executablePath property"),Object(o.b)("p",null,"Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"executablePath?: string;\n")))}s.isMDXComponent=!0}}]);
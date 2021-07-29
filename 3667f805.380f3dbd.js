(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=p.a.createContext({}),d=function(e){var t=p.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},s=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=d(r),s=n,f=l["".concat(c,".").concat(s)]||l[s]||b[s]||o;return r?p.a.createElement(f,a(a({ref:t},i),{},{components:r})):p.a.createElement(f,a({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var i=2;i<o;i++)c[i]=r[i];return p.a.createElement.apply(null,c)}return p.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},668:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),o=(r(0),r(2837)),c=["components"],a={},u={unversionedId:"puppeteer.puppeteernode.product",id:"puppeteer.puppeteernode.product",isDocsHomePage:!1,title:"puppeteer.puppeteernode.product",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; product",source:"@site/docs\\puppeteer.puppeteernode.product.md",slug:"/puppeteer.puppeteernode.product",permalink:"/docs/next/puppeteer.puppeteernode.product",version:"current"},i=[{value:"PuppeteerNode.product property",id:"puppeteernodeproduct-property",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:i};function l(e){var t=e.components,r=Object(p.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.puppeteernode.product"},"product")),Object(o.b)("h2",{id:"puppeteernodeproduct-property"},"PuppeteerNode.product property"),Object(o.b)("p",null,"The name of the browser that is under automation (",Object(o.b)("inlineCode",{parentName:"p"},'"chrome"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"firefox"'),")"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"get product(): string;\n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The product is set by the ",Object(o.b)("inlineCode",{parentName:"p"},"PUPPETEER_PRODUCT")," environment variable or the ",Object(o.b)("inlineCode",{parentName:"p"},"product")," option in ",Object(o.b)("inlineCode",{parentName:"p"},"puppeteer.launch([options])")," and defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"chrome"),". Firefox support is experimental."))}l.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2730],{2803:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(2837)),l=["components"],p={},c={unversionedId:"puppeteer.elementhandle.boxmodel",id:"version-6.0.0/puppeteer.elementhandle.boxmodel",isDocsHomePage:!1,title:"puppeteer.elementhandle.boxmodel",description:"Home &gt; puppeteer &gt; ElementHandle &gt; boxModel",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.elementhandle.boxmodel.md",slug:"/puppeteer.elementhandle.boxmodel",permalink:"/docs/6.0.0/puppeteer.elementhandle.boxmodel",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.elementhandle.boundingbox",permalink:"/docs/6.0.0/puppeteer.elementhandle.boundingbox"},next:{title:"puppeteer.elementhandle.click",permalink:"/docs/6.0.0/puppeteer.elementhandle.click"}},i=[{value:"ElementHandle.boxModel() method",id:"elementhandleboxmodel-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.elementhandle.boxmodel"},"boxModel")),Object(a.b)("h2",{id:"elementhandleboxmodel-method"},"ElementHandle.boxModel() method"),Object(a.b)("p",null,"This method returns boxes of the element, or ",Object(a.b)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"boxModel(): Promise<BoxModel | null>;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.boxmodel"},"BoxModel")," ","|"," null",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"Boxes are represented as an array of points; Each Point is an object ",Object(a.b)("inlineCode",{parentName:"p"},"{x, y}"),". Box points are sorted clock-wise."))}d.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,s=d["".concat(l,".").concat(m)]||d[m]||b[m]||a;return n?o.a.createElement(s,p(p({ref:t},i),{},{components:n})):o.a.createElement(s,p({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
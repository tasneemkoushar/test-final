(window.webpackJsonp=window.webpackJsonp||[]).push([[2e3],{2074:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2837)),i=["components"],o={},c={unversionedId:"puppeteer.paperformat",id:"version-6.0.0/puppeteer.paperformat",isDocsHomePage:!1,title:"puppeteer.paperformat",description:"Home &gt; puppeteer &gt; PaperFormat",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.paperformat.md",slug:"/puppeteer.paperformat",permalink:"/docs/6.0.0/puppeteer.paperformat",version:"6.0.0"},l=[{value:"PaperFormat type",id:"paperformat-type",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(p.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.paperformat"},"PaperFormat")),Object(p.b)("h2",{id:"paperformat-type"},"PaperFormat type"),Object(p.b)("p",null,"All the valid paper format types when printing a PDF."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type PaperFormat = 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';\n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The sizes of each format are as follows: - ",Object(p.b)("inlineCode",{parentName:"p"},"Letter"),": 8.5in x 11in"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"Legal"),": 8.5in x 14in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"Tabloid"),": 11in x 17in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"Ledger"),": 17in x 11in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A0"),": 33.1in x 46.8in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A1"),": 23.4in x 33.1in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A2"),": 16.54in x 23.4in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A3"),": 11.7in x 16.54in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A4"),": 8.27in x 11.7in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A5"),": 5.83in x 8.27in")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"A6"),": 4.13in x 5.83in"))))}u.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),O=n,f=u["".concat(i,".").concat(O)]||u[O]||m[O]||p;return r?a.a.createElement(f,o(o({ref:t},l),{},{components:r})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);
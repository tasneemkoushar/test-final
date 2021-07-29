(window.webpackJsonp=window.webpackJsonp||[]).push([[708],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||p;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},781:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),p=(r(0),r(2837)),o=["components"],c={},s={unversionedId:"puppeteer.page.setextrahttpheaders",id:"puppeteer.page.setextrahttpheaders",isDocsHomePage:!1,title:"puppeteer.page.setextrahttpheaders",description:"Home &gt; puppeteer &gt; Page &gt; setExtraHTTPHeaders",source:"@site/docs\\puppeteer.page.setextrahttpheaders.md",slug:"/puppeteer.page.setextrahttpheaders",permalink:"/docs/next/puppeteer.page.setextrahttpheaders",version:"current"},i=[{value:"Page.setExtraHTTPHeaders() method",id:"pagesetextrahttpheaders-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.page.setextrahttpheaders"},"setExtraHTTPHeaders")),Object(p.b)("h2",{id:"pagesetextrahttpheaders-method"},"Page.setExtraHTTPHeaders() method"),Object(p.b)("p",null,"The extra HTTP headers will be sent with every request the page initiates. NOTE: All HTTP header names are lowercased. (HTTP headers are case-insensitive, so this shouldn\u2019t impact your server code.) NOTE: page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"headers"),Object(p.b)("td",{parentName:"tr",align:null},"Record","<","string, string",">"),Object(p.b)("td",{parentName:"tr",align:null},"An object containing additional HTTP headers to be sent with every request. All header values must be strings.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"))}l.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||p;return r?a.a.createElement(m,u(u({ref:t},c),{},{components:r})):a.a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},763:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),p=(r(0),r(2837)),o=["components"],u={},i={unversionedId:"puppeteer.httprequest.continue",id:"version-5.4.0/puppeteer.httprequest.continue",isDocsHomePage:!1,title:"puppeteer.httprequest.continue",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; continue",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.httprequest.continue.md",slug:"/puppeteer.httprequest.continue",permalink:"/docs/puppeteer.httprequest.continue",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.httprequest.abort",permalink:"/docs/puppeteer.httprequest.abort"},next:{title:"puppeteer.httprequest.failure",permalink:"/docs/puppeteer.httprequest.failure"}},c=[{value:"HTTPRequest.continue() method",id:"httprequestcontinue-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/puppeteer.httprequest.continue"},"continue")),Object(p.b)("h2",{id:"httprequestcontinue-method"},"HTTPRequest.continue() method"),Object(p.b)("p",null,"Continues request with optional request overrides."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"continue(overrides?: ContinueRequestOverrides): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"overrides"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/puppeteer.continuerequestoverrides"},"ContinueRequestOverrides")),Object(p.b)("td",{parentName:"tr",align:null},"optional overrides to apply to the request.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"To use this, request interception should be enabled with ",Object(p.b)("a",{parentName:"p",href:"/docs/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),Object(p.b)("p",null,"Exception is immediately thrown if the request interception is not enabled."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  // Override headers\n  const headers = Object.assign({}, request.headers(), {\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  });\n  request.continue({headers});\n});\n\n")))}l.isMDXComponent=!0}}]);
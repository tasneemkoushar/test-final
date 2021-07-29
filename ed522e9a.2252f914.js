(window.webpackJsonp=window.webpackJsonp||[]).push([[2576],{2649:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(2837)),p=["components"],i={},l={unversionedId:"puppeteer.webworker.evaluate",id:"version-10.0.0/puppeteer.webworker.evaluate",isDocsHomePage:!1,title:"puppeteer.webworker.evaluate",description:"Home &gt; puppeteer &gt; WebWorker &gt; evaluate",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.webworker.evaluate.md",slug:"/puppeteer.webworker.evaluate",permalink:"/docs/10.0.0/puppeteer.webworker.evaluate",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.webworker",permalink:"/docs/10.0.0/puppeteer.webworker"},next:{title:"puppeteer.webworker.evaluatehandle",permalink:"/docs/10.0.0/puppeteer.webworker.evaluatehandle"}},c=[{value:"WebWorker.evaluate() method",id:"webworkerevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.webworker"},"WebWorker")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.webworker.evaluate"},"evaluate")),Object(o.b)("h2",{id:"webworkerevaluate-method"},"WebWorker.evaluate() method"),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a Promise, then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a non-serializable value, then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals. Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluate(pageFunction, ...args)"),"."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"evaluate<ReturnType extends any>(pageFunction: Function | string, ...args: any[]): Promise<ReturnType>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(o.b)("td",{parentName:"tr",align:null},"Function ","|"," string"),Object(o.b)("td",{parentName:"tr",align:null},"Function to be evaluated in the worker context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"args"),Object(o.b)("td",{parentName:"tr",align:null},"any","[","]"),Object(o.b)("td",{parentName:"tr",align:null},"Arguments to pass to ",Object(o.b)("code",null,"pageFunction"),".")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","ReturnType",">"),Object(o.b)("p",null,"Promise which resolves to the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction"),"."))}b.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
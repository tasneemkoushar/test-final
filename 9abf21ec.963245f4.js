(window.webpackJsonp=window.webpackJsonp||[]).push([[1699],{1772:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),l=(a(0),a(2837)),p=["components"],o={},c={unversionedId:"puppeteer.jshandle.evaluatehandle",id:"version-5.4.0/puppeteer.jshandle.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.jshandle.evaluatehandle",description:"Home &gt; puppeteer &gt; JSHandle &gt; evaluateHandle",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.jshandle.evaluatehandle.md",slug:"/puppeteer.jshandle.evaluatehandle",permalink:"/docs/puppeteer.jshandle.evaluatehandle",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.jshandle.evaluate",permalink:"/docs/puppeteer.jshandle.evaluate"},next:{title:"puppeteer.jshandle.executioncontext",permalink:"/docs/puppeteer.jshandle.executioncontext"}},u=[{value:"JSHandle.evaluateHandle() method",id:"jshandleevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:u};function i(e){var t=e.components,a=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/docs/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/docs/puppeteer.jshandle.evaluatehandle"},"evaluateHandle")),Object(l.b)("h2",{id:"jshandleevaluatehandle-method"},"JSHandle.evaluateHandle() method"),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandleType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandleType>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","HandleType",">"),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns an in-page object (JSHandle)."),Object(l.b)("p",null,"If the function passed to ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a Promise, then ",Object(l.b)("inlineCode",{parentName:"p"},"evaluateHandle.evaluateHandle")," waits for the promise to resolve and returns its value."),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/docs/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," for more details."))}i.isMDXComponent=!0},2837:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=d(a),s=n,m=i["".concat(p,".").concat(s)]||i[s]||b[s]||l;return a?r.a.createElement(m,o(o({ref:t},u),{},{components:a})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);
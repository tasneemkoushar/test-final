(window.webpackJsonp=window.webpackJsonp||[]).push([[2347],{2420:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(2837)),i=["components"],p={},c={unversionedId:"puppeteer.frame.waitfor",id:"version-6.0.0/puppeteer.frame.waitfor",isDocsHomePage:!1,title:"puppeteer.frame.waitfor",description:"Home &gt; puppeteer &gt; Frame &gt; waitFor",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.waitfor.md",slug:"/puppeteer.frame.waitfor",permalink:"/docs/6.0.0/puppeteer.frame.waitfor",version:"6.0.0"},l=[{value:"Frame.waitFor() method",id:"framewaitfor-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitfor"},"waitFor")),Object(o.b)("h2",{id:"framewaitfor-method"},"Frame.waitFor() method"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),Object(o.b)("p",{parentName:"blockquote"},"Don't use this method directly. Instead use the more explicit methods available: ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),", ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforxpath"},"Frame.waitForXPath()"),", ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforfunction"},"Frame.waitForFunction()")," or ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitfortimeout"},"Frame.waitForTimeout()"),".")),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitFor(selectorOrFunctionOrTimeout: string | number | Function, options?: Record<string, unknown>, ...args: SerializableOrJSHandle[]): Promise<JSHandle | null>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"selectorOrFunctionOrTimeout"),Object(o.b)("td",{parentName:"tr",align:null},"string ","|"," number ","|"," Function"),Object(o.b)("td",{parentName:"tr",align:null},"a selector, predicate or timeout to wait for.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),Object(o.b)("td",{parentName:"tr",align:null},"optional waiting parameters.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"args"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(o.b)("td",{parentName:"tr",align:null},"arguments to pass to ",Object(o.b)("code",null,"pageFunction"),".")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.jshandle"},"JSHandle")," ","|"," null",">"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"This method behaves differently depending on the first parameter. If it's a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", it will be treated as a ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," or ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," (if the string starts with ",Object(o.b)("inlineCode",{parentName:"p"},"//"),"). This method then is a shortcut for ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforselector"},"Frame.waitForSelector()")," or ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforxpath"},"Frame.waitForXPath()"),"."),Object(o.b)("p",null,"If the first argument is a function this method is a shortcut for ",Object(o.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitforfunction"},"Frame.waitForFunction()"),"."),Object(o.b)("p",null,"If the first argument is a ",Object(o.b)("inlineCode",{parentName:"p"},"number"),", it's treated as a timeout in milliseconds and the method returns a promise which resolves after the timeout."))}u.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=a,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return r?n.a.createElement(f,p(p({ref:t},l),{},{components:r})):n.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);
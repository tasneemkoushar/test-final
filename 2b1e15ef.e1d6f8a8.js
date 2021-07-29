(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return r?a.a.createElement(f,p(p({ref:t},l),{},{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},551:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(2837)),o=["components"],p={},c={unversionedId:"puppeteer.frame.waitfornavigation",id:"version-6.0.0/puppeteer.frame.waitfornavigation",isDocsHomePage:!1,title:"puppeteer.frame.waitfornavigation",description:"Home &gt; puppeteer &gt; Frame &gt; waitForNavigation",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.waitfornavigation.md",slug:"/puppeteer.frame.waitfornavigation",permalink:"/docs/6.0.0/puppeteer.frame.waitfornavigation",version:"6.0.0"},l=[{value:"Frame.waitForNavigation() method",id:"framewaitfornavigation-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.waitfornavigation"},"waitForNavigation")),Object(i.b)("h2",{id:"framewaitfornavigation-method"},"Frame.waitForNavigation() method"),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"waitForNavigation(options?: {\n        timeout?: number;\n        waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }): Promise<HTTPResponse | null>;\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"{ timeout?: number; waitUntil?: ",Object(i.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent"),"[","]","; }"),Object(i.b)("td",{parentName:"tr",align:null},"options to configure when the navigation is consided finished.")))),Object(i.b)("b",null,"Returns:"),Object(i.b)("p",null,"Promise","<",Object(i.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),Object(i.b)("p",null,"a promise that resolves when the frame navigates to a new URL."),Object(i.b)("h2",{id:"remarks"},"Remarks"),Object(i.b)("p",null,"This resolves when the frame navigates to a new URL. It is useful for when you run code which will indirectly cause the frame to navigate. Consider this example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const [response] = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click('a.my-link'),\n]);\n\n")),Object(i.b)("p",null,"Usage of the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," to change the URL is considered a navigation."))}s.isMDXComponent=!0}}]);
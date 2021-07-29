(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||i[d]||c;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},542:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(2837)),o=["components"],l={},p={unversionedId:"puppeteer.consolemessage",id:"version-10.0.0/puppeteer.consolemessage",isDocsHomePage:!1,title:"puppeteer.consolemessage",description:"Home &gt; puppeteer &gt; ConsoleMessage",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.consolemessage.md",slug:"/puppeteer.consolemessage",permalink:"/docs/10.0.0/puppeteer.consolemessage",version:"10.0.0"},s=[{value:"ConsoleMessage class",id:"consolemessage-class",children:[]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.consolemessage"},"ConsoleMessage")),Object(c.b)("h2",{id:"consolemessage-class"},"ConsoleMessage class"),Object(c.b)("p",null,"ConsoleMessage objects are dispatched by page via the 'console' event."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class ConsoleMessage \n")),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Constructor"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage._constructor_"},"(constructor)(type, text, args, stackTraceLocations)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",Object(c.b)("code",null,"ConsoleMessage")," class")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Method"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage.args"},"args()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage.location"},"location()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage.stacktrace"},"stackTrace()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage.text"},"text()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.consolemessage.type"},"type()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);
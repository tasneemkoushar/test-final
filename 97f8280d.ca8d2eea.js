(window.webpackJsonp=window.webpackJsonp||[]).push([[1669],{1742:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),a=(t(0),t(2837)),i=["components"],p={},s={unversionedId:"puppeteer.browsercontext.overridepermissions",id:"version-5.4.0/puppeteer.browsercontext.overridepermissions",isDocsHomePage:!1,title:"puppeteer.browsercontext.overridepermissions",description:"Home &gt; puppeteer &gt; BrowserContext &gt; overridePermissions",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.browsercontext.overridepermissions.md",slug:"/puppeteer.browsercontext.overridepermissions",permalink:"/docs/puppeteer.browsercontext.overridepermissions",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.browsercontext.browser",permalink:"/docs/puppeteer.browsercontext.browser"},next:{title:"puppeteer.browsercontext.close",permalink:"/docs/puppeteer.browsercontext.close"}},c=[{value:"BrowserContext.overridePermissions() method",id:"browsercontextoverridepermissions-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function b(e){var r=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/docs/puppeteer.browsercontext.overridepermissions"},"overridePermissions")),Object(a.b)("h2",{id:"browsercontextoverridepermissions-method"},"BrowserContext.overridePermissions() method"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"overridePermissions(origin: string, permissions: Permission[]): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"origin"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},'The origin to grant permissions to, e.g. "',Object(a.b)("a",{parentName:"td",href:"https://example.com%22"},'https://example.com"'),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"permissions"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/puppeteer.permission"},"Permission"),"[","]"),Object(a.b)("td",{parentName:"tr",align:null},"An array of permissions to grant. All permissions that are not listed here will be automatically denied.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n\n")))}b.isMDXComponent=!0},2837:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},b=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(t),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return t?o.a.createElement(d,p(p({ref:r},c),{},{components:t})):o.a.createElement(d,p({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
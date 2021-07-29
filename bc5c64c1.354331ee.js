(window.webpackJsonp=window.webpackJsonp||[]).push([[2043],{2117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),p=(r(0),r(2837)),o=["components"],c={},b={unversionedId:"puppeteer.keyboard.press",id:"version-6.0.0/puppeteer.keyboard.press",isDocsHomePage:!1,title:"puppeteer.keyboard.press",description:"Home &gt; puppeteer &gt; Keyboard &gt; press",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.keyboard.press.md",slug:"/puppeteer.keyboard.press",permalink:"/docs/6.0.0/puppeteer.keyboard.press",version:"6.0.0"},i=[{value:"Keyboard.press() method",id:"keyboardpress-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.keyboard"},"Keyboard")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.keyboard.press"},"press")),Object(p.b)("h2",{id:"keyboardpress-method"},"Keyboard.press() method"),Object(p.b)("p",null,"Shortcut for ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.keyboard.down"},"Keyboard.down()")," and ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.keyboard.up"},"Keyboard.up()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"press(key: KeyInput, options?: {\n        delay?: number;\n        text?: string;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"key"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.keyinput"},"KeyInput")),Object(p.b)("td",{parentName:"tr",align:null},"Name of key to press, such as ",Object(p.b)("code",null,"ArrowLeft"),". See ",Object(p.b)("a",{parentName:"td",href:"/docs/6.0.0/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ delay?: number; text?: string; }"),Object(p.b)("td",{parentName:"tr",align:null},"An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",Object(p.b)("code",null,"keydown")," and ",Object(p.b)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"If ",Object(p.b)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",Object(p.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input")," event will also generated. The ",Object(p.b)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),Object(p.b)("p",null,"Modifier keys DO effect ",Object(p.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.keyboard.press"},"Keyboard.press()"),". Holding down ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}s.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||p;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
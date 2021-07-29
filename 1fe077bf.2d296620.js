(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||p;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2837)),o=["components"],l={},c={unversionedId:"puppeteer.elementhandle.press",id:"puppeteer.elementhandle.press",isDocsHomePage:!1,title:"puppeteer.elementhandle.press",description:"Home &gt; puppeteer &gt; ElementHandle &gt; press",source:"@site/docs\\puppeteer.elementhandle.press.md",slug:"/puppeteer.elementhandle.press",permalink:"/docs/next/puppeteer.elementhandle.press",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle.isintersectingviewport",permalink:"/docs/next/puppeteer.elementhandle.isintersectingviewport"},next:{title:"puppeteer.elementhandle.screenshot",permalink:"/docs/next/puppeteer.elementhandle.screenshot"}},i=[{value:"ElementHandle.press() method",id:"elementhandlepress-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.elementhandle.press"},"press")),Object(p.b)("h2",{id:"elementhandlepress-method"},"ElementHandle.press() method"),Object(p.b)("p",null,"Focuses the element, and then uses ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.keyboard.down"},"Keyboard.down()")," and ",Object(p.b)("a",{parentName:"p",href:"/docs/next/puppeteer.keyboard.up"},"Keyboard.up()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"press(key: KeyInput, options?: PressOptions): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"key"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/next/puppeteer.keyinput"},"KeyInput")),Object(p.b)("td",{parentName:"tr",align:null},"Name of key to press, such as ",Object(p.b)("code",null,"ArrowLeft"),". See ",Object(p.b)("a",{parentName:"td",href:"/docs/next/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/docs/next/puppeteer.pressoptions"},"PressOptions")),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"If ",Object(p.b)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",Object(p.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input")," event will also be generated. The ",Object(p.b)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),Object(p.b)("p",null,"*","*","NOTE","*","*"," Modifier keys DO affect ",Object(p.b)("inlineCode",{parentName:"p"},"elementHandle.press"),". Holding down ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}b.isMDXComponent=!0}}]);
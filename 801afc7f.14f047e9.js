(window.webpackJsonp=window.webpackJsonp||[]).push([[1387],{1460:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(2837)),l=["components"],c={},p={unversionedId:"puppeteer.mouse",id:"puppeteer.mouse",isDocsHomePage:!1,title:"puppeteer.mouse",description:"Home &gt; puppeteer &gt; Mouse",source:"@site/docs\\puppeteer.mouse.md",slug:"/puppeteer.mouse",permalink:"/docs/next/puppeteer.mouse",version:"current"},b=[{value:"Mouse class",id:"mouse-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],u={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/puppeteer.mouse"},"Mouse")),Object(o.b)("h2",{id:"mouse-class"},"Mouse class"),Object(o.b)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Mouse \n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Every ",Object(o.b)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ","[",Object(o.b)("inlineCode",{parentName:"p"},"page.mouse"),"]","(","#","pagemouse)."),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"Mouse")," class."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n\n")),Object(o.b)("p",null,"*","*","Note","*","*",": The mouse events trigger synthetic ",Object(o.b)("inlineCode",{parentName:"p"},"MouseEvent"),"s. This means that it does not fully replicate the functionality of what a normal user would be able to do with their mouse."),Object(o.b)("p",null,"For example, dragging and selecting text is not possible using ",Object(o.b)("inlineCode",{parentName:"p"},"page.mouse"),". Instead, you can use the ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection"},"`","DocumentOrShadowRoot.getSelection()","`")," functionality implemented in the platform."),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,"For example, if you want to select all content between nodes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate((from, to) => {\n  const selection = from.getRootNode().getSelection();\n  const range = document.createRange();\n  range.setStartBefore(from);\n  range.setEndAfter(to);\n  selection.removeAllRanges();\n  selection.addRange(range);\n}, fromJSHandle, toJSHandle);\n\n")),Object(o.b)("p",null,"If you then would want to copy-paste your selection, you can use the clipboard api:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// The clipboard api does not allow you to copy, unless the tab is focused.\nawait page.bringToFront();\nawait page.evaluate(() => {\n  // Copy the selected content to the clipboard\n  document.execCommand('copy');\n  // Obtain the content of the clipboard as a string\n  return navigator.clipboard.readText();\n});\n\n")),Object(o.b)("p",null,"*","*","Note","*","*",": If you want access to the clipboard API, you have to give it permission to do so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await browser.defaultBrowserContext().overridePermissions(\n  '<your origin>', ['clipboard-read', 'clipboard-write']\n);\n\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.click"},"click(x, y, options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Shortcut for ",Object(o.b)("code",null,"mouse.move"),", ",Object(o.b)("code",null,"mouse.down")," and ",Object(o.b)("code",null,"mouse.up"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.down"},"down(options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"mousedown")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.drag"},"drag(start, target)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"drag")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.draganddrop"},"dragAndDrop(start, target, options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Performs a drag, dragenter, dragover, and drop in sequence.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.dragenter"},"dragEnter(target, data)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"dragenter")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.dragover"},"dragOver(target, data)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"dragover")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.drop"},"drop(target, data)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Performs a dragenter, dragover, and drop in sequence.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.move"},"move(x, y, options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"mousemove")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.up"},"up(options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"mouseup")," event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/next/puppeteer.mouse.wheel"},"wheel(options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(o.b)("code",null,"mousewheel")," event.")))))}s.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||i[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
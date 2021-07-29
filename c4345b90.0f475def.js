(window.webpackJsonp=window.webpackJsonp||[]).push([[2137],{2211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(2837)),l=["components"],o={},p={unversionedId:"puppeteer.frame.select",id:"version-6.0.0/puppeteer.frame.select",isDocsHomePage:!1,title:"puppeteer.frame.select",description:"Home &gt; puppeteer &gt; Frame &gt; select",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.select.md",slug:"/puppeteer.frame.select",permalink:"/docs/6.0.0/puppeteer.frame.select",version:"6.0.0"},i=[{value:"Frame.select() method",id:"frameselect-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,l);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/docs/6.0.0/puppeteer.frame.select"},"select")),Object(c.b)("h2",{id:"frameselect-method"},"Frame.select() method"),Object(c.b)("p",null,"Triggers a ",Object(c.b)("inlineCode",{parentName:"p"},"change")," and ",Object(c.b)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"select(selector: string, ...values: string[]): Promise<string[]>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"selector"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"a selector to query the frame for")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"values"),Object(c.b)("td",{parentName:"tr",align:null},"string","[","]"),Object(c.b)("td",{parentName:"tr",align:null},"an array of values to select. If the ",Object(c.b)("code",null,"<","select",">")," has the ",Object(c.b)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","string","[","]",">"),Object(c.b)("p",null,"the list of values that were successfully selected."),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"If there's no ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," element matching ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"frame.select('select#colors', 'blue'); // single selection\nframe.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n\n")))}b.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||c;return r?a.a.createElement(d,o(o({ref:t},i),{},{components:r})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
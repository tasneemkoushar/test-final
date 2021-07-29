(window.webpackJsonp=window.webpackJsonp||[]).push([[1929],{2003:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),l=(n(0),n(2837)),p=["components"],i={},c={unversionedId:"puppeteer.eventemitter",id:"version-10.0.0/puppeteer.eventemitter",isDocsHomePage:!1,title:"puppeteer.eventemitter",description:"Home &gt; puppeteer &gt; EventEmitter",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.eventemitter.md",slug:"/puppeteer.eventemitter",permalink:"/docs/10.0.0/puppeteer.eventemitter",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.timeouterror",permalink:"/docs/10.0.0/puppeteer.timeouterror"},next:{title:"puppeteer.eventemitter.addlistener",permalink:"/docs/10.0.0/puppeteer.eventemitter.addlistener"}},o=[{value:"EventEmitter class",id:"eventemitter-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:o};function m(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/docs/10.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")),Object(l.b)("h2",{id:"eventemitter-class"},"EventEmitter class"),Object(l.b)("p",null,"The EventEmitter class that many Puppeteer classes extend."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class EventEmitter implements CommonEventEmitter \n")),Object(l.b)("b",null,"Implements:")," [CommonEventEmitter](/docs/10.0.0/puppeteer.commoneventemitter)",Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"This allows you to listen to events that Puppeteer classes fire and act accordingly. Therefore you'll mostly use ",Object(l.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.eventemitter.on"},"on")," and ",Object(l.b)("a",{parentName:"p",href:"/docs/10.0.0/puppeteer.eventemitter.off"},"off")," to bind and unbind to event listeners."),Object(l.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(l.b)("inlineCode",{parentName:"p"},"EventEmitter")," class."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.addlistener"},"addListener(event, handler)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Add an event listener.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.emit"},"emit(event, eventData)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Emit an event and call any associated listeners.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.listenercount"},"listenerCount(event)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Gets the number of listeners for a given event.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.off"},"off(event, handler)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Remove an event listener from firing.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.on"},"on(event, handler)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Bind an event listener to fire when an event occurs.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.once"},"once(event, handler)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Like ",Object(l.b)("code",null,"on")," but the listener will only be fired once and then it will be removed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.removealllisteners"},"removeAllListeners(event)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Removes all listeners. If given an event argument, it will remove only listeners for that event.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/10.0.0/puppeteer.eventemitter.removelistener"},"removeListener(event, handler)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Remove an event listener.")))))}m.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=b(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?a.a.createElement(u,i(i({ref:t},o),{},{components:n})):a.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,f=s["".concat(c,".").concat(u)]||s[u]||b[u]||i;return n?a.a.createElement(f,o({ref:t},p,{components:n})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),i=(n(0),n(111)),c={id:"withNaming",title:"withNaming",hide_title:!0},o={id:"api/classname/withNaming",title:"withNaming",description:"# `withNaming`",source:"@site/docs/api/classname/withNaming.md",permalink:"/bem-react/docs/api/classname/withNaming",editUrl:"https://github.com/bem/bem-react/edit/master/website/docs/api/classname/withNaming.md",sidebar:"api",previous:{title:"cn",permalink:"/bem-react/docs/api/classname/cn"},next:{title:"Preset",permalink:"/bem-react/docs/api/classname/Preset"}},l=[],p={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"withnaming"},Object(i.b)("inlineCode",{parentName:"h1"},"withNaming")),Object(i.b)("p",null,"Creates a new ",Object(i.b)("inlineCode",{parentName:"p"},"ClassNameInitilizer")," with passed ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"Preset"}),"preset"),"."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"preset")," (Preset): Shape with naming preset.")),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ClassNameInitilizer")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("p",null,"React naming preset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { withNaming } from '@bem-react/classname'\n\nconst preset = { e: '-', m: '_' }\nconst cn = withNaming(preset)\n\ncn('Block', 'Elem')({ theme: 'default' }) // -> Block-Elem_theme_default\n")),Object(i.b)("p",null,"Origin naming preset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { withNaming } from '@bem-react/classname'\n\nconst preset = { e: '__', m: '_', v: '_' }\nconst cn = withNaming(preset)\n\ncn('block', 'elem')({ theme: 'default' }) // -> block__elem_theme_default\n")))}m.isMDXComponent=!0}}]);
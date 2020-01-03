(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(6),o=(r(0),r(111)),i={id:"ClassNameFormatter",title:"ClassNameFormatter",hide_title:!0},s={id:"api/classname/ClassNameFormatter",title:"ClassNameFormatter",description:"# `ClassNameFormatter`",source:"@site/docs/api/classname/ClassNameFormatter.md",permalink:"/bem-react/docs/api/classname/ClassNameFormatter",editUrl:"https://github.com/bem/bem-react/edit/master/website/docs/api/classname/ClassNameFormatter.md",sidebar:"api",previous:{title:"ClassNameInitilizer",permalink:"/bem-react/docs/api/classname/ClassNameInitilizer"},next:{title:"API Reference",permalink:"/bem-react/docs/api/classnames/classnames"}},c=[],l={rightToc:c};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"classnameformatter"},Object(o.b)("inlineCode",{parentName:"h1"},"ClassNameFormatter")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type ClassNameList = Array<string | undefined>\ntype NoStrictEntityMods = Record<string, string | boolean | number | undefined>\n\ntype ClassNameFormatter = (\n  elementNameOrBlockModifiers?: NoStrictEntityMods | string | null,\n  elementModifiersOrBlockMixins?: NoStrictEntityMods | ClassNameList | null,\n  elementMixins?: ClassNameList,\n) => string\n")))}m.isMDXComponent=!0},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return r?a.a.createElement(d,s({ref:t},l,{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
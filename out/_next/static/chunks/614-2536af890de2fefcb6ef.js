(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},6255:function(e,t,n){"use strict";var r=n(3038),o=n(319),a=n(5318);var i=a(n(7316)),c=a(n(7154)),u=a(n(7294)),s=a(n(7947)),f=n(7239),l=n(5655),d=n(5749);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["auto=format","fit=max","w="+r],i="";o&&a.push("q="+o);a.length&&(i="?"+a.join("&"));return"".concat(t).concat(k(n)).concat(i)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||l.imageConfigDefault,v=h.deviceSizes,y=h.imageSizes,m=h.loader,g=h.path,w=(h.domains,h.enableBlurryPlaceholder),b=[].concat(o(v),o(y));function O(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,i=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,i=[];r=a.exec(n);r)i.push(parseInt(r[2]));if(i.length){var c=.01*Math.min.apply(Math,i);return{widths:b.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(a,r,c),f=s.widths,l=s.kind,d=f.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:f.map((function(e,n){return"".concat(u({src:t,quality:i,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", "),src:u({src:t,quality:i,width:f[d]})}}function M(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t=p.get(m);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(m))}function k(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),i=n(1689),c=n(2441),u=n(5749),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.asPath||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=l.href,p=l.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var w=a.Children.only(h),b=w&&"object"===typeof w&&w.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),M=r(O,2),_=M[0],k=M[1],C=a.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);(0,a.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var x={ref:C,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}))}(e,n,d,p,v,y,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var j="undefined"!==typeof g?g:n&&n.locale,S=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,j,n&&n.locales,n&&n.domainLocales);x.href=S||(0,i.addBasePath)((0,i.addLocale)(p,j,n&&n.defaultLocale))}return a.default.cloneElement(w,x)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),s=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,t,n){n(6255)},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(f,i({attr:i({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,o=e.attr,a=e.size,u=e.title,s=c(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
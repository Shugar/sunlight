!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var r={},t={},n={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,l=function(e,r){for(var t,n=[],i=(o.test(r)?e+"/"+r:r).split("/"),l=0,u=i.length;l<u;l++)t=i[l],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},s=function(r){return function(t){var n=l(u(r),t);return e.require(n,r)}},a=function(e,r){var n=v&&v.createHot(e),i={id:e,exports:{},hot:n};return t[e]=i,r(i.exports,s(e),i),i.exports},c=function(e){return n[e]?c(n[e]):e},f=function(e,r){return c(l(u(e),r))},d=function(e,n){null==n&&(n="/");var o=c(e);if(i.call(t,o))return t[o].exports;if(i.call(r,o))return a(o,r[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,r){n[r]=e};var p=/\.[^.\/]+$/,_=/\/index(\.[^\/]+)?$/,h=function(e){if(p.test(e)){var r=e.replace(p,"");i.call(n,r)&&n[r].replace(p,"")!==r+"/index"||(n[r]=e)}if(_.test(e)){var t=e.replace(_,"");i.call(n,t)||(n[t]=e)}};d.register=d.define=function(e,n){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else r[e]=n,delete t[e],h(e)},d.list=function(){var e=[];for(var t in r)i.call(r,t)&&e.push(t);return e};var v=e._hmr&&new e._hmr(f,d,r,t);d._cache=t,d.hmr=v&&v.wrap,d.brunch=!0,e.require=d}}(),function(){"undefined"==typeof window?this:window;require.register("initialize.js",function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(){(0,l["default"])(".features-list").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,dots:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}var o=r("jquery"),l=n(o),u=r("slick-carousel");n(u);(0,l["default"])(document).ready(function(){i()})}),require.register("___globals___",function(e,r,t){})}(),require("___globals___");
webpackJsonp([2],[function(e,t,n){"use strict";e.exports=n(5)},function(e,t){var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(8);var o=n(3);setTimeout(function(){n.e(0).then(n.bind(null,10)).then(function(e){console.log(r,e(r))}),n.e(1).then(n.bind(null,11)).then(function(e){console.log(e,e.default)})},1e3);var r={users:[{name:"xlee",email:"xxxjs@email.com",birthday:new Date},{name:"breeco",email:"breeco@gmail.com",birthday:new Date(2e3,11,22)}],admin:!1},i=o(r);console.log(i),document.body.innerHTML=i,t.default=o},function(e,t,n){var o=n(0);e.exports=function(e){"use strict";e=e||{};var t="",r=e.admin,i=e.users,c=o.$escape;arguments[1];return t+="this page is here for ready to be included. ",r?t+=" Welcome, administrator! ":i&&(t+=" Welcome, ",t+=c(i.length),t+=" "),t+=" ",t+=n(4)(e)}},function(e,t,n){var o=n(0);e.exports=function(e){"use strict";e=e||{};var t="",n=o.$each,r=e.users,i=(e.$value,e.$index,o.$escape);return t+="list for example:<ul> ",n(r,function(e,n){t+=" <li>",t+=i(e.name),t+=":",t+=i(e.email),t+=". born at ",t+=i(o.dateFormat(e.birthday,"yyyyMMdd")),t+="</li> "}),t+=" </ul>"}},function(e,t,n){"use strict";(function(t){/*! art-template@runtime | https://github.com/aui/art-template */
var o=n(6),r=Object.create(o?t:window),i=function e(t){return"string"!=typeof t&&(t=void 0===t||null===t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t)),t},c=/["&'<>]/,u=function(e){var t=""+e,n=c.exec(t);if(!n)return e;var o="",r=void 0,i=void 0,u=void 0;for(r=n.index,i=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:u="&#34;";break;case 38:u="&#38;";break;case 39:u="&#39;";break;case 60:u="&#60;";break;case 62:u="&#62;";break;default:continue}i!==r&&(o+=t.substring(i,r)),i=r+1,o+=u}return i!==r?o+t.substring(i,r):o},a=function(e){return u(i(e))},s=function(e,t){if(Array.isArray(e))for(var n=0,o=e.length;n<o;n++)t(e[n],n,e);else for(var r in e)t(e[r],r)};r.$each=s,r.$escape=a,e.exports=r}).call(t,n(1))},function(e,t,n){(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(t,n(1))},function(e,t,n){"use strict";var o={M:function(e){return e.getMonth()+1},d:function(e){return e.getDate()},h:function(e){return e.getHours()},m:function(e){return e.getMinutes()},s:function(e){return e.getSeconds()},q:function(e){return Math.floor((e.getMonth()+3)/3)},S:function(e){return e.getMilliseconds()}},r=/([yMdhmsqS])\1*/g,i=function(e,t){if("string"==typeof e){var n=e.match(/(\/Date\((\d+)\)\/)/);n&&n.length>=3&&(e=parseInt(n[2]))}return e=new Date(e),e&&"Invalid Date"!=e.toUTCString()?t.replace(r,function(t,n){var r=o[n];return void 0!==r?(r=r(e),t.length>1&&(r="0"+r,r=r.slice(-2)),r):"y"===n?(e.getFullYear()+"").slice(-4):t}):""};t.a=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(7);console.log(i.a),r.a.dateFormat=i.a,t.default=r.a},function(e,t,n){e.exports=n(2)}],[9]);
//# sourceMappingURL=main.js.map
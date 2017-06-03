(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["art-template"] = factory();
	else
		root["art-template"] = factory();
})(this, function() {
return webpackJsonpart_template([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', admin = $data.admin, users = $data.users, $escape = $imports.$escape, $$blocks = arguments[1] || {};
    $$out += 'this page is here for ready to be included. ';
    if (admin) {
        $$out += ' Welcome, administrator! ';
    } else if (users) {
        $$out += ' Welcome, ';
        $$out += $escape(users.length);
        $$out += ' ';
    }
    $$out += ' ';
    $$out += __webpack_require__(4)($data);
    return $$out;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_art_template_lib_runtime__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_art_template_lib_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_art_template_lib_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dateFormat__ = __webpack_require__(7);
// const runtime = require('art-template/lib/runtime');

// if the target module is exported by CommonJS Module, here we can use `require` or import x from xx
// let dateFormat = require('./dateFormat');

// but if the target module is exported by es6's `export`, best use `import` here
// if you have to use `require` , you must call it's 'default' property to get the actual module. For example:
// let dateFormat = require('./dateFormat').default;
// so, es6 module is the standard and best way.
console.log(__WEBPACK_IMPORTED_MODULE_1__dateFormat__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_art_template_lib_runtime___default.a.dateFormat = __WEBPACK_IMPORTED_MODULE_1__dateFormat__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_art_template_lib_runtime___default.a);
// module.exports = runtime;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, users = $data.users, $value = $data.$value, $index = $data.$index, $escape = $imports.$escape;
    $$out += 'list for example:<ul> ';
    $each(users, function ($value, $index) {
        $$out += ' <li>';
        $$out += $escape($value.name);
        $$out += ':';
        $$out += $escape($value.email);
        $$out += '. born at ';
        $$out += $escape($imports.dateFormat($value.birthday, 'yyyyMMdd'));
        $$out += '</li> ';
    });
    $$out += ' </ul>';
    return $$out;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(6);
var runtime = Object.create(detectNode ? global : window);

// 将目标转成字符
var toString = function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
var ESCAPE_REG = /["&'<>]/;
var xmlEscape = function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
var escape = function escape(content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
var each = function each(data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i, data);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

runtime.$each = each;
runtime.$escape = escape;

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
  module.exports = Object.prototype.toString.call(global.process) === '[object process]';
} catch (e) {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var functionsMap = {
    "M": function M(date) {
        return date.getMonth() + 1;
    }, //月份
    "d": function d(date) {
        return date.getDate();
    }, //日
    "h": function h(date) {
        return date.getHours();
    }, //小时
    "m": function m(date) {
        return date.getMinutes();
    }, //分
    "s": function s(date) {
        return date.getSeconds();
    }, //秒
    "q": function q(date) {
        return Math.floor((date.getMonth() + 3) / 3);
    }, //季度
    "S": function S(date) {
        return date.getMilliseconds();
    } //毫秒
};
var formatReg = /([yMdhmsqS])\1*/g;
var dateFormat = function dateFormat(date, format) {
    console.log(date, format);
    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
        }
    }
    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
        return "";
    }

    return format.replace(formatReg, function (all, t) {
        var v = functionsMap[t];
        console.log(v, all, t);
        if (v !== undefined) {
            v = v(date);
            if (all.length > 1) {
                v = '0' + v;
                v = v.slice(-2);
            }
            return v;
        } else if (t === 'y') {
            return (date.getFullYear() + '').slice(-4);
        }
        return all;
    });

    // return format;
};

// module.exports = dateFormat;
/* harmony default export */ __webpack_exports__["a"] = (dateFormat);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// the 'tem' will be a render function, not a template source string.
// let tem = require('./views/extend.html');
__webpack_require__(3);
// import runtime from './helper';

var tem = __webpack_require__(2);

// import('./views/extend.html').then(function (extend) {
//     console.log(extend(data));
// });

var data = {
    users: [{
        name: 'xlee',
        email: 'xxxjs@email.com',
        birthday: new Date()
    }, {
        name: 'breeco',
        email: 'breeco@gmail.com',
        birthday: new Date(2000, 12, 22)
    }],
    admin: false
};

var html = tem(data);

console.log(html);
document.body.innerHTML = html;
/* harmony default export */ __webpack_exports__["default"] = (tem);

/***/ })
],[8]);
});
//# sourceMappingURL=main.js.map
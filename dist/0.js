(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./source/combine.js":
/*!***************************!*\
  !*** ./source/combine.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sub = undefined;

var _list = __webpack_require__(/*! ./views/list.html */ "./source/views/list.html");

var _list2 = _interopRequireDefault(_list);

var _sub = __webpack_require__(/*! ./views/sub.html */ "./source/views/sub.html");

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export default {
//     list, sub
// }

// 组合多个模板，导出为一个 module ，然后供多处调用

exports["default"] = _list2["default"];
exports.sub = _sub2["default"];


var compose2 = function compose2(f, g) {
	return function () {
		return f(g.apply(undefined, arguments));
	};
};
var compose = function compose() {
	for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
		fns[_key] = arguments[_key];
	}

	return fns.reduce(compose2);
};
var pipe = function pipe() {
	for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		fns[_key2] = arguments[_key2];
	}

	return fns.reduceRight(compose2);
};

var Compose2 = function Compose2(f, g) {
	return function () {
		return f(g.apply(undefined, arguments));
	};
};
var Compose = function Compose() {
	for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		fns[_key3] = arguments[_key3];
	}

	return fns.reduce(Compose2);
};
var Pipe = function Pipe() {
	for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		fns[_key4] = arguments[_key4];
	}

	return fns.reduceRight(Compose2);
};

/***/ }),

/***/ "./source/views/sub.html":
/*!*******************************!*\
  !*** ./source/views/sub.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        };
    $$out += 'sub.html, I\'ll include \'sub1.html\'. ';
    include(__webpack_require__(/*! ./sub1.html */ "./source/views/sub1.html")($data));
    $$out += ' sub1.html finished.';
    return $$out;
};

/***/ }),

/***/ "./source/views/sub1.html":
/*!********************************!*\
  !*** ./source/views/sub1.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<article><h1>Heading 1</h1><h2>Heading 2</h2><p>Most important config in webpack.config.js</p><pre>\r\n\t\t{\r\n                test: /\\.js$/,\r\n                loader: \'babel-loader\',\r\n                options: {\r\n                    // TIP: nested array\r\n                    presets: [\'babel-preset-env\', \'babel-preset-es2015-loose\'].map(require.resolve),\r\n                    plugins: [\'babel-plugin-syntax-dynamic-import\'].map(require.resolve)\r\n                }\r\n            }\r\n\t</pre></article>';
    return $$out;
};

/***/ })

}]);
//# sourceMappingURL=0.js.map
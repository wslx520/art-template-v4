webpackJsonpart_template([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$from = null, $$blocks = arguments[1] || {}, block = function (name, callback) {
            if ($$from) {
                $$out = '';
                callback();
                $$blocks[name] = $$out;
            } else {
                if (typeof $$blocks[name] === 'string') {
                    $$out += $$blocks[name];
                } else {
                    callback();
                }
            }
        };
    $$out += '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>';
    block('title', function () {
        $$out += 'Default Title';
    });
    $$out += '</title> ';
    block('head', function () {
        $$out += ' <link rel="stylesheet" href="main.css"> ';
    });
    $$out += ' </head><body> ';
    block('body', function () {
    });
    $$out += ' </body></html>';
    return $$out;
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(0);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$from = null, $$blocks = arguments[1] || {}, block = function (name, callback) {
            if ($$from) {
                $$out = '';
                callback();
                $$blocks[name] = $$out;
            } else {
                if (typeof $$blocks[name] === 'string') {
                    $$out += $$blocks[name];
                } else {
                    callback();
                }
            }
        };
    $$from = true;
    $$out += ' ';
    block('title', function () {
        $$out += 'This is actual title in extend page ';
    });
    $$out += ' ';
    block('head', function () {
        $$out += ' <link rel="stylesheet" href="extend.css"> ';
    });
    $$out += ' ';
    block('body', function () {
        $$out += ' body content in extend ';
        $$out += __webpack_require__(1)($data);
        $$out += ' ';
    });
    $$out = '';
    $$out += __webpack_require__(10)($data, $$blocks);
    return $$out;
};

/***/ })

});
//# sourceMappingURL=0.js.map
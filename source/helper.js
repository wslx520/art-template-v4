// const runtime = require('art-template/lib/runtime');
import runtime from 'art-template/lib/runtime';
// if the target module is exported by CommonJS Module, here we can use `require` or import x from xx
// let dateFormat = require('./dateFormat');
import dateFormat from './dateFormat';
// but if the target module is exported by es6's `export`, best use `import` here
// if you have to use `require` , you must call it's 'default' property to get the actual module. For example:
// let dateFormat = require('./dateFormat').default;
// so, es6 module is the standard and best way.
console.log(dateFormat);
runtime.dateFormat = dateFormat

export default runtime;
// module.exports = runtime;

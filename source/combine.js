// 组合多个模板，导出为一个 module ，然后供多处调用

import list from './views/list.html';
import sub from './views/sub.html';

// export default {
//     list, sub
// }

export default list;
export {sub};

const compose2 = (f, g) => (...args) => f(g(...args))
const compose = (...fns) => fns.reduce(compose2);
const pipe = (...fns) => fns.reduceRight(compose2);

const Compose2 = function (f, g) {
	return function (...args) {
		return f(g(...args));
	}
}
const Compose = function (...fns) {
	return fns.reduce(Compose2);
}
const Pipe = function (...fns) {
	return fns.reduceRight(Compose2);
}
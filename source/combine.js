// 组合多个模板，导出为一个 module ，然后供多处调用

import list from './views/list.html';
import include from './views/include.html';

export default {
    list, include
}
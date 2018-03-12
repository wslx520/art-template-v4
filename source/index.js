// the 'tem' will be a render function, not a template source string.
// let tem = require('./views/extend.html');
require('./helper');
// import runtime from './helper';

let tem = require('./views/include.html');

// this import() function is an async 'require' way in webpack 2.
// we can specify the chunk name by a 'magic comment'
setTimeout(() => {
    // console.log('setTimeout');
    // 直接 import 一个 html , 在IE下静默失败, 不知为何
    // import(/* webpackChunkName: "sub" */ './views/sub.html').then(function (sub) {
    //     console.log(111111,data, sub.default(data));
    //     document.body.insertAdjacentHTML('beforeend', sub.default(data));
    // });
    // 但通过JS包裹一层再导入, 则正常执行
    import('./combine').then(function (combined) {
        console.log(combined, combined['sub']);
        document.body.insertAdjacentHTML('beforeend', combined.sub(data));
    });
}, 1000)

let data = {
    users: [{
        name: 'xlee',
        email: 'xxxjs@email.com',
        birthday: new Date()
    },{
        name: 'breeco',
        email: 'breeco@gmail.com',
        birthday: new Date(2000, 11, 22)
    }],
    admin: false
}

let html = tem(data);

// console.log(html);
document.body.innerHTML = html;
export default tem;
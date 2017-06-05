// the 'tem' will be a render function, not a template source string.
// let tem = require('./views/extend.html');
require('./helper');
// import runtime from './helper';

let tem = require('./views/include.html');

// this import() function is an async 'require' way in webpack 2.
// we can specify the chunk name by a 'magic comment'
setTimeout(() => {
    import(/* webpackChunkName: "r_extend" */ './views/extend.html').then(function (extend) {
        console.log(data, extend(data));
    });
    import('./combine').then(function (combined) {
        console.log(combined, combined.default);
    })
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

console.log(html);
document.body.innerHTML = html;
export default tem;
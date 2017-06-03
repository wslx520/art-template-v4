// the 'tem' will be a render function, not a template source string.
// let tem = require('./views/extend.html');
require('./helper');
// import runtime from './helper';

let tem = require('./views/include.html');

// import('./views/extend.html').then(function (extend) {
//     console.log(extend(data));
// });

let data = {
    users: [{
        name: 'xlee',
        email: 'xxxjs@email.com',
        birthday: new Date()
    },{
        name: 'breeco',
        email: 'breeco@gmail.com',
        birthday: new Date(2000, 12, 22)
    }],
    admin: false
}

let html = tem(data);

console.log(html);
document.body.innerHTML = html;
export default tem;
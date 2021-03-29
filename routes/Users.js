const { createUser, getUser, deleteUser, updateUser, findAllUsers } = require("../controllers/Users");

module.exports = [{
    method: 'POST',
    path: '/api/user',
    handler: createUser
}, {
    method: 'GET',
    path: '/api/user/{id}',
    handler: getUser
}, {
    method: 'DELETE',
    path: '/api/user/{id}',
    handler: deleteUser
}, {
    method: 'PUT',
    path: '/api/user/{id}',
    handler: updateUser
},

{
    method: 'GET',
    path: '/api/user/all',
    handler: findAllUsers
},

]
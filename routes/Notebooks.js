const { createNotebook, getNotebook, deleteNotebook, updateNotebook, findAllNotebook } = require("../controllers/Notebooks");

module.exports = [{
    method: 'POST',
    path: '/api/notebook',
    handler: createNotebook
},
{
    method: 'GET',
    path: '/api/notebook/{id}',
    handler: getNotebook
},
{
    method: 'DELETE',
    path: '/api/notebook/{id}',
    handler: deleteNotebook
},
{
    method: 'PUT',
    path: '/api/notebook/{id}',
    handler: updateNotebook
},
{
    method: 'GET',
    path: '/api/notebook/all',
    handler: findAllNotebook
}
]
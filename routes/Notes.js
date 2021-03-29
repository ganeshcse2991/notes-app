const { createNote, deleteNote, getNote, updateNote, findAllNotes } = require("../controllers/Notes");

module.exports = [
    {
        method: 'POST',
        path: '/api/note',
        handler: createNote
    },
    {
        method: 'DELETE',
        path: '/api/note/{id}',
        handler: deleteNote
    },
    {
        method: 'GET',
        path: '/api/note/{id}',
        handler: getNote
    },
    {
        method: 'PUT',
        path: '/api/note/{id}',
        handler: updateNote
    },
    {
        method: 'GET',
        path: '/api/note/all',
        handler: findAllNotes
    },
]
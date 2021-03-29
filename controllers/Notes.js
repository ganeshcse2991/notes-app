const Notebooks = require("../models/Notebooks");
const Notes = require("../models/Notes");
const Users = require("../models/Users");


exports.createNote = async (request, h) => {
    try {

        let { title, text, userId, notebookId, tags } = request.payload;
        let note = await Notes.create({ title, text, userId, notebookId, tags })
        if (note) {
            return {
                status: true,
                message: 'Note created',
                note
            }
        } else {
            return {
                status: false,
                message: 'Error creating note',
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error creating note',
            error
        }
    }
}

exports.getNote = async (request, h) => {
    try {

        let { id } = request.params;
        let note = await Notes.findOne({ where: { id }, include: [Users, Notebooks] });
        if (note) {
            return {
                status: true,
                note
            }
        } else {
            return {
                status: false,
                message: 'Note doesn\'t exist'
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error fetching node',
            error
        }
    }
}


exports.deleteNote = async (request, h) => {
    try {

        let { id } = request.params;
        await Notes.destroy({ where: { id } });
        return {
            status: true,
            message: 'Note deleted'
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error deleting node',
            error
        }
    }
}
exports.updateNote = async (request, h) => {
    try {

        let { id } = request.params;
        let { title, text, tags } = request.payload
        let note = await Notes.findOne({ where: { id } });
        if (note) {
            note.title = title || note.title
            note.text = text || note.text
            note.tags = tags || note.tags
            await note.save()
            return {
                status: true,
                message: 'Note updated',
                note
            }
        } else {
            return {
                status: false,
                message: 'Note not found'
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error updating node',
            error
        }
    }
}
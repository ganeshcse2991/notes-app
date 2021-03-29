const Notebooks = require("../models/Notebooks");
const Users = require("../models/Users");

exports.createNotebook = async (request, h) => {
    try {
        const { name, userId } = request.payload;
        if (!name || !userId) {
            return {
                status: false,
                message: 'Invalid fields'
            }
        }
        let notebook = await Notebooks.create({
            name, userId
        })
        if (notebook) {
            return {
                status: true,
                message: 'Notebook created',
                notebook
            }
        } else {
            return {
                status: false,
                message: 'Error creating notebook'
            }
        }

    } catch (error) {

        return {
            status: false,
            message: 'Error creating notebook',
            error
        }

    }
}


exports.deleteNotebook = async (request, h) => {
    try {

        const { id } = request.params;
        await Notebooks.destroy({ where: { id } })

        return {
            status: true,
            message: 'Notebook deleted'
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error deleting Notebook',
            error
        }

    }
}
exports.getNotebook = async (request, h) => {
    try {

        const { id } = request.params;
        let notebook = await Notebooks.findOne({ where: { id }, include: [Users] });

        if (notebook) {
            return {
                status: true,
                notebook
            }
        } else {
            return {
                status: false,
                message: 'Notebook not found'
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error feyching Notebook',
            error
        }

    }
}

exports.updateNotebook = async (request, h) => {
    try {

        const { id } = request.params;
        const { name } = request.payload;
        const notebook = await Notebooks.findOne({ where: { id } });
        if (notebook) {
            notebook.name = name || notebook.name;
            notebook.save();
            return {
                status: true,
                message: 'Notebook updated',
                notebook
            }
        } else {
            return {
                status: false,
                message: 'Notebook not found',
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error updating notebook',
        }
    }
}



exports.findAllNotebook = async (request, h) => {
    try {
        let notebooks = await Notebooks.findAll();
        return {
            status: true,
            notebooks
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error fetching notebooks',
            error
        }
    }

}
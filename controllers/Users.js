const Notebooks = require("../models/Notebooks");
const Users = require("../models/Users");
const { createNotebook } = require("./Notebooks");
exports.createUser = async (request, h) => {
    const { email, name, password } = request.payload
    try {
        let user = await Users.findOne({ where: { email } });
        if (user) {
            return {
                status: false,
                message: 'User already registered'
            };
        } else {
            if (email, password, name) {
                let user = await Users.create({
                    name, email, password
                })
                request.payload.name = 'First Notebook'
                request.payload.userId = user.id
                let notebook = await createNotebook(request, h)
                return { status: true, user, notebook, message: 'User created' }
            } else {
                return { status: false, message: 'Invalid fields' }
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'Error creating user',
            error
        }
    }

}


exports.deleteUser = async (request, h) => {
    try {
        const { id } = request.params;

        await Users.destroy({ where: { id } })

        return {
            status: true,
            message: 'User deleted'
        }

    } catch (error) {

        return {
            status: false,
            message: 'Error deleting user',
            error
        }

    }
}
exports.getUser = async (request, h) => {
    try {
        const { id } = request.params;

        let user = await Users.findOne({ where: { id }, include: [Notebooks], attributes: { exclude: ['password'] } })
        if (user) {
            return {
                status: true,
                user
            }
        } else {
            return {
                status: false,
                message: 'User not exist'
            }
        }


    } catch (error) {

        return {
            status: false,
            message: 'Error fetching user',
            error
        }

    }
}



exports.updateUser = async (request, h) => {
    const { id } = request.params;
    const { email, name, password } = request.payload
    try {
        let user = await Users.findOne({ where: { id } });
        if (user) {

            user.email = email || user.email;
            user.name = name || user.name;
            user.password = password || user.password;
            await user.save()
            return {
                status: true,
                message: 'User update',
                user
            };
        } else {
            return { status: false, message: 'User not found' }

        }

    } catch (error) {
        return {
            status: false,
            message: 'Error updating user',
            error
        }
    }

}
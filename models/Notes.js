const db = require('./../config/database')
const { DataTypes } = require('sequelize');
const Users = require('./Users');
const Notebooks = require('./Notebooks');

const Notes = db.define('notes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
})

Notebooks.hasMany(Notes, { onDelete: 'cascade' });
Notes.belongsTo(Notebooks)
Users.hasMany(Notes, { onDelete: 'cascade' });
Notes.belongsTo(Users)
module.exports = Notes;
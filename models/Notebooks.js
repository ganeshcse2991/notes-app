const db = require('../config/database')
const { DataTypes } = require('sequelize');
const Users = require('./Users');

const Notebooks = db.define('notebooks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Users.hasMany(Notebooks, { onDelete: 'cascade' });
Notebooks.belongsTo(Users)

module.exports = Notebooks;
const Users = require('./Users');
const Notebooks = require('./Notebooks')
const Notes = require('./Notes')
module.exports = [...Users, ...Notebooks, ...Notes]
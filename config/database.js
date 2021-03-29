const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});
try {
    db.authenticate().then(() => console.log("authenticated"));
    db.sync().then(() => console.log("synced"));
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = db;
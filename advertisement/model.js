const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define('Advertisement', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    url: Sequelize.STRING,
    price: Sequelize.INTEGER,
    email: Sequelize.STRING,
    phone: Sequelize.INTEGER
})

module.exports = Advertisement
import {  Sequelize  } from 'sequelize'

const config = require("./dbdetails.json")
// database configuration


const dbconnect = new Sequelize({
    host : config.DB_HOST,
    username : config.DB_USER,
    password : config.DB_PASS,
    port : config.DB_PORT,
    dialect : config.DB_DIALECT,
    database : config.DB_DATABASE

})
try {
    dbconnect.authenticate()
    console.log("database connected")
    dbconnect.sync()

} catch (error) {
    console.log(error)
}

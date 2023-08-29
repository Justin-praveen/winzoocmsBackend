"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require("./dbdetails.json");
// database configuration
const dbconnect = new sequelize_1.Sequelize({
    host: config.DB_HOST,
    username: config.DB_USER,
    password: config.DB_PASS,
    port: config.DB_PORT,
    dialect: config.DB_DIALECT,
    database: config.DB_DATABASE
});
try {
    dbconnect.authenticate();
    console.log("database connected");
    dbconnect.sync();
}
catch (error) {
    console.log(error);
}

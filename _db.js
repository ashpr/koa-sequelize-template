"use strict";
const config = require("./config");
const fs = require("fs");
const path = require("path");
const sequelize = require("sequelize");
const modelsPath = path.join(__dirname, "/models/");

var connection = new sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var db = {};

fs
    .readdirSync(modelsPath)
    .filter(function(file) {
        return (file.indexOf(".") > 0);
    })
    .forEach(function(file) {
        var model = connection.import(path.join(modelsPath, file));
        db[model.name] = model;
    });
    
    Object.keys(db).forEach(function(modelName) {
        if ("associate" in db[modelName]) {
            db[modelName].associate(db);
        }
    });

module.exports = connection;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('helius', 'root', '132465', {
    dialect: 'mysql'
});
exports.User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ // Regex para CPF
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});
// sequelize.sync({ force: true });

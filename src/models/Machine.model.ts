import { fornecedor } from "./Fornecedor.model";

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('helius', 'root', '132465', {
    dialect: 'mysql'
  });

export const Machine = sequelize.define('Machine', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_instalacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    fabricante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: fornecedor,
            key: 'id',
        }
    },  
});
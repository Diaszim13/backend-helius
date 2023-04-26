const {Sequelize, DataTypes} = require('Sequelize');

const sequelize = require('../db/db.config');


  export const fornecedor = sequelize.define('fornecedor', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },

    nome: {
      type: DataTypes.STRING,
    }
  })

  sequelize.sync({force: true});
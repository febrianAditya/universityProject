'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Krs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Krs.init({
    idMatkul: DataTypes.INTEGER,
    idStudent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Krs',
  });
  return Krs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailStudent.belongsTo(models.Student)
    }
  }
  DetailStudent.init({
    addres: DataTypes.STRING,
    age: DataTypes.INTEGER,
    idStudent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailStudent',
  });
  return DetailStudent;
};
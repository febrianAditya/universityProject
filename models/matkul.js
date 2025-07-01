'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matkul.belongsTo(models.Dosen)


      Matkul.belongsToMany(models.Student, {
        through: models.Krs
      })
    }
  }
  Matkul.init({
    name: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    idDosen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matkul',
  });
  return Matkul;
};
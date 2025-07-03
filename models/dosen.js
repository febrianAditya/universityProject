'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dosen.hasMany(models.Matkul, {
        foreignKey: "idDosen"
      })
    }
  }
  Dosen.init({
    name: DataTypes.STRING,
    nip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dosen',
  });
  return Dosen;
};
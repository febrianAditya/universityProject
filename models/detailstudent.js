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
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 17,
          msg: "woy ga boleh masuk umur lu kurang"
        }
        
      }
    },
    idStudent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailStudent',
  });
  return DetailStudent;
};
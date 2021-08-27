'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fasilitas_Ruang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fasilitas_Ruang.belongsTo(models.Fasilitas, {foreignKey: 'IDFasilitas'})
      Fasilitas_Ruang.belongsTo(models.Ruang, {foreignKey: 'IDRuang'})
    }
  };
  Fasilitas_Ruang.init({
    ID: DataTypes.INTEGER,
    IDRuang: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    IDFasilitas: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Fasilitas_Ruang',
  });
  return Fasilitas_Ruang;
};
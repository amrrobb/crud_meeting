'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fasilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fasilitas.hasMany(models.Fasilitas_Ruang, {foreignKey: 'IDFasilitas'})
      Fasilitas.belongsToMany(models.Ruang, {foreignKey: 'IDFasilitas', through: 'Fasilitas_Ruang'})
    }
  };
  Fasilitas.init({
    Nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
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
    },
  }, {
    sequelize,
    modelName: 'Fasilitas',
  });
  return Fasilitas;
};
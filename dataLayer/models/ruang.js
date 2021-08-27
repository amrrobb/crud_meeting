'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ruang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ruang.hasMany(models.Fasilitas_Ruang, {foreignKey: 'IDRuang'})
      Ruang.belongsToMany(models.Fasilitas, {foreignKey: 'IDRuang', through: 'Fasilitas_Ruang'})
      Ruang.hasMany(models.Booking, {foreignKey: 'IDRuang'})
    }
  };
  Ruang.init({
    Nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
        notNull: true,
        notEmpty: true
      }
    },
    Jml_Kapasitas: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
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
    modelName: 'Ruang',
  });
  return Ruang;
};
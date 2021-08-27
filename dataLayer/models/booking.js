'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(model.Ruang, {foreignKey: 'IDRuang'})
    }
  };
  Booking.init({
    IDRuang: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    Date: DataTypes.DATE,
    TimeStart: DataTypes.DATE,
    TimeEnd: DataTypes.DATE,
    isActive: {
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDRuang: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ruang',
          key: 'ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      Date: {
        type: Sequelize.DATE
      },
      TimeStart: {
        type: Sequelize.DATE
      },
      TimeEnd: {
        type: Sequelize.DATE
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking');
  }
};
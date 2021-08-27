'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fasilitas_Ruang', {
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
      IDFasilitas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fasilitas',
          key: 'ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isActive: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fasilitas_Ruang');
  }
};
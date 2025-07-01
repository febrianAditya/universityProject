'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Krs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMatkul: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Matkuls',
            key: "id"
          },
          onDelete: "CASCADE"
        },
      },
      idStudent: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Students',
            key: "id"
          },
          onDelete: "CASCADE"
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Krs');
  }
};
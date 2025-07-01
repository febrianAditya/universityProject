'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailStudents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addres: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('DetailStudents');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        defaultValue: 'other',
        type: Sequelize.ENUM('male', 'female', 'other')
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      joined_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      payment: {
        defaultValue: 0,
        type: Sequelize.BIGINT
      },
      note: {
        defaultValue: "",
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'), // cf. https://github.com/sequelize/sequelize/issues/5561
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'), // cf. https://github.com/sequelize/sequelize/issues/5561
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee');
  }
};

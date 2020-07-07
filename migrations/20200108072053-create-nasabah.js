'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Nasabahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mobile: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      lstay: {
        type: Sequelize.STRING
      },
      momname: {
        type: Sequelize.STRING
      },
      comname: {
        type: Sequelize.STRING
      },
      comfield: {
        type: Sequelize.STRING
      },
      comaddress: {
        type: Sequelize.TEXT
      },
      lwork: {
        type: Sequelize.STRING
      },
      avsalary: {
        type: Sequelize.STRING
      },
      comlocation: {
        type: Sequelize.TEXT
      },
      ename1: {
        type: Sequelize.STRING
      },
      erel1: {
        type: Sequelize.STRING
      },
      emobile1: {
        type: Sequelize.STRING
      },
      ename2: {
        type: Sequelize.STRING
      },
      erel2: {
        type: Sequelize.STRING
      },
      emobile2: {
        type: Sequelize.STRING
      },
      idcardurl: {
        type: Sequelize.STRING
      },
      profileurl: {
        type: Sequelize.STRING
      },
      verified_status: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Nasabahs');
  }
};
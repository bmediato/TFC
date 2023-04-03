'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
       id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true, 
      },
      teamName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'team_name'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users_tech', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        //referencia o users
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        //referencia a tabela techs
        tech_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'techs', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users_tech');
   
  }
};

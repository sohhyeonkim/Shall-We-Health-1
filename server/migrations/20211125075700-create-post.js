"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hostId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "hostId",
        },
      },
      guestId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "hostId",
        },
      },
      reserved_at: {
        type: Sequelize.DATE,
      },
      isMatched: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      location: {
        type: Sequelize.JSON,
      },
      description: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
  },
};

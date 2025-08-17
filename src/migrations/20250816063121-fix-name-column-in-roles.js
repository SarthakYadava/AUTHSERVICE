'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * The column is already named 'name'. We only need to MODIFY its position.
     */
    await queryInterface.sequelize.query(
      'ALTER TABLE `Roles` MODIFY COLUMN `name` VARCHAR(255) NOT NULL AFTER `id`'
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * The 'down' function should revert the change by moving it back to the end.
     */
    await queryInterface.sequelize.query(
      'ALTER TABLE `Roles` MODIFY COLUMN `name` VARCHAR(255) NOT NULL AFTER `updatedAt`'
    );
  }
};
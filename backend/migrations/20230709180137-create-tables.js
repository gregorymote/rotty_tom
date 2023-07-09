'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    try {
      const queryPath = path.resolve(
        __dirname,
        "../queries/create-tables.sql"
      );
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);
    } catch (err) {
      console.error("Unable to create tables: ", err);
    }

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    try {
      const queryPath = path.resolve(__dirname, "../queries/drop-tables.sql");
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);
    } catch (err) {
      console.error("Unable to drop tables: ", err);
    }
  }
};

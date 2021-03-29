'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Skills', [{
      id: 1,
      element: 'Pyro',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      element: 'Geo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      element: 'Dendro',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      element: 'Cryo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      element: 'Electro',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      element: 'Anemo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      element: 'Hydro',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Skills', null, {});
  }
};

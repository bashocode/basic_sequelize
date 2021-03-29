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
    await queryInterface.bulkInsert('Characters', [{
      element_id: 2,
      name: 'Albedo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 1,
      name: 'Diluc',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 4,
      name: 'Ganyu',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 1,
      name: 'Hu Tao',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 6,
      name: 'Jean',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 5,
      name: 'Keqing',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 7,
      name: 'Mona',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 4,
      name: 'Qiqi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 7,
      name: 'Tartaglia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 6,
      name: 'Venti',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 6,
      name: 'Xiao',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 2,
      name: 'Zongli',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 6,
      name: 'Lumine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 2,
      name: 'Aether',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      element_id: 1,
      name: 'Klee',
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
    await queryInterface.bulkDelete('Characters', null, {});
  }
};

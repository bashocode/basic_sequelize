'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // console.log('ini adalah models', models);
      // define association here
      this.belongsTo(models.Skill, { foreignKey: 'element_id' });
    }
  };
  Character.init({
    name: DataTypes.STRING,
    element_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
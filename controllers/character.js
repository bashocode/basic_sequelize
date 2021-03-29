const { Character, Skill } = require('../models');

class CharacterController {
  async getCharacter(req, res, next) {
    try {
      let characters = await Character.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Skill,
          attributes: ['element']
        }
      });
      // convert data to string
      let stringified = JSON.stringify(characters);
      // convert string to object
      let parsed = JSON.parse(stringified);
      // lets mapp the data
      let mapped = [];

      // mapping the data
      for (let i = 0; i < parsed.length; i++) {
        let newData = {};
        newData.id = parsed[i].id;
        newData.name = parsed[i].name;
        newData.element = parsed[i].Skill.element;
        mapped.push(newData);
      }

      res.status(200).json({
        result: mapped
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = CharacterController;
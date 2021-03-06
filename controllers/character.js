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

  async insertCharacter(req, res, next) {
    try {
      // console.log(req.body);
      const { name, element_id } = req.body;
      // validation basic
      if (!name || !element_id) {
        res.status(400).json({
          message: 'name and element_id are required.'
        });
      }

      let dataToSave = {
        name,
        element_id
      };
      // ternary marks by ? the left side will be true, and the right will be false
      // dataToSave.name = name ? name : '';
      // dataToSave.element_id = element_id ? element_id : '';
      // console.log(dataToSave);

      let saveChar = await Character.create(dataToSave);
      // console.log(saveChar);

      let characters = await Character.findOne({
        where: { id: saveChar.id },
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
      let result = {};
      result.id = parsed.id;
      result.name = parsed.name;
      result.element = parsed.Skill.element;
      
      res.status(201).json({
        message: 'new Character successfully inserted',
        data: result
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = CharacterController;
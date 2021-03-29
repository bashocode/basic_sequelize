class Character {
  async getCharacter(req, res, next) {
    res.send('Halo my name is Diluc');
  }
}

module.exports = Character;
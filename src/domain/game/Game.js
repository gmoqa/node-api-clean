const { attributes } = require('structure');

const Game = attributes({
  id: Number,
  title : {
    type: String,
    required: true
  },
  company: String
})(class Game {
});

module.exports = Game;

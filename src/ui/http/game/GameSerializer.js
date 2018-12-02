const GameSerializer = {
  serialize({ id, title, company }) {
    return {
      id,
      title,
      company
    };
  }
};

module.exports = GameSerializer;

const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  userDescription: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  price: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Game", gameSchema);
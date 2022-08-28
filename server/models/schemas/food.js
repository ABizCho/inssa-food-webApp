const { Schema } = require("mongoose");

module.exports = new Schema({
  id: Number,
  type: String,
  name: String,
  name_Eng: String,
  description: String,
  food_defaultImg: String,
  spicy: Number,
  recipe_url: String,
  caution: String,
  sound_url: String,
});

const { Schema } = require("mongoose");

module.exports = new Schema({
  food_id: Number,
  type: String,
  name: String,
  name_Eng: String,
  description: String,
  food_defaultImg: String,
  spicy: { type: Number, required: false },
  recipe_url: { type: Object, required: false },
  caution: Array,
  sound_url: String,
});

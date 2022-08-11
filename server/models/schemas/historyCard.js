const { Schema } = require("mongoose");
const shortId = require("./type/short-id");

module.exports = new Schema({
  id: String,
  type: { type: String, required: false },
  name: String,
  name_Eng: String,
  user_id: shortId,
  food_id: Number,
  user_inputImg: String,
  food_defaultImg: { String, required: false },
  description: String,
  spicy: Number,
  recipe_url: String,
  caution: Array,
});

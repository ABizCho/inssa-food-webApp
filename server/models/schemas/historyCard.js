const { Schema } = require("mongoose");
const shortId = require("./type/short-id");

module.exports = new Schema({
  shortId,
  user_id: String,
  food_id: Number,
  user_inputImg: String,
  type: { type: String, required: false },
  name: String,
  name_Eng: String,
  description: String,
  spicy: Number,
  recipe_url: String,
  caution: Array,
  title: String,
  comment: String,
  // food_defaultImg: { String, required: false },
});

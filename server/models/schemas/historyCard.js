const { Schema } = require("mongoose");
const shortId = require("./type/short-id");

module.exports = new Schema({
  id: String,
  name: String,
  user_id: shortId,
  food_id: Number,
  food_img: String,
  input_img: { type: String, required: false },
  description: String,
  spicy: { type: Number, required: false },
  recipes: { type: Object, required: false },
});

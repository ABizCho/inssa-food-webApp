const { Schema } = require("mongoose");

module.exports = new Schema({
  id: Number,
  name: String,
  default_img: String,
  description: String,
  spicy: { type: Number, required: false },
  recipes: { type: Object, required: false },
});

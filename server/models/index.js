const mongoose = require("mongoose");
const HistoryCardSchema = require("./schemas/historyCard");
const UserSchema = require("./schemas/user");
const FoodSchema = require("./schemas/food");

exports.User = mongoose.model("User", UserSchema);
exports.HistoryCard = mongoose.model("HistoryCard", HistoryCardSchema);

exports.Food = mongoose.model("Food", FoodSchema);

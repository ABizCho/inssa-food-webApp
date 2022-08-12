const { Router } = require("express");
const { Food } = require("./../models");
const { HistoryCard } = require("./../models");

const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.post("/");

module.exports = router;

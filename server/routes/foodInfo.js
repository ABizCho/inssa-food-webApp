const { Router } = require("express");
const { Food } = require("./../models");

const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.get(
  "/:id/find",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log("PARAMS.ID : ", id);
    let data = await Food.findOne({ id: id });
    console.log("findFood Data:", data);
    res.json(data);
  })
);

module.exports = router;

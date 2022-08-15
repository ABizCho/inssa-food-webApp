const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res, next) => {
  const FLASK_SERVER = "http://127.0.0.1:5000";

  try {
    await axios.get(FLASK_SERVER + "/hello").then((res) => {
      console.log(res);
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

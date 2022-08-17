const { Router } = require("express");
const axios = require("axios");

const router = Router();
const portUrl = require("../portUrl");
router.get("/", async (req, res, next) => {
  const FLASK_SERVER = portUrl.cloudServer + portUrl.flaskPort;

  try {
    await axios.get(FLASK_SERVER + "/hello").then((res) => {
      console.log(res);
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

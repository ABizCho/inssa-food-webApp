const { Router } = require("express");
const axios = require("axios");

const router = Router();
const portUrl = require("../portUrl");
router.get("/", async (req, res, next) => {
  const FLASK_SERVER = portUrl.cloudServer + portUrl.flaskPort;
  const { cookieImg } = req.body;
  console.log("server test:", cookieImg);

  try {
    await axios.get(FLASK_SERVER + `/modelCall/${imgUrl}`).then((res) => {
      console.log(res);
    });
    // await axios.get(FLASK_SERVER + `/modelCall`).then((res) => {
    //   console.log(res);
    // });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

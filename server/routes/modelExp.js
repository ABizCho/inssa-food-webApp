const { Router } = require("express");
const axios = require("axios");

const router = Router();
const portUrl = require("../portUrl");

router.get("/uploads/:imgUrl", async (req, res, next) => {
  const FLASK_SERVER = portUrl.cloudServer + portUrl.flaskPort;
  const { imgUrl } = req.params;
  console.log("server test:", imgUrl);

  try {
    await axios.get(FLASK_SERVER + `/modelCall/${imgUrl}`).then((res) => {
      console.log("flask로부터 받은 응답:", res);
    });
    // await axios.get(FLASK_SERVER + `/modelCall`).then((res) => {
    //   console.log(res);
    // });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

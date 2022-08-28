const { Router } = require("express");
const axios = require("axios");

const router = Router();
const portUrl = require("../portUrl");

router.get("/", async (req, res, next) => {
  const FLASK_SERVER = portUrl.cloudServer + portUrl.flaskPort;

  imgUrl = req.body;

  try {
    await axios.get(FLASK_SERVER + `/modelCall/${imgUrl}`).then((res) => {
      console.log(res);
    });
  } catch (e) {
    
router.get("/uploads/:imgUrl", async (req, res, next) => {
  const FLASK_SERVER = portUrl.cloudServer + portUrl.flaskPort;
  const { imgUrl } = req.params;
  console.log("server test:", imgUrl);


  let modelResult;

  try {
    await axios.get(FLASK_SERVER + `/modelCall/${imgUrl}`).then((res) => {
      console.log("flask로부터 받은 응답:", res);
      console.log("res.data : ", res.data);
      modelResult = res.data;
    });
    // await axios.get(FLASK_SERVER + `/modelCall`).then((res) => {
      // });
      res.json(modelResult);
  } catch (e) {
    console.log(e);

    next(e);
  }
});

module.exports = router;

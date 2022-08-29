const { Router } = require("express");
const { Food, User } = require("./../models");
const { HistoryCard } = require("./../models");
const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { userId, food, img, title, comment } = req.body;

  console.log("최신화 sound", food.sound_url);
  console.log("최신화 video", food.recipe_url);
  try {
    await HistoryCard.create({
      user_id: userId,
      food_id: food.id,
      user_inputImg: img,
      type: food.type,
      name: food.name,
      name_Eng: food.name_Eng,
      description: food.description,
      spicy: food.spicy,
      recipe_url: food.recipe_url,
      sound_url: food.sound_url,
      caution: food.caution,
      title: title,
      comment: comment,
    });
    res.json({
      result: "[server] history에 저장 되었습니다.",
    });
  } catch (e) {
    next(e);
  }
});

// history card 클라에서 보여주기 historyCard 데이터요청
// 나중에는 user 하위로 소속돼야 할지 결정 및 개선 필요
router.get("/:email/find", async (req, res, next) => {
  const { email } = req.params;
  console.log("histories get by email:", email);

  try {
    const histories = await HistoryCard.find({ user_id: email });
    console.log("[server] history get 응답중");

    res.json({ histories, msg: "get요청 정상처리 되었습니다." });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortid/delete", async (req, res, next) => {
  const { shortid } = req.params;
  try {
    console.log("[server] history delete 전", shortid);
    await HistoryCard.deleteOne({ shortid });
    // .populate("author") //나중에 활성화
    console.log("[server] history delete");

    res.json({ result: "delete complete" });
  } catch (e) {
    next(e);
  }
});

router.post("/:shortId/update", async (req, res, next) => {
  let { shortId } = req.params;
  let { title, comment } = req.body;
  console.log("ShortID : ", shortId, "title : ", title, "comment : ", comment);
  try {
    await HistoryCard.updateOne({ shortId: shortId }, { title, comment }); // Post.updateOne( { 바꾸고싶은 아이디(->객체). 기준점 객체 }, { 바꿀내용 / 속성 } )
    res.json({ result: "수정이 완료되었습니다." });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortId/findone", async (req, res, next) => {
  let { shortId } = req.params;
  console.log("shortId(req.params) : ", shortId);
  try {
    let data = await HistoryCard.findOne({ shortId: shortId });
    console.log("응답해준 데이터: ", data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

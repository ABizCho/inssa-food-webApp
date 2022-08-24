const { Router } = require("express");
const { Food, User } = require("./../models");
const { HistoryCard } = require("./../models");
const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { userId, food, img, title, comment } = req.body;

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
router.get("/", async (req, res, next) => {
  const userId = req.body;
  console.log("histories get by id:", userId);

  try {
    const histories = await HistoryCard.find({ user_id: userId });
    // .populate("author") //나중에 활성화
    console.log("[server] history get 응답중");

    res.json({ histories, msg: "get요청 정상처리 되었습니다." });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortid/delete", async (req, res, next) => {
  const historyId = req.params;
  try {
    const histories = await HistoryCard.deleteOne({ historyId });
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
    await HistoryCard.updateOne(
      { history_card_id: shortId },
      { title, comment }
    ); // Post.updateOne( { 바꾸고싶은 아이디(->객체). 기준점 객체 }, { 바꿀내용 / 속성 } )
    res.json({ result: "수정이 완료되었습니다." });
  } catch (e) {
    next(e);
  }
});

router.get("/:shortId/find", async (req, res, next) => {
  let { shortId } = req.params;
  console.log("shortId : ", shortId);
  console.log("req.params : ", req.params);
  try {
    let data = await HistoryCard.findOne({ history_card_id: shortId });
    console.log("응답해준 데이터: ", data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

const { Router } = require("express");
const { Food, User } = require("./../models");
const { HistoryCard } = require("./../models");
const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { userId, food, img } = req.body;

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
  try {
    const histories = await HistoryCard.find({});
    // .populate("author") //나중에 활성화
    console.log("[server] history get 응답중");

    res.json({ histories, msg: "get요청 정상처리 되었습니다." });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

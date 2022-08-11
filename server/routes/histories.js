const { Router } = require("express");
const { Food } = require("./../models");
const { HistoryCard } = require("./../models");

const asyncHandler = require("./../utils/async-handler");

const router = Router();

router.post("/");

// history card 클라에서 보여주기 historyCard 데이터요청
// 나중에는 user 하위로 소속돼야 할지 결정 및 개선 필요
router.get("/", async (req, res, next) => {
  try {
    const histories = await HistoryCard.find({}).sort({ createdAt: -1 });
    // .populate("author") //나중에 활성화

    const msg = "get요청 정상처리 되었습니다.";
    console.log("[server] history get 응답중");
    res.json({ histories, msg });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const { User } = require("../models/schemas/user");

// //필요시 활성화
// const jwt = require('jsonwebtoken')
// const jwtConfig = require('./../config/jwtConfig')
// const crypto = require("crypto")

const router = Router();

//
router.post(
  "/signUp",
  asyncHandler(async (req, res, next) => {
    console.log("[server] post-signup 요청수신");

    res.json({
      result: "post-signup 응답",
    });
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    console.log("[server] post-login 요청수신");

    res.json({
      result: "post-login 응답",
    });
  })
);

router.post(
  "/find/password",
  asyncHandler(async (req, res, next) => {
    console.log("[server] post-find/password 요청수신");

    res.json({
      result: "find/password 응답",
    });
  })
);

module.exports = router;

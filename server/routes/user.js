const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const { User } = require("../models/schemas/user");

// //필요시 활성화
// const jwt = require('jsonwebtoken')
// const jwtConfig = require('./../config/jwtConfig')
// const crypto = require("crypto")

const router = Router();

//회원가입
router.post(
  "/signUp",
  asyncHandler(async (req, res, next) => {
    console.log("[server] post-signup 요청수신");
    
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      // throw new Error("이미 가입된 이메일입니다.");
      res.status(500);
      res.json({
          error: "이미 가입된 이메일입니다."
      })
      return;
  }
  await User.create({
        email,
        password: hashPassword,
        name
    });

    res.json({
      result: "post-signup 응답",
    });
  })
);


// 로그인
router.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    console.log("[server] post-login 요청수신");
    const { email, password } = req.body;
    const checkEmail = await User.findOne({ email });

    if (!checkEmail) {
        res.status(401);
        res.json({
            fail: "존재하지 않는 이메일입니다."
        })
        return;
    }

    if (hashPassword !== checkEmail.password) {
        res.status(401);
        res.json({
            fail: "비밀번호가 틀렸습니다."
        })
        return;
    }

    res.json({
      status:true,
      email:email,
      name:checkEmail.name
    })
    res.json({
      result: "post-login 응답",
    });
  })
);


// 비밀번호찾기
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

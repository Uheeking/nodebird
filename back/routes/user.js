const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  // 숫자가 높을 수록 좋음
  console.log("comeon", req.body.email);
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 13);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password,
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error); // status 500 서버 쪽 에러
  }
});

module.exports = router;
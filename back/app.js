const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const db = require("./models");
const config = require('./config/config.json')
console.log(config.development);
// console.log(db);
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("db 연결 성공");
//   })
//   .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});

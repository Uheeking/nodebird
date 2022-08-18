const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
console.log(db);
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});

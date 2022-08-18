const express = require("express");
const app = express();
const db = require("./models");
const passportConfig = require("./passport");
const cors = require("cors");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});

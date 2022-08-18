const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const portUrl = require("./portUrl.json");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const coreRouter = require("./routes/core");
const historiesRouter = require("./routes/histories");
const foodInfoRouter = require("./routes/foodInfo");

const imgRouter = require("./routes/img");

const modelRouter = require("./routes/modelExp");

//
const authMiddleware = require("./routes/auth");
const app = express();

// 1. DB 연결 및 연결관리
mongoose.connect(`mongodb://0.0.0.0:27017/foodie`);

mongoose.connection.on("connected", () => {
  console.log("[DB] CONNECT - success");
});

mongoose.connection.on("error", (err) => {
  console.log(`[DB] CONNECT - failed: ${err}`);
});

// 2. 기타 미들웨어 연결
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 3. 라우팅
app.use(express.static("/uploads"));

app.use("/user", userRouter);

app.use("/auth", authRouter);

app.use("/core", authMiddleware, coreRouter);

app.use("/foodInfo", foodInfoRouter);

app.use("/histories", authMiddleware, historiesRouter);

app.use("/api", imgRouter);

app.use("/uploads", express.static("uploads"));

app.use("/modelExp", modelRouter);

// 4. 서버 구동
app.listen(portUrl.node, () => {
  console.log("[Server] OPEN - success");
});

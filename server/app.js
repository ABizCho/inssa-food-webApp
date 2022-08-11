const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ports = require("./secure_data/port");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const coreRouter = require("./routes/core");
const historiesRouter = require("./routes/histories");
//
const authMiddleware = require("./routes/auth");
const app = express();

// 1. DB 연결 및 연결관리
mongoose.connect(`mongodb://localhost:${ports.db}/foodie`);

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

// 3. 라우팅
app.use("/user", userRouter);

app.use("/auth", authRouter);

app.use("/core", authMiddleware, coreRouter);

app.use("/histories", authMiddleware, historiesRouter);

// 4. 서버 구동
app.listen(ports.server, () => {
  console.log("[Server] OPEN - success");
});

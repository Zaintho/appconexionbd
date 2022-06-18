const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const quotesRouter = require("./routes/quotes");
const postRouter = require("./routes/postData");
const putRouter = require("./routes/putData");
const delRouter = require("./routes/delData");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/municipios", quotesRouter);
app.use("/postData", postRouter);
app.use("/putData", putRouter);
app.use("/delData", delRouter);

module.exports = app;

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const headers = require("./middlewares/headers");
const routes = require("./routes/index.js");
const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(errorHandler);
app.use(headers);
app.use("/", routes);

module.exports = app;

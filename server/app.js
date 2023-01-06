const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

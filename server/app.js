const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/userController");
app.use('/', userRoutes);





app.use('/', userRoutes);
app.use(bodyParser.json);
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

module.exports = app;

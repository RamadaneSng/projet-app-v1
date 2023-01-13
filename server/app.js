const express = require("express");
const app = express();
//const morgan = require("morgan");
//const cookieParser = require("cookie-parser");
const userRoutes = require("./controllers/userController");
const parkingRoutes = require("./controllers/parkingController");
const reservationRoutes = require("./controllers/reservationController");
const bodyParser = require('body-parser');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/reservation', reservationRoutes); 
app.use('/park', parkingRoutes);   
app.use('/user', userRoutes);   
  


//app.use(morgan("dev"));
//app.use(express.static("./public"));
//app.use(cookieParser());
//app.use(express.urlencoded({ extended: true }));

module.exports = app;

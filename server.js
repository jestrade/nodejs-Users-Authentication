"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const config = require("./config");
const api = require("./api/");
 
mongoose.connect(config.db.url);

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
 
app.use("/api", api);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
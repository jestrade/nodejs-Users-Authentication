"use strict";

const router = require("express").Router();
const controller = require("./../controllers/users");

router.route("/")
    .get(controller.all);

module.exports = router;
const express = require("express");
const {CreatePerson} = require("../Controllers/createController");

const router = express.Router();
router.post("/create", CreatePerson);

module.exports = router;

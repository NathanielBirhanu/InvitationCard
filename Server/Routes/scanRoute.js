const express = require("express");
const {ScanCard} = require("../Controllers/scanController");

const router = express.Router();
router.post("/scan", ScanCard);

module.exports = router;

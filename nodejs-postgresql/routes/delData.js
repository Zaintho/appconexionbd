const express = require("express");
const delData = express.Router();
const quotes = require("../services/quotes");

/* GET quotes listing. */

delData.delete("/", async function (req, res, next) {
  try {
    let { id } = req.body;
    res.json(await quotes.delData(id));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});
module.exports = delData;

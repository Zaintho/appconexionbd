const express = require("express");
const putData = express.Router();
const quotes = require("../services/quotes");

/* GET quotes listing. */

putData.put("/", async function (req, res, next) {
  try {
    console.log(req.body);
    res.json(await quotes.putData(req.body));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = putData;

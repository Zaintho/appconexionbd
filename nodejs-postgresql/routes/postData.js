const express = require("express");
const postData = express.Router();
const quotes = require("../services/quotes");

/* GET quotes listing. */

postData.post("/", async function (req, res, next) {
  try {
    let { nombre_municipio } = req.body;
    res.json(await quotes.postData(nombre_municipio));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = postData;

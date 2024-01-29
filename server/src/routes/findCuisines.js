const express = require("express");
const router = express.Router();
const recipesQueries = require("../db/queries/cuisines");

router.get("/:id", (req, res) => {
  recipesQueries
    .findCuisines(id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
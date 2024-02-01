const express = require("express");
const router = express.Router();
const cuisinesQueries = require("../db/queries/cuisines");


router.get("/", (req, res) => {
  cuisinesQueries
    .getAllCuisines()
    .then((data) => {
      res.status(200).json(data.cuisines);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  cuisinesQueries
    .findCuisines(id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
const indexRouter = require("express").Router();
const db = require("../data/data");

indexRouter.get("/", (req, res) => {
  try {
    res.status(200).json(db);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = indexRouter;

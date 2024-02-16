const express = require("express");
const {
  create,
  get,
  update,
  deleteData,
} = require("../controller/servicePage");

const serviceRoutes = express.Router();

serviceRoutes.post("/create", create);
serviceRoutes.get("/list", get);
serviceRoutes.put("/update", update);
serviceRoutes.delete("/delete", deleteData);

module.exports = { serviceRoutes };

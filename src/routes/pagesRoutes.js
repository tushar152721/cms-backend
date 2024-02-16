const express = require("express");
const pagesController = require("../controller/pagesController");
const { upload } = require("../utils/imageUpload");
const pagesRouter = express.Router();

pagesRouter.post("/create", pagesController.createPage);
pagesRouter.get("/list", pagesController.pagesDetail);
pagesRouter.put("/update", pagesController.updatePages);
pagesRouter.delete("/delete", pagesController.deletePages);

module.exports = {
  pagesRouter,
};

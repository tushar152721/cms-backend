const express = require("express");
const { multiple, single } = require("../controller/imageUploadController");
const { upload } = require("../utils/imageUpload");
const pagesRouter = express.Router();

pagesRouter.post("/uploadSingle", upload.single("image"), single);
pagesRouter.post("/uploadMultiple", upload.array("multiple"), multiple);

module.exports = pagesRouter;

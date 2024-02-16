const express = require("express");
const { userRouter } = require("./userRoutes");
const { contactRouter } = require("./contactRoutes");
const { pagesRouter } = require("./pagesRoutes");
const { serviceRoutes } = require("./serviceRoutes");

const routers = express.Router();

routers.use("/user", userRouter);
routers.use("/contact", contactRouter);
routers.use("/pages", pagesRouter);
routers.use("/service", serviceRoutes);
routers.use("/image", require("./imageRoutes"));

module.exports = routers;

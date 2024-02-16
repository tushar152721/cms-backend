const express = require('express');
const { userRouter } =  require('./userRoutes');
const { contactRouter } = require('./contactRoutes');
const { pagesRouter } = require('./pagesRoutes');

const routers = express.Router();

routers.use("/user",userRouter);
routers.use("/contact",contactRouter);
routers.use("/pages",pagesRouter);

module.exports = routers

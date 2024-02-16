const express = require("express");
const userController = require("../controller/userController");
const { jwtAuthorization } = require("../middleware/authmiddleware");
const userRouter = express.Router();

userRouter.post("/create", userController.createUser);
userRouter.get("/get", userController.getUser);
userRouter.post("/login", userController.userLogin);

module.exports = { userRouter };

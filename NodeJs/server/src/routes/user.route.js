const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middleware/authMiddleware");

userRouter.post("/createuser", userController.registerUser);
userRouter.post("/loginUser", userController.loginUser);
userRouter.get("/profile", authMiddleware, userController.getProfile);
userRouter.post("/logout", authMiddleware, userController.logoutUser);

module.exports = userRouter;
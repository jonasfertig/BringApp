const express = require('express');
const userRouter = express.Router();
const userController = require("../2_controllers/user.controller.js");

//finds current user in Keycloak tables and stores relevant user information in the 'user' table, if it's not already in that table 
userRouter.get("/:IDUser", userController.findUser);
module.exports = userRouter;
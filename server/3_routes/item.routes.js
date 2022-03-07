const express = require('express');
const itemRouter = express.Router();
const itemController = require("../2_controllers/item.controller.js");

//finds items previously created by a specific client, for displaying them as options while creating a new list
itemRouter.get("/client/:IDClient", itemController.findItemsForClient);

//creates new item
itemRouter.post("/", itemController.create);

//edits item
itemRouter.put("/", itemController.editItem);
module.exports = itemRouter;
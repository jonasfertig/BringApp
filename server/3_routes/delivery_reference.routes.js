const express = require('express');
const delivery_referenceRouter = express.Router();
const delivery_referenceController = require("../2_controllers/delivery_reference.controller.js");

//creates new delivery_reference to connect items to a certain delivery
delivery_referenceRouter.post("/", delivery_referenceController.create);
module.exports = delivery_referenceRouter;
const express = require('express');
const deliveryRouter = express.Router();
const deliveryController = require("../2_controllers/delivery.controller.js");

//finds all accepted deliveries for one specific shopper
deliveryRouter.get("/:IDDelivery", deliveryController.findDeliveriesForShopper);

//finds the delivery created by a client
deliveryRouter.get("/client/:IDDelivery", deliveryController.findDeliveryForClient);

//finds all available deliveries, except for the one created by the shopper himself
deliveryRouter.get("/available/:IDShopper", deliveryController.findAvailableDeliveries);

//sets shopperId for delivery, when a shopper accepted the delivery
deliveryRouter.get("/shopper/:IDDelivery/:IDShopper", deliveryController.setShopper);

//remove shopper_id, used for removing the delivery from the shoppers accepted lists
deliveryRouter.get("/shopper/:IDDelivery", deliveryController.unsetShopper);

//sets isPaid, once the shopper confirms his payment
deliveryRouter.get("/isPaid/:IDDelivery", deliveryController.setIsPaid);

//sets shopperDone, once the shopper confirms he delivered his delivery
deliveryRouter.get("/shopperDone/:IDDelivery", deliveryController.setShopperDone);

//sets clientDone, once the client confirms he received the delivery
deliveryRouter.get("/clientDone/:IDDelivery", deliveryController.setClientDone);
//create new delivery
deliveryRouter.post("/", deliveryController.create);

//deletes the delivery, in case the client decides to remove his own list
deliveryRouter.delete("/:IDDelivery", deliveryController.deleteDelivery);

//finds all available deliveries created for one specific shop
deliveryRouter.get("/available/:IDClient/:IDShop", deliveryController.findAvailableDeliveriesForShop);
module.exports = deliveryRouter;
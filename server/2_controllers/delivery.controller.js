const DeliveryModel = require("../1_models/delivery.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const m_delivery = new DeliveryModel(req.body);

  DeliveryModel.db_create(m_delivery, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else res.send(data);
  });
};

exports.findDeliveriesForShopper = (req, res) => {
  DeliveryModel.db_findDeliveriesForShopper(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.send({       
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.findDeliveryForClient = (req, res) => {
  DeliveryModel.db_findDeliveryForClient(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.findAvailableDeliveries = (req, res) => {
  DeliveryModel.db_findAvailableDeliveries(req.params.IDShopper, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.send({}
        );
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};


exports.findAvailableDeliveriesForShop = (req, res) => {
  DeliveryModel.db_findAvailableDeliveriesForShop(req.params.IDClient,req.params.IDShop, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.send({}
        );
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.setShopper = (req, res) => {
  DeliveryModel.db_setShopper(req.params.IDDelivery, req.params.IDShopper, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.setIsPaid = (req, res) => {
  DeliveryModel.db_setIsPaid(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.setShopperDone = (req, res) => {
  DeliveryModel.db_setShopperDone(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};
exports.setClientDone = (req, res) => {
  DeliveryModel.db_setClientDone(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.unsetShopper = (req, res) => {
  DeliveryModel.db_unsetShopper(req.params.IDDelivery, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};

exports.deleteDelivery = (req, res) => {
  DeliveryModel.db_removeDelivery(req.params.IDDelivery, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send({ message: `Error` });
  });
};

exports.editDelivery = (req, res) => {
  DeliveryModel.db_editDelivery(req.params.IDDelivery, req.params.paid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Error`
        });
      } else {
        res.status(500).send({
          message: "Error"
        });
      }
    } else res.send(data);
  });
};
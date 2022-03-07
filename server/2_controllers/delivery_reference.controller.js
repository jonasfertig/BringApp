const Delivery_referenceModel = require("../1_models/delivery_reference.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const m_delivery_references = new Delivery_referenceModel(req.body);

  Delivery_referenceModel.db_create(m_delivery_references, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else res.send(data);
  });
};




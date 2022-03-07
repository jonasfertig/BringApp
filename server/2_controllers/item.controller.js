const ItemModel = require("../1_models/item.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const m_item = new ItemModel(req.body);

  ItemModel.db_create(m_item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else res.send(data);
  });
};

exports.findItemsForClient = (req, res) => {

  ItemModel.db_findItemsForClient(req.params.IDClient, (err, data) => {

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

exports.editItem = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const m_item = new ItemModel(req.body);

  ItemModel.db_editItem(m_item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else res.send(data);
  });
};
var config = require('./db.js');
var connection = config.connection

class ItemModel {

  constructor(item) {
    console.log(item.email)
    this.item_id = item.item_id;
    this.item_name = item.item.itemName;
    this.item_description = item.item.desc;
    this.user_id = item.email;
  }

  static db_create(item, result) {
    connection.query("INSERT INTO item SET ?", item, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, item);
    });
  }

  static db_findItemsForClient(id, result) {
    connection.query(`SELECT * FROM item WHERE user_id = ?`, [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  }

  static db_editItem(item, result) {
    connection.query("UPDATE item SET item_name = ?, item_description = ? WHERE item_id = ?", [item.item_name, item.item_description, item.item_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, item);
    });
  }
}


module.exports = ItemModel;

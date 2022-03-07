var config = require('./db.js');
var connection = config.connection

class DeliveryModel {

  constructor(delivery) {
    this.delivery_id = delivery.delivery_id;
    this.budget = delivery.budget;
    this.client_id = delivery.client_id;
    this.shopper_id = null;
    this.isPaid = false;
    this.shopperDone = false;
    this.clientDone = false;
    { delivery.shop_id ? this.shopId = delivery.shop_id : this.shopId = null };
  }

  static db_create(delivery, result) {
    connection.query("INSERT INTO delivery SET ?", delivery, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created Delivery: ", { ...delivery });
      result(null, { ...delivery });
    });
  }

  static db_findDeliveriesForShopper(id, result) {
    connection.query(`SELECT d.delivery_id, d.budget,d.shopId, d.isPaid, d.shopperDone, d.clientDone, u.username, u.email, u.city, u.street, u.house_number
    From delivery AS d
    INNER JOIN user AS u ON d.client_id = u.email
    WHERE d.shopper_id = ? AND d.shopperDone = 0;
    SELECT d.delivery_id, i.item_id, i.item_name, i.item_description
    From delivery AS d
    INNER JOIN delivery_reference AS dr ON d.delivery_id = dr.delivery_id 
    INNER JOIN item AS i ON dr.item_id = i.item_id
    WHERE d.shopper_id = ? AND d.shopperDone = 0`, [id, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, this.formatResult(res));
        return;
      }
      result({ kind: "not_found" }, null);
    });
  }

  static db_findDeliveryForClient(id, result) {
    connection.query(`SELECT d.delivery_id, d.budget, d.shopper_id, d.isPaid, d.shopperDone
    From delivery AS d
    WHERE d.client_id = ? AND d.clientDone = 0;
    SELECT i.item_id, i.item_name, i.item_description
    From delivery AS d
    INNER JOIN delivery_reference AS dr ON d.delivery_id = dr.delivery_id 
    INNER JOIN item AS i ON dr.item_id = i.item_id
    WHERE d.client_id = ? AND d.clientDone = 0`, [id, id], (err, res) => {
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

  static db_findAvailableDeliveries(id, result) {
    connection.query(`SELECT d.delivery_id, d.budget,d.shopId, u.street, u.city
    From delivery AS d
    INNER JOIN user AS u ON d.client_id = u.email
    WHERE d.shopper_id IS NULL AND d.client_id <> ?;
    SELECT d.delivery_id, i.item_id, i.item_name, i.item_description
    From delivery AS d
    INNER JOIN delivery_reference AS dr ON d.delivery_id = dr.delivery_id 
    INNER JOIN item AS i ON dr.item_id = i.item_id
    WHERE d.shopper_id IS NULL AND d.client_id <> ?`, [id, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Deliveries: ", res);
        result(null, this.formatResult(res));
        return;
      }
      result({ kind: "not_found" }, null);
    });
  }

  static db_findAvailableDeliveriesForShop(clientId, shopId, result) {
    
    connection.query(`SELECT d.delivery_id, d.budget, u.street, u.city
    From delivery AS d
    INNER JOIN user AS u ON d.client_id = u.email
    WHERE d.shopper_id IS NULL AND d.shopId = ?;
    SELECT d.delivery_id, i.item_id, i.item_name, i.item_description
    From delivery AS d
    INNER JOIN delivery_reference AS dr ON d.delivery_id = dr.delivery_id 
    INNER JOIN item AS i ON dr.item_id = i.item_id
    WHERE d.shopper_id IS NULL AND i.user_id = ?`, [shopId, shopId], (err, res) => {
      /*
       const clientID = "cantbeloggedin";
    connection.query(`SELECT d.delivery_id, d.budget, u.street, u.city
    From delivery AS d
    INNER JOIN user AS u ON d.client_id = u.email
    WHERE d.shopper_id IS NULL AND d.client_id <> ? AND d.shopId = ?;
    SELECT d.delivery_id, i.item_id, i.item_name, i.item_description
    From delivery AS d
    INNER JOIN delivery_reference AS dr ON d.delivery_id = dr.delivery_id 
    INNER JOIN item AS i ON dr.item_id = i.item_id
    WHERE d.shopper_id IS NULL AND d.client_id <>? AND i.user_id = ?`, [clientID, shopId, clientID, shopId],
      */ 
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Deliveries: ", res);
        result(null, this.formatResult(res));
        return;
      }
      result({ kind: "not_found" }, null);
    });
  }


  /**
   * removes redundant occurences of delivery_id and budget 
   * @param res full result of sql query 
   */
  static formatResult(res) {
    let deliveries = [];
    res[0].forEach(r => {
      let items = [];
      res[1].forEach(i => {
        if (i.delivery_id === r.delivery_id) {
          items.push({ item_id: i.item_id, item_name: i.item_name, item_description: i.item_description });
        }
      });
      deliveries.push({ ...r, items: items });
    });
    return deliveries;
  }

  static db_setShopper(delivery_id, shopper_id, result) {
    connection.query("UPDATE delivery SET shopper_id = ? WHERE delivery_id = ?", [shopper_id, delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, shopper_id);
    });
  }

  static db_setIsPaid(delivery_id, result) {
    connection.query("UPDATE delivery SET isPaid = true WHERE delivery_id = ?", [delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, res);
    });
  }

  static db_setShopperDone(delivery_id, result) {
    connection.query("UPDATE delivery SET shopperDone = true WHERE delivery_id = ?", [delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, res);
    });
  }
  static db_setClientDone(delivery_id, result) {
    connection.query("UPDATE delivery SET clientDone = true WHERE delivery_id = ?", [delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, res);
    });
  }

  static db_unsetShopper(delivery_id, result) {
    connection.query("UPDATE delivery SET shopper_id = null WHERE delivery_id = ?", [delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, res);
    });
  }

  static db_removeDelivery(delivery_id, result) {
    console.log(delivery_id);
    connection.query(`DELETE FROM delivery_reference WHERE delivery_id = ?;
    DELETE FROM delivery WHERE delivery_id = ?`, [delivery_id, delivery_id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, res);
    });
  }
}

module.exports = DeliveryModel;

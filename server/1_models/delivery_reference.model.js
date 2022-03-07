var config = require('./db.js');
var connection = config.connection

class Delivery_referenceModel {

  constructor(delivery_reference) {
    this.delivery_reference = delivery_reference.foo;
  }
  static db_create(delivery_reference, result) {
    let stmt = `INSERT INTO delivery_reference(delivery_id,item_id) VALUES ? `;

    connection.query(stmt, [delivery_reference.delivery_reference], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Delivery-reference: ", { delivery_reference });
      result(null, { delivery_reference });
    });
  }

}

module.exports = Delivery_referenceModel;

var config = require('./db.js');
var connection = config.connection

class UserModel {

  constructor(user) {
    this.user_id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.cellphone = user.mobile;
    this.street = user.street;
    this.house_number = user.house_number;
    this.city = user.city;
  }

  static fetchUserForPersistence(username, user) {
    connection.query(`SELECT USER_ENTITY.USERNAME, USER_ENTITY.FIRST_NAME, USER_ENTITY.LAST_NAME, USER_ATTRIBUTE.VALUE, USER_ATTRIBUTE.NAME FROM USER_ENTITY LEFT JOIN USER_ATTRIBUTE ON USER_ENTITY.ID = USER_ATTRIBUTE.USER_ID where USER_ENTITY.USERNAME= ? and USER_ATTRIBUTE.NAME=("city" or "address" or "mobile" or "state");`, [username], (err, res) => {
      if (err) {
        return "error";
      }
      if (res.length) {
        //data from keycloak tables is restructured to fit in one table
        const username = res[0].FIRST_NAME + " " + res[0].LAST_NAME;
        let city = null;
        let street = null;
        let house_number = null;
        let cellphone = null
        res.forEach(result => {
          switch (result.NAME) {
            case "city": city = result.VALUE; break;
            case "address": {
              street = result.VALUE.replace(/[0-9]/g, '');
              house_number = result.VALUE.match(/\d+/);

              break;
            };
            case "mobile": cellphone = result.VALUE; break;
            default: break;
          }
        })
        if (house_number === null) {
          house_number = 1;
        }
        user({ "username": username, "email": res[0].USERNAME, "cellphone": cellphone, "street": street, "house_number": house_number, "city": city });
      }
    });
  }

  static db_createUser(user) {
    connection.query(`INSERT INTO user SET ?`, [user], (err, res) => {
    });
  }
}

module.exports = UserModel;

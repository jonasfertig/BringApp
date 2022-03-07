const UserModel = require("../1_models/user.model.js");

exports.findUser = (req, res) => {
  if (!req.params.IDUser) {
    res.status(400).send({
      message: "User is still undefined"
    });
  }  
  UserModel.fetchUserForPersistence(req.params.IDUser, user => {
    UserModel.db_createUser(user);
    res.send(user);
  });
};

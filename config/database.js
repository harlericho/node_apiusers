const Sequelize = require("sequelize");
const modelUser = require("../models/user");
const sequilize = new Sequelize("db_apiusers1", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const User = modelUser(sequilize, Sequelize);
sequilize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Table created and syncronized");
  });

module.exports = {
  User,
};

const keys = require('../config/keys')
var stripe = require("stripe")(keys.stripeSecretKey);
module.exports = app => {


  app.post("/api/stripe", (req, res) => {
    res.send(req.user);
  });

};

const express = require("express");
const Users = require("../models/Users");
const router = express.Router();




// Create user using POST : (/api/auth) doesnt require auth
router.post('/', (req, res) => {
  console.log(req.body);
  const user = Users(req.body);
  user.save()
  res.send(req.body);
})

module.exports = router

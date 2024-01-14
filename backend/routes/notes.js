const express = require("express");
const Users = require("../models/Users");
const router = express.Router();




// Create user using POST : (/api/auth) doesnt require auth
router.post('/', (req, res) => {
  res.json([])
})

module.exports = router

const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const JWT_SECRET = "HelloMyNameiSBillI";

// Create user using POST : (/api/auth/createuser) doesnt require auth
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there are error return bad req and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(
          (400)).json({ error: "Sorry user with this email already exists" }
        );
      }
      const salt = await bcrypt.genSalt(10);
       const secpass = await bcrypt.hash(req.body.password,salt );

      // create user
      user = await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data ={
        user : {
          id : user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      
      res.json({authToken});
    } catch (error) {
      console.error(error.message)
      res.status(500).send("some error occured")
    }
  }
);

module.exports = router;

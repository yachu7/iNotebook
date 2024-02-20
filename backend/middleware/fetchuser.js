var jwt = require("jsonwebtoken");
const JWT_SECRET = "HelloMyNameiSBillI";
const fetchuser = (req, res, next) => {
  // get the user from the jwt token and add id to req object.

  const token = req.header('auth-token');
  console.log(token);

  
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
   

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "Invalid token provided" });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: "Token has expired" });
    } else {
      return res.status(401).json({ error: "Authentication failed" });
    }
  }
};

module.exports = fetchuser;

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, secret.jwtSecret, (err, decodedJwt) => {
      if (err) {
        res.status(401).json({ message: "You shall not pass!" });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};

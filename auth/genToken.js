const jwt = require("jsonwebtoken");
const secret = require("../config/secrets.js");

function genToken(user){
  const payload = {
    id: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1h'
  };
  const token = jwt.sign(payload, secret.jwtSecret, options);
  return token;
}

module.exports = genToken;
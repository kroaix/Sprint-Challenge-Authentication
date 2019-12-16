const router = require("express").Router();
const Users = require("./auth-model.js");
const bcrypt = require("bcryptjs");
const genToken = require("./genToken.js")

router.post("/register", async (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  try {
    saved = await Users.add(user);
    res.status(201).json(saved);
  } catch {
    res.status(500).json({ message: 'Something went wrong.' })
  }
  
});

router.post("/login", async (req, res) => {
  // implement login
  let { username, password } = req.body;

  try{
    user = await Users.findBy({ username }).first();
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      res.status(200).json({ message: `Welcome ${user.username}`, token: token });
    } else {
      res.status(401).json({ message: 'Invalid credentials.' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong.' })
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const {sign} = require('jsonwebtoken')

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" })
  }else{
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.json({ error: "Wrong Username And Password Combination" });
  
      //secretOrPrivateKey (importantsecret) can't be random text
      const accessToken = sign({username: user.username, id: user.id}, "importantsecret")
      res.json(accessToken);
    });
  }

});

module.exports = router;
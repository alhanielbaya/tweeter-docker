require('dotenv').config();

const express = require('express');
const router = express.Router();

const userModel = require('../Models/User');

router.get('/', (req, res) => {
  if (req.session && req.session.user) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

router.post('/login', (req, res) => {
  if (req.session && req.session.user) {
    return res.send('already logged in.');
  }

  if (!req.body.profile) {
    return res.sendSatus(400);
  }

  const profile = req.body.profile;

  userModel.findUserByEmail(profile.email).then(user => {
    if (!user) {
      userModel
        .registerUser(
          profile.email,
          profile.name,
          profile.imageUrl,
          profile.atSign
        )

        .then(() => {
          userModel.findUserByEmail(profile.email).then(user => {
            req.session.user = { uid: user.uid, ...user };
            return res.sendStatus(200);
          });
        });
    } else {
      req.session.user = { uid: user.uid, ...profile };
      res.sendStatus(200);
    }
  });
});

router.delete('/logout', (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

module.exports = router;

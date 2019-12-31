require('dotenv').config();

const express = require('express');
const router = express.Router();

const auth = require('../middlewares/session-auth');
const userModel = require('../Models/User');
const followModel = require('../Models/Follow');

router.get('/', auth, (req, res) => {
  res.json({ profile: req.session.user });
});

router.get('/getId', (req, res) => {
  userModel.findNextUserId().then(id => {
    res.json({ uid: id });
  });
});

router.get('/followedUsers', auth, (req, res) => {
  const uid = req.session.user.uid;

  followModel.queryFollowedUsers(uid).then(arr => {
    res.json(arr);
  });
});

router.post('/follow', auth, (req, res) => {
  const uid = req.session.user.uid;
  const uidToFollow = req.body.uidToFollow;

  followModel.followUser(uidToFollow, uid).then(() => res.sendStatus(200));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { validateRegister } = require('../validation/register');
const { validateLogin } = require('../validation/login');
const keys = require('../config/keys');
const User = require('../models/User');

router.post('/register', validateRegister, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ email: 'Email already exists' });

    user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', validateLogin, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ email: 'User not found' });

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) return res.status(400).json({ password: 'Incorrect password' });

    const payload = {
      id: user.id,
      username: user.username
    };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ success: true, token: "Bearer " + token });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
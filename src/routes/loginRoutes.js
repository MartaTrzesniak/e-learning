const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/login', (req, res) => {
  res.render('user/login', {
    title: 'Logowanie – Langsy',
    styles: ['user/login'],
    scripts: []
  });
});

module.exports = router;

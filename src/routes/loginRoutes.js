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

router.get('/register', (req, res) => {
  res.render('user/register', {
    title: 'Rejestracja – Langsy',
    styles: ['user/register'],
    scripts: []
  });
});

module.exports = router;

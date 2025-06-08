// src/routes/homeRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title:  'Strona główna',
    Langsy: 'Strona główna',
    styles: ['home'],
    scripts: ['home']
  });
});

module.exports = router;

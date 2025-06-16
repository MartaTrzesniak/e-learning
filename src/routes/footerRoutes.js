const express = require('express');
const router = express.Router();

router.get('/conditions', (req, res) => {
  res.render('footer/conditions', {
    title: 'Warunki uczestnictwa – Langsy',
    styles: ['footer/conditions'],
    scripts: []
  });
});

router.get('/help', (req, res) => {
  res.render('footer/help', {
    title: 'Pomoc – Langsy',
    styles: ['footer/help'],
    scripts: []
  });
});

router.get('/contact', (req, res) => {
  res.render('footer/contact', {
    title: 'Kontakt – Langsy',
    styles: ['footer/contact'],
    scripts: []
  });
});

module.exports = router;

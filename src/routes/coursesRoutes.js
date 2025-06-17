const express = require('express');
const router = express.Router();

router.get('/adults', (req, res) => {
  res.render('courses/adults/adults_list', {
    title: 'Kursy dla dorosłych – Langsy',
    styles: ['courses/adults/adults_list'], 
    scripts: [] 
  });
});

router.get('/adults/english_beginner', (req, res) => {
  res.render('courses/adults/english_beginner', {
    title: 'Angielski od podstaw – Langsy',
    styles: ['courses/adults/english_beginner'],
    scripts: []
  });
});

router.get('/adults/english_intermediate', (req, res) => {
  res.render('courses/adults/english_intermediate', {
    title: 'Angielski średniozaawansowany – Langsy',
    styles: ['courses/adults/english_intermediate'],
    scripts: []
  });
});

router.get('/adults/english_bussiness', (req, res) => {
  res.render('courses/adults/english_bussiness', {
    title: 'Business English – Langsy',
    styles: ['courses/adults/english_bussiness'],
    scripts: []
  });
});

router.get('/kids', (req, res) => {
  res.render('courses/kids/kids_list', {
    title: 'Kursy dla dzieci – Langsy',
    styles: ['courses/kids/kids_list'],
    scripts: []
  });
});

router.get('/kids/english_4-6', (req, res) => {
  res.render('courses/kids/english_4-6', {
    title: 'Angielski dla dzieci 4-6 lat – Langsy',
    styles: ['courses/kids/english_4-6'],
    scripts: []
  });
});

router.get('/kids/english_7-10', (req, res) => {
  res.render('courses/kids/english_7-10', {
    title: 'Angielski dla dzieci 7-10 lat – Langsy',
    styles: ['courses/kids/english_7-10'],
    scripts: []
  });
});

router.get('/kids/english_11-13', (req, res) => {
  res.render('courses/kids/english_11-13', {
    title: 'Angielski dla dzieci 11-13 lat – Langsy',
    styles: ['courses/kids/english_11-13'],
    scripts: []
  });
});

router.get('/sign_up', (req, res) => {
  res.render('courses/sign_up', {
    title: 'Zapisz się na kurs – Langsy',
    styles: ['courses/sign_up'],
    scripts: []
  });
});


module.exports = router;

const express = require('express');
const path = require('path');
const app = express();

// Middleware do parsowania danych z formularzy (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Konfiguracja silnika widoków EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Udostępnianie statycznych plików (css, js, img)
app.use(express.static(path.join(__dirname, 'src', 'static')));

// Trasa strony głównej – renderuje src/views/home.ejs
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Strona główna',
    Langsy: 'Strona główna',
    styles: ['home'],
    scripts: ['home']
  });
});

// Trasa strony logowania – renderuje src/views/user/login.ejs
app.get('/user/login', (req, res) => {
  res.render('user/login');
});

// Trasa strony rejestracji – renderuje src/views/user/register.ejs
app.get('/user/register', (req, res) => {
  res.render('user/register', {
    title: 'Rejestracja – Langsy',
    styles: ['user/register'],
    scripts: ['user/validate_register']
  });
});

// Obsługa przesłania formularza rejestracji (POST)
app.post('/user/register', (req, res) => {
  const { email, login, password, confirmPassword } = req.body;

  // Walidacja prostego sprawdzenia zgodności haseł
  if (password !== confirmPassword) {
    return res.render('user/register', {
      error: 'Podane hasła nie są takie same',
      title: 'Rejestracja – Langsy',
      styles: ['user/register'],
      scripts: ['user/validate_register'],
      email,
      login
    });
  }

  // Tutaj dodaj logikę zapisu użytkownika do bazy danych

  // Na koniec przekieruj do strony logowania (lub innej)
  res.redirect('/user/login');
});

// Uruchomienie serwera
app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000');
});

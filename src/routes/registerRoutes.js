const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // jeśli hasła mają być hashowane

// POST: Rejestracja użytkownika
router.post('/register', async (req, res) => {
  const { email, login, password, confirmPassword } = req.body;

  // Walidacja podstawowa
  if (!email || !login || !password || password !== confirmPassword) {
    return res.render('user/register', { error: 'Nieprawidłowe dane.' });
  }

  try {
    // Sprawdź czy login już istnieje
    db.get('SELECT * FROM users WHERE login = ?', [login], async (err, row) => {
      if (row) {
        return res.render('user/register', { error: 'Taki login już istnieje.' });
      }

      // Zaszyfruj hasło
      const hashedPassword = await bcrypt.hash(password, 10);

      // Zapisz użytkownika
      db.run(
        'INSERT INTO users (email, login, password) VALUES (?, ?, ?)',
        [email, login, hashedPassword],
        function (err) {
          if (err) {
            console.error(err);
            return res.render('user/register', { error: 'Błąd zapisu do bazy.' });
          }

          res.redirect('/user/login');
        }
      );
    });
  } catch (err) {
    console.error(err);
    res.render('user/register', { error: 'Coś poszło nie tak.' });
  }
});

module.exports = router;


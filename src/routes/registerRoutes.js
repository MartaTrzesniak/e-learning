const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 

router.post('/register', async (req, res) => {
  const { email, login, password, confirmPassword } = req.body;

  if (!email || !login || !password || password !== confirmPassword) {
    return res.render('user/register', { error: 'Nieprawidłowe dane.' });
  }

  try {
    db.get('SELECT * FROM users WHERE login = ?', [login], async (err, row) => {
      if (row) {
        return res.render('user/register', { error: 'Taki login już istnieje.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

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


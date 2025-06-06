const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'tajny_klucz',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Serwer działa na http://localhost:3000');
});

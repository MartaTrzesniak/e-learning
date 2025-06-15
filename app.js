const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'src/static')));

const loginRoutes = require('./src/routes/loginRoutes');
app.use('/user', loginRoutes);

app.get('/', (req, res) => {
  res.render('home', { title: 'Langsy' }); 
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Strona nie znaleziona' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});

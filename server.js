// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Express
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Connect to sequelize
const session = require('express-session');

// Starts Server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});
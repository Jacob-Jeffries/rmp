const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

const api = require('./controllers/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
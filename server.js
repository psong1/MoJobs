
// Importing routes from the controller folder
const routes = require('./controllers');

const path = require('path');

const express = require('express');

// const session = require('express-session');

const expbars = require('express-handlebars');

// const routes = require('./controllers');

const helpers = require('./utils/helpers.js');

// const sequelize = require('./config/config');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3000;

const hbs = expbars.create({helpers});

// const ses = {

//     secret: 'Job Board',

//     cookie: {
//         expires: 300 * 1000
//     },

//     resave: false,

//     saveUninitialzed: true,

//     store: new SequelizeStore({db:sequelize})
// };

// app.use(session(ses));

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.get('/data.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.sendFile(__dirname + 'seeds');
//   });

app.listen(PORT, () => {

    console.log(`App is listening on port ${PORT}.`);

    // sequelize.sync({force:true});

})
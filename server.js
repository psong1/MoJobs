// Fastify framework and instantiation (CommonJs)
const fastify = require('fastify')({
    logger: true
})



const path = require('path');

const express = require('express');

const session = require('express-session');

const expbars = require('express-handlebars');

const routes = require('');

const helpers = require('');

const sequelize = require('./config/config');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = expbars.create({helpers});

const ses = {

    secret: 'Job Board',

    cookie: {
        expires: 300 * 1000
    },

    resave: false,

    saveUninitialzed: true,

    store: new SequelizeStore({db:sequelize})
};

app.use(session(ses));

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

// app.listen(PORT, () => {

//     console.log(`App is listening on port ${PORT}.`);

//     sequelize.sync({force:false});

// })
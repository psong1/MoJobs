const sequelize = require('../config/config');

const seedUser = require('./userData');

const seedPost = require('./postData');

const seedSearch = require('./searchData');

const seedAll = async() => {

    await sequelize.sync({force:true});

    await seedUser();

    await seedSearch();

    await seedPost();

    process.exit(0);

};

seedAll();
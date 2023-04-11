const sequelize = require('../config/config');

const { User } = require('../models');

const userData = require('./userData.json');



const seedAll = async() => {

    await sequelize.sync({force:true});

   const users = await User.bulkCreate(userData, {
    returning: true,
   });

  }

    process.exit(0);

;

seedAll();
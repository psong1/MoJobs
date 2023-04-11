const sequelize = require('../config/config');

const { User, Posts } = require('../models');

const userData = require('./userData.json');
const jobsearch = require('./jobssearch.json');


const seedAll = async() => {

    await sequelize.sync({force:true});

   const users = await User.bulkCreate(userData, {
    returning: true,
   });

   for (const jobs of jobsearch) {
    await Posts.create({
        ...jobs,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    })
   }
  
    process.exit(0);
}
;

seedAll();
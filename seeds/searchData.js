const {Search} = require ('../models');

const searchdata = [];

const seedSearch = () => Search.bulkCreate(searchdata);

module.exports = seedSearch;
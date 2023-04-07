const {Posts} = require('../models');

const postdata = [];

const seedPost = () => Posts.bulkCreate(postdata);

module.exports = seedPost;
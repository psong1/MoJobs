const User = require('./User');
const Search = require('./Search');
const Posts = require('./Posts');

User.hasMany(Search, {

    foreignKey: 'user_id',

});

Search.hasMany(Posts, {
    foreignKey: 'search_id',
});

Posts.belongsTo(Search, {
    foreignKey: 'search_id',
})

Search.belongsTo(User, {

    foreignKey: 'user_id',

});


module.exports = {User, Posts, Search};
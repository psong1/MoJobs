const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/config');

// model for job posts; can be edited to best match api
class Posts extends Model {}

Posts.init(
    {
        id:{
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        location: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Posts'
    }
);

module.exports = Posts;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// model for job posts; can be edited to best match api
class Posts extends Model {}

Posts.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        salary: {
            type: DataTypes.STRING,
            allowNull:false
        },
        company: {
            type: DataTypes.STRING,
            allowNull:false
        },


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
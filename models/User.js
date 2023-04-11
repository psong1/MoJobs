const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

const sequelize = require("../config/config");

class User extends Model {
  checkPassword(loginpassword) {
    return bcrypt.compareSync(loginpassword, this.password);
  }
}


User.init (

  {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {isEmail:true,},
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                // isAlphanumeric: true,
                // isUppercase: true,
                // isLowercase: true
            }
        },
  },
    {
    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: "user",
  },
);

module.exports = User;

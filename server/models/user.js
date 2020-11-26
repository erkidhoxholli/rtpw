'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
const {  ERROR_PASSWORD_EMPTY, ERROR_PASSWORD_MIN_LENGTH} = require('../config/errors')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Recipe);
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: ERROR_PASSWORD_MIN_LENGTH,
        },
        notEmpty: {
          args: [true],
          msg: ERROR_PASSWORD_EMPTY,
        },
        notNull: {
          args: [true],
          msg: ERROR_PASSWORD_EMPTY,
        },
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['admin', 'user']]
      }
    },
  }, {
    hooks: {
      beforeCreate: async (user) =>
          (user.password = await bcrypt.hash(user.password, 10)),
    },
    sequelize,
    modelName: 'User',
  });

  return User;
};
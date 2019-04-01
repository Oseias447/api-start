'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        isLowercase: true,
        len: [2,15],
        notNull: {
          msg: "Por favor insira seu nome"
        }
      }
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: {
          msg: "Por favor insira um email"
        }
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,10],
        notNull: {
          msg: "Por favor insira uma senha"
        }
      }
    },  
  });

  User.associate = function(models) {
    User.hasOne(models.Profile, {
      foreignKey: 'user_id',
      as: 'profile',
    });
    User.belongsToMany(models.Role, {
      through: 'UserRole',
      as: 'roles',
      foreignKey: 'user_id'
    });
  };
  
  User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
  });
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    user_id: {
      type: DataTypes.INTEGER,
    }, 
    role_id: {
      type: DataTypes.INTEGER,
    } 
  }, {});
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};
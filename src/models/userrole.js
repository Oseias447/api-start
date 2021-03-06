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
  
  return UserRole;
};
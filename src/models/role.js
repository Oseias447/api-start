'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_name: {
      type: DataTypes.STRING,
    } 
  }, {});
  return Role;
};
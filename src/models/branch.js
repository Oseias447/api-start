'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    company_id: {
      type: DataTypes.INTEGER,
    }, 
    branch_name: {
      type: DataTypes.STRING,
    }, 
    branch_address: {
      type: DataTypes.STRING,
    }, 
    branch_city: {
      type: DataTypes.STRING,
    } 
  }, {});
 
  return Branch;
};
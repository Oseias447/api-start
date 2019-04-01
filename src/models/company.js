'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    company_name: {
      type: DataTypes.STRING,
    }, 
    company_address: {
      type: DataTypes.STRING,
    }, 
    company_city: {
      type: DataTypes.STRING,
    } 
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Branch, {
      foreignKey: 'company_id',
      as: 'branches'
    });
  };
  return Company;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    prov_code: {
      type: DataTypes.STRING,
    }, 
    city_name: {
      type: DataTypes.STRING,
    } 
  }, {});
  
  return City;
};
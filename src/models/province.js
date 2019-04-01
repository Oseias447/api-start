'use strict';
module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    prov_code: {
      type: DataTypes.STRING,
    }, 
    prov_name: {
      type: DataTypes.STRING,
    } 
  }, {});
  
  return Province;
};
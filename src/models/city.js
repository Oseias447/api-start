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
  City.associate = function(models) {
    City.belongsTo(models.Province, {
      foreignKey: 'prov_code',
      targetKey: 'prov_code'
    });
  };
  return City;
};
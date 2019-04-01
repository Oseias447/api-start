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
  Province.associate = function(models) {
    Province.hasMany(models.City, {
      foreignKey: 'prov_code',
      sourceKey: 'prov_code'
    });
  };
  return Province;
};
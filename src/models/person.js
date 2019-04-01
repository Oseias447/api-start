'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    fullname: {
      type: DataTypes.STRING,
    }, 
    birthdate: {
      type: DataTypes.DATE,
    }, 
    card_id: {
      type: DataTypes.INTEGER,
    } 
  }, {});
  
  return Person;
};
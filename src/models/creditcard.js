'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    cardname: {
      type: DataTypes.STRING,
    }, 
    cardnbr: {
      type: DataTypes.STRING,
    }, 
    expired_date: {
      type: DataTypes.STRING,
    } 
  }, {});
  
  return CreditCard;
};
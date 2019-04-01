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
  CreditCard.associate = function(models) {
    CreditCard.belongsTo(models.Person, {
      foreignKey: 'card_id',
    });
  };
  return CreditCard;
};
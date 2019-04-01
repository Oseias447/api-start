'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    user_id: {
      type: DataTypes.INTEGER,
    }, 
    name: {
      type: DataTypes.STRING,
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};
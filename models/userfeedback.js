'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFeedback = sequelize.define('UserFeedback', {
    tipe_saran: DataTypes.STRING,
    tgl: DataTypes.STRING,
    isiSaran: DataTypes.STRING,
    email: DataTypes.STRING,
    nohp: DataTypes.STRING,
  }, {});
  UserFeedback.associate = function(models) {
    // associations can be defined here
  };
  return UserFeedback;
};
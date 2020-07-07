'use strict';
module.exports = (sequelize, DataTypes) => {
  const VirtualAccount = sequelize.define('VirtualAccount', {
    name: DataTypes.STRING,
    no_va: DataTypes.STRING,
    status: DataTypes.STRING

  }, {});
  VirtualAccount.associate = function(models) {
    // associations can be defined here
  };
  return VirtualAccount;
};
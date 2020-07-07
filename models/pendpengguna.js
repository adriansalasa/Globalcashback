'use strict';
module.exports = (sequelize, DataTypes) => {
  const PendPengguna = sequelize.define('PendPengguna', {
    Caption: DataTypes.STRING
  }, {});
  PendPengguna.associate = function(models) {
    // associations can be defined here
  };
  return PendPengguna;
};
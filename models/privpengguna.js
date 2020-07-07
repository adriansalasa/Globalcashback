'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivPengguna = sequelize.define('PrivPengguna', {
    Caption: DataTypes.STRING
  }, {});
  PrivPengguna.associate = function(models) {
    // associations can be defined here
  };
  return PrivPengguna;
};
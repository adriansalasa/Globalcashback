'use strict';
module.exports = (sequelize, DataTypes) => {
  const OpsiPinjam = sequelize.define('OpsiPinjam', {
    title: DataTypes.STRING
  }, {});
  OpsiPinjam.associate = function(models) {
    // associations can be defined here
  };
  return OpsiPinjam;
};
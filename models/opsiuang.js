'use strict';
module.exports = (sequelize, DataTypes) => {
  const OpsiUang = sequelize.define('OpsiUang', {
    fund: DataTypes.INTEGER,
    interest: DataTypes.INTEGER,
    installment: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  OpsiUang.associate = function(models) {
    // associations can be defined here
  };
  return OpsiUang;
};
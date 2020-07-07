'use strict';
module.exports = (sequelize, DataTypes) => {
  const Regency = sequelize.define('Regency', {
    province_id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Regency.associate = function(models) {
    // associations can be defined here
  };
  return Regency;
};
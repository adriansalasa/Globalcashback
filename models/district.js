'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    regency_id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  District.associate = function(models) {
    // associations can be defined here
  };
  return District;
};
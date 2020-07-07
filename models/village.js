'use strict';
module.exports = (sequelize, DataTypes) => {
  const Village = sequelize.define('Village', {
    district_id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Village.associate = function(models) {
    // associations can be defined here
  };
  return Village;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bgyn = sequelize.define('Bgyn', {
    Bgtime: DataTypes.STRING,
    bgklik: DataTypes.STRING
  }, {});
  Bgyn.associate = function(models) {
    // associations can be defined here
  };
  return Bgyn;
};
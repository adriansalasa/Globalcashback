'use strict';
module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
    Caption: DataTypes.STRING
  }, {});
  About.associate = function(models) {
    // associations can be defined here
  };
  return About;
};
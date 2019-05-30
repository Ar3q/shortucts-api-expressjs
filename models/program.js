'use strict'
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {})
  Program.associate = function(models) {
    // associations can be defined here
    Program.hasMany(models.Shortcut)
  }
  return Program
}
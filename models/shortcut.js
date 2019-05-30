'use strict'
module.exports = (sequelize, DataTypes) => {
  const Shortcut = sequelize.define('Shortcut', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {})
  Shortcut.associate = function(models) {
    // associations can be defined here
    Shortcut.belongsTo(models.Program),
    Shortcut.hasMany(models.Sequence)
  }
  return Shortcut
}
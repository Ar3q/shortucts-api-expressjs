'use strict'
module.exports = (sequelize, DataTypes) => {
  const System = sequelize.define('System', {
    name: DataTypes.STRING
  }, {})
  System.associate = function(models) {
    // associations can be defined here
    System.belongsToMany(models.Sequence, {
      through: 'SequencesForSystems'
    })
  }
  return System
}
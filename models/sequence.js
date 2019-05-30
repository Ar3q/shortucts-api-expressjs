'use strict'
module.exports = (sequelize, DataTypes) => {
  const Sequence = sequelize.define('Sequence', {
    description: DataTypes.TEXT
  }, {})
  Sequence.associate = function(models) {
    // associations can be defined here
    Sequence.belongsToMany(models.Key, {
      through: 'KeySequence'
    })
    Sequence.belongsToMany(models.System, {
      through: 'SequencesForSystems'
    })
    Sequence.belongsTo(models.Shortcut)
  }
  return Sequence
}
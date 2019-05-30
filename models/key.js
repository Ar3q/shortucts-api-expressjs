'use strict'
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    name: DataTypes.STRING,
    longerName: DataTypes.STRING
  }, {})
  Key.associate = function(models) {
    // associations can be defined here
    Key.belongsToMany(models.Sequence, {
      through: 'KeySequence'
    })
  }
  return Key
}
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    startTime: DataTypes.DATE,
    prize: DataTypes.NUMBER
  }, {})

  Show.associate = (models) => {
    Show.hasOne(models.Win)
  }

  return Show
}

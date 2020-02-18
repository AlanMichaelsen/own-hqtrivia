module.exports = (sequelize, DataTypes) => {
  const Win = sequelize.define('Win', {
    amount: DataTypes.NUMBER
  }, {})

  Win.associate = (models) => {
    Win.belongsTo(models.User)
    Win.belongsTo(models.Show)
  }
  return Win
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        max: 16
      }
    },
    password: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lives: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    erasers: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    coins: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    }
  }, {})

  User.associate = (models) => {
    User.hasOne(models.Win)
  }
  return User
}

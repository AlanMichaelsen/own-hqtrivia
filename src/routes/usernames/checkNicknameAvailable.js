const { User } = require('../../models')

module.exports = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username
    }
  })

  if (user) return res.json({ error: 'That username is not available', errorCode: 101 })
  return res.json({})
}

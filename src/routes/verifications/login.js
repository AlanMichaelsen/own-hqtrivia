const { User } = require('../../models')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  const user = await User.findOne({
    where: {
      phone: req.params.phone,
      password: parseInt(req.body.code)
    }
  })

  if (!user) return res.status(400).json({ error: 'Username or password is invalid', errorCode: 455 })

  const token = jwt.sign({
    id: user.id
  }, process.env.JWT_SECRET)
  return res.json({
    auth: {
      userId: user.id,
      username: user.username,
      admin: false,
      tester: false,
      guest: false,
      avatarUrl: 'https://cdn.prod.hype.space/da/gold.png',
      loginToken: token,
      accessToken: token,
      authToken: token,
      canEnterReferral: false,
      wasReferralDenied: false
    }
  })
}

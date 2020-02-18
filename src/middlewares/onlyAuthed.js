const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ error: 'Auth not valid', errorCode: 105 })

  try {
    const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), process.env.JWT_SECRET)
    if (!token || !token.id) return res.status(401).json({ error: 'Auth not valid', errorCode: 105 })

    const user = await User.findByPk(token.id)
    if (!user) return res.status(401).json({ error: 'Auth not valid', errorCode: 105 })
    req.user = user

    return next()
  } catch (e) {
    return res.status(401).json({ error: 'Auth not valid', errorCode: 105 })
  }
}

const validate = require('../../validator')
const { Router } = require('express')
const router = Router()
const { body } = require('express-validator')

router.use('/available', validate([
  body('username').isLength({ max: 16 })
]), require('./checkNicknameAvailable'))

module.exports = router

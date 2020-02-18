const validate = require('../../validator')
const { Router } = require('express')
const { body, param } = require('express-validator')
const router = Router()

router.post('/', validate([
  body('phone').isLength({ max: 15 }),
  body('method').isIn(['sms', 'call'])
]), require('./startAuth'))

router.post('/:phone', validate([
  body('code').isLength({ max: 32 }),
  param('phone').isString()
]), require('./login'))

module.exports = router

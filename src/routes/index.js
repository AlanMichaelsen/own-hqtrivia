const { Router } = require('express')
const router = Router()

router.use('/users', require('./users'))
router.use('/verifications', require('./verifications'))
router.use('/usernames', require('./usernames'))
router.use('/friends', require('./friends'))
router.use('/shows', require('./shows'))

router.get('/opt-in', require('./optin'))

module.exports = router

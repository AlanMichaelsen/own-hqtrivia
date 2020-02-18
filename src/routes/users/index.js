const { Router } = require('express')
const onlyAuthed = require('../../middlewares/onlyAuthed')
const router = Router()

router.get('/me', onlyAuthed, require('./getMe'))

module.exports = router

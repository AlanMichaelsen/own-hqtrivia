const { Router } = require('express')
const router = Router()
const onlyAuthed = require('../../middlewares/onlyAuthed')

router.get('/schedule', onlyAuthed, require('./getSchedule'))

module.exports = router

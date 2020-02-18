const { Router } = require('express')
const router = Router()

router.get('/requests/incoming', (req, res) => {
  res.json({
    data: [],
    links: {
      next: null,
      prev: null,
      self: '/friends/requests/incoming'
    },
    count: 0
  })
})

router.get('/', (req, res) => {
  res.json({
    data: [],
    links: {
      next: null,
      prev: null,
      self: '/friends'
    },
    count: 0
  })
})

module.exports = router

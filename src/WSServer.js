const httpServer = require('./HTTPServer')
const { Server } = require('ws')
const wss = new Server({
  server: httpServer
})

module.exports = wss

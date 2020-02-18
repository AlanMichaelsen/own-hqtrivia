const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const httpServer = require('./HTTPServer')

class APIServer {
  constructor (port = '3001', host = '0.0.0.0') {
    this.port = port
    this.host = host
    this.app = express()

    this.app.disable('x-powered-by')
    httpServer.on('request', this.app)
  }

  useRoutes () {
    this.app.use('/api', require('./routes'))
    this.app.use((req, res) => {
      res.status(404).json({
        error: 'Method not found',
        errorCode: 404
      })
    })
  }

  useMiddlewares () {
    this.app.use(bodyParser.json())
    this.app.use(morgan('dev'))
  }

  listen () {
    this.useMiddlewares()
    this.useRoutes()
    this.app.listen(this.port, this.host)

    return this.app
  }
}

module.exports = APIServer

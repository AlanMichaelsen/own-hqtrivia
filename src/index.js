require('dotenv').config()
const APIServer = require('./APIServer')
const httpServer = require('./HTTPServer')
const DiscordBot = require('./DiscordBot')

const api = new APIServer()

api.useMiddlewares()
api.useRoutes()

DiscordBot.connect()
httpServer.listen(process.env.PORT, process.env.HOST)

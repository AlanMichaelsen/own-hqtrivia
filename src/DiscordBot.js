const { CommandClient } = require('eris')
const { Op } = require('sequelize')
const validatePhoneNumber = require('validate-phone-number-node-js')
const models = require('./models')
const client = new CommandClient(process.env.DISCORD_TOKEN, {}, {
  prefix: '!'
})

client.registerCommand('registerUser', async (msg, args) => {
  if (!args[0] || !args[1] || !args[2]) return 'usage: !registerUser number usrname passwd'
  if (!validatePhoneNumber.validate(parseInt(args[0]))) return 'Invalid phone!'
  if (args[1].length > 16) return 'Invalid username!'
  if (!parseInt(args[2])) return 'Invalid password (only digits)!'

  const user = await models.User.findOne({
    where: {
      [Op.or]: [
        {
          phone: args[0]
        },
        {
          username: args[1]
        }
      ]
    }
  })

  if (user) return 'User with provided phone/username already registred'
  await models.User.create({
    username: args[1],
    password: parseInt(args[2]),
    phone: args[0]
  })

  return 'User registred!'
})

client.registerCommand('createShow', async (msg, args) => {
  if (!args[0] || !args[1]) return 'usage: !registerUser prizeUSD date(All formats that js understands)'
  if (!parseInt(args[0])) return 'Invalid prize'
  if (!Date.parse(args.slice(1).join(' '))) return 'Invalid date'

  const show = await models.Show.create({
    startTime: new Date(args.slice(1).join(' ')),
    prize: args[0]
  })

  return `Show created!\nID: ${show.id}`
})

client.registerCommand('deleteShow', async (msg, args) => {
  if (!args[0]) return 'usage: !registerUser showID'
  if (!parseInt(args[0])) return 'Invalid showID'

  const show = await models.Show.findByPk(parseInt(args[0]))
  if (!show) return 'Show not found'

  await show.destroy()

  return 'Show deleted'
})

client.on('ready', () => {
  console.log('Discord Bot is Ready')
})

module.exports = client

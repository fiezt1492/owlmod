const qdb = require('quick.db')
module.exports = {
  name: 'deletedatabase',
  aliases: ['ddb'],
  category: '',
  utilisation: '',
  async execute (bot, message){

    bot.db.list()
    .then(async (keys) => {
      for await (const key of keys)
        bot.db.delete(key)
    })
    await qdb.delete(`${message.author.id}.${'steal'}`)
  }
} 
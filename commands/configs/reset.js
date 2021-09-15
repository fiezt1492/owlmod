const qdb = require('quick.db')
module.exports = {
  name: 'reset',
  aliases: ['rs'],
  category: '',
  utilisation: '',
  async execute (bot, message){

    // bot.db.list()
    const cooldown = ['steal','hunt','gift','fish']
    bot.db.delete(`${message.author.id}.player`)
    for await (const cd of cooldown) {
      qdb.delete(`${message.author.id}.${cd}`)
    }
  }
} 
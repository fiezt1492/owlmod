module.exports = {
    name: 'info',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}info <mention>',

    execute(bot, message, args) {
      const member = bot.getUserFromMention(args) || message.author;

      console.log(member)
    }
}
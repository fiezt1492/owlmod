// const cron = require("cron")
module.exports = async (bot, message) => {

  // if (message.author.username === 'Slimaeus') {
  //   bot.emit(`slimaeusMessage`, message)
  // }
  // if (message.author.bot) {
  //   bot.emit('botMessage', message)
  // }


  if (message.author.bot || message.channel.type === 'dm') return;

  const guildId = message.guild.id

  const mentionPrefix = message.content.match(new RegExp(`^<@!?${bot.user.id}>`));

  // console.log(mentionPrefix)
  // console.log(bot.getUserFromMention(message.content))
  // `${mentionPrefix[0]}`

  const mentionUser = bot.getUserFromMention([message.content])
  if (mentionUser)
    if (mentionUser.id === `${bot.user.id}`) return message.lineReplyNoMention({
      embed: {
        color: "RANDOM",
        author: { name: `${message.guild.name}'s settings` },
        description: `[Invibe me!](https://discord.com/api/oauth2/authorize?client_id=853623967180259369&permissions=8&scope=bot) | [Support Server](https://discord.link/owlvernyte) | [Vote me](https://top.gg/bot/853623967180259369)`,
        fields: [
          {
            name: `Prefix`,
            value: `${await bot.db.get(`${guildId}.prefix`) || process.env.PREFIX}`,
            inline: true,
          },
          {
            name: `Server ID`,
            value: `${guildId}`,
            inline: true,
          },
          {
            name: `Region`,
            value: `${message.guild.region}`,
            inline: true,
          },
        ],
        footer: { text: `Slimaeus#8878 || Fiezt#1492` },

      }
    })

  const prefix = mentionPrefix ? `${mentionPrefix[0]}` : await bot.db.get(`${guildId}.prefix`) || process.env.PREFIX

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));


  if (cmd)
    try {
      cmd.execute(bot, message, args)
    }
    catch (error) {
      console.log(error)
    }

};

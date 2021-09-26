const Discord = require("discord.js") 
const fs = require('fs')

require('discord-reply')
//const keepAlive = require('./server')
const bot = new Discord.Client({
  disableMentions : "everyone",
  shard : "auto",
  restTimeOffset : 0,
  intents: [Discord.Intents.FLAGS.GUILDS]
  })

bot.commands = new Discord.Collection()

bot.sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

bot.getUserFromMention = (args) => {
  var mention, id, matches;
  args.forEach((element, index) => {
    if (index > 0 && id) return
    matches = element.match(/^<@!?(\d+)>$/);
	  if (!matches) return;
	  return id = matches[1];
  })
	if (!id) return
	return bot.users.cache.get(id);
}

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    bot.on(file.split(".")[0], event.bind(null, bot));
}

bot.login(process.env.TOKEN)

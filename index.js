const Discord = require("discord.js") 
const fs = require('fs')

const bot = new Discord.Client({
  disableMentions : "everyone",
  shard : "auto",
  restTimeOffset : 0,
  intents: [Discord.Intents.FLAGS.GUILDS]
  })

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    bot.on(file.split(".")[0], event.bind(null, bot));
}

bot.login(process.env.TOKEN)

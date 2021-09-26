
module.exports = {
  discord: {
    botid: process.env.BOT_ID,
    prefix: process.env.PREFIX,
    token: process.env.TOKEN,
    activity: {
      ////servers(bot) {return `${process.env.PREFIX}help | serving ${bot.guilds.cache.size} servers`},
      name(bot){return [
        `${process.env.PREFIX}help | fun stuff`,
        `${process.env.PREFIX}help | I'm not finished yet`,
        `${process.env.PREFIX}help | serving ${bot.guilds.cache.size} servers`,
        `${process.env.PREFIX}help | @${bot.user.username} if you forget sth`,
      ]} ,
      stt: `${process.env.PREFIX}help | Pre-publish`,
      type: 3,
    },
    
    version: 0.0
  },

};

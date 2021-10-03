const { MessageEmbed, WebhookClient } = require('discord.js');

const webhook = new WebhookClient(process.env.WELCOMEID, process.env.WELCOMETOKEN);

module.exports = async (bot, member) => {
  const user = await bot.users.fetch(member.id)
  
  if (user.bot) return;
	
  const guild = await bot.guilds.cache.get('830110554604961824')

  const members = guild.memberCount

  const embed = new MessageEmbed()
	.setTitle('Welcome!')
  .setURL(`https://www.youtube.com/channel/UCEG5sgFKieaUuHsu5VG-kBg`)
  .setAuthor(user.tag, user.displayAvatarURL({dynamic:true}))
	.setColor('RANDOM')
  .setDescription(`Thanks for joining [Owlvernyte](https://www.facebook.com/owlvernyte)!`)
  .addField(`Main Channels`,`<#830113042858901554> - rules.\n<#830112358520979457> - unlock another channels.\n<#830110555221262348> - general chatting.`)
  .addField(`vAc - voice AND chat`,`<#850356965649547294> - join this to create your own voice and chat channel.
`)
  .addField(`Owlvernyte Bot`,`<#877763570065109032> - official annoucement of devs.\n<#877763480978063430> - report bugs or other issues.\n<#887342167054491659> - new to Owlvernyte? ask other player here.`)
  .setImage(`https://cdn.discordapp.com/attachments/852888201391374376/857857987099492382/ezgif-2-6b2302497da6.gif`)
  .setFooter(`If there is any problem, please contact to our staffs!`,`https://cdn.discordapp.com/attachments/852888201391374376/867022478017429514/output-onlinegiftools_1.gif`)
  .setTimestamp()

  webhook.send({
    content: `**[${members}]** ${user}`,
    embeds: [embed],
  });
  
}

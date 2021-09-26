const { MessageEmbed, WebhookClient } = require('discord.js');

const webhook = new WebhookClient(process.env.WELCOMEID, process.env.WELCOMETOKEN);
//const webhook = new WebhookClient({ url: process.env.webhookurl });
//https://stackoverflow.com/questions/64618047/guild-member-add-does-not-work-discordjs
module.exports = async (bot, member) => {
  const user = await bot.users.fetch(member.id)
  if (user.bot) return;
	
  const guild = await bot.guilds.cache.get('830110554604961824')
  // const role = 
  const members = guild.memberCount

  const embed = new MessageEmbed()
	.setTitle('Welcome!')
  .setURL(`https://www.youtube.com/channel/UCEG5sgFKieaUuHsu5VG-kBg`)
  .setAuthor(user.tag, user.displayAvatarURL({dynamic:true}))
	.setColor('RANDOM')
  .setDescription(`Thanks for joining [Owlvernyte](https://www.facebook.com/owlvernyte)!`)
  .addField(`Main Channels`,`<#830113042858901554> - rules.\n<#830112358520979457> - unlock another channels.\n<#830110555221262348> - general chatting.`)
  .addField(`vAc - voice AND chat`,`<#850610225122770965> - guide.\n<#850356965649547294> - join this to create your own voice and chat channel.
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
/**
 * webhookClient.send({
	content: 'Webhook test',
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});
 * 
 * 
client.on('guildMemberAdd', member => {
client.on('message', 

//https://discordjs.guide/popular-topics/webhooks.html#sending-messages
var role = member.guild.roles.find('name', 'Beginner role name'); // Variable to get channel ID
member.addRole(role); // Adds the default role to members

member.guild.channels.get('JOIN/LEAVE Channel ID').send({embed: {
color: 3447003,
title: "**SERVER NAME** Welcome Bot!",
url: "WEBSITE URL",
description: "Welcome *" + member + "* to the **Server name** discord server!",
fields: [{
    name: "Information",
    value: "Some info on the server"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© NAME OF SERVER 2018 - 2019"
}
}}); });
*/

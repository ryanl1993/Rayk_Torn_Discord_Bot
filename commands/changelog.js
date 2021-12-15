const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor(0x00A2E8)
      .setTitle("Changelog v1.2.1")
      .addField("Changes", "- Added changelog command for people interested in knowing whats new")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
 }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeet"],
  permLevel: 2
};

exports.help = {
  name: 'changelog',
  description: 'Change log',
  usage: 'changelog'
};

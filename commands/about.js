const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .setTitle('**Rayk Bot**')
  .setDescription('**About the Bot**\nRayk was an idea which was put together by Ryanthehoof[586420] and Helium[135372] to assist with the Factions discord server as well as with Torn Commands')
  .addField('**Developers**', '\n**Ryanthehoof**\n[Torn Profile](https://www.torn.com/586420)\n\n**Helium**\n[Torn Profile](https://www.torn.com/135372)')
  .addField('**Contributers**', '\n**Eddycro**\n[Torn Profile](https://www.torn.com/profiles.php?XID=2310495)\n\n**Tiksan**\n[Torn Profile](https://www.torn.com/profiles.php?XID=2383326)')
  .setFooter(`© Rayk by Ryanthehoof and Helium`);
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
  name: 'about',
  description: 'About the bot.',
  usage: 'about'
};
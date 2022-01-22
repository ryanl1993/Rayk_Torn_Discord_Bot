const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");
    args = args.join(" ");
    
    
    message.reply("Thanks for submitting a bug!");
    const content = `**Bug Report Filed by:**\n${message.author.username}#${message.author.discriminator}\n(${message.author.id})\n~~--------------------------------~~\n**Bug Report Content**\n${args}\n~~--------------------------------~~\nOn the server: ${message.guild.name}**\nServer ID: **${message.guild.id}\n*End of Report*`;
    client.channels.cache.get(customisation.bugchannelid).send(content)

  

    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>'
};
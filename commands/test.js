const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
     const { body } = await superagent
    .get("https://www.boredapi.com/api/activity");
     console.log(body['activity'])
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(body.activity)
    .setFooter(`© Rayk by Ryanthehoof and Helium`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'test',
    description: 'test',
    usage: 'test'
  };
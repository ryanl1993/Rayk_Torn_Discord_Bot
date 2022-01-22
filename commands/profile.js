const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Dog")
    .setImage(body.url) 
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
    name: 'profile',
    description: 'returns a users torn profile',
    usage: 'profile'
  };
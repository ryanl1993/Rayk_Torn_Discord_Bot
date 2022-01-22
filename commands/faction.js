const Discord = require('discord.js');
const fetch = require('node-fetch');

async function callApi(message, factionID) {
  factionID = factionID ? parseInt(factionID) : "";
  const response = await fetch(`https://api.torn.com/faction/${factionID}?selections=basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  /*const leaderresponse = await fetch('https://api.torn.com/user/$(data.leader)?selections=basic&key=P28UPlBENKWKrXvh');
  const leaderdata = await response.json();*/
  console.log(data)  
  
  const embed = new Discord.MessageEmbed()
    .setColor('#EFFF00')
    .setTitle('Faction Info')
    .addFields(
      { name: 'Name:', value: data.name, inline: true},
      { name: 'Tag', value: data.tag, inline: true},
      { name: 'Leader', value: /*leader*/data.name},
      { name: 'Best Chain', value: Number(data.best_chain).toLocaleString()},
      { name: 'Faction Age', value: Number(data.age).toLocaleString()},
      { name: 'Total Respect', value: Number(data.respect).toLocaleString()},
  )
  message.channel.send(embed);
}  

exports.run = (client, message) => {
  if(!message.content.startsWith("!")) return;
  const [command, ...args] = message.content.slice(1).trim().split(/\s+/);

  switch(command) {
  case "faction":
    callApi(message, ...args);
    break;

  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'faction',
  description: 'Returns the Faction Info',
  usage: 'faction'
};
const Discord = require('discord.js');
const fetch = require('node-fetch');

async function callApi(message, userID) {
  userID = userID ? parseInt(userID) : "";
  const response = await fetch(`https://api.torn.com/user/${userID}?selections=crimes,basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)  
  
  const embed = new Discord.MessageEmbed()
    .setColor('#EFFF00')
    .setTitle('Crime Info')
    .addFields(
      { name: 'Name:', value: data.name, inline: true},
      { name: 'Level', value: data.level},
      { name: 'Selling Illegal Products', value: Number(data.criminalrecord.selling_illegal_products).toLocaleString(), inline: true},
      { name: 'Theft', value: Number(data.criminalrecord.theft).toLocaleString(), inline: true},
      { name: 'Grand Theft Auto', value: Number(data.criminalrecord.auto_theft).toLocaleString(), inline: true},
      { name: 'Drug Dealing', value: Number(data.criminalrecord.drug_deals).toLocaleString(), inline: true},
      { name: 'Computer Crimes', value: Number(data.criminalrecord.computer_crimes).toLocaleString(), inline: true},
      { name: 'Murder', value: Number(data.criminalrecord.murder).toLocaleString(), inline: true},
      { name: 'Fraud', value: Number(data.criminalrecord.fraud_crimes).toLocaleString(), inline: true},
      { name: 'Other', value: Number(data.criminalrecord.other).toLocaleString(), inline: true},
      { name: '**Total**', value: Number(data.criminalrecord.total).toLocaleString(), inline: true},
  )
  message.channel.send(embed);
}  

exports.run = (client, message) => {
  if(!message.content.startsWith("!")) return;
  const [command, ...args] = message.content.slice(1).trim().split(/\s+/);

  switch(command) {
  case "crimes":
    callApi(message, ...args);
    break;

  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["crime"],
  permLevel: 0
};

exports.help = {
  name: 'crimes',
  description: 'Returns users crime Info',
  usage: 'crime <userid>'
};
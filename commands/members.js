const Discord = require('discord.js');
const fetch = require('node-fetch');

async function callApi(message, factionID) {
  factionID = factionID ? parseInt(factionID) : "";
  const response = await fetch(`https://api.torn.com/faction/${factionID}?selections=basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)

let membersArray = Object.values(data.members);
let memberIDsArray = Object.keys(data.members);
let membersString = '', maxMembersPerEmbed = 20;

for(let i = 0; i < membersArray.length; i++) {
    if((i+1) % maxMembersPerEmbed != 1) {
        membersString += '\n';
    }
    membersString += `**[${membersArray[i].name}](https://www.torn.com/profiles.php?XID=${memberIDsArray[i]} 'Go to profile')** (${membersArray[i].position})\n(${membersArray[i].status.state})`;

    if((i+1) % maxMembersPerEmbed == 0 || i+1 == membersArray.length) { // Every 'maxMembersPerEmbed' or last send a message
        let membersEmbed;
        if(membersArray.length < maxMembersPerEmbed) {
            membersEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`Faction members (${membersArray.length})`)
                .setDescription(membersString);
        } else {
            membersEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`Faction members (${i+1}/${membersArray.length})`)
                .setDescription(membersString);
        }
        
        message.channel.send(membersEmbed);
        membersString = '';
    }
  }
}

exports.run = (client, message) => {
  if(!message.content.startsWith("!")) return;
  const [command, ...args] = message.content.slice(1).trim().split(/\s+/);

  switch(command) {
  case "members":
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
  name: 'members',
  description: 'Returns a factions members list',
  usage: 'members'
};
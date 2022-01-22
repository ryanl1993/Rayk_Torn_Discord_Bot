const Discord = require('discord.js');
const fetch = require('node-fetch');

async function callApi(message, factionID) {
  factionID = factionID ? parseInt(factionID) : "";
  const response = await fetch(`https://api.torn.com/faction/${factionID}?selections=basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)

let membersString = '', maxMembersPerEmbed = 20;
let memberIDsArray = Object.keys(data.members);

let members = Object.values(data.members).map((member, index) => {
    return {ID: memberIDsArray[index], ...member}
});

let membersArray = members.filter((member, index) => {
    if(member['last_action']['timestamp'] < (+new Date()/1000 - 86400)) return member;
}); 
membersArray.sort((a, b) => b['last_action']['timestamp'] - a['last_action']['timestamp']); // a - b = ACS order, b - a = DESC order

for(let i = 0; i < membersArray.length; i++) {
    if((i+1) % maxMembersPerEmbed != 1) {
        membersString += '\n';
    }
    membersString += `**[${membersArray[i].name}](https://www.torn.com/profiles.php?XID=${membersArray[i].ID} 'Go to profile')** (${membersArray[i].last_action.relative})`;

    if((i+1) % maxMembersPerEmbed == 0 || i+1 == membersArray.length) { // Every 'maxMembersPerEmbed' or last send a message
        let membersEmbed;
        if(membersArray.length < maxMembersPerEmbed) {
            membersEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`Inactive Faction members (${membersArray.length})`)
                .setDescription(membersString);
        } else {
            membersEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`Inactive Faction members (${i+1}/${membersArray.length})`)
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
  case "inactive":
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
  name: 'inactive',
  description: 'Returns a factions members list',
  usage: 'inactive'
};
const Discord = require('discord.js');
const fetch = require('node-fetch');

async function callApi(message, factionID) {
  factionID = factionID ? parseInt(factionID) : "";
  const response = await fetch(`https://api.torn.com/faction/${factionID}?selections=basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)


/*let memberIDsArray = Object.keys(data.members);
let membersString = '', maxMembersPerEmbed = 20;
let membersArray = Object.values(data.members).filter((member, index) => {
    if(member['status']['state'] == 'Traveling') { 
        memberIDsArray.splice(index, 1);
        return member;
    }
}); */
let membersString = '', maxMembersPerEmbed = 15;
let memberIDsArray = Object.keys(data.members);

let members = Object.values(data.members).map((member, index) => {
    return {ID: memberIDsArray[index], ...member}
});

let membersArray = members.filter((member, index) => {
    if(member['status']['state'] == 'Traveling') return member;
    if(member['status']['state'] == 'Abroad') return member;

}); 

for(let i = 0; i < membersArray.length; i++) {
    if((i+1) % maxMembersPerEmbed != 1) {
        membersString += '\n';
    }
    membersString += `**[${membersArray[i].name}](https://www.torn.com/profiles.php?XID=${membersArray[i].ID} 'Go to profile')**\n${membersArray[i].status.description}\n`;

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
  case "fly":
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
  name: 'fly',
  description: 'Returns a factions members list',
  usage: 'fly'
};
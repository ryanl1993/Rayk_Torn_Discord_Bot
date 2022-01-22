const Discord = require('discord.js');
const fetch = require('node-fetch');
/*const { getRandomApi } = require('../apiRandom.js');

console.log(getRandomApi());
*/
async function callApi(message, userID) {
  userID = userID ? parseInt(userID) : "";
  const response = await fetch(`https://api.torn.com/user/${userID}?selections=profile&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)
    
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Torn User Profile')
    .addFields(
      { name: 'Name:', value: data.name + data.player_id},
      { name: 'Age', value: data.age},
      { name: 'Sex', value: data.gender},
      { name: 'Rank', value: data.rank},
  )
    .addField('Faction', data.faction.faction_name, true)
    .addField('Days In Faction', Number(data.faction.days_in_faction).toLocaleString(), true)
    .addField('Position', data.faction.position, true)
    .addField('Company', data.job.company_name + data.job.position, false)
    .addField('Links', `[Profile](https://wwww.torn.com/${data.player_id}) | [Send Cash](https://www.torn.com/sendcash.php#/XID=${data.player_id}) | [Start Trade](https://www.torn.com/trade.php#step=start&userID=${data.player_id}) | [Baazar](https://www.torn.com/bazaar.php?userId=${data.player_id})`)
    message.channel.send(embed);
}  

exports.run = (client, message) => {
  if(!message.content.startsWith("!")) return;
  const [command, ...args] = message.content.slice(1).trim().split(/\s+/);

  switch(command) {
  case "user":
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
  name: 'user',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'user'
};
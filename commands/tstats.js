const discord = require('discord.js');
const fetch = require('node-fetch');
const paginationEmbed = require('discord.js-pagination');

   
exports.run = async function callApi(client, message, userID) {
  userID = userID ? parseInt(userID) : "";
  const response = await fetch(`https://api.torn.com/user/${userID}?selections=personalstats,basic&key=P28UPlBENKWKrXvh`);
  const data = await response.json();
  console.log(data)  
  
    const page1 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('$(data.name) Basic Stats')
    .addFields(
      { name: 'Name:', value: data.name, inline: true},
      { name: 'Level', value: data.level},
      { name: 'Networth', value: Number(data.personalstats.networth).toLocaleString(), inline: true},
      { name: 'Active Streak', value: Number(data.personalstats.activestreak).toLocaleString(), inline: false},
      { name: 'Best Active Streak', value: Number(data.personalstats.bestactivestreak).toLocaleString(), inline: true},      
      { name: 'Trades', value: Number(data.personalstats.trades).toLocaleString(), inline: true},
      { name: 'Awards', value: Number(data.personalstats.awards).toLocaleString(), inline: true},
    )

    const page2 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Attack Stats')
    .addFields(
      { name: 'Attacks Won', value: Number(data.personalstats.attackswon).toLocaleString(), inline: true},
      { name: 'Attacks Lost', value: Number(data.personalstats.attackslost).toLocaleString(), inline: true},
      { name: 'Attacks Drawn', value: Number(data.personalstats.attacksdraw).toLocaleString(), inline: true},
      { name: 'Defends Won', value: Number(data.personalstats.defendswon).toLocaleString(), inline: true}, 
      { name: 'Defends Lost', value: Number(data.personalstats.defendslost).toLocaleString(), inline: true},
      { name: 'Best Killstreak', value: Number(data.personalstats.bestkillstreak).toLocaleString(), inline: false},
      { name: 'Current Killstreak', value: Number(data.personalstats.killstreak).toLocaleString(), inline: true},     
    )

        const page3 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Weapon Stats')
    .addFields(
      { name: 'Rounds Fired', value: Number(data.personalstats.roundsfired).toLocaleString(), inline: true},
      { name: 'Special Ammo Used', value: Number(data.personalstats.specialammoused).toLocaleString(), inline: true},
      { name: 'Hollow Ammo Used', value: Number(data.personalstats.hollowammoused).toLocaleString(), inline: true},
      { name: 'Tracer Ammo Used', value: Number(data.personalstats.tracerammoused).toLocaleString(), inline: true}, 
      { name: 'Piercing Ammo Used', value: Number(data.personalstats.piercingammoused).toLocaleString(), inline: true},
      { name: 'Incendiary Ammo Used', value: Number(data.personalstats.incendiaryammoused).toLocaleString(), inline: false},
      { name: 'Weapons Bought', value: Number(data.personalstats.weaponsbought).toLocaleString(), inline: true},     
    )

    const page4 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Misc Stats')
    .addFields(
      { name: 'Revives Done', value: Number(data.personalstats.revives).toLocaleString(), inline: true},
      { name: 'City Finds', value: Number(data.personalstats.cityfinds).toLocaleString(), inline: true},
      { name: 'Revives Received', value: Number(data.personalstats.revivesreceived).toLocaleString(), inline: true},
      { name: 'Med Items Used', value: Number(data.personalstats.medicalitemsused).toLocaleString(), inline: true}, 
      { name: 'Refills Used', value: Number(data.personalstats.refills).toLocaleString(), inline: true},
      { name: 'Times Jailed', value: Number(data.personalstats.jailed).toLocaleString(), inline: false},
      { name: 'Times Hospitalised', value: Number(data.personalstats.hospital).toLocaleString(), inline: true},     
    )
    const pages = [
        page1,
        page2,
        page3,
        page4
 
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '1000000'

    paginationEmbed(message, pages, emoji, timeout, userID);

exports.run = (client, message, userID) => {
  if(!message.content.startsWith("!")) return;
  const [command, ...args] = message.content.slice(1).trim().split(/\s+/);

  switch(command) {
  case "tstats":
    callApi(message, ...args);
    break;

    }
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tstats',
  description: 'Returns users stats Info',
  usage: 'tstats <userid>'
};
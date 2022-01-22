const Discord = require('discord.js');
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
    
        const body = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`,
          ).then(res => res.json().catch(() => {}));
        
        if (!body) return message.channel.sendmessage.channel.send({embed: {
                      color: 'RANDOM',
                      title: "❌ Error Page Not Found."
                  }})
          if (body.title && body.title === "Not found.") return message.channel.send({embed: {
                      color: 'RANDOM',
                      title: "❌ Error Page Not Found."
                  }});
      
        const embed = new Discord.MessageEmbed()
            .setTitle(`🌐 ${body.title} `)
        .addField("More Info: ",`**[Click Here!](${body.content_urls.desktop.page})**`, true)
            .setDescription(`** ${body.extract}**`)
            .setColor('RANDOM')
        .setTimestamp()
          .setFooter(`© Rayk by Ryanthehoof and Helium`)
        
         if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
        message.channel.send(embed);

    }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
  name: 'wiki',
  description: 'Wiki Query',
  usage: 'wiki <query>'
};

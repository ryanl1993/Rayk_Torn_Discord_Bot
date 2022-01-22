const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    const querystring = require('querystring');

    if (!args.length) {
        return message.channel.send('You need to supply a search term!');
        }

        const query = args;
        console.log(query);

        const { list } = await fetch(`https://api.torn.com/user/${query}?selections=profile&key=P28UPlBENKWKrXvh`).then(response => response.json());

        console.log(list);

        if (undefined !== list && list.length) {
            message.channel.send(list);
        } else {
            return message.channel.send(`No Results found for ** ${args.join(' ')}**.`);
        }

    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'torn',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'torn'
};
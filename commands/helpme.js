const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Admin Commands')
    .addField('**Commands**\n','\n**addrole** `<pfx>addrole @user role`\nAdd User to mentioned role\n\n**ban** `<pfx>ban @user`\nBans the mentioned member\n\n**blacklist** `<pfx>blacklist`\nAdds the mentioned ID to the blacklist file\n\n**bug** `<pfx>bug bug description`\nSends a bug report to the developers\n\n**changelog** `<pfx>changelog`\nShows the latest changelog recorded\n\n**clearwarns** `<pfx>clearwarns @user`\nClears any warnings which has been stored for the mentioned user.\n\n**kick** `<pfx>kick @user`\nKicks the mentioned user from the server\n\n**leave** `<pfx>leave`\nMakes the bot leave the server\n\n**lockdown** `<pfx>lockdown`\nLockdowns a channel where the message was sent\n\n**mute** `<pfx>mute @user`\nMutes the mentioned member\n\n**purge** `<pfx> all|user|bot amount`\nBulk deletes messages from either bot or user or all messages.', true)
    .setFooter(`© Rayk by Ryanthehoof and Helium`);

    const page2 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Fun Commands')
    .addField('**Commands**\n','\n**8ball** `<pfx>8ball question`\nAsk the 8ball a question to receive an answer\n\n**advice** `<pfx>advice`\nReturns a bit of advice\n\n**coinflip** `<pfx>coinflip`\nFlip the coin to get heads or tails!\n\n**dadjoke** `<pfx>dadjoke`\n Returns a dadjoke\n\n**coins** `<pfx>coins`\nUnder Construction\n\n**colorsearch** `<pfx>colorsearch (hexcode)`\nReturns the color of the hex code provided\n\n**copypasta** `<pfx>copypasta`\nReturns a random piece of "CopyPasta"\n\n**funnynsfw** `<pfx>funnynsfw`\nReturns a funny NSFW Image\n\n**kiss** `<pfx>kiss @user`\nKisses the mentioned User\n\n**meme** `<pfx>meme`\nReturns a Meme from Reddit\n\n**poll** `<pfx>poll question`\nBegins a poll with the choices yes or no\n\n**punch** `<pfx>punch @user`\nPunches the mentioned user\n\n', true)

    const page3 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Info Commands')
    .addField('**Commands**\n','\n**about** `<pfx>about`\nShows a brief description of the Rayk Bot\n\n**botstatus** `<pfx>botstatus`\nChange the bots status(Still Under Construction\n\n**eval** `<pfx>eval string`\nEvaluates the string of code provided\n\n**exec** `<pfx>exec string`\nExecutes the string of code provided\n\n**invite** `<pfx>invite`\nReturns the Invite link for the Bot\n\n**map** `<pfx>map`\nUnder Construction\n\n**profile**', true)

    const page4 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('Other Commands')
    .addField('**Commands**\n','\n**avatar** `<pfx>avatar @user`\nShows the mentioned users avatar\n\n**embed** `<pfx>embed Title Text`\nEmbed a piece of text submitted by the user\n\n**eval** `<pfx>eval string`\nEvaluates the string of code provided\n\n**ping** `<pfx>ping`\nReturns the latency\n\n', true)

    const page5 = new discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle('TORN Commands')
    .addField('**Commands**\n','\n**user** `<pfx>user <tornid>`\nReturns the searched users Torn Profile\n\n**faction** `<pfx>faction <factionid>`\nReturns search Factions Details\n\n', true)

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'helpme',
    description: 'Shows the Help Command',
    usage: 'helpme'
  };
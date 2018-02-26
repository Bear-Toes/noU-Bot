const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("message", message => {
    if (bot.user.id === message.author.id) {
        return;
    }
    if (message.content.includes("no u ")||message.content.includes(" no u")||message.content==="no u") {
        message.channel.send("no u");
    }
});

bot.on("guildMemberAdd", member =>{
    const welcomechannel = member.guild.channels.find('name', 'general')

    var embed = new Discord.RichEmbed()
    .setColor('random')
    .setDescription(member.user + ' has biggay!')
    return welcomechannel.send(embed);
});

bot.login(process.env.BOT_TOKEN);

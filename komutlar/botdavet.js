exports.run = function(client, message, args) {
        message.channel.send("Botumuzu sunucuna çağır! **https://discordapp.com/oauth2/authorize?client_id=599998815591989277&scope=bot&permissions=1341644225**");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'botçağır',
  description: '',
  usage: 'botçağır'
};
//aspa















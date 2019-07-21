
const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`ÖNEMLİ KANALLAR`, 'category');
        message.guild.createChannel(`📢-ᴅᴜʏᴜʀᴜʟᴀʀ`);
            message.guild.createChannel(`Sohbet Kanalları`, 'category');
          message.guild.createChannel(`⚡-ᴏʏʟᴀᴍᴀ`);
          message.guild.createChannel(`🚓-ᴏᴛᴏʀᴏʟ`);
        message.guild.createChannel(`💭-ꜱᴏʜʙᴇᴛ`);
          message.guild.createChannel(`🤖-ʙᴏᴛ-ᴋᴏᴍᴜᴛ`);
            message.guild.createChannel(`📷-ɢᴀʟᴇʀɪ-ᴄʜᴀᴛ`);
              message.guild.createChannel(`💎-ɴꜱꜰᴡ`);
              message.guild.createChannel(`-gelen-giden`);
              message.guild.createChannel(`-ceza-takip-listesi`);
              message.guild.createChannel(`-kayıt-listesi`);
              message.guild.createChannel(`-yasak-listesi`);
              message.guild.createChannel(`mod-log`);
              message.guild.createChannel(`💻-ᴅᴀᴠᴇᴛʟᴇʀ`);
              message.guild.createChannel(`🤝-ᴘᴀʀᴛɴᴇʀ`);
              message.guild.createChannel(`🎫-ᴅᴇꜱᴛᴇᴋ`);
              message.guild.createChannel(`📜-ᴋᴜʀᴀʟʟᴀʀ`);
          message.guild.createChannel(`Sohbet`, 'category')
          message.guild.createChannel(`LOG`, 'category')
        message.guild.createChannel(`● ѕoнвeт ①`, 'voice');
        message.guild.createChannel(`Müzik`, 'category')
          message.guild.createChannel(` ● ѕoнвeт ②`, 'voice');
        message.guild.createChannel(` ● ѕoнвeт ③`, 'voice');
        message.guild.createChannel(`● ѕoнвeт ④`, 'voice');
        message.guild.createChannel(` ● ѕoнвeт ⑤`, 'voice');
        message.guild.createChannel(`  ♫ Müzik Odası ①`, 'voice');
        message.guild.createChannel(`  ♫ Müzik Odası ② `, 'voice');
          message.guild.createChannel(`╠ ● βεκlεʍε øδα$ı`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'g!kurulum'
};
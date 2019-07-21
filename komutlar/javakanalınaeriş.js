const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "602552214208118824"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send("**Bu Role Zaten Sahipsin! :no_entry_sign:**")
  message.member.addRole(role);
  message.channel.send(`**JavaScript rolü başarıyla verildi :white_check_mark: `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};
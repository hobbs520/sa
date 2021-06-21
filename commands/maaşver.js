exports.execute = async (client, m, args) => {
  
if(!args[0]) return m.channel.send(`Bir kredi miktarı gir`)
if(m.mentions.roles.first()) {
m.guild.members.cache.filter(a => a._roles.includes(m.mentions.roles.first().id)).map(a => {
	client.eco.addMoney(a.user.id, Number(args[0]));
})
m.channel.send(`» Başarıyla roldeki kişilere **${args[0]}** kredi verildi`)
}else if(args[1] === "@everyone") {
m.guild.members.cache.map(a => {
	client.eco.addMoney(a.user.id, Number(args[0]));
})
m.channel.send(`» Başarıyla roldeki kişilere **${args[0]}** kredi verildi`)
}else return m.channel.send("Bir adet rol etiketle")
}

exports.help = {
    name: "rolemoneyver",
    aliases: [],
    usage: `setmoney @user <amount>`
}

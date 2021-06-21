const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("geçerli bir kullanıcı etiketlemelisin");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Geçerli bir sayı girmelisin");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para eklendi`)
        .addField(`Eklenen Kullanıcı`, `<@${data.user}>`)
        .addField(`Eklenen Miktar`, `${data.amount} 💸`)
        .addField(`Toplam Para`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "ekle",
    aliases: ["paraekle"],
    usage: `paraaekle @kullanıcı <miktar>`
}

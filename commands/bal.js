const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Hesabın`)
        .addField(`Kullanıcı`, `<@${userBalance.user}>`)
        .addField(`:dollar: Nakit Paran :`, `${userBalance.amount} 💸`)
        .addField(`:credit_card: Banka Hesabın :`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bal",
    aliases: ["para", "bakiye",],
    usage: `bal`
}

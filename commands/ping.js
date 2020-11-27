module.exports.run = async (bot, message, args) => {

message.reply('Calculating ping...').then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp

    resultMessage.edit(`:ping_pong:**Bot latency:** \`${ping}\` **ms , API Latency:** \`${bot.ws.ping}\` **ms**`)
  
})
}
module.exports.config = {
    name: "ping",
    description: "Shows the ping of bot",
    usage: "as!ping",
    accessableby: "Members",
    aliases: ['latency']
}

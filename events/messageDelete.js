exports.run = (client, messageDelete) => {
  messageDelete.channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
};
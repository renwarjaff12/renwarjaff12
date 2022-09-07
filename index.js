client.api.channels[message.channel.id].messages.post({
  data: {
    content: "this is my message content!",
    message_reference: {
      message_id: message.id,
      channel_id: message.channel.id,
      guild_id: message.guild.id
    }
  }
})
/**
 * No need to define it
 * */
module.exports = {
  name: 'reply',
  category: 'Test',
  run: (client, message, args) => {
    message.lineReply('This is reply with @mention');
  }
}
const discord = require('discord.js');
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
const client = new discord.Client();

client.on('ready', () => {
  console.log(client.user.tag)
});

client.on('message', async message => {
  if (message.content.startsWith('!reply')) {
    message.lineReply('Hey'); //Line (Inline) Reply with mention

    message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
  }
});

client.login('MTAxNzE3NzY4NDAxNjY0NDIxNg.GytfLS.pBWUDM5Py1x8b_b5cNh3ofJ_gH1xXDyXG0sua0');

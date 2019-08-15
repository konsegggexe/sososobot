const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTY1NTE4NzU5MTE3MTkzMjE4.XVUirg.86LPNhRPFL4i0WQviny5SgiueXQ');
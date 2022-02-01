const { token } = require('../config.json');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_WEBHOOKS] })

client.on("ready", () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
	client.user.setStatus("Zamn She's 12");
});

client.login(token);
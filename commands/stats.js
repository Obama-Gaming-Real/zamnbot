const { token } = require('../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_WEBHOOKS] })
const Discord = require('discord.js');
const moment = require("moment");

require("moment-duration-format");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('statistics of the bot'),
    execute(message, args){ 
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const statEmbed = new Discord.MessageEmbed()
            .setTitle("**= NODE/BOT STATISTICS =**")
            .addField("**Node Mem Usage**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
            .addField("**Node Uptime**", `**${duration}**`)
        message.channel.send({ embeds: [statEmbed] })
        return;
    }
}

client.login(token);
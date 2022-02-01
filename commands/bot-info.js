const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Replies with info about the bot'),
	async execute(interaction) {
        await interaction.reply('Current bot: Zamnbot\nInvite link: https://discord.com/api/oauth2/authorize?client_id=937923642577285123&permissions=8&scope=bot%20applications.commands\nVersion: beta 0.0.1\nCreator: obama gaming#4200');
	},
};

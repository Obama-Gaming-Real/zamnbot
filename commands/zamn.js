const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zamn')
		.setDescription('How old is she?'),
	async execute(interaction) {
        await interaction.reply("Zamn she's 12");
	},
};
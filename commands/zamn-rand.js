const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zamn-rand')
		.setDescription('How old is she? (random)'),
    execute(interaction) {
        var num = Math.floor(Math.random() * 120) + 1;
        if (num < 13) {
            interaction.reply(`zamn shes ${num}`);
        }
        else if (num > 70) {
            interaction.reply(`zad shes old as fuck (${num})`)
        }
        else if (num > 13) {
            interaction.reply(`zad shes ${num}`);
        }
	},
};
const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);

    const ping = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with "Pong!"')

	client.commands.create(ping)
});

client.on(Events.InteractionCreate, interaction => {
	if(!interaction.isChatInputCommand()) return;
	console.log(interaction);
})

client.login("token");
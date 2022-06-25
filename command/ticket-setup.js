const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande de ticket.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez le type de ticket à créer.')
					.addOptions([
						{
							label: '🤝 | Partenariat',
							description: 'Ouvrir un ticket de partenariat.',
							value: 'partenariat',
						},
						{
							label: '📛 | Réclamation',
							description: 'Ouvrir un ticket de réclamation ',
							value: 'plainte',
						},
                        {
							label: '👥 | Recrutement',
							description: 'Ouvrir un ticket pour postuler au recrutement',
							value: 'recrutement',
						},
                        {
							label: '📝 | Entreprise',
							description: 'Ouvrir un ticket pour reprendre une entreprise',
							value: 'entreprise',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Ouverture d\'un ticket',
                description: '**__Comment ouvrir un ticket :__**\nVeuillez choisir le type de billet que vous souhaitez ouvrir.',
                color: "BLURPLE",
                footer: {text: 'AmericanLifeV1'}
            }],
            components: [row]
        })
    }
}

const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "help",
  description: "help",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("ManoaBOT - help Menu!")
    .setDescription("**・ManoaBOT Help ↷**\n > /buy - You Can Buy The Script /statistics - Statics Of The Bot /help - ALL OF THE COMMANDS /support - Support Server.")
    .setColor("Random")
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};
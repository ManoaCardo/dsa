const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"support",
    description: 'support',
    type:1,
    options: [
 ],
  run: async(client, interaction) => {

    interaction.reply({content: "https://discord.gg/HhKPbFCmD8"})
}

};
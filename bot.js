const Discord = require('discord.js')
const client = new Discord.Client({ intents: 131071 })
const { botid, token } = require("./ayarlar.json")
const botOwnerID= '1088820894333423737'
require("./slash")(client)



client.on('message', msg => {
    if (msg.content === '!sil' && msg.author.id === botOwnerID){
        msg.channel.bulkDelete(25)
        .then(console.log)
        .catch(console.error);
    }
});

client.login("MTA5MTc0MzI0ODM2OTg2NDc1NQ.G-Ov6x.74RdUk8cXCXfg9gfjMeL6Of4gaevmueg_XV2TA")
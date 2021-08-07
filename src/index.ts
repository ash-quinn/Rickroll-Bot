require("dotenv").config()

import { Channel, GuildMember, Message, Client, Intents, VoiceState } from "discord.js";

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client!.user!.tag}!`);
});

client.on("message", (message: Message) => {
    let rancomNumber = Math.random()
    console.log(rancomNumber)
    if(rancomNumber > 0.95  ){
        message.channel.send("http://gph.is/2efdN3V")
    }
})

client.on('voiceStateUpdate', (oldMember: VoiceState, newMember: VoiceState) => {

    if(oldMember.channelID == null){
        let rancomNumber = Math.random()
        console.log(rancomNumber)
        if(rancomNumber > 0.99  ){

            newMember!.channel!.join().then(connection => {
                connection.play("https://cdn.discordapp.com/attachments/872409435392327690/873424995647369256/Rick_Astley_-_Never_Gonna_Give_You_Up_Qoret.com.mp3")
            })
        }
    }
})

client.login(process.env.TOKEN);
require("dotenv").config(); //to start process from .env file
const {Client, GatewayIntentBits}=require("discord.js");
const cron = require('cron');


const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent]
});



client.once("ready", () =>{
    console.log("BOT IS ONLINE"); //message when bot is online
    //let guild = client.guilds.cache.get('1035321706006450281');
    //let channel = guild.cache.get('1035321706606243923');
    //console.log(channel);
})
client.login(process.env.TOKEN);


client.on('messageCreate', function(message){
    if(message.content ==='!start' && message.author.username === "AMiller")
    {
    JAndKBefore.start();
    JAndKToday.start();
    YouthBefore.start();
    YouthToday.start();
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("Bot is active");
    });
    }
});

client.on('messageCreate', function(message){
    if(message.content ==='!stop' && message.author.username === "AMiller")
    {
    JAndKBefore.stop();
    JAndKToday.stop();
    YouthBefore.stop();
    YouthToday.stop();
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("Bot is inactive");
    });
    }
});


let JAndKBefore = new cron.CronJob('00 00 12 * * 0',() => {
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("@everyone Beep boop. Jam and Cram is tomorrow from 4 - 7 at Fish Creek United church!");
    });

} )

let JAndKToday = new cron.CronJob('00 00 12 * * 1',() => {
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("@everyone Beep boop. Jam and Cram is today from 4 - 7 at Fish Creek United church! See you there!");
    });

} )

let YouthBefore = new cron.CronJob('00 00 12 * * 4',() => {
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("@everyone Beep boop. Youth group is tomorrow from 7 - 9 at the centre!");
    });

} )

let YouthToday = new cron.CronJob('00 00 12 * * 5',() => {
    client.channels.fetch('1035321706606243923').then(channel => {
        channel.send("@everyone Beep boop. Youth group is today from 7 - 9 at the centre! See you there!");
    });

} )
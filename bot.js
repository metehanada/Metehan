
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ("./ayarlar.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(ayarlar.token);



client.on("message",async(message)=>{

if(message.author.id=="234395307759108106"){ // BU KISMA HANGİ BOTU KOPYALAMAK İSTİYORSANIZ ONUN İD GİRİN
  if (message.attachments.size > 0) {
    message.channel.send(message.attachments.array()[0].url).then(()=>{

    message.delete()
           })
     }else if(message.embeds){
     message.delete();
     message.channel.send(message.embeds);
     }else if(!message.embeds){
     message.delete();
     message.channel.send(message.content)
        }
         
  }
}

);

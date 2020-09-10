require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("NzQ5MjI5Mzc1ODI3ODY5NzQ2.X0o8Ow.AUMLsOO8AyOR1NS3fNp_w5ksmn0");// هلا حب هنا توكين بوتك بس امسح التوكين ذي
const fetch = require("node-fetch");
const fs = require('fs')

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("ready", () => {
  client.user.setActivity(`.uptime |  ${db.get("linkler").length} Bot / ${client.guilds.size} Sunucu`)
  console.log(`giris yaptı`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == ".uptime") {// هنا امر تشغيل البوت
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("This is a link to the bulldozer system!!")
    message.reply("Done uptimed your Project now 24/7 <a:724786888698757190:750987602747850752> ");// هنا الرسالة الي بيعتها
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("" + e)
  })
  }
})
////////////////////////////////////////////////////////////////////////////////// ممنوع التعديل علي الاكواد الي تحت ذي
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "++s") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} Bot/Proje Uptime Yapılıyor.!`)
}})
 

//Main Dosyasına Atın!
client.on('message', message => {
const moment = require("moment")
require("moment-duration-format")
if (message.content === "++ss") {
message.channel.send(`Bot Ping ** ${client.ping} ms**
Toplam Sunucu ${client.guilds.size}
Toplam Kullanıcılar ** ${client.users.size} **
Toplam kanal  ** ${client.channels.size} **
Uptime Süresi  ** ${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')} **
`) //furkan kaçer tarafından yazıldı iyi kullanımlar hata alırsanız sunucuma gelin https://discord.gg/6xucPH3
}});
 


const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "++help") {
let embed = new Discord.RichEmbed()
.setColor('#4ca74c')
.addField(`Uptime Bot v1.0 Yardım`, `Bot glitch sitelerinin 7/24 açık kalmasını sağlayan bir sistem içerir. Sistemdeki bağlantılar bakım gerektirmeden 7/24 çalışır.`)
.addField(`Genel Komutlar`,`

\`!yardım\` - Yardım menüsünü gösterir.
\`!ekle\` - Belirttiğiniz bağlantıyı sisteme ekler.
\`!say\` - Sistemdeki Botları Gösterir.
`)
.addField(`Links`, `[Furkan kaçer](http://ay.link/Kacer)
[Sunucuna ekle](https://ay.link/Uptime)
[Destek Sunucusu](https://discord.gg/pABjCEa)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Uptime`, client.user.avatarURL)
.setFooter(`Uptime Bot v1.0 Sürüm`, client.user.avatarURL)
return message.channel.send(embed);
    }
 
})

const log = message => {
  console.log(`${message}`);
}
  
  ///
client.on("message" , (message)  => {
  if (message.channel.type == "dm") {
    
    let embed = new Discord.RichEmbed()
    .setTitle( )
    .addField(`> **Message BY** 
    :${message.author.tag}`)
    .addField(`> **ID** 
    :${message.author.id}`)
    .addField(`> **Message** 
    :${message.content}`) 
    .setFooter(`**BLACK SYSTEM**`)
    client.channels.get('752378255075573780').send(embed);
   
}});

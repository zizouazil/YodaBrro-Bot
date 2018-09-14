const Discord = require('discord.js');
const Util = require('discord.js');
const Canvas = require("canvas")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const request = require('request');
const moment = require('moment');
const r1 = require('snekfetch'); 
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
let ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`))

const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);
const PREFIX = '!';

const queue = new Map();
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
          client.user.setActivity("By: YodaBrro#4557",{type: 'STREAMING'});     //Heeeeeemo    
});




client.on('message', message => {
  if (message.content === "!roll 1") {
 message.channel.sendMessage(Math.floor(Math.random() * 25)); //ehsgdw
   }
});

client.on('message', message => {
  if (message.content === "!roll 2") {
 message.channel.sendMessage(Math.floor(Math.random() * 50));
   }
});

client.on('message', message => {
  if (message.content === "!roll 3") {
 message.channel.sendMessage(Math.floor(Math.random() * 75));
   }
});

client.on('message', message => {
  if (message.content === "!roll 4") {
 message.channel.sendMessage(Math.floor(Math.random() * 100));
   }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
 console.log(`im redey`);
});
const zead = [
  '*** انا اسمي مريم ***',
  '*** مرحباَ ماهو اسمك ؟ ***',
  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
  '*** هل تود مساعدتي ؟ ***',
  '*** لماذا هل انت قاسي القلب ؟ ***',
  '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
  '*** ابتعد عني قليل انني متعبة ***',
  '*** هل انت نادم على ماقلت ؟ ***',
  '*** ابتعد عني قليل انني متعبة ***',
  '*** هل انت نادم على ماقلت ؟ ***',
  '*** هل تود مساعدتي ؟ ***',
  '*** واو اشكرك انك شخصاَ رائع ! ***',
  '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
  '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
  '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
  '*** هيا اذاَ ***',
  '*** اود ان اسئلك سؤال ونحن في الطريق ***',
  '*** هل تراني فتاة لطيفة ام مخيفة ***',
  '*** اشكرك !  ***',
  '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
  '*** هل انت جاهز ؟ ***',
  '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
  '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
  '*** انا لست كاذبة صدقني***',
  '*** لماذا ارى في عينيك الخوف ؟ ***',
  '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
  '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
  '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
  '*** لماذا لم تدخل الغرفة ؟ ***',
  '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
  '*** لن تخرج حتى اعود لك بعد قليل ***',
  '*** المفتاح معك ! اكتب .مريم  ***',
  '*** مفتاح احمر , هل حصلت عليه ؟ ***',
  '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
  '*** مفتاح اسود . هل حصلت عليه ؟ ***',
  '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
  '*** لقد عادت من جديد الى المنزل ***',
  '*** لا تصدر اي صوت ! ***',
  '*** مريم : لقد عدت ***',
  '*** مريم : يا ايها المخادع اين انت ***',
  '*** مريم : اعلم انك هنا في المنزل ***',
  '*** مريم : ماذا تريد ان تسمع ***',
  '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
  '*** احد ما خرج من المنزل ***',
  '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر  ***'
]
client.on('message', message => {
if (message.content.startsWith('!مريم')) {
 var mariam= new Discord.RichEmbed()
 .setTitle("لعبة مريم ..")
 .setColor('RANDOM')
 .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
 .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
  message.channel.sendEmbed(mariam);
  message.react("??")
 }
});



const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content.startsWith("!كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

const secreT = [
 "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
 "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
 "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
 "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
 "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
 "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
 "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
 "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
 "**المناقشات العقيمة لا تنجب افكارا**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


client.on('message', message => {
  if (message.content.startsWith("!خواطر")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

client.on('message', message => {
   if(message.channel.type === "dm") return;
     if(message.content.startsWith ("!زواج")) {
     if(!message.channel.guild) return message.reply(' This command only for servers ')
     var proposed = message.mentions.members.first()

     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
             message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 10 ثانية 
اكتب موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

  const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
  message.channel.send(`**${message.author} تم رفض عرضك**`);
})




 }
});

client.on("message", message => {
if (message.content === "!help") {
       message.react("😘")
          message.react("😵")
 const embed = new Discord.RichEmbed() 
     .setColor("#ffff00")
     .setThumbnail(message.author.avatarURL)
     .setDescription(`
-🚀 Amazing Speed
-😎 Easy to Use
-💵 Free  
-📚 English Bot

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『General Commands』💎
                       
💎!server 『Server Informations』                      

💎!servers 『To see how many bot joined Online 』  

💎!bot 『Bot Informations』

💎!inv-info 『Information for Invitation 』

💎!date 『To Know what is the Date』

💎!ping 『Bot MS Speed』

💎!members 『Members Informations』

💎!embed 『To write in Embed Way』

💎!say 『Says what you say』

💎!animal  『Shows Animals Pics』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『Admin Commands』👑

👑!rooms 『To know how many Rooms are in the server』

👑!mute 『Give user a mute』

👑!unmute 『Give user an unmute』

👑!clear 『Clear the Chat with Number』

👑!mcstats 『Give an informations for MC Server』

👑!croles 『Create Ready Roles』

👑!edit  『 Edit a Message 』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

:guitar: 『Music』 :guitar:

:guitar: !play  『Play a song from YouTube』

:guitar: !skip  『Skip a song』

:guitar: !stop  『Stops the music』

:guitar: !volume  『Change the volume of the bot』

:guitar:!np  『The song that now playing』

:guitar:!queue  『See the queue of songs』

:guitar:!pause  『Pause the music』

:guitar:!resume  『Resume the music』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

:tickets: 『Ticket』 :tickets:

:tickets:!new 『Opens and New Ticket』

:tickets:!close 『Close Your Ticket』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

:heavy_plus_sign: 『Extra』 :heavy_plus_sign:

:heavy_plus_sign:!quran 『Plays Qur'an』

:heavy_plus_sign:!slap 『Slap a Member』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

🎲『Roll』🎲

🎲!roll 1   『Roll From 1 To 25』

🎲!roll 2   『Roll From 1 to 50』

🎲!roll 3   『Roll From 1 to 75』

🎲!roll 4   『Roll From 1 to 100』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎴『Pic Commands』🎴

🎴!avatar 『Shows your avatar or user avatar』

🎴!image 『Server avatar』

🎴Soon

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎎『Welcome Types』🎎

🎎 welcome 1 

🎎 welcome 2

🎎 welcome 3 

🎎 welcome 4

🎎 welcome 5

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『Support』💎

!inv | Add the Bot

Bot Developer | @YodaBrro#4557

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
if (message.content === "!help^^^") {
       message.react("😮")
               message.react("🤒")
 const embed = new Discord.RichEmbed() 
     .setColor("#ffff00")
     .setThumbnail(message.author.avatarURL)
     .setDescription(`
     
     
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑!ban 『لتعطي شخص باند』

👑!kick 『لتعطي شخص كيك』

👑!clear 『لمسح الشات برقم』

👑!edit  『لتعديل رساله 』

👑!ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑!cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑!delet  『كـود يحذف الـروم سواء صوتي او كتابي』

👑!bc  『خيارات البرودكاست』 

👑!rooms 『لمعرفه عدد رومات السيرفر』


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

     

💎『الدعم الفني والمساعدة』💎

!invite | القسم الاول لي اضافه البوت 

!support| القسم الثاني  الدعم الفني و المساعدة
قسم الثالث مصمم البوت iTzAnan_Over#3412






`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
if (message.content === "!help^^") {
       message.react("😳")
               message.react("👻")
 const embed = new Discord.RichEmbed() 
     .setColor("#ffff00")
     .setThumbnail(message.author.avatarURL)
     .setDescription(`
     
     
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                       
💎!server 『Server Informations』                      

💎!servers 『To see the server in How many Servers 』  

💎!bot 『To know the bot how much server he joined』

💎!date 『To Know the Date』

💎!ping 『To know the Bot Speed』

💎!members 『Members Informations』

💎!embed 『To write in Embed』

💎!say 『Let the bot say what you says』

💎!animal  『Animal Pics』


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
     

💎『الدعم الفني والمساعدة』💎

!invite | To Invite the Bot To another Server

!support| Support Server

Bot Developer | YodaBrro#4557


`)


message.author.sendEmbed(embed)

}
});

client.on('message', message => {
    if (message.content === "!helpt") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("RANDOM")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
   if (message.content.startsWith("!avatar")) {
       var mentionned = message.mentions.users.first();
   var x5bzm;
     if(mentionned){
         var x5bzm = mentionned;
     } else {
         var x5bzm = message.author;
         
     }
       const embed = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setImage(`${x5bzm.avatarURL}`)
     message.channel.sendEmbed(embed);
   }
});

                   client.on('message', message => {
                               if(!message.channel.guild) return;
                       if (message.content.startsWith('!ping')) {
                           if(!message.channel.guild) return;
                           var msg = `${Date.now() - message.createdTimestamp}`
                           var api = `${Math.round(client.ping)}`
                           if (message.author.bot) return;
                       let embed = new Discord.RichEmbed()
                       .setAuthor(message.author.username,message.author.avatarURL)
                       .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                       .setColor('RANDOM')
                       .addField('**Time Taken:**',msg + " ms")
                       .addField('**WebSocket:**',api + " ms")
        message.channel.send({embed:embed});
                       }
                   });

client.on("message", (message) => {
if (message.content.startsWith("!ct")) {
           if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
       let args = message.content.split(" ").slice(1);
   message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('Chat Room has been Created')

}
});
client.on("message", (message) => {
if (message.content.startsWith("!cv")) {
           if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
       let args = message.content.split(" ").slice(1);
   message.guild.createChannel(args.join(' '), 'voice');
   message.channel.sendMessage('Voice Room has been Created')
   
}
});



  client.on("message", message => {
   const prefix = "!"
             
         if(!message.channel.guild) return;
  if(message.author.bot) return;
     if(message.content === prefix + "image"){ 
         const embed = new Discord.RichEmbed()
 
     .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
 .setAuthor(message.author.username, message.guild.iconrURL)
   .setColor(0x164fe3)
   .setImage(message.guild.iconURL)
   .setURL(message.guild.iconrURL)
                   .setTimestamp()

  message.channel.send({embed});
     }
 });

 var prefix = "f!"
 client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "chat");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Mention a Member**");
  if(!reason) return message.reply ("**Write Ban Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I can not Ban someone higher than me **");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`Banned!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
}); 


var prefix = "f!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "chat");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Mention a Member**");
  if(!reason) return message.reply ("**Write Kick Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I can not Kick someone higher than me**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 
 client.on("message", (message) => {
   if (message.content.startsWith('!delete')) {
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

       let args = message.content.split(' ').slice(1);
       let channel = message.client.channels.find('name', args.join(' '));
       if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
       channel.delete()
   }
});
 
 
client.on('message', message => {
    if (message.content === "!servers") {
    let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .addField("**| Servers |**" , client.guilds.size)
 message.channel.sendEmbed(embed);
   }
});

 var prefix = "!";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
   client.on('message', message => {
       var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'animal')) {
        var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
   }
});

client.on('message', message => {
var prefix = "!";

   if (message.author.id === client.user.id) return;
   if (message.guild) {
  let embed = new Discord.RichEmbed()
   let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
   if (!args[1]) {
message.channel.send("**!bc <message>**");
return;
}
       message.guild.members.forEach(m => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
           var bc = new Discord.RichEmbed()
           .addField('» Server :', `${message.guild.name}`)
           .addField('» Sender : ', `${message.author.username}#${message.author.discriminator}`)
           .addField(' » Message : ', args)
           .setColor('#ff0000')
           // m.send(`[${m}]`);
           m.send(`${m}`,{embed: bc});
       });
   }
   } else {
       return;
   }
});

client.on('message', message => {
   if (message.content === "!server") {
       if (!message.channel.guild) return
       var verificationLevel = message.guild.verificationLevel;
       const verificationLevels = ['None','Low','Meduim','High','Extreme'];
       var Y1 = message.guild.createdAt.getFullYear() - 2000
       var M2 = message.guild.createdAt.getMonth()
       var D3 = message.guild.createdAt.getDate()
       const xNiTRoZ = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle(message.guild.name,message.guild.iconURL)
        .addField(':id: Server ID',`${message.guild.id}`,true)
        .addField(':date: Created on',D3 + '.' + M2 + '.' + Y1,true)             
        .addField(':crown: Server Owner',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
        .addField(':busts_in_silhouette: Members ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
        .addField(':speech_balloon: Channels' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
        .addField(':earth_asia: Region',message.guild.region)
        .addField(':ribbon: Server Emojis',`${message.guild.emojis.size}`,true)
        .addField(':construction: Verification Level',`${verificationLevels[message.guild.verificationLevel]}`,true)
        .addField(':closed_lock_with_key: Roles  '+message.guild.roles.size+' ','Type `!roles` To See The Server Roles!')
        message.channel.send({embed:xNiTRoZ});
    }
   });


 client.on('message', message => {
   if (message.content === "!rooms") {
                     if (!message.guild) return;

       var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
       const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
       .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
       
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
       message.channel.sendEmbed(embed);
   }
});

 var prefix = "!";
 const HeRo = new Discord.Client();
 client.on('message', message => {
     if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
             Year = currentTime.getFullYear(),
             Month = currentTime.getMonth() + 1,
             Day = currentTime.getDate();

             var Date15= new Discord.RichEmbed()
             .setTitle("**『  Date  』 **")
             .setColor('RANDOM')
             .setTimestamp()
             .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
             .setFooter(`!help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
              message.channel.sendEmbed(Date15);
     }
 });




   client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='!members')
     var IzRo = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter(message.author.username, message.author.avatarURL) 
     .setTitle(':tulip:| Members info')
     .addBlankField(true)
     .addField(':green_book:| Online ',
     `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
     .addField(':closed_book:| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
     .addField(':orange_book:| idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
     .addField(':notebook:| Offline ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
     .addField('Members Count',`${message.guild.memberCount}`)
     message.channel.send(IzRo);
   });



var prefix = "!"

client.on('message', message => {
   if (message.author.bot) return;
   if (!message.content.startsWith(prefix)) return;

   if (message.content.startsWith(prefix + 'edit')) {
       message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
   }
});

client.on('message', message => {
    if (message.content === "!bot") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .addField("**Servers That bot Joined:**" , client.guilds.size)
 .addField("**Users:**", client.users.size)
 .addField("**Channels:**", client.channels.size)
 .setTimestamp()
message.channel.sendEmbed(embed);
   }
});



client.on('message', message => {
   if (message.content === "!roles") {
       var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
       const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .addField('Roles:',`**[${roles}]**`)
       message.channel.sendEmbed(embed);
   }
});


client.on("guildCreate", guild => {
 console.log(` Person has Invited the Bot to server name ! ${guild.name} Server Owner ${guild.owner.user.username}!`)
});




 
 
client.on('ready', () => {
  client.user.setGame(" !help | !inv |By: YodaBrro#4557 ");
}); 

client.on("message", message => {
   var prefix = "!";
           var args = message.content.substring(prefix.length).split(" ");
           if (message.content.startsWith(prefix + "clear")) {
if (!args[1]) {
                               let x5bz1 = new Discord.RichEmbed()
                               .setDescription("!clear <number>")
                               .setColor("#0000FF")
                               message.channel.sendEmbed(x5bz1);
                           } else {
                           let messagecount = parseInt(args[1]);
                           message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                         message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                           message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                           let x5bz2 = new Discord.RichEmbed()
                                                           .setColor("#008000")
                               .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                       message.delete("..");
                               message.channel.sendEmbed(x5bz2);
                           }
                         }
});


client.on('guildMemberAdd', member => {
 const channel = member.guild.channels.find('name', 'welcome');
 if (!channel) return;
 channel.send(`***Welcome to Our Server***, ${member}`);
 
});

client.on('message', message => {
 if (true) {
if (message.content === '!support') {
     message.author.send(' |https://discord.gg/vumJWpv| For any Problem').catch(e => console.log(e.stack));

   }
  } 
 });
 
 

client.on('message', message => {
    if (message.content === "!support") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#9B59B6")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
 if (true) {
if (message.content === '!inv') {
     message.author.send(' Bot Link |  https://discordapp.com/api/oauth2/authorize?client_id=480067910966968330&permissions=0&scope=bot ').catch(e => console.log(e.stack));

   }
  } 
 });
 
 

client.on('message', message => {
    if (message.content === "!inv") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#9B59B6")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
           if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bc-users')){
if(!message.author.id === 'Bot Owner ID') return;
message.channel.sendMessage('Sending the message |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
   if (message.content ==='!add-colors'){
       if (message.channel.guild){
           if (message.member.hasPermission('MANAGE_ROLES')){
               setInterval(function(){})
                 let count = 0;
                 let ecount = 0;
       for(let x = 0; x < 250; x++){
           message.guild.createRole({name:x,
           color: 'RANDOM'})
     }
           }else{
               message.channel.sendMessage(':warning: You do not have permission to write this command')
           }
       }else{
           message.channel.sendMessage(':warning:  This command only in servers')
       }
   }
   if (message.content === '!de-colors'){
               if (message.channel.guild){
           if (message.member.hasPermission('MANAGE_ROLES')){
               setInterval(function(){})
                 let count = 0;
                 let ecount = 0;
       for(let x = 0; x < 250; x++){
           message.guild.roles.find('name', x)
     }
           }else{
               message.channel.sendMessage(':warning: You do not have permission to write this command')
           }
       }else{
           message.channel.sendMessage(':warning:  This command only in servers')
       }
   }

})
 
 
 
 
client.on('message', message => {
if (message.content.startsWith("welcome 1")) {
                                var mentionned = message.mentions.users.first();
            var mentionavatar;
              if(mentionned){
                  var mentionavatar = mentionned;
              } else {
                  var mentionavatar = message.author;
                  
              }
              let bot;
              if(message.author.bot) {
                  bot = 'Bot'
              } else {
                  bot = 'User'
              } 
 var EsTeKnAN = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("***Thank you for Joining Our Server***" ,mentionavatar.username )
 .setDescription('***We wish you a happy stay!***')
 .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
  message.channel.sendEmbed(EsTeKnAN);
 }
});

 
client.on('message', message => {
if (message.content.startsWith("welcome 2")) {
                                var mentionned = message.mentions.users.first();
            var mentionavatar;
              if(mentionned){
                  var mentionavatar = mentionned;
              } else {
                  var mentionavatar = message.author;
                  
              }
              let bot;
              if(message.author.bot) {
                  bot = 'Bot'
              } else {
                  bot = 'User'
              } 
 var EsTeKnAN = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("***Thank you for joining our Server***" ,mentionavatar.username )
 .setDescription('***We welcome you from our Heart***')
 .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
  message.channel.sendEmbed(EsTeKnAN);
 }
});

 
client.on('message', message => {
if (message.content.startsWith("welcome 3")) {
                                var mentionned = message.mentions.users.first();
            var mentionavatar;
              if(mentionned){
                  var mentionavatar = mentionned;
              } else {
                  var mentionavatar = message.author;
                  
              }
              let bot;
              if(message.author.bot) {
                  bot = 'Bot'
              } else {
                  bot = 'User'
              } 
 var EsTeKnAN = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("***Thank you for Joining Our Server***" ,mentionavatar.username )
 .setDescription('***Here our Staff and members Welcome you In sleep***')
 .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
  message.channel.sendEmbed(EsTeKnAN);
 }
});

 
client.on('message', message => {
if (message.content.startsWith("welcome 4")) {
                                var mentionned = message.mentions.users.first();
            var mentionavatar;
              if(mentionned){
                  var mentionavatar = mentionned;
              } else {
                  var mentionavatar = message.author;
                  
              }
              let bot;
              if(message.author.bot) {
                  bot = 'Bot'
              } else {
                  bot = 'User'
              } 
 var EsTeKnAN = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("***Thanks you for Joining Our Server***" ,mentionavatar.username )
 .setDescription('***Welcome for Who joined and he is amazed***')
 .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
  message.channel.sendEmbed(EsTeKnAN);
 }
});

 
client.on('message', message => {
if (message.content.startsWith("welcome 5")) {
                                var mentionned = message.mentions.users.first();
            var mentionavatar;
              if(mentionned){
                  var mentionavatar = mentionned;
              } else {
                  var mentionavatar = message.author;
                  
              }
              let bot;
              if(message.author.bot) {
                  bot = 'Bot'
              } else {
                  bot = 'User'
              } 
 var EsTeKnAN = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("***Thank you for Joining our Server***" ,mentionavatar.username )
 .setDescription('***Are We there yet?***')
 .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
  message.channel.sendEmbed(EsTeKnAN);
 }
});

const secre = [
 "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
 "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
 "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
 "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
 "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.", 
 "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.", 
 "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.", 
 "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.", 
 "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.", 
 "**لو خيروك بين الحقد أو المسامحة**.", 
 "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
 "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.", 
 "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.", 
 "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.", 
 "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.", 
 "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.", 
 "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.", 
 "**لو خيروك بين المال أو الجمال**.", 
 "**لو خيروك بين المال أو الذكاء**.", 
 "**لو خيروك بين المال أو الصحة**.", 
 "**لو خيروك بين الجمال أو الذكاء**.", 
 "**لو خيروك بين الذكاء أو الصحة**.", 
 "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.", 
]


client.on('message', message => {
  if (message.content.startsWith("!لوخيروك")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه لو خيروك' ,
 `${secre[Math.floor(Math.random() * secre.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

client.on('message',async message => {
var owners = ['441963199462506508','ايدي الاونر2']
        if(message.content.startsWith("!restart")) {
         if(!owners.includes(message.author.id)) return;
            message.channel.send('**Restarting.**').then(msg => {
                setTimeout(() => {
                   msg.edit('**Restarting..**');
                },1000);
                setTimeout(() => {
                   msg.edit('**Restarting...**');
                },2000);
            });
            console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
            console.log(`Restarting..`);
            setTimeout(() => {
                client.destroy();
                client.login('process.env.BOT_TOKEN');
            },3000);
        }
      });

client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('!mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** Write Server IP . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 Server NIP",`${args}`,true)
        .addField("🌐 Server Port",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`Heem Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Have no Permission 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** There is no Mute Role 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** Mention a User**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Usage:', '!mute')
      .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Have no Permission Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Member Has been Muted**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Member Has Been Muted**").catch(console.error);
  });
    }
  
  };
  
});

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Do Not have 'Manage Roles' Permission **").catch(console.error);
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** You Do Not have 'Muted' Role **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** Mention a User**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Usage:', '!unmute')
      .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** No Manage Roles Permission **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. The User has been Unmuted **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. The User has been Unmuted **").catch(console.error);
  });
    }
  
  };
  
});

client.on('message', message => {
if (message.content.startsWith('!inv-info')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► You Have invited  \`\`${Number(inviteCount)}\`\` Member.\n\n► You Have joined this server since\`${daysJoined.toFixed(0)}\`.\n\n► You Joined with this invite\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(alpha);

});

};
});

client.on('message', message => {
    if (message.content.startsWith("!readyserver")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith("!readyserver")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('chat', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('bot', 'text')
	 


     

message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith("!readyserver")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => { 
console.log(`
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
-------------------------------------------------------
------------------------------------------------------
----------------------Bot's logs----------------------`);


});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint disable line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    if (msg.content.startsWith(`${PREFIX}play`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}play command in ${msg.guild.name}`);

        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'I\'m sorry but you need to be in a voice channel to play music!'
              }
            ]
          }
        });
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot connect to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot speak to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
        
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true) // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added playlist",
                    value: `Playlist: **${playlist.title}** has been added to the queue!`
                  }
                ]
              }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "📋 Song selection",
                            value: `${videos.map(video2 => `\`${++index}\` **-** ${video2.title}`).join('\n')}`
                          },
                          {
                              name: "You have 10 seconds!",
                              value: "Provide a value to select on of the search results ranging from 1-10."
                          }
                        ]
                      }
                    }).then(message =>{message.delete(20000)})
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send({embed: {
                            color: 15158332,
                            fields: [{
                                name: "❌ Error",
                                value: 'No or invalid value entered, cancelling video selection...'
                              }
                            ]
                          }
                        }).then(message =>{message.delete(5000)})
                    }
                    const videoIndex = (response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "❌ Error",
                            value: 'I could not obtain any search results.'
                          }
                        ]
                      }
                    }).then(message =>{message.delete(5000)})
                }
            }

            return handleVideo(video, msg, voiceChannel);
        }
    } else if (msg.content.startsWith(`${PREFIX}skip`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.connection.dispatcher.end();
        return undefined;
    } else if (msg.content.startsWith(`${PREFIX}stop`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could stop for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (msg.content.startsWith(`${PREFIX}volume`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!args[1]) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `I set the volume to: **${args[1]}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${PREFIX}np`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}np command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🎵 Now playing",
                value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${PREFIX}queue`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "📋 Song queue",
                value: `${serverQueue.songs.map(song => `**- ${song.title}**`).join('\n')}`
              },
              {
                  name: "🎵 Now playing",
                  value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        } else if(msg.content.startsWith(`${PREFIX}nvm`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}nvm command in ${msg.guild.name}`);

        msg.channel.send('Please check your direct messages :inbox_tray:').then(message =>{message.delete(5000)})

        msg.react('✅');

        msg.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Bot's commands:",
                value: `**${PREFIX}help** - This message!\n\
**${PREFIX}play** - Play a song from YouTube.\n\
**${PREFIX}skip** - Skip a song.\n\
**${PREFIX}stop** - Stops the music.\n\
**${PREFIX}volume** - Change the volume of the bot.\n\
**${PREFIX}np** - The song that now playing.\n\
**${PREFIX}queue** - See the queue of songs.\n\
**${PREFIX}pause** - Pause the music.\n\
**${PREFIX}resume** - Resume the music.`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Misaka"
            }
          }
        });
    } else if (msg.content.startsWith(`${PREFIX}pause`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "⏯️ Pause",
                value: 'Paused the music for you!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(2000)})
    } else if (msg.content.startsWith(`${PREFIX}resume`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}resume command in ${msg.guild.name}`);

        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing =  true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "⏯️ Resume",
                    value: 'Resumed the music for you!'
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing or something is already playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    }

    return undefined;
});


async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send({embed: {
                    color: 15158332,
                    fields: [{
                        name: "❌ Error",
                        value: `I could not join the voice channel: ${error}`
                      }
                    ]
                  }
                });
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added song",
                    value: `**${song.title}** has been added to the queue!`
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Song ended.');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send({embed: {
        color: 15158332,
        fields: [{
            name: "✅ Start playing",
            value: `Start playing: **${song.title}**`
          }
        ]
      }
    }).then(message =>{message.delete(5000)})
}

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "439187325503930369") return;

if (message.content.startsWith(PREFIX + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}

if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
}
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});

client.on('message', message => {
    if (message.content.startsWith("!new")) {
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.username + message.author.discriminator)) return message.channel.send(`You already have a ticket open.`);
        message.guild.createChannel(`ticket-${message.author.username + message.author.discriminator}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }


    if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!close\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '!close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});

client.on('message', message => {
    if(message.content.startsWith('!quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**You Must be in Voice Channel**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("Quran Command", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 Quran Commands 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`); //Hi
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now Off**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});

client.on('message',message =>{
    if(message.content.startsWith('!topinvites')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/avatars/472224983943217175/4fcb0459f7aab6af86d56d97cf7de54b.png?size=2048")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith("!inv-inf1")) {
    if(!args) return message.reply('**Specify Invite Name**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**I could not Find ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - Invite Owner',inv.inviter,true)
      .addField('# - Invite Room',inv.channel,true)
      .addField('# - Expire Invite Date',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - Invite Created',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - Invite Time',moment(inv.maxAge).format('DD **Hour** h **Day**'),true)
      .addField('# - Uses',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});

client.on('message',message =>{
    if(message.content.startsWith('!top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`.`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/OM00xyh.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', async najzx => {
    if(najzx.content.startsWith("!croom")) {
      if(!najzx.member.hasPermission('READ_MESSAGE_HISTORY')) return;
      await najzx.channel.send("Send Room Name").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("Send Room Time in Mintes, No less than 2 minutes |No more than 180 minutes")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("Time in Minutes | Only Numbers");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("No less than 2 minutes |No more than 180 minutes")
    time = co.first().content
  co.first().delete()
    e.edit("Send Room Type | text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("Send how many Members can access to your room")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("Members Only with Numbers");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("Room is being Created, Stand By...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("Time is Over")
      }, Math.floor(time*60000))
      
    })
    e.edit("Room Has Been Created")
  
  })
  })
  })
  })
  })
  
    }
  })

client.on("message", message => {
if (message.content === "!help") {
       message.react("😘")
          message.react("😵")
 const embed = new Discord.RichEmbed() 
     .setColor("#ffff00")
     .setThumbnail(message.author.avatarURL)
     .setDescription(`
-🚀 Amazing Speed
-😎 Easy to Use
-💵 Free  
-📚 English Bot

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『General Commands』💎
                       
💎!croom 『Create Text,Voice Room with Options』

💎!updates 『To see the daily updates』

💎!permissions 『To Know What Permissions You have』

💎!setvoice 『To Create a Voice Online Room』

💎!giveaway 『To Create a giveaway』

💎!autorole toggle / set [Role Name] 『Make an autorole by toggling it __ON__ with role name or __OFF__』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『Admin Commands』👑

👑!readyserver 『Create a Ready server』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 




`)


message.author.sendEmbed(embed)

}
});

client.on("message", message => {
if (message.content === "!updates") {
       message.react("😘")
          message.react("😵")
 const embed = new Discord.RichEmbed() 
     .setColor("#ffff00")
     .setThumbnail(message.author.avatarURL)
     .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
📚!croom 『Create Text,Voice Room with Options』

📚!top 『See the Top Inviters』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 


`)


message.author.sendEmbed(embed)

}
});

client.on('message', message => {
       if (message.content.startsWith('!showservers')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}Servers `)
  .setDescription(`${msg}`)
  .setColor("RANDOM");
  message.channel.send(embed);
}
});

client.on('message', msg => {
  if(msg.author.bot) return;
  
  if(msg.content === '!serverslinks') {
    client.guilds.forEach(g => {
      
      let l = g.id
      g.channels.get(g.channels.first().id).createInvite({
        maxUses: 5,
        maxAge: 86400
      }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


    })
  }
  
})


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {


if (message.content === "!mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === "!unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel Unmuted ✅ ")
           });
}
  

});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Heem Bot Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:YodaBrro#4557")
      message.author.sendEmbed(Embed11)
    }
});

client.on(`message`, message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes(`youtube`)){
    message.delete()
    return message.reply(`**No Youtube Links **`)
}
});

client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on("message", msg => {
    var prefix = "f!";
if(msg.content.startsWith ("!id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  Name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  ID", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  Status', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   Playing', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  Roles', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  Is he Bot?', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true)
msg.channel.send({embed: embed})
}
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "WN");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on('message', message => {
 if (message.content.includes('discord.gg')){      //شيل المسافه
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete() 
     var member = message.member
    
 
       
          member.ban().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'For advertising ' + member.displayName + ' Has been Kicked',
              color: 490101,
              }
            });
        }
      ) 
    }
}
});

client.on('message', async message => {
  if(message.content.startsWith("!bcall")) {
    let i = client.users.size;
    if(message.author.id !== '441963199462506508') return message.channel.send('❎ » This Command for Bot Owner');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » Must Write the Message')
    setTimeout(() => {
      message.channel.send(`Sent to ${i} Person`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith('!role')) return;
	if( msg.toLowerCase().startsWith('!roleremove' )){
		if( !args[0] ) return message.reply( '**:x: Please Put The Person Who **' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Please Write the Person that will be given the role**' );
		if( !args[1] ) return message.reply( '**:x: Please Write thr Role that will be give to person**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Please Write thr Role that will be give to person**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] Role [ '+args[0]+' ] Given **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', ReBeL => {
if(ReBeL.content.startsWith("c")){
ReBeL.channel.send("لقد تم إشاء السيرفر , لرؤيته وأخذ ملكية السيرفر أتجه للخ��ص")
client.user.createGuild('PowerBot.', 'us-central').then(Codes => {
client.guilds.get(Codes.id).channels.filter(c => c.type === 'text').first().createInvite().then(i => ReBeL.author.send(i.url)).catch(RebeL =>{
console.log('`Error`: ' + RebeL);
ReBeL.channel.send("**لن يتم إرسال رابط السيرفر بسبب إغلاقك للخاص**");
});
client.guilds.get(Codes.id).channels.find("name","general").send("لأخذ ملكية السيرفر قم بكتابة `Power` .")
console.log('It worked');
});
}
if(ReBeL.content === "Power") {
ReBeL.guild.setOwner(ReBeL.author);
}
});

var cats = [

"https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith('!هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
    if(message.content == '!bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});

client.on('message', ReBeL => {
if(ReBeL.content.startsWith("!Power")){
ReBeL.guild.setOwner(ReBeL.author);
}
});

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});
client.on('message', ra3d => {
var prefix = "!";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith('!cc')) {
    if(!args) return ra3d.channel.send('`Choose Color Number `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
if(message.content.startsWith('!discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
          var args = message.content.split(" ").slice(1);
    let sent = 0
    let count = 1;
    
      if(args){
client.users.filter(u => u.discriminator == args[0]).forEach(u => {
    if(sent > 4){
     return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
}
if(message.content ===('!discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
    let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
});

let id;
let guild;
let emojiHasPermission;

client.on('message', message => {
  id = client.user.id;
  guild = message.guild;
  emojiHasPermission = permission => {
    console.log(permission);
    if (guild.member(id).permissions.has(permission, false)) {
      return ':white_check_mark:';
    } else {
      return ':x:';
    }
  };
  if (message.content === '!permissions') {
  message.channel.send({embed: {
    title: ':tools: Permissions',
    color: 0x06DF00,
    fields: [
      {

        name: 'Administrator :',
        value: emojiHasPermission('ADMINISTRATOR'),
        inline: true
      },
      {
        name: 'Create Instant Invite :',
        value: emojiHasPermission('CREATE_INSTANT_INVITE'),
        inline: true
      },
      {
        name: 'Kick Members :',
        value: emojiHasPermission('KICK_MEMBERS'),
        inline: true
      },
      {
        name: 'Ban Members :',
        value: emojiHasPermission('BAN_MEMBERS'),
        inline: true
      },
      {
        name: 'Manage Channels :',
        value: emojiHasPermission('MANAGE_CHANNELS'),
        inline: true
      },
      {
        name: 'Manage Guild :',
        value: emojiHasPermission('MANAGE_GUILD'),
        inline: true
      },
      {
        name: 'Add Reactions :',
        value: emojiHasPermission('ADD_REACTIONS'),
        inline: true
      },
      {
        name: 'View Audit Log :',
        value: emojiHasPermission('VIEW_AUDIT_LOG'),
        inline: true
      },
      {

        name: 'Manage Messages :',
        value: emojiHasPermission('MANAGE_MESSAGES'),
        inline: true
      },
      {
        name: 'Embed Links :',
        value: emojiHasPermission('EMBED_LINKS'),
        inline: true
      },
      {
        name: 'Attach Files :',
        value: emojiHasPermission('ATTACH_FILES'),
        inline: true
      },
      {
        name: 'Read Message History :',
        value: emojiHasPermission('READ_MESSAGE_HISTORY'),
        inline: true
      },
      {
        name: 'Mention Everyone :',
        value: emojiHasPermission('MENTION_EVERYONE'),
        inline: true
      },
      {
        name: 'Use External Emojis :',
        value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
        inline: true
      },
      {
        name: 'Connect :',
        value: emojiHasPermission('CONNECT'),
        inline: true
      },
      {
        name: 'Speak :',
        value: emojiHasPermission('SPEAK'),
        inline: true
      },
      {

        name: 'Mute Members :',
        value: emojiHasPermission('MUTE_MEMBERS'),
        inline: true
      },
      {
        name: 'Deafen Members :',
        value: emojiHasPermission('DEAFEN_MEMBERS'),
        inline: true
      },
      {
        name: 'Move Members :',
        value: emojiHasPermission('MOVE_MEMBERS'),
        inline: true
      },
      {
        name: 'Use VAD :',
        value: emojiHasPermission('USE_VAD'),
        inline: true
      },
      {
        name: 'Change Nickname :',
        value: emojiHasPermission('CHANGE_NICKNAME'),
        inline: true
      },
      {
        name: 'Manage Nicknames :',
        value: emojiHasPermission('MANAGE_NICKNAMES'),
        inline: true
      },
      {
        name: 'Manage Roles :',
        value: emojiHasPermission('MANAGE_ROLES'),
        inline: true
      },
      {
        name: 'Manage Webhooks :',
        value: emojiHasPermission('MANAGE_WEBHOOKS'),
        inline: true
      },
      {
        name: 'Manage Emojis :',
        value: emojiHasPermission('MANAGE_EMOJIS'),
        inline: true
      }
    ]
  }
  });
  }
});

client.on('message', message => {
         if (message.content === "!dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'Morning';
            if (hours >= 12) {
                suffix = 'Evening';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『Date & Time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('UAE',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('KSA',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });

client.on('message', message => {
     if(message.content.startsWith("!bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});

client.on('message', async FARES => {
if(FARES.author.bot) return;
if (FARES.channel.guild) {
if (FARES.content.startsWith(`!8ball`)) {
   let argsFARES = FARES.content.split(' ').slice(1).join(' ');
   let authorFARES = FARES.author.username;

   let FARES = [
"● It is certain.",
"● It is decidedly so.",
"● Without a doubt.",
"● Yes - definitely.",
"● You may rely on it.",
"● As I see it, yes.",
"● Most likely.",
"● Outlook good.",
"● Yes.",
"● Signs point to yes.",
       // إجابات غير ملتزمة
"● Reply hazy, try again",
"● Ask again later.",
"● Better not tell you now.",
"● Cannot predict now.",
"● Concentrate and ask again.",


       // إجابات سلبية
"● Don't count on it.",
"● My reply is no.",
"● My sources say no",
"● Outlook not so good.",
"● Very doubtful.",
   ]
   let randomFARES = Math.floor(Math.random() * FARES.length);

   if (!argsFARES) return ReBeLL.reply("ask him something.");
   FARES.channel.send(`\:8ball\: | ${FARES[randomFARES]} **${authorFARES}**`);
}}});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})

client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});

client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply('هلا والله')
});

client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
  msg.reply('وعليكم السلام و رحمة الله و بركاته')
});

client.on('message', msg => {
  if(msg.content === 'Hi')
  msg.reply('Hey')
});

client.on('message', msg => {
  if(msg.content === 'Hello')
  msg.reply('olleH')
});

client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('Welcome to ${guild.name}')
    }
});

client.on('message', message => { 
    if (message.content.startsWith('!emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('!un') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith('!allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
if (message.content.startsWith('!perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank You For Adding Me**`)
      guild.owner.send(embed)
});

client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "!serverinv"){
message.guild.fetchInvites()
  .then(invites => message.channel.send(`Fetched ${invites.size} invites`))
  .catch(console.error);
}
});

client.on("message", message => {
        if (message.content === "!setprefix") {
        if (message.author.id !== "441963199462506508" && !message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`U don't have permission to do that`);
  let args = message.content.split(" ").slice(1);
        let arg = args.join("").substring(message.length)
        if (!arg) return message.channel.send(`Please add a prefix after command like \`\`${prefix}setprefix &\`\``);
        fs.database().ref('servers/' + message.guild.id).update({
            guildname: message.guild.name,
            guildprefix: arg
        }).catch(function(err) {
            message.channel.send(err + "\n\n\n");
        });
        message.channel.send(`prefix updated ${arg} for ${message.guild.name}`);
    }
});

client.on('message',async message => {
  if(message.content.startsWith("!setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }

if(message.content.startsWith(`!autorole`)) {
         
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorole toggle / set [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   } 
         }
if(message.content === '!info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `

State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


});

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith("!giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Didnt Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("يا عمي وش تبي\nسوي !help\nمالي فاضيلك اكتبهم هنا");
    }
});

client.on('error', console.error);
 
client.on('messageDelete', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[ROLE COLOR UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {
            let roleUpdate = new Discord.RichEmbed()
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate)
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[CHANNEL CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD NAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD REGION]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
 
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
 
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(verLog);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});

client.on('message', message => {
     if (message.content === ("!help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content == ('!profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['ID1.png','ID2.png','ID3.png','ID4.png','ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'Online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "No playing" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });

let daily = JSON.parse(fs.readFileSync("./daily.json", "utf8")); // يقرا ملف jso
let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));

const sql = require("sqlite");
sql.open("./score.sqlite");

client.on("message", message => {
if(!daily[message.author.id]) {
    daily[message.author.id] = {
        getDaily: false,
        dayClaimed: ''
    }
}
let conf = daily[message.author.id];

  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 2, 0]);
    } else {
      let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);

        var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/up1.png','./img/up2.png','./img/up.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(88, 110),
            Ui = canvas.getContext('2d');
        Ui.patternQuality = 'bilinear';
        Ui.filter = 'bilinear';
        Ui.antialias = 'subpixel';
        Ui.shadowColor = 'rgba(0, 0, 0, 0.4)';
        Ui.shadowOffsetY = 2;
        Ui.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new BG;
            ground.src = Background;
            Ui.drawImage(ground, 0, 0, 88, 110); // 0, 0, 207, 176

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".gif" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        let Avatar = Canvas.Image;
                    /*    Ui.arc(80,80,50,0,2*Math.PI);
                        Ui.clip();*/
                        let ava = new Avatar;
                        ava.src = buf;
                        Ui.drawImage(ava, 19, 3, 52, 50);
                        Ui.font = 'bold 30px Helvetica';
                        Ui.fontSize = '30px';
                        Ui.fillStyle = "#c4bdbd";
                        Ui.textAlign = "center";
                        Ui.fillText(`${row.level}`, 45, 105);
                    message.channel.send(`:up: ** |  ${message.author.username}    Level Up! To ${row.level} ** `, {file: canvas.toBuffer()});
                  });
         });
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 1]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith("!level")) {
   if(!message.channel.guild) return;
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
             const embed32 = new Discord.RichEmbed()
  .setAuthor(` `,client.user.avatarURL)
  .setColor("GRAY")
  .setAuthor(message.user.displayAvatarURL)

  .addField("**Level:**",`${row.level}`,true)
  .setFooter(`${prefix}ترتيبك || `)
  message.reply("Your Level");
 message.channel.sendEmbed(embed32);
 console.log('[level] Send By: ' + message.author.username)
    });
  }

  if (message.content.startsWith("!gift")) {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
             sql.run(`UPDATE scores SET points = ${row.points + 500} WHERE userId = ${message.author.id}`);
              if(conf.getDaily == false) {
                  row.points + '500';
            message.channel.send(` **:ballot_box_with_check:  |  ${message.author.username} , You Have Add ${'`500$`'} to your account :credit_card:  **`)
                  conf.getDaily = true;
                  const d = new Date();
                 const day = d.getDate()
                  conf.dayClaimed = day;
              } else {
                  sql.run(`UPDATE scores SET points = ${row.points + 0} WHERE userId = ${message.author.id}`);
                  message.channel.send(` **⏰ |  ${message.author.username} , To get Agin come back  ${moment().endOf('day').fromNow()}**`);
              }

              const d = new Date();
              const day = d.getDate();

              if(conf.dayClaimed + 1) {
                  conf.getDaily = true;
              }

              // نجرب ض1؟
                    message.react("💳")

    });
  }



    if (message.content.startsWith("!credits")) {
       if(!message.channel.guild) return;
      var ment = message.mentions.members.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
      sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
        message.channel.send(getvalueof.toString()+',** your :credit_card: balance is '+'`$'+`${row.points}`+'`**');
        console.log('[credit] Send By: ' + message.author.username)
      });
    }
    fs.writeFile("./daily.json", JSON.stringify(daily), (err) => {
    if (err) console.error(err)
  });
  });





client.pointsMonitor = (dateformat, message) => {
  if (message.channel.type !=='text') return;
  const settings = client.settings.get(message.guild.id);
  if (message.content.startsWith(settings.prefix)) return;
  const score = client.points.get(message.author.id) || { points: 1, level: 1 };
  score.points++;
  const curLevel = Math.floor(0.2 * Math.sqrt(score.points));
  if (score.level < curLevel) {
        message.channel.send(`Good Luck! <@!${message.author.id}> You Have Reached Level ${curLevel} `);
    score.level = curLevel;
  }
client.points.set(message.author.id, score);
};
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {

    userData.level = curLevel;
  //  message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }

 // if (message.content.startsWith(prefix + "level")) {
    //message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);

  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});
client.on("message",  message => {
    if(message.content.startsWith('!myrank')) {
         if(!message.channel.guild) return message.reply('** This command only for servers**');
     var ment = message.mentions.users.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
  let userData = points[message.author.id];
           var Canvas = require('canvas')
var jimp = require('jimp')
const snumber = require('short-number')
         sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
message.channel.startTyping(1)
const w = ['./img/rank.png'];
      let Image = Canvas.Image,
          canvas = new Canvas(360, 100),
          ctx = canvas.getContext('2d');
      ctx.patternQuality = 'bilinear';
      ctx.filter = 'bilinear';
      ctx.antialias = 'subpixel';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 360, 100);
});
              let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
              jimp.read(url, (err, ava) => {
                  if (err) return console.log(err);
                  ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                      if (err) return console.log(err);
                      let Avatar = Canvas.Image;
                      let ava = new Avatar;
                      ava.src = buf;
                      ctx.drawImage(ava, 8, 7, 86, 86);
                      if (!row) return message.reply("**Your Level Is 0 , Try .daily , Then Try This Command **");
                      ctx.font = '20px Cairo';
                      ctx.fontSize = '20px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.points), 263, 45);
                      ctx.font = '20px Cairo';
                      ctx.fontSize = '20px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.level), 135, 45);
                     ctx.font = '20px Cairo';//xp
                      ctx.fontSize = '28px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(userData.points, 330, 46);
                                              //Name
                        ctx.font = "20px Cairo";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(getvalueof.username, 240, 85);

                      message.channel.send(`**:pencil: |  Here is ${getvalueof.username}'s Rank Card**`,{file : canvas.toBuffer()});
message.channel.stopTyping(1)
                      });
                  });
                });


            console.log('rank is Using');
    }


 if(message.content.startsWith('!adress')) {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
        var args = message.content.split(" ").join(" ").slice(8)
        if (!args) return;
        db.updateText(`message_${message.author.id}`, args).then(i =>{
            message.channel.send(`Profile Message Changed To ${i.text}`)
        })
    }

    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith('!rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر ض1
            message.channel.send(`** :white_check_mark: | Successly Added To ${message.author} rep point ! **`)
        } else {
    const embed = new Discord.RichEmbed()
      .setTitle('خطأ!')
      .setColor('RED')
      .setDescription('**:alarm_clock: | لقد قمت بذالك بالفعل !, للإرسال مرة آخرى حاول ' + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
      message.channel.sendEmbed(embed);
        }
       }

    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

const db = require("quick.db");
let dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
client.on("message",  message => {
    let args = message.content.split(' ').slice(1);

var prefix =`!`;
  let command = message.content.split(" ")[0];
      if (command === "choose") {
        if(!args[0]) return message.reply('يجب عليك اختيار رقم الخلفيه')
        if(dataPro[message.author.id].walls[args[0]]) {
        dataPro[message.author.id].ai = true;
        dataPro[message.author.id].wallSrc = dataPro[message.author.id].walls[args[0]].src;
        message.reply('تم بنجاح تغير الخلفيه');
        } else {
            message.reply('انت لا تملك هذه الخلفيه')
        }
    }

    if(message.content.startsWith(prefix + 'خلفيات')) {
        var walls = dataPro[message.author.id].walls;
        for(var wall in walls) {
            console.log(walls[wall]);
            message.channel.send(walls[wall]);// ;(
        }
    }
    var wallpapers = {
                1: {
                    src: 'walls/1414.jpg',
                    price: 1,
                },
                2: {
                    src: 'walls/1515.jpg',
                    price: 2,
                },
                3: {
                    src: 'walls/7777.jpg',
                    price: 3,
                },
                4: {
                    src: 'walls/9999.jpg',
                    price: 4,
                },
                5: {
                    src: 'walls/44444.jpg',
                    price: 5,
                },
            }
    if(!dataPro[message.author.id]) {
            dataPro[message.author.id] = {
                ai: false,
                wallSrc: './walls/default.jpg' ,
                walls: {}
            }
        }
         var prefix=`!`
    if(message.content.startsWith('!buy')) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) return message.reply("** Pls Try .daily And Try Agin**");
        if (!row) return message.reply("sadly you do not have any points yet!");
        let points = row.points;
        if(!args[0]) {
            let embed = new Discord.RichEmbed()
.setDescription('**ورقم الخلفية !buy لـشراء خلفية آستخدم آمر  ** ')
.addField('Profile starwars','Price : $1000 Number: 1')
.addField('Profile Sun','Preice: $1800 Number: 2')
.addField('Profile Tree','Price : $2300 Number: 3')
.addField('Profile Mount','Price: $3000 Number: 4')
.addField('Profile Old Tree','Price: $4000 Number: 5')
 .setImage("");
            message.channel.send({embed: embed});
        } else {

            if(wallpapers[args[0]].price > row.points) {
                message.reply('لا يمكنك شراء هذه الخلفيه لانك لا تملك المال الكافي لشرائها ')
            } else {
                if(dataPro[message.author.id].walls == wallpapers[args[0]]) return message.reply('انت تملك هذه الخلفيه مسبقاً');
                else {
                    row.points - wallpapers[args[0]].price;
                    sql.run(`UPDATE scores SET points = ${row.points - wallpapers[args[0]].price} WHERE userId = ${message.author.id}`);
                     dataPro[message.author.id].ai = true;
                     dataPro[message.author.id].walls[args[0]] = wallpapers[args[0]];
                    message.reply('تم بنجاح شراء الخلفيه للاستخدام الخلفيه اكتب .set '+args[0]);
                }

            }

        }

        });
        //message.reply('Hhihihi');
    }

    fs.writeFile('./walls.json', JSON.stringify(dataPro), (err) => {
     if(err) console.log(err.message);
 })
    if(message.content.startsWith('!profile1')) {
         if(!message.channel.guild) return message.reply('** This command only for servers**');
     var ment = message.mentions.users.first();
      var getvalueof;
      if(ment) {
        getvalueof = ment;
      } else {
        getvalueof = message.author;
      }
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {

    userData.level = curLevel;
  //  message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }
           var Canvas = require('canvas')
var jimp = require('jimp')
const snumber = require('short-number')
         sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}"`).then(row => {
message.channel.startTyping(1)
const w = ['./img/wall.png'];
      let Image = Canvas.Image,
          canvas = new Canvas(437, 437),
          ctx = canvas.getContext('2d');
      ctx.patternQuality = 'Cairo';
      ctx.filter = 'Cairo';
      ctx.antialias = 'Cairo';
      ctx.shadowColor = 'Cairo(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;



      fs.readFile(`${dataPro[getvalueof.id].wallSrc}`, function (err, Background) {
          fs.readFile(`${w[0]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 437, 437);
});
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 437, 437);
});



              let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
              jimp.read(url, (err, ava) => {
                  if (err) return console.log(err);
                  ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                      if (err) return console.log(err);
                      let Avatar = Canvas.Image;
                      let ava = new Avatar;
                      ava.src = buf;
                      ctx.drawImage(ava, 11, 47, 116, 116);
                      if (!row) return message.reply("**Your Level Is 0 , Try .daily , Then Try This Command **");
                      ctx.font = '25px Cairo';
                      ctx.fontSize = '55px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(snumber(row.level), 395, 75);
                      ctx.font = '25px Cairo';
                      ctx.fontSize = '95px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(`$${snumber(row.points)}`, 360, 428);
                                              //Name
                        ctx.font = "25px Cairo";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(getvalueof.username, 297, 140);
                      ctx.font = "17px Cairo";
                      ctx.fontSize = "12px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "left";
                      db.fetchObject(`message_${getvalueof.id}`).then(i => {

                          if (!i.text){
                              i.text = "Try .setinfo";
                          };
                      ctx.fillText(i.text, 140,264);
                   ctx.font = "25px  Cairo";
                      ctx.fontSize = "15px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText('Soon', 1790,1200);
                      // REP
                    ctx.font = "25px  Cairo";
                      ctx.fontSize = "100px";
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(`❤️: ${rep[message.author.id].repo}`, 220,343);
                     ctx.font = '25px Cairo';//xp
                      ctx.fontSize = '28px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(userData.points, 80, 428);
                      message.channel.send(`**:pencil: |  Here is ${getvalueof.username}'s Profile**`,{file : canvas.toBuffer()});
message.channel.stopTyping(1)
                      });
                  });
                });
         });

            console.log('ProFile is Using');
    }


      if(message.content == `${prefix}levelup`) {

          try {
             sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 2, 0]);
    } else {
      let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);

        var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/up1.png','./img/up2.png','./img/up.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(88, 110),
            Ui = canvas.getContext('2d');
        Ui.patternQuality = 'bilinear';
        Ui.filter = 'bilinear';
        Ui.antialias = 'subpixel';
        Ui.shadowColor = 'rgba(0, 0, 0, 0.4)';
        Ui.shadowOffsetY = 2;
        Ui.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new BG;
            ground.src = Background;
            Ui.drawImage(ground, 0, 0, 88, 110); // 0, 0, 207, 176

})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".gif" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        let Avatar = Canvas.Image;
                    /*    Ui.arc(80,80,50,0,2*Math.PI);
                        Ui.clip();*/
                        let ava = new Avatar;
                        ava.src = buf;
                        Ui.drawImage(ava, 19, 3, 52, 50);
                        Ui.font = 'bold 30px Helvetica';
                        Ui.fontSize = '30px';
                        Ui.fillStyle = "#c4bdbd";
                        Ui.textAlign = "center";
                        Ui.fillText(`${row.level}`, 45, 105);
                    message.channel.send(`:up: ** |  ${message.author.username}    Level Up! To ${row.level} ** `, {file: canvas.toBuffer()});
                  });
         });

      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 1]);
    });
  });

          } catch (e) {
              console.log(e.message);
          }
          }



    try{
    let args = message.content.split(' ').slice(1);
  if (message.content.startsWith('!owner')) {
        if(!message.channel.guild) return message.reply('** This command only for servers**');
    if(message.author.user !== '441963199462506508' && message.author.id !== '415602689100087297') return message.reply('**This Command Just For Admins**')// :|
    console.log(args[0]);
  client.users.get(args[0]).send(args[1]);


    }
    }catch(error){console.log(error)}
});

                        function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400);
    let hours = Math.floor(time % 31536000 % 86400 / 3600);
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
    days = days > 9 ? days : '0' + days;
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`;

}

client.login(process.env.BOT_TOKEN)

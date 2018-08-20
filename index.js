const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('?[????????????????????????????????????]?');
    console.log('')
    console.log('            ?[????????????]?')
    console.log('              Bot Is Online')
    console.log('            ?[????????????]?')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('?[????????????????????????????????????]?')
          client.user.setActivity("By: YodaBrro#4557",{type: 'STREAMING'});          
});




client.on('message', message => {
  if (message.content === "!roll 1") {
 message.channel.sendMessage(Math.floor(Math.random() * 25));
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

👑 !mcstats 『Give an informations for MC Server』

👑!edit  『 Edit a Message 』

👑!ct  『To Create A Chat Room』

👑!cv  『To Create a Voice Room』

👑!delete  『Delete a channel if it is Chat or Voice』

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

!invite | Add the Bot

!support| Support Server

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






var prefix = "!";

client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

// !say
 if (command === "say") {
         message.delete()
   message.channel.sendMessage(args.join(" ")).catch(console.error);
 }
 


if (command == "embed") {
   let say = new Discord.RichEmbed()
   .setDescription(args.join("  "))
   .setColor(0x23b2d6)
   message.channel.sendEmbed(say);
   message.delete();
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
 
 client.on('message', (message) => {
   if (message.content.startsWith('!kick')) {
       var member= message.mentions.members.first();
       member.kick().then((member) => {
           message.channel.send(member.displayName + ' This user has been Kicked');
       }).catch(() => {
           message.channel.send(":x:");
       });
   }
}); 


client.on('message', (message) => {
   if (message.content.startsWith('!ban ')) {
     if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You must have Ban Members Permissions');
       var member= message.mentions.members.first();
       member.ban().then((member) => {
        message.channel.send(member.displayName + 'This user hase been banned');
       }).catch(() => {
           message.channel.send('Error :_:');
       });
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
        .addField(':closed_lock_with_key: Roles  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
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
             .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
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
  client.user.setGame(" !help | !invite ");
}); 

client.on("message", message => {
   var prefix = "!";
           var args = message.content.substring(prefix.length).split(" ");
           if (message.content.startsWith(prefix + "clear")) {
if (!args[1]) {
                               let x5bz1 = new Discord.RichEmbed()
                               .setDescription("-clear <number>")
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
     message.author.send(' |https://discord.gg/4EZkSjQ| For any Problem').catch(e => console.log(e.stack));

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
if (message.content === '!invite') {
     message.author.send(' Bot Link |  https://discordapp.com/api/oauth2/authorize?client_id=480067910966968330&permissions=0&scope=bot ').catch(e => console.log(e.stack));

   }
  } 
 });
 
 

client.on('message', message => {
    if (message.content === "!invite") {
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
client.on("guildMemberAdd", member => {
 member.createDM().then(function (channel) {
 return channel.send(`:rose:  Welcome to the Server:rose: 
:crown:${member}:crown:
.setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg
You are Member No. ${member.guild.memberCount} `) 
}).catch(console.error)
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
        .setFooter(`SmartChoice Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Have no Permission 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'developers-hangout');
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
    let modlog = client.channels.find('name', 'developers-hangout');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** You Do Not have 'Muted' Role **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** Mention a User**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Usage:', '!unmute')
      .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
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

client.login(process.env.BOT_TOKEN)

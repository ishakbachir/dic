//======================== EXPRESS ===========================//
const express = require('express');
const app = express();
app.listen(() => console.log(('General Progs Help you every time ↗️ ')));
app.use('/', (req, res) => {  res.send("<center><h1>Bot online 24H</h1></center>");
});
//============================================================//
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ButtonStyle,
  userMention,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
  permissionOverwrites
} = require("discord.js");

const client = new Client({
  intents: 131071,
});

const prefix = "+"; // البريفكس

client.on("ready", () => {
  console.log(`🤖 - Logged in as ${client.user.tag}!`);
  console.log(`✅ - index.js`);
  client.user.setActivity("General Progs ON TOP", { type: 3 });
  client.user.setStatus("idle");
});

//====================================== جميع الاكواد هنا ===================================================//
const owner = "718149374676303962" // ايدي الاونر
const wordReplacements = {
  'حساب': '7ساب',
  'نيترو': 'نيتر9',
  'ديسكورد': 'ديسك9رد',
  'شوب': 'ش9ب',
  'بروجكت': 'بر9جكت',
  'ستور': 'ست9ر',
  'بوت': 'ب9ت',
  'توكن' : "ت9كن",
  'توكنات' : "ت9كنات",
  'بروجكت'  : "بر9جكت",
  'بروجكتات' : 'بر9جكتات',
  "سعر" : 'س3ر',
  "متوفر" : "مت9فر",
  "شراء" : "شر|ء",
  "اشتري" : "اشtري",
  "للبيع" : "للبي3",
  "ابيعه" : "ابي3ه",
  "ينباع" : "ينبا3",
  "اشتريه" : "اشtريه",
  "سيرفر" : "سيrفر",
  "سيرفرات" : "سيrفرات",
  "بوست" : "ل9ست",
  "بوستات" : "ب9ستات",
  "نيتروهات" : "نيتر9هات",
  "اسعار" : "اس3ار",
  "دفع" : "دف3",
  "مدفوع" : "مدفو3",
  "نتفليكس" : "نtفليكس"
// ضيف الكلمات التي تريدها مثال :
  // "الكلمة الاصلية" : "الكلمة المشفرة"
};

client.on("messageCreate" , (message) => {
  if(message.content == prefix + "tchfir"){
    if(message.author.id !== owner) return message.delete();

    const embed = new EmbedBuilder()
                          .setTitle('لتشفير منشورك اضغط على الزر واكتبه')
                          .setColor('DarkButNotBlack');
    const btn = new ButtonBuilder()
                        .setCustomId('tchfir')
                        .setStyle(ButtonStyle.Success)
                        .setLabel('تشفير')
                        .setEmoji('🔐');
    const row = new ActionRowBuilder().addComponents(btn);
    message.delete();
    message.channel.send({embeds : [embed] , components : [row]});
  }
})

client.on("interactionCreate" , (interaction) => {
  if(interaction.customId == "tchfir"){
    const modal = new ModalBuilder()
                      .setTitle('تشفير منشور')
                      .setCustomId('tchfirmodal');
    const inp = new TextInputBuilder()
                      .setLabel('منشورك')
                      .setPlaceholder('ضع منشورك هنا')
                      .setCustomId('inp1')
                      .setStyle(TextInputStyle.Paragraph)
                      .setMaxLength(2000);
    const row = new ActionRowBuilder().addComponents(inp)
    modal.addComponents(row)
    interaction.showModal(modal)
  }else if(interaction.customId == "tchfirmodal"){
    const btn = new ButtonBuilder()
                      .setCustomId('copytxt')
                      .setLabel('نسخ')
                      .setStyle(ButtonStyle.Primary)
                      .setEmoji('📋');
    const row = new ActionRowBuilder().addComponents(btn);
    const v = interaction.fields.getTextInputValue('inp1');
    let modifiedContent = v;
    for (const word in wordReplacements) {
      if (wordReplacements.hasOwnProperty(word)) {
        const replacement = wordReplacements[word];
        modifiedContent = modifiedContent.replace(new RegExp(word, 'gi'), replacement);
      }
    }
    interaction.reply({content : `${modifiedContent}` , components : [row],  ephemeral : true})
  }else if(interaction.customId == "copytxt"){
    const msgc = interaction.message.content;
    interaction.user.send(`__**منشورك بعد التشفير :**__ ${msgc}`).then(() => {interaction.reply({content : 'تم ارسال المنشور الى خاصك انسخه من هناك' , ephemeral : true})}).catch(() => interaction.reply({ content : 'عذرا خاصك مغلق' , ephemeral : true}))
  }
})




//===================================== جميع الاكواد هنا ====================================================//
client.login(process.env.generalp); // توكن البوت 
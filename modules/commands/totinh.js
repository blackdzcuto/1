module.exports.config = {
  name: "totinh",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Mod Syn Credit(lụm)",
  description: "Tỏ tình theo cách đáng iu :3 <3",
  commandCategory: "love",
  usages: "@mention",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
}

module.exports.run = async function ({ api, args, Users, event }) {
  var mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("𝗖𝗮̂̀𝗻 𝗽𝗵𝗮̉𝗶 𝘁𝗮𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘁𝗼̉ 𝘁𝗶̀𝗻𝗵", event.threadID);
  let name = event.mentions[mention];
  var arraytag = [];
  arraytag.push({ id: mention, tag: name });
  var a = function (a) { api.sendMessage(a, event.threadID); }
  a("Em à!");
  setTimeout(() => { a({ body: "𝗖𝗵𝗮̀𝗼 𝗯𝗮𝗲 𝗮𝗻𝗵 𝗱𝘂̛́𝗻𝗴 𝗱𝗮̂𝘆 𝘁𝘂̛̀ 𝘀𝗮́𝗻𝗴 𝗱𝗲̂́𝗻 𝘁𝗼̂́𝗶" + " " + name, mentions: arraytag }) }, 3000);
  setTimeout(() => { a({ body: "𝗧𝘂̛̣ 𝗱𝘂̛𝗻𝗴 𝗮𝗻𝗵 𝗴𝗮̣̆𝗽 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮𝗲 :𝟯" + " " + name, mentions: arraytag }) }, 5000);
  setTimeout(() => { a({ body: "𝗘𝗺 𝗱𝗲̣𝗽 𝗾𝘂𝗮́, 𝗲𝗺 𝘅𝗶𝗻𝗵 𝗾𝘂𝗮́ 𝗮𝗻𝗵 𝗺𝘂𝗼̂́𝗻 𝗱𝘂̛𝗼̛̣𝗰 𝗹𝗮̀𝗺 𝗾𝘂𝗲𝗻 :𝟯" + " " + name, mentions: arraytag }) }, 7000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝗱𝗮̃ 𝗶𝘂 𝗲𝗯𝗲 𝘁𝘂̛̀ 𝗰𝗮́𝗶 𝗻𝗵𝗶̀𝗻 𝗱𝗮̂̀𝘂 𝘁𝗶𝗲̂𝗻 :<" + " " + name, mentions: arraytag }) }, 9000);
  setTimeout(() => { a({ body: "𝗧𝗶𝗲̂́𝗻𝗴 𝘀𝗲́𝘁 𝗮́𝗶 𝘁𝗶̀𝗻𝗵 𝗱𝗮̃ 𝘅𝗶𝗲̂𝗻 𝗾𝘂𝗮 𝗮𝗻𝗵 𝗹𝗮̀𝗺 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺 𝗮𝗻𝗵 𝗸𝗵𝗲́𝘁 𝗹𝗲̣𝘁" + " " + name, mentions: arraytag }) }, 12000);
  setTimeout(() => { a({ body: "𝗡𝗵𝘂̛𝗻𝗴 𝗺𝗮̀ 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗮𝗼" + " " + name, mentions: arraytag }) }, 15000);
  setTimeout(() => { a({ body: "𝗩𝗶̀ 𝘆𝗲̂𝘂 𝗲𝗺, 𝗮𝗻𝗵 𝗯𝗮̂́𝘁 𝘁𝘂̛̉" + " " + name, mentions: arraytag }) }, 17000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘀𝗲̃ 𝗴𝗼̣𝗶 𝗲𝗺 𝗹𝗮̀ 𝗯𝗮𝗲" + " " + name, mentions: arraytag }) }, 20000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘀𝗲̃ 𝗰𝗵𝗶𝗲̂̀𝘂 𝗰𝗵𝘂𝗼̣̂𝗻𝗴 𝗯𝗮𝗲, 𝗰𝗵𝗼 𝗯𝗮𝗲 𝗮̆𝗻 𝗰𝗵𝗼 𝗯𝗮𝗲 𝗻𝗴𝘂̉ :𝟯" + " " + name, mentions: arraytag }) }, 23000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘀𝗲̃ 𝗵𝗼̂𝗻 𝗹𝗲̂𝗻 𝘁𝗿𝗮́𝗻 𝗲𝗺 𝘃𝗮̀ 𝗯𝗮̉𝗼 𝗿𝗮̆̀𝗻𝗴 𝗮𝗻𝗵 𝘆𝗲̂𝘂 𝗯𝗮𝗲 𝗰𝘂̉𝗮 𝗮𝗻𝗵 𝗿𝗮̂́𝘁 𝗻𝗵𝗶𝗲̂̀𝘂" + " " + name, mentions: arraytag }) }, 25000);
  setTimeout(() => { a({ body: "𝗕𝗮𝗲 𝗼̛̉ 𝗰𝗵𝘂𝗻𝗴 𝘃𝗼̛́𝗶 𝗮𝗻𝗵, 𝗮𝗻𝗵 𝘀𝗲̃ 𝘆𝗲̂𝘂 𝗰𝗵𝗶𝗲̂̀𝘂 𝗲𝗺 𝗿𝗮̂́𝘁 𝗻𝗵𝗶𝗲̂̀𝘂" + " " + name, mentions: arraytag }) }, 28500);
  setTimeout(() => { a({ body: "𝗧𝗵𝘂̛̣𝗰 𝘀𝘂̛̣ 𝗮𝗻𝗵 𝗿𝗮̂́𝘁 𝘆𝗲̂𝘂 𝗲𝗺 <3" + " " + name, mentions: arraytag }) }, 31000);
  setTimeout(() => { a({ body: "𝗕𝗮𝗲 𝗹𝗮̀𝗺 𝗮𝗻𝗵 𝘁𝗵𝗮𝗼 𝘁𝗵𝘂̛́𝗰 𝗻𝗮𝗼 𝗻𝘂̛́𝗰 𝗱𝗲̂́𝗻 𝗻𝗼̂̃𝗶 𝗮̆𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗴𝗼𝗻 𝗻𝗴𝘂̉ 𝗸𝗵𝗼̂𝗻𝗴 𝘆𝗲̂𝗻" + " " + name, mentions: arraytag }) }, 36000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘀𝗲̃ 𝗹𝗮̀𝗺 𝗼𝘀𝗶𝗻 𝗰𝗵𝗼 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 𝗰𝘂̉𝗮 𝗮𝗻𝗵 𝘀𝘂𝗼̂́𝘁 𝗰𝘂𝗼̣̂𝗰 𝗱𝗼̛̀𝗶" + " " + name, mentions: arraytag }) }, 39000);
  setTimeout(() => { a({ body: "𝗖𝗵𝗼̛̀ 𝗮𝗻𝗵 𝗺𝗼̣̂𝘁 𝗰𝗵𝘂́𝘁 𝗻𝗵𝗲́ 𝗯𝗮𝗲 :𝟯, 𝗮𝗻𝗵 𝗻𝗵𝗼̛́ 𝗲𝗺 𝗿𝗼̂̀𝗶 𝗹𝗮̂́𝘆 𝗮̉𝗻𝗵 𝗲𝗺 𝗿𝗮 𝗻𝗴𝗮̆́𝗺 𝗰𝗮́𝗶" + " " + name, mentions: arraytag }) }, 40000);
  setTimeout(() => { a({ body: "𝗢𝗰𝗲 𝗿𝗼̂̀𝗶 𝘃𝗼̛̣ 𝗮𝗻𝗵 𝘃𝗮̂̃𝗻 𝗿𝗮̂́𝘁 𝘅𝗶𝗻𝗵 𝘁𝘂̛𝗼̛𝗶 :3" + " " + name, mentions: arraytag }) }, 65000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘆𝗲̂𝘂 𝗲𝗺 𝗿𝗮̂́𝘁 𝗻𝗵𝗶𝗲̂̀𝘂 <𝟯" + " " + name, mentions: arraytag }) }, 70000);
  setTimeout(() => { a({ body: "𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗮𝗻𝗵 𝗰𝗵𝗶̉ 𝘆𝗲̂𝘂 𝗺𝗶̀𝗻𝗵 𝗲𝗺 𝘁𝗵𝗼̂𝗶 :3" + " " + name, mentions: arraytag }) }, 75000);
  setTimeout(() => { a({ body: "𝗧𝘂̛𝗼̛𝗻𝗴 𝗹𝗮𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗯𝗶𝗲̂́𝘁 𝗱𝘂̛𝗼̛̣𝗰 𝗻𝗵𝘂̛𝗻𝗴 𝗯𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗮𝗻𝗵 𝗰𝗵𝗶̉ 𝗰𝗼́ 𝗺𝗶̀𝗻𝗵  𝗯𝗮𝗲 𝗺𝗮̀ 𝘁𝗵𝗼̂𝗶 ^^" + " " + name, mentions: arraytag }) }, 80000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝗺𝘂𝗼̂́𝗻 𝘁𝘂̛𝗼̛𝗻𝗴 𝗹𝗮𝗶 𝗰𝘂̉𝗮 𝗮𝗻𝗵 𝘃𝗼̛́𝗶 𝗲𝗺 𝗼̛̉ 𝗯𝗲̂𝗻 𝗻𝗵𝗮𝘂" + " " + name, mentions: arraytag }) }, 85000);
  setTimeout(() => { a("𝗡𝗼́𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗮𝗻𝗵 𝗰𝘂̃𝗻𝗴 𝗵𝗼̛𝗶 𝗺𝗲̣̂𝘁 𝗰𝗵𝘂́𝘁 𝘅𝗶́𝘂 𝗿𝘂̀𝗶") }, 90000);
  setTimeout(() => { a({ body: "𝗖𝗵𝗼̂́𝘁 𝗹𝗮̣𝗶 𝗻𝗵𝗲̣ 𝗻𝗵𝗮̀𝗻𝗴 𝘁𝗵𝗼̂𝗶" + " " + name, mentions: arraytag }) }, 95000);
  setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝘆𝗲̂𝘂  𝗯𝗮𝗲 𝗿𝗮̂́𝘁 𝗻𝗵𝗶𝗲̂̀𝘂 𝗺𝗼𝗮𝗮𝗮𝗮 <3" + " " + name, mentions: arraytag }) }, 100000);
  setTimeout(() => { a({ body: "𝗕𝗮𝗲 𝗹𝗮̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘆𝗲̂𝘂 𝗮𝗻𝗵 𝗻𝗵𝗲́ <𝟯" + " " + name, mentions: arraytag }) }, 105000);
   setTimeout(() => { a({ body: "𝗔𝗻𝗵 𝟯𝗬𝗲̂𝘂 𝗕𝗮𝗲 𝗡𝗵𝗶𝗲̂̀𝘂 𝗟𝗮̆́𝗺 𝗡𝗲̂𝗻 𝗕𝗮𝗲 𝗟𝗮̀𝗺 𝗣𝗿𝗶𝗻𝗰𝗲𝘀𝘀 𝗖𝘂̉𝗮 𝗔𝗻𝗵 𝗡𝗵𝗲́ 𝗕𝗮𝗲 <3" + " " + name, mentions: arraytag }) }, 105000);
  setTimeout(() => { a("𝗔𝗻𝗵 𝗔𝗶 𝗟𝗼̛́𝗽 𝗗𝗶𝘂 𝗕𝗮𝗲 𝗥𝗮̂́𝘁 𝗡𝗵𝗶𝗲̂̀𝘂 <3 ") }, 110000);
}
 const num = 10//số lần spam bị ban -1, ví dụ 5 lần gì lần 6 sẽ bị ban
 const timee = 60 // trong thời gian `timee` spam `num` lần sẽ bị ban
 module.exports.config = {
  name: "spamban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "NTKhang", //fix get by  D-Jukie
  description: `tự động cấm người dùng nếu spam bot ${num} lần/${timee}s`,
  commandCategory: "Hệ Thống",
  usages: "x",
  cooldowns: 5
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Tự động cấm người dùng nếu spam ${num} lần/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*1000)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${num} lần/${timee}s` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("💬 𝐈𝐃: " + senderID + " | " + " 🎟️ 𝐓𝐞̂𝐧: " + dataUser.name + `\n𝐁𝐚̣𝐧 𝐕𝐮̛̀𝐚 𝐁𝐢̣ 𝐁𝐨𝐭 𝐓𝐨̂́𝐧𝐠 𝐂𝐨̂̉ 𝐕𝐚̀𝐨 𝐓𝐮̀\n𝐕𝐢̀ 𝐥𝐲́ 𝐝𝐨: 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 ${num} 𝐥𝐚̂̀𝐧/${timee}s ⏰\n𝐍𝐞̂́𝐮 𝐥𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐪𝐮𝐞𝐧 𝐡𝐚̃𝐲 𝐢𝐛 𝐚𝐝𝐦𝐢𝐧 𝐬𝐡𝐨𝐰 𝐝𝐮́ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐠𝐨̛̃ 𝐛𝐚𝐧 💌\nhfb.me/100006155348307  \n𝐁𝐚́𝐨 𝐂𝐚́𝐨 𝐓𝐨̣̂𝐢 𝐍𝐡𝐚̂𝐧 𝐓𝐨̛́𝐢 𝐀𝐝𝐦𝐢𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`🚫 𝗣𝗵𝗮̣𝗺 𝗻𝗵𝗮̂𝗻 𝘀𝗽𝗮𝗺 ${num} 𝗹𝗮̂̀𝗻/${timee}s\n🔰 𝗧𝗲̂𝗻: ${dataUser.name} \n⚠️ 𝗜𝗗: ${senderID}\n💬 𝗜𝗗 𝗕𝗼𝘅: ${threadID} \n🎟️ 𝗡𝗮𝗺𝗲𝗕𝗼𝘅: ${namethread} \n🕐 𝗟𝘂́𝗰: ${timeDate}`, 
          ad);
    }
    })
    }
  }
};
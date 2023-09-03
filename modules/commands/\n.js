module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🥰","💝","🔥","🌹","🍁","🎊","🌟","❤️","💓"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://api.apibot.repl.co/thinh',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','data','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					api.sendMessage({
                                                body: `💓 === [ Vũ Thắng × sai lệnh ] === 💓\n━━━━━━━━━━━━━━━━━━\n🧸 Hôm Nay Là ${thu}\n⏰ Ngày: ${timeNow} \n◆━━━◆『 ${icon} 』◆━━━◆ \n ✏️Thính: ${tho}\n━━━━━━━━━━━━━━━━━━\n⚙️ Tình Trạng Hệ Thống : ổn \n🚀 Tốc Độ Xử Lí : ${Date.now() - timeStart} Giây\n➩ Bot đã Online : ${anh} Giờ ${la} Phút ${vtoan} Giây 💓\n━━━━━━━━━━━━━━━━━━\n🐸 Thả Cảm Xúc "👍" Vào Tin Nhắn Nếu Muốn Xem Thêm Thông Tin ツ`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apilaiminhhien.apilord.repl.co/api/gaimaid.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ MENU THONG TIN ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. Danh Sách Cắc Lệnh Phổ Biến\n𝟮. Thông Tin Chi Tiết Về Bot\n\n━━━━━━━━━━━━━━━━━━\n=== [ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗔𝗗𝗠𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟯. 𝐓𝐡𝐨𝐧𝐠 𝐓𝐢𝐧 𝐀𝐝𝐦𝐢𝐧 \n\nReply Tin Nhắn Này Theo Số Để Xem Thông Tin Bạn Muốn Xem`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`Đang xử lí thông tin !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `= [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] =\n━━━━━━━━━━━━━━━━━ \n🐼 Cắc Lệnh Thường Được Sử Dụng🐼\n 

🌸 .menu all: Nêu Muốn Xem Tất Cả Lệnh Bot Có\n
💞 .checktt và .checktt all: Để Xem Thông số Tương Tác\n
🌷 .congcu: Để Xem Cắc Lênh\n
💕 .box info: để xem thông tin box\n 
💍 .ghep và .ghép với .ghepdoi: lệnh này sẽ random 1 người bất kì trong box để ghép đổi\n
🕊️ .cap: chụp màn hình trang cá nhân của bạn\n
☠️ .masoi: game ma sói ngay trong box của bạn\n
💝 .luatbox: Luật Box Thông Dụng đã được Admin cài sẵn\n
💓 .chatgpt: trả lời những thắc mắc và đưa cho bạn lời khuyên tốt\n
🎥 .ytb: phát video youtube qua tìn kiếm
🎼 .sing + tên bài hát : phát nhạc bằng voice\n
👤 .cardinfo: tạo ảnh thông tin siêu chất
\n🔗 .imgur : vứt ảnh của bạn lên web để lấy link và quăng link ảnh vào mặt bạn
\n💗 .4k: làm nét ảnh siêu vip 
🌹 .art + reply ảnh : vẽ anime siêu chát\n
❤____________vũ thắng_____________❤\n
━━━━━━━━━━━━━━━━━━\n
💓 ====== [ 𝐓𝐨 𝐕𝐮 𝐓𝐡𝐚𝐧𝐠 ] ====== 💓 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "2": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝐂𝐑𝐄𝐀𝐓𝐈𝐎𝐍 𝐓𝐄𝐀𝐌 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `=== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ ] ===
👤 𝗧𝗲̂𝗻: 𝐓𝐨 𝐕𝐮 𝐓𝐡𝐚𝐧𝐠
🎟️ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: vthang
🌹 𝗧𝘂𝗼̂̉𝗶: 𝟏𝟓
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟎𝟖-𝟎𝟖-𝟐𝟎𝟎𝟖
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟏𝐦𝟕𝟐
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:𝐍𝐨𝐧𝐞 
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐓𝐡𝐚𝐧𝐡 𝐇𝐨𝐚
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐓𝐡𝐚𝐧𝐡 𝐇𝐨𝐚
💞 𝗖𝘂𝗻𝗴: 𝐒𝐮 𝐓𝐮♌
💐 𝗚𝘂: diu dang,ngoan
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: hơi sad,hòa đồng,không trẩu
🌐 𝗖𝗮́𝗰 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 𝗔𝗗𝗠𝗜𝗡 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ↓
➠ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟭: hentaiz.vn
➠ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟮: sex.xnxx
━━━━━━━━━━━━━━━━━━
=== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ ] ===
━━━━━━━━━━━━━━━━━━
☎ 𝗦Đ𝗧&𝗭𝗮𝗹𝗼: 0365385958
➠ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: fb.me/100006155348307 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `=== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ ] ===
👤 𝗧𝗲̂𝗻: vũ thắng
🎟️ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: None
🌹 𝗧𝘂𝗼̂̉𝗶: 15 
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐚𝐦
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟎𝟖/0𝟖/𝟐𝟎𝟎𝟖
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟏𝐦𝟖
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:chưa ny
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: thanh hóa
🏠 𝗡𝗼̛𝗶 𝗼̛̉: thanh hóa
💞 𝗖𝘂𝗻𝗴: Sư tử
💐 𝗚𝘂: 𝐊𝐡𝐨̂𝐧𝐠 𝐛𝐢𝐞̂́𝐭 𝐧𝐮̛̃𝐚
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝐃𝐞̂̃ 𝐠𝐚̂̀𝐧, 𝐭𝐡𝐚̂𝐧 𝐭𝐡𝐢𝐞̣̂𝐧
🌐 𝗖𝗮́𝗰 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝗔𝗗𝗠𝗜𝗡 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 ↓
➠ 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝟭: hentaiz.vn
━━━━━━━━━━━━━━━━━━

➠ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: fb.me/100006155348307`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.apibot.repl.co/phongcanh')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
      }
module.exports.config = {
	name: "min",
	version: "1.0.2",
	hasPermssion: 1,
	credits: "Mirai mod by HĐGN",
	description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 0
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
		"sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}

module.exports.run = async ({ api, event, args, getText }) => {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
        var path = __dirname + `/cache/snoti.png`;
        var path = __dirname + `/cache/snoti.mp4`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body:"💸 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝗧𝗨̛̀ 𝐀𝐃𝐌𝐈𝐍 💕\n\n" + "「" + args.join(" ") + "」\n\n" + "⚾️" + "𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐝 𝐁𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉.\n" + "⚾️" + "𝐀𝐃𝐌𝐈𝐍:  𝐕𝐓𝐡𝐚𝐧𝐠" + "🍑",attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 100));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage("🔊 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝗧𝗨̛̀ 𝐀𝐃𝐌𝐈𝐍 🤍\n\n" + "「" + args.join(" ") + "」\n\n" + "⚾️" + "𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐝 𝐁𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉.\n" + "💕" + "𝐀𝐃𝐌𝐈𝐍: 𝐕𝐓𝐡𝐚𝐧𝐠" + "🍑", idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 100));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }
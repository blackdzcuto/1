const axios = require("axios");
const fs = require("fs");
module.exports.config = {
	name: "wall",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk - táo",
	description: "Cap màn hình",
	commandCategory: "Công cụ",
    cooldowns: 5
}
module.exports.onLoad = async () => {
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    var cc = [
      "https://i.imgur.com/gFj89D4.jpeg",
"https://i.imgur.com/8AKZQW7.jpeg",
"https://i.imgur.com/n7DNce1.jpeg",
      "https://i.imgur.com/hbYSOfj.jpeg",
              ];
let image = [];
 for(let i = 0; i < 4; i++) {
    const stream = (await axios.get(cc[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const ccc = {
    body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━
[👉]➜ 𝗗𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗰𝗮́𝗰 𝗹𝗼𝗮̣𝗶 𝗰𝗮𝗽 𝗯𝗮̣𝗻 𝗵𝗮̃𝘆 𝗰𝗵𝗼̣𝗻

𝟭. 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 ⚪
𝟮. 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 𝗻𝗲̂̀𝗻 𝗽𝗰 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 ⚪
𝟯. 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 đ𝗲𝗻 🖤
𝟰. 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 đ𝗲𝗻 🖤

[⚠️]➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻
 `,
    attachment: image
};
    if (!args[0]) {        
        return api.sendMessage(ccc, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
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
  const request = require("request");
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
          const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=6eGOYyp_OXFfHJCMqhBUCrrM; wd=1544x754; dpr=1.1458333730697632; datr=gJShZLJk9qu82JOnP63dLTV_; c_user=100093163953498; xs=43%3ADXZM0FtRT2tinA%3A2%3A1688310975%3A-1%3A14802; presence=EDvF3EtimeF1688310980EuserFA21B93163953498A2EstateFDutF0CEchF_7bCC; fr=0vu8tw5SQhVu0ivL5.AWUjNnaRAXx_PtKmSNurb-2rMk8.BkeLUC.Z5.AAA.0.0.BkoZUB.AWVcOwg3BQE; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;   `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=6eGOYyp_OXFfHJCMqhBUCrrM; wd=1544x754; dpr=1.1458333730697632; datr=gJShZLJk9qu82JOnP63dLTV_; c_user=100093163953498; xs=43%3ADXZM0FtRT2tinA%3A2%3A1688310975%3A-1%3A14802; presence=EDvF3EtimeF1688310980EuserFA21B93163953498A2EstateFDutF0CEchF_7bCC; fr=0vu8tw5SQhVu0ivL5.AWUjNnaRAXx_PtKmSNurb-2rMk8.BkeLUC.Z5.AAA.0.0.BkoZUB.AWVcOwg3BQE; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;  `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆 `,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "2": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=6eGOYyp_OXFfHJCMqhBUCrrM; wd=1544x754; dpr=1.1458333730697632; datr=gJShZLJk9qu82JOnP63dLTV_; c_user=100093163953498; xs=43%3ADXZM0FtRT2tinA%3A2%3A1688310975%3A-1%3A14802; presence=EDvF3EtimeF1688310980EuserFA21B93163953498A2EstateFDutF0CEchF_7bCC; fr=0vu8tw5SQhVu0ivL5.AWUjNnaRAXx_PtKmSNurb-2rMk8.BkeLUC.Z5.AAA.0.0.BkoZUB.AWVcOwg3BQE; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;  `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=6eGOYyp_OXFfHJCMqhBUCrrM; wd=1544x754; dpr=1.1458333730697632; datr=gJShZLJk9qu82JOnP63dLTV_; c_user=100093163953498; xs=43%3ADXZM0FtRT2tinA%3A2%3A1688310975%3A-1%3A14802; presence=EDvF3EtimeF1688310980EuserFA21B93163953498A2EstateFDutF0CEchF_7bCC; fr=0vu8tw5SQhVu0ivL5.AWUjNnaRAXx_PtKmSNurb-2rMk8.BkeLUC.Z5.AAA.0.0.BkoZUB.AWVcOwg3BQE; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;  `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "3": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=gVJ5ZI-MxCmEM1N693mnW4aT; dpr=0.9166666865348816; datr=YqyZZApk5zndC1DfoV9BXwFl; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwRAAAW_tSBAhbK--36CBMFFtquzYeYvS0A%22%2C%222%22%3A%22GSwVQBxMAAAWABaYpc_JDBYAABV-HBwYABgAFQQAABYBFgAWAAAWKAA%22%2C%2295%22%3A%22HCwRAAAWrgUWzp6UlgwTBRbars2HmL0tAA%22%7D%2C%22d%22%3A%22e2235ec0-8140-4b3c-9c55-6fbd1f3abb67%22%2C%22s%22%3A%220%22%2C%22u%22%3A%22tj4thj%22%7D; wd=1929x942; c_user=100071731943609; xs=10%3AvC3VPl13yVzurA%3A2%3A1688309122%3A-1%3A13640; fr=0ScHeBvFCHqPw8vgw.AWV1xF1b2Zj7dzQPaYj76ubMCQo.BkmelO.lq.AAA.0.0.BkoZIa.AWUqstC8cpo; presence=C%7B%22lm3%22%3A%22g.5779317278812663%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22g.9599221823484619%22%7D%2C%7B%22i%22%3A%22u.100030967444445%22%7D%2C%7B%22i%22%3A%22u.100061160525111%22%7D%2C%7B%22i%22%3A%22g.9596509933753466%22%7D%2C%7B%22i%22%3A%22u.100081797352234%22%7D%2C%7B%22i%22%3A%22u.100081873974938%22%7D%2C%7B%22i%22%3A%22g.4817242475022897%22%7D%2C%7B%22i%22%3A%22g.5268258479921093%22%7D%2C%7B%22i%22%3A%22g.24217357154529691%22%7D%2C%7B%22i%22%3A%22u.100005201702431%22%7D%2C%7B%22i%22%3A%22u.100049716393541%22%7D%2C%7B%22i%22%3A%22g.7028688170479436%22%7D%2C%7B%22i%22%3A%22g.6378329088924741%22%7D%2C%7B%22i%22%3A%22g.5965424696886111%22%7D%2C%7B%22i%22%3A%22g.6352325031533454%22%7D%2C%7B%22i%22%3A%22g.9645558118820068%22%7D%5D%2C%22utc3%22%3A1688310388058%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;   `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=gVJ5ZI-MxCmEM1N693mnW4aT; dpr=0.9166666865348816; datr=YqyZZApk5zndC1DfoV9BXwFl; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwRAAAW_tSBAhbK--36CBMFFtquzYeYvS0A%22%2C%222%22%3A%22GSwVQBxMAAAWABaYpc_JDBYAABV-HBwYABgAFQQAABYBFgAWAAAWKAA%22%2C%2295%22%3A%22HCwRAAAWrgUWzp6UlgwTBRbars2HmL0tAA%22%7D%2C%22d%22%3A%22e2235ec0-8140-4b3c-9c55-6fbd1f3abb67%22%2C%22s%22%3A%220%22%2C%22u%22%3A%22tj4thj%22%7D; wd=1929x942; c_user=100071731943609; xs=10%3AvC3VPl13yVzurA%3A2%3A1688309122%3A-1%3A13640; fr=0ScHeBvFCHqPw8vgw.AWV1xF1b2Zj7dzQPaYj76ubMCQo.BkmelO.lq.AAA.0.0.BkoZIa.AWUqstC8cpo; presence=C%7B%22lm3%22%3A%22g.5779317278812663%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22g.9599221823484619%22%7D%2C%7B%22i%22%3A%22u.100030967444445%22%7D%2C%7B%22i%22%3A%22u.100061160525111%22%7D%2C%7B%22i%22%3A%22g.9596509933753466%22%7D%2C%7B%22i%22%3A%22u.100081797352234%22%7D%2C%7B%22i%22%3A%22u.100081873974938%22%7D%2C%7B%22i%22%3A%22g.4817242475022897%22%7D%2C%7B%22i%22%3A%22g.5268258479921093%22%7D%2C%7B%22i%22%3A%22g.24217357154529691%22%7D%2C%7B%22i%22%3A%22u.100005201702431%22%7D%2C%7B%22i%22%3A%22u.100049716393541%22%7D%2C%7B%22i%22%3A%22g.7028688170479436%22%7D%2C%7B%22i%22%3A%22g.6378329088924741%22%7D%2C%7B%22i%22%3A%22g.5965424696886111%22%7D%2C%7B%22i%22%3A%22g.6352325031533454%22%7D%2C%7B%22i%22%3A%22g.9645558118820068%22%7D%5D%2C%22utc3%22%3A1688310388058%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;   `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 đ𝗲𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "4": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=gVJ5ZI-MxCmEM1N693mnW4aT; dpr=0.9166666865348816; datr=YqyZZApk5zndC1DfoV9BXwFl; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwRAAAW_tSBAhbK--36CBMFFtquzYeYvS0A%22%2C%222%22%3A%22GSwVQBxMAAAWABaYpc_JDBYAABV-HBwYABgAFQQAABYBFgAWAAAWKAA%22%2C%2295%22%3A%22HCwRAAAWrgUWzp6UlgwTBRbars2HmL0tAA%22%7D%2C%22d%22%3A%22e2235ec0-8140-4b3c-9c55-6fbd1f3abb67%22%2C%22s%22%3A%220%22%2C%22u%22%3A%22tj4thj%22%7D; wd=1929x942; c_user=100071731943609; xs=10%3AvC3VPl13yVzurA%3A2%3A1688309122%3A-1%3A13640; fr=0ScHeBvFCHqPw8vgw.AWV1xF1b2Zj7dzQPaYj76ubMCQo.BkmelO.lq.AAA.0.0.BkoZIa.AWUqstC8cpo; presence=C%7B%22lm3%22%3A%22g.5779317278812663%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22g.9599221823484619%22%7D%2C%7B%22i%22%3A%22u.100030967444445%22%7D%2C%7B%22i%22%3A%22u.100061160525111%22%7D%2C%7B%22i%22%3A%22g.9596509933753466%22%7D%2C%7B%22i%22%3A%22u.100081797352234%22%7D%2C%7B%22i%22%3A%22u.100081873974938%22%7D%2C%7B%22i%22%3A%22g.4817242475022897%22%7D%2C%7B%22i%22%3A%22g.5268258479921093%22%7D%2C%7B%22i%22%3A%22g.24217357154529691%22%7D%2C%7B%22i%22%3A%22u.100005201702431%22%7D%2C%7B%22i%22%3A%22u.100049716393541%22%7D%2C%7B%22i%22%3A%22g.7028688170479436%22%7D%2C%7B%22i%22%3A%22g.6378329088924741%22%7D%2C%7B%22i%22%3A%22g.5965424696886111%22%7D%2C%7B%22i%22%3A%22g.6352325031533454%22%7D%2C%7B%22i%22%3A%22g.9645558118820068%22%7D%5D%2C%22utc3%22%3A1688310388058%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;   `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=gVJ5ZI-MxCmEM1N693mnW4aT; dpr=0.9166666865348816; datr=YqyZZApk5zndC1DfoV9BXwFl; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwRAAAW_tSBAhbK--36CBMFFtquzYeYvS0A%22%2C%222%22%3A%22GSwVQBxMAAAWABaYpc_JDBYAABV-HBwYABgAFQQAABYBFgAWAAAWKAA%22%2C%2295%22%3A%22HCwRAAAWrgUWzp6UlgwTBRbars2HmL0tAA%22%7D%2C%22d%22%3A%22e2235ec0-8140-4b3c-9c55-6fbd1f3abb67%22%2C%22s%22%3A%220%22%2C%22u%22%3A%22tj4thj%22%7D; wd=1929x942; c_user=100071731943609; xs=10%3AvC3VPl13yVzurA%3A2%3A1688309122%3A-1%3A13640; fr=0ScHeBvFCHqPw8vgw.AWV1xF1b2Zj7dzQPaYj76ubMCQo.BkmelO.lq.AAA.0.0.BkoZIa.AWUqstC8cpo; presence=C%7B%22lm3%22%3A%22g.5779317278812663%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22g.9599221823484619%22%7D%2C%7B%22i%22%3A%22u.100030967444445%22%7D%2C%7B%22i%22%3A%22u.100061160525111%22%7D%2C%7B%22i%22%3A%22g.9596509933753466%22%7D%2C%7B%22i%22%3A%22u.100081797352234%22%7D%2C%7B%22i%22%3A%22u.100081873974938%22%7D%2C%7B%22i%22%3A%22g.4817242475022897%22%7D%2C%7B%22i%22%3A%22g.5268258479921093%22%7D%2C%7B%22i%22%3A%22g.24217357154529691%22%7D%2C%7B%22i%22%3A%22u.100005201702431%22%7D%2C%7B%22i%22%3A%22u.100049716393541%22%7D%2C%7B%22i%22%3A%22g.7028688170479436%22%7D%2C%7B%22i%22%3A%22g.6378329088924741%22%7D%2C%7B%22i%22%3A%22g.5965424696886111%22%7D%2C%7B%22i%22%3A%22g.6352325031533454%22%7D%2C%7B%22i%22%3A%22g.9645558118820068%22%7D%5D%2C%22utc3%22%3A1688310388058%2C%22v%22%3A1%7D; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNC4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Safari%2F537.36;   `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 đ𝗲𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
          }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("n", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("u", event.threadID, event.messageID); 
    }
    }
}
                         }
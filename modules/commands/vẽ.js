const axios = require('axios');

module.exports.config = {
  name: "vẽ",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "L.V. Bằng",
  description: "Text to image",
  commandCategory: "người dùng",
  usages: "text/reply",
  cooldowns: 10
};


async function shortUrl(url) {
  const res = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
  return res.data;
};

async function streamUrl(url) {
  const res = await axios({
    url: url,
    method: 'GET',
    responseType: 'stream'
  });
  return res.data;
};

module.exports.run = async function({ event, api, args }) {
  const { threadID, messageID } = event;
  try {
    let prompt;
    let messageArea;
    if (event.type === 'message_reply') {
      if (event.messageReply.attachments[0].type !== 'photo') {
        api.sendMessage('Vui lòng chỉ reply ảnh!', threadID, messageID);
        return;
      }
      const atm = [];
      let quantity = 0;
      for (let i = 0; i < event.messageReply.attachments.length; i++) {
        prompt = await shortUrl(event.messageReply.attachments[i].url);
        if (event.messageReply.attachments[i].type === 'photo') {
          const res = (await axios.get(`https://web.duongkum999.tech/meitutat/image-v2?url=${prompt}`)).data;
          atm.push(await streamUrl(res.image))
          quantity++
        }
      }
      api.sendMessage({
        body: `Ảnh của bạn nè !\nSố lượng: ${quantity} ảnh.`,
        attachment: atm
      }, threadID, messageID);
    } else {
      prompt = args.join(' ');
      if (!prompt) {
        api.sendMessage('Vui lòng nhập prompt hoặc reply hình ảnh!', threadID, messageID);
        return;
      } else {
        api.sendMessage('Đang tải...', threadID, async (err, info) => {
          messageArea = info.messageID;
        }, messageID);

      await api.sendMessage({
          body: 'Ảnh mà bạn yêu cầu nè!',
          attachment: await streamUrl(`https://web.duongkum999.tech/ai?prompt=${encodeURI(prompt)}&style_id=28&aspect_ratio=1:1`)
        }, threadID, messageID);
        return api.unsendMessage(messageArea);
      }
    }
  } catch (err) {
    api.sendMessage(err.message, threadID, messageID);
  }
}
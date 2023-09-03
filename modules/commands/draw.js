const axios = require("axios");

module.exports.config = {
  name: "draw",
  version: "1.0.0",
  credits: "NTKhang",
  hasPermission: 0,
  description: "Tạo ảnh từ văn bản bạn yêu cầu",
  usage: "prompt",
  commandCategory: "game",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const prompt = args.join(" ");
  if (!prompt)
    return api.sendMessage('Vui lòng nhập prompt!', threadID, messageID);

  try {
    const { data: imageStream } = await axios({
      url: "https://goatbotserver.onrender.com/taoanhdep/texttoimage",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        prompt,
        styleId: 28,
        aspect_ratio: "1:1"
      },
      responseType: "stream"
    });

    imageStream.path = "image.jpg";

    return api.sendMessage({
      body: 'vẽ xong rồi nè',
      attachment: imageStream
    }, threadID, messageID);
  } catch (err) {
    return api.sendMessage('Lỗi: ' + err.message, threadID, messageID);
  }
};
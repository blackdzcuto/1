let isSpamming = false;
module.exports.config = {
 name: "spam",
 version: "1.-.0",
 hasPermssion: 0,
 credits: "Trịnh Quốc Đại",
 description: "",
 commandCategory: "Group",
 usages: "[số điện thoại] [số lần spam]",
 cooldowns: 0
};

module.exports.run = async function ({ event, api, args, getText }) {
 const axios = require('axios');
 const delay = (delayInms) => new Promise(resolve => setTimeout(resolve, delayInms));
 const PREFIX = global.config.PREFIX;

 if (args[0] == "stop") {
  if (isSpamming) {
   isSpamming = false;
   api.sendMessage("Đã dừng spam thành công", event.threadID, event.messageID);
  } else {
   api.sendMessage("Bot đang không trong quá trình spam, không thể dừng", event.threadID, event.messageID);
  }
  return;
 }

 const phoneNumber = args[0];
 const numberOfSpams = parseInt(args[1], 10);

 if (!phoneNumber || !numberOfSpams) {
  api.sendMessage(`Sử dụng: ${PREFIX}spam [số điện thoại] [số lần spam] hoặc ${PREFIX}spam stop để dừng spam`, event.threadID, event.messageID);
  return;
 }

 if (numberOfSpams > 10 || numberOfSpams < 1) {
  api.sendMessage(`Số lần spam không được quá 10 lần và phải lớn hơn 0`, event.threadID, event.messageID);
  return;
 }

 isSpamming = true;
 for (let i = 0; i < numberOfSpams && isSpamming; i++) {
  await delay(20000);
    var author = "Trịnh Quốc Đại"
  try {
   const response = await axios.get(`https://key.shopdragonx.com/api/spamt.php?key=anorin&phone=${phoneNumber}`, { responseType: 'arraybuffer' });
   const message = response.data;
   api.sendMessage(`${message}`, event.threadID);
  } catch (err) {
   console.log(err);
   api.sendMessage(`Đã xảy ra lỗi trong quá trình spam. Vui lòng thử lại sau.`, event.threadID);
   return;
  }
 }
 isSpamming = false;
 }
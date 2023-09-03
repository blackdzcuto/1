module.exports.config = {
    name: "liqi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "cutaotokhong",
    description: "",
    commandCategory: "image",  
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    let timeStart = Date.now();
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập đúng định dạng [id | name]!', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
  const name = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
  ;
 
	 var callback = () => api.sendMessage({body:`Id : ${id} | Name : ${name}\nThời gian chờ : ${Math.floor((Date.now() - timeStart)/1000)}s`,attachment: fs.createReadStream(__dirname + "/cache/bannerliqi.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bannerliqi.png"),event.messageID);
	 return request(encodeURI(`https://s-2.hanakuhshsjsjshejsna.repl.co/canvas/liqivn?id=${id}&name=${name}`)).pipe(fs.createWriteStream(__dirname+'/cache/bannerliqi.png')).on('close',() => callback());     
}}
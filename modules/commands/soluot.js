module.exports.config = { 
         name: "soluot", 
         version: "1.0.0", 
         hasPermssion: 0, 
         credits: "D-Jukie", 
         description: "", 
         commandCategory: "Phương tiện", 
         usages: "", 
         cooldowns: 50
 }; 
  
 module.exports.run = async ({ api, event,  args }) => { 
 	var body = args.join(" ");
     var num = body.split("|");
     var text = num[0].split("-") || [num[0]] ;
     var msg = ""
     for(let i = 0; i <= num[1] ; i++) {
     	msg += `${i + 1} ${text[Math.floor(Math.random() * text.length)]}\n`
     } 
     return api.sendMessage(msg, event.threadID, event.messageID) 
 }
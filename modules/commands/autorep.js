const fs = require('fs-extra');

module.exports.config = {
	name: "autorep",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CThanh",
	description: "Tạo autorep cho 1 tin nhắn",
	commandCategory: "tiện ích",
	usages: "[autorep] => [text need autorep]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.onLoad = () => {
	const filePath = __dirname + "/cache/autorep.json";
	if (!fs.existsSync(filePath))
		fs.writeFileSync(filePath, "[]", 'utf-8');
};

module.exports.handleEvent = function({ api, event }) {
	if (event.type !== "message_unsend" && event.body.length !== -1) {
		const shortcut = fs.readJsonSync(__dirname + "/cache/autorep.json", { throws: false }) || [];
		const threadShortcut = shortcut.find(item => item.id == event.threadID);
		if (threadShortcut) {
			const getThread = threadShortcut.shorts;
			const messageShortcut = getThread.find(item => item.in == event.body);
			if (messageShortcut) {
				const shortOut = messageShortcut.out;
				if (shortOut.includes(" | ")) {
					const arrayOut = shortOut.split(" | ");
					const randomIndex = Math.floor(Math.random() * arrayOut.length);
					return api.sendMessage(arrayOut[randomIndex], event.threadID);
				} else {
					return api.sendMessage(shortOut, event.threadID);
				}
			}
		}
	}
};

module.exports.run = function({ api, event, args }) {
	const filePath = __dirname + "/cache/autorep.json";
	const content = args.join(" ");
	const { threadID, messageID } = event;

	if (!content) return api.sendMessage("Sai rồi", threadID, messageID);

	if (content.startsWith("del")) {
		const delThis = content.slice(4);
		if (!delThis) return api.sendMessage("Không tìm thấy autorep bạn cần xóa", threadID, messageID);

		fs.readJson(filePath, (err, data) => {
			if (err) throw err;

			const threadShortcut = data.find(item => item.id == threadID);
			if (!threadShortcut || !threadShortcut.shorts.some(item => item.in == delThis))
				return api.sendMessage("Không tìm thấy autorep bạn cần xóa", threadID, messageID);

			const shortcutIndex = threadShortcut.shorts.findIndex(item => item.in === delThis);
			threadShortcut.shorts.splice(shortcutIndex, 1);

			fs.writeJson(filePath, data, { spaces: 2 }, (err) => {
				if (err) console.error(err);
				else api.sendMessage("Đã xóa autorep thành công!", threadID, messageID);
			});
		});
	} else if (content.startsWith("all")) {
		fs.readJson(filePath, (err, data) => {
			if (err) throw err;

			if (!data.some(item => item.id == threadID))
				return api.sendMessage("Hiện tại không có autorep nào", threadID, messageID);

			const threadShortcut = data.find(item => item.id == threadID);
			let msg = '';

			threadShortcut.shorts.forEach(item => {
				msg += `\n${item.in} -> ${item.out}`;
			});

			if (!msg)
				return api.sendMessage("Hiện tại không có autorep nào 🦄💜", threadID, messageID);

			api.sendMessage("Sau đây là autorep có trong nhóm:" + msg, threadID, messageID);
		});
	} else {
		const narrow = content.indexOf(" => ");
		if (narrow == -1) return api.sendMessage("Dùng sai rồi bạn 🦄💜", threadID, messageID);

		const shortin = content.slice(0, narrow);
		const shortout = content.slice(narrow + 4);

		if (shortin == shortout) return api.sendMessage("2 input và output phải khác nhau nha 🦄💜", threadID, messageID);
		if (!shortin) return api.sendMessage("Thiếu input", threadID, messageID);
		if (!shortout) return api.sendMessage("Thiếu output", threadID, messageID);

		fs.readJson(filePath, (err, data) => {
			if (err) throw err;

			const threadShortcut = data.find(item => item.id == threadID);
			if (!threadShortcut) {
				const newShortcut = {
					id: threadID,
					shorts: [{ in: shortin, out: shortout }]
				};
				data.push(newShortcut);
			} else {
				const existingShortcut = threadShortcut.shorts.find(item => item.in == shortin);
				if (existingShortcut) {
					existingShortcut.out += ` | ${shortout}`;
					api.sendMessage("Autorep đã tồn tại trong nhóm này", threadID, messageID);
				} else {
					threadShortcut.shorts.push({ in: shortin, out: shortout });
				}
			}

			fs.writeJson(filePath, data, { spaces: 2 }, (err) => {
				if (err) console.error(err);
				else api.sendMessage("Tạo autorep thành công", threadID, messageID);
			});
		});
	}
};
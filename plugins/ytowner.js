let fs = require('fs')
let handler = async (m, { conn }) => {
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
conn.reply(m.chat, 'Https://youtube.com/@ReellyXd', fcon) 
}
handler.help = ['ytowner']
handler.tags = ['main']
handler.command = /^(ytowner)$/i

module.exports = handler
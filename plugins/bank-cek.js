let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *BANK CEK* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
└──···
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a5911aa3cd3766b39de4.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler
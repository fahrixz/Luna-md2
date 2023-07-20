let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
Luna Disini (>ω<)
`

let you = flaaa.getRandom()

    await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 5000000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: teks,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['Lunaa']
handler.tags = ['fun']
handler.command = /^lu(na|a)$/i

export default handler

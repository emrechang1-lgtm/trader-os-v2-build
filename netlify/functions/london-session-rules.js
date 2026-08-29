exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true })
    };
  }

  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '8235306697';

    if (!botToken) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Bot token not configured' })
      };
    }

    const londonSessionMessage = `
🎯 LONDRA SEANSINA HOŞGELDIN!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ BUGÜNÜN KURALARI ⚡
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 LOT: 0.02 (SABİT, DEĞİŞME!)
📈 TARGET: 5-10 pip per trade
💰 DAILY PROFIT: $60 → HARD EXIT
🛑 DAILY LOSS: $100 → STOP, KAPAT
⏱️ NO REVENGE: 30 min ceza

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 MENTAL ANCHOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"SAKIN. DİSİPLİN. SİSTEM."

Nefes al. Kuralları oku. Başla.

$60 = BAŞARILI GÜN
$100 LOSS = LOGOUT

Disiplin = Para 💰

good luck! 🚀
    `;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: londonSessionMessage,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();

    if (data.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          ok: true,
          message: 'London session rules sent!',
          messageId: data.result.message_id
        })
      };
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          ok: false,
          error: data.description || 'Telegram API error'
        })
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        ok: false,
        error: error.message
      })
    };
  }
};

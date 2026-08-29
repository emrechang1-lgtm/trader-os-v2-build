const fetch = require('node-fetch');

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // PREFLIGHT
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true })
    };
  }

  try {
    const { message, chatId } = JSON.parse(event.body);

    if (!message || !chatId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing message or chatId' })
      };
    }

    // Bot token - stored securely in environment variable
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    
    if (!botToken) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Bot token not configured' })
      };
    }

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
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
          message: 'Message sent successfully',
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

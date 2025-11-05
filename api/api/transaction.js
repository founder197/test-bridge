export default async function handler(req, res) {
  try {
    const response = await fetch("https://li.quest/v1/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-lifi-api-key": process.env.LIFI_API_KEY || "",
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

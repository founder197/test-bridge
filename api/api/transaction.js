// /api/transaction.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://li.quest/v1/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-lifi-api-key": process.env.CLIENT_KEY || "",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error from LI.FI API:", data);
      return res.status(500).json({ error: data });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
}

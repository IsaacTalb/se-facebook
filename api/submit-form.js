import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log("Request received:", req.method);

  if (req.method === 'POST') {
    try {
      console.log("Environment variable SCRIPT_GOOGLE_URL:", process.env.SCRIPT_GOOGLE_URL);

      const response = await fetch(process.env.SCRIPT_GOOGLE_URL, {
        method: 'POST',
        body: new URLSearchParams(req.body),
      });

      const data = await response.text();
      console.log("Response from Google Apps Script:", data);

      res.status(200).send(data);
    } catch (error) {
      console.error("Error during fetch:", error);
      res.status(500).send('A server error has occurred');
    }
  } else {
    console.log("Invalid request method:", req.method);
    res.status(405).send('Method Not Allowed');
  }
}
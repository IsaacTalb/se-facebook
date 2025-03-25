import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(process.env.SCRIPT_GOOGLE_URL, {
        method: 'POST',
        body: new URLSearchParams(req.body),
      });

      const data = await response.text();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error submitting form');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
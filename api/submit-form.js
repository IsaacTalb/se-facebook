import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log("Request received:", req.method);

  if (req.method === 'POST') {
    try {
      // Parse form data
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const rawBody = Buffer.concat(chunks).toString();
      console.log("Raw body:", rawBody);

      const params = new URLSearchParams(rawBody);
      const email = params.get('email');
      const password = params.get('password');

      console.log("Parsed email:", email);
      console.log("Parsed password:", password);

      if (!email || !password) {
        throw new Error("Missing email or password");
      }

      // Send the request to Google Apps Script
      const response = await fetch(process.env.SCRIPT_GOOGLE_URL, {
        method: 'POST',
        body: new URLSearchParams({ email, password }),
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
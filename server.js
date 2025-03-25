require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default;

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
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

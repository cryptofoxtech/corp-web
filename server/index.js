// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing of JSON request bodies

// Basic API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Example route for a contact form submission (will be expanded later)
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Received contact form submission:', { name, email, subject, message });
    // In a real application, you would send an email here using a service like Nodemailer
    res.status(200).json({ message: 'Message received successfully!' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
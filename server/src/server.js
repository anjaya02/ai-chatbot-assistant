const express = require('express');
const cors = require('cors');
const config = require('./config');
const chatRoutes = require('./routes/chatRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', chatRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Using ${config.useGemini ? 'Gemini' : 'OpenAI'} API`);
});
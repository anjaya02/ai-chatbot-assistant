require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  geminiApiKey: process.env.GEMINI_API_KEY,
  openaiApiKey: process.env.OPENAI_API_KEY,
  useGemini: process.env.USE_GEMINI === 'true'
};
const OpenAI = require('openai');
const config = require('../config');

// Initialize the OpenAI API
const openai = new OpenAI({
  apiKey: config.openaiApiKey
});

async function generateResponse(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ],
      max_tokens: 500
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response from OpenAI API');
  }
}

module.exports = { generateResponse };
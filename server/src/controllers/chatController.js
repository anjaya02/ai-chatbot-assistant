const geminiService = require('../services/geminiService');
const openaiService = require('../services/openaiService');
const config = require('../config');

async function handleChatMessage(req, res, next) {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let response;
    if (config.useGemini) {
      response = await geminiService.generateResponse(message);
    } else {
      response = await openaiService.generateResponse(message);
    }
    
    res.status(200).json({ response });
  } catch (error) {
    next(error);
  }
}

module.exports = { handleChatMessage };
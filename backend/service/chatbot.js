const axios = require("axios");
require("dotenv").config();

exports.askChatbot = async (message) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent"; // Fixed model name

  try {
    const response = await axios.post(
        apiUrl, // ✅ No interpolation mistake
        {
          contents: [{ parts: [{ text: message }] }]
        },
        {
          headers: { "Content-Type": "application/json" }
        }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process your request.";
  } catch (error) {
    console.error("Error calling Gemini API:", error.response?.data || error.message);
    return "Sorry, I couldn't process your request.";
  }
};
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chatbotService = require("./services/chatbot");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  const botResponse = await chatbotService.askChatbot(userMessage);
  res.json({ response: botResponse });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

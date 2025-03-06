const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3.2:1b",
      prompt: userMessage,
      stream: false,
    });

    res.json({ reply: response.data.response });
  } catch (error) {
    console.error("Error calling Ollama:", error);
    res.status(500).json({ error: "Failed to get response from model" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

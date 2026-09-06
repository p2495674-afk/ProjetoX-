import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.json({
    online: true,
    name: "Swh AI"
  });
});

app.post("/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Mensagem inválida."
      });
    }

    const input = [
      {
        role: "developer",
        content:
          "Você é a Swh AI. Responda em português do Brasil quando o usuário falar português. " +
          "Se perguntarem sobre matemática, faça os cálculos corretamente. " +
          "Se perguntarem o valor de pi, explique que π é aproximadamente 3,141592653589793 " +
          "e que seus dígitos continuam infinitamente."
      },

      ...history
        .filter(
          item =>
            (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string"
        )
        .slice(-20),

      {
        role: "user",
        content: message
      }
    ];

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      input
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao conversar com a Swh AI."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Swh AI rodando na porta ${PORT}`);
});
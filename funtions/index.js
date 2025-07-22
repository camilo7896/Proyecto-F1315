const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Inicializa Gemini con tu API key (desde Firebase Functions config)
const genAI = new GoogleGenerativeAI(functions.config().gemini.api_key);

exports.llamarAGemini = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const prompt = req.body.prompt || "Escribe una historia sobre una mochila mágica.";
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      res.status(200).send({ respuesta: response });
    } catch (error) {
      console.error("Error al generar contenido:", error);
      res.status(500).send({ error: "Error al generar contenido." });
    }
  });
});


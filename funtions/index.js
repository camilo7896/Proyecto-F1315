// functions/index.js
const functions = require('firebase-functions');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

exports.analyzeProduction = functions.https.onRequest(async (req, res) => {
  // Habilitar CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    const { data } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Eres un experto en eficiencia de producción industrial. Analiza los datos proporcionados y ofrece recomendaciones específicas y accionables para mejorar la eficiencia. Responde en español.'
        },
        {
          role: 'user',
          content: `Analiza estos datos de producción y proporciona recomendaciones inteligentes: ${JSON.stringify(data)}. 
          Además, considera estos puntos:
          1. Identifica patrones que puedan estar afectando la eficiencia
          2. Sugiere acciones específicas para máquinas y operarios con bajo rendimiento
          3. Propón estrategias de mantenimiento preventivo
          4. Recomienda ajustes en la asignación de horas y recursos
          5. Considera aspectos de capacitación para operarios
          
          Proporciona la respuesta en formato de lista con viñetas.`
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    const insights = completion.choices[0].message.content;
    res.status(200).json({ insights });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Error al conectar con OpenAI' });
  }
});

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001; // Porta da sua API

app.use(cors());

const apiKey = 'nb4liyiXepIVM600MHt7OWSHlyxUzMJ6VfLb2S0dt2o';
const apiUrl = 'https://trefle.io/api/v1';


// Definir rota para recuperar plantas pelo nome
app.get('/api/plants', async (req, res) => {
  try {
    const { name, page, pageSize } = req.query;
    const response = await fetch(`${apiUrl}/plants/search?token=${apiKey}&q=${name}&page=${page}&page_size=${pageSize}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao recuperar as plantas.' });
  }
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`API do BFF iniciada em http://localhost:${port}`);
});

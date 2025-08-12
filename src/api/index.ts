import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/tasks', (req, res) => {
  const taskData = req.body;

  const taskId = Math.random().toString(36).substring(2, 10);


  res.json({ taskId });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

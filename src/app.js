import express from "express";
const app = express();

app.use(express.json());

const livros = [
  {"id": 1, "nome": "O Pequeno Principe", "Autor": "Antoine de Saint-Exupéry"},
  {"id": 2, "nome": "O Livro do Chá", "Autor": "Okakura Kakuzō"},
  {"id": 3, "nome": "O Louvor das Sombras","Autor": "Junichiro Tanizaki"}
];

app.get('/', (req, res) => {
  res.status(200).send('curso de node');
});

app.get('/livros', (req, res) => {
  res.status(200).json({"livros" : livros});
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado');
});

export default app;

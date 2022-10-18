import express from "express";
const app = express();

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

export default app;

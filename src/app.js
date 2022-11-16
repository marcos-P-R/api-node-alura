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

app.get('/livros/:id', (req, res) => {
  const id = req.params.id;
  const index = buscarLivro(id)
  const nome = req.body.nome
  livros[index].nome = nome;
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado');
});

app.put('/livros/:id', (req, res) => {
  const id = req.params.id;
  const index = buscarLivro(id)
  const nome = req.body.nome
  livros[index].nome = nome;
  res.status(200).json({livros});
});

app.delete('/livros/:id', (req, res) => {
  const {id} = req.params;
  const index = buscarLivro(id)
  livros.splice(index, 1)
  res.status(200).json({messagem: `Livro ${id} excluido`});
});

function buscarLivro(id) {
  return livros.findIndex(livro => livro.id == id);
}

export default app;

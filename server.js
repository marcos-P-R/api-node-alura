const http = require('http');

const PORT = 3000;
const rotas = {
  '/': 'Curso de Node',
  '/livros': 'Lista de livros',
  '/autores': 'Lista de autores',
  '/editoras': 'Lista Editoras',
  '/sobre': 'Informacao sobre o projeto'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(rotas[req.url]);
});

server.listen(PORT, () => console.log(`Executando em http://localhost:${PORT}`));
import livros from "../model/Livro.js";

export default class LivroController {
  
  static getAllLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
        if(err) {
          console.log(err)
        }
        console.log(livros)
        res.status(200).json({livros});
      });
  }

  static pegarPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id)
      .populate('autor', 'nome') 
      .exec((err, livros) => {
        if (!err) {
          res.status(200).send(livros);
        } else {
          res.status(400).send({message: `${err.message} - id do livro não encontrado`});
        }
      });
  }

  static pegarPorEditora = (req, res) => {
    const editora = req.query.editora;

    livros.find({'editora': editora}, {}, (err, livros)=>{
      res.status(200).send(livros);
    });
  }

  static newLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} falha ao cadastrar novo livro`});
      } else {
        res.status(201).send({message:livro.toJSON()});
      }
    });
  }

  static updateLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set : req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

  static deleteLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "Livro excluido com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

}
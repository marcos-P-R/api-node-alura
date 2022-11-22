import autores from "../model/Autor.js"

export default class AutorController {
  
  static getAllAutores = (req, res) => {
    autores.find((err, autores) => {
      if(err) {
        console.log(err)
      }
      console.log(autores)
      res.status(200).json({autores});
    })
  }

  static pegarPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if (!err) {
        res.status(200).send(autores);
      } else {
        res.status(400).send({message: `${err.message} - id do autore não encontrado`});
      }
    })
  }

  static newAutor = (req, res) => {
    let autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} falha ao cadastrar novo autor`});
      } else {
        res.status(201).send({message:autor.toJSON()});
      }
    });
  }

  static updateAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set : req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: "autor atualizado com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

  static deleteAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "autor excluido com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  }

}
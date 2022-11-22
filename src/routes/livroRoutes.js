import express from "express";
import LivroController from "../controllers/livrosControlles.js";

const router = express.Router();

router
  .get("/livros", LivroController.getAllLivros)
  .get("/livros/busca", LivroController.pegarPorEditora)
  .get("/livros/:id", LivroController.pegarPorId)
  .post("/livros", LivroController.newLivro)
  .put("/livros/:id", LivroController.updateLivro)
  .delete("/livros/:id", LivroController.deleteLivro)

export default router;
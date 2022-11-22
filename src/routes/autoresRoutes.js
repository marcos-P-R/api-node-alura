import express from "express";
import AutorController from "../controllers/autoresControllers.js";

const router = express.Router();

router
  .get("/autores", AutorController.getAllAutores)
  .get("/autores/:id", AutorController.pegarPorId)
  .post("/autores", AutorController.newAutor)
  .put("/autores/:id", AutorController.updateAutor)
  .delete("/autores/:id", AutorController.deleteAutor)

export default router;
// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Categoria: para cadastrar um novo cliente.
// GET /Categoria: para listar todos os clientes.
// GET /Categoria/:id: para buscar um cliente específico pelo ID.
// PUT /Categoria/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Categoria/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const CategoriaController = require("../controller/Categoria_Controller.js");

router.post("/", CategoriaController.cadastrar);

router.get("/", CategoriaController.listar);

router.get("/:id", CategoriaController.buscarPorId);

router.put("/:id", CategoriaController.atualizar);

router.delete("/:id", CategoriaController.excluir);

module.exports = router;
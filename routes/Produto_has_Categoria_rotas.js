// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Produto_has_Categoria: para cadastrar um novo cliente.
// GET /Produto_has_Categoria: para listar todos os clientes.
// GET /Produto_has_Categoria/:id: para buscar um cliente específico pelo ID.
// PUT /Produto_has_Categoria/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Produto_has_Categoria/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Produto_has_CategoriaController = require("../controller/Produto_has_Categoria_Controller.js");

router.post("/", Produto_has_CategoriaController.cadastrar);

router.get("/", Produto_has_CategoriaController.listar);

router.get("/:id", Produto_has_CategoriaController.buscarPorId);

router.put("/:id", Produto_has_CategoriaController.atualizar);

router.delete("/:id", Produto_has_CategoriaController.excluir);

module.exports = router;
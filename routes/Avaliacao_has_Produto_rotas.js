// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Avaliacao_has_Produto: para cadastrar um novo cliente.
// GET /Avaliacao_has_Produto: para listar todos os clientes.
// GET /Avaliacao_has_Produto/:id: para buscar um cliente específico pelo ID.
// PUT /Avaliacao_has_Produto/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Avaliacao_has_Produto/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Avaliacao_has_Produto_controller.js");

router.post("/", Avaliacao_has_ProdutoController.cadastrar);

router.get("/", Avaliacao_has_ProdutoController.listar);

router.get("/:id", Avaliacao_has_ProdutoController.buscarPorId);

router.put("/:id", Avaliacao_has_ProdutoController.atualizar);

router.delete("/:id", Avaliacao_has_ProdutoController.excluir);

module.exports = router;
// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Banner_has_Produto: para cadastrar um novo cliente.
// GET /Banner_has_Produto: para listar todos os clientes.
// GET /Banner_has_Produto/:id: para buscar um cliente específico pelo ID.
// PUT /Banner_has_Produto/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Banner_has_Produto/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Banner_has_ProdutoController = require("../controller/Banner_has_Produto_controller.js");

router.post("/", Banner_has_ProdutoController.cadastrar);

router.get("/:id", Banner_has_ProdutoController.buscarPorId);

router.put("/:id", Banner_has_ProdutoController.atualizar);

router.delete("/:id", Banner_has_ProdutoController.excluir);

module.exports = router;
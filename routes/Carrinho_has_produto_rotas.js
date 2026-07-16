// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Carrinho_has_produto: para cadastrar um novo cliente.
// GET /Carrinho_has_produto: para listar todos os clientes.
// GET /Carrinho_has_produto/:id: para buscar um cliente específico pelo ID.
// PUT /Carrinho_has_produto/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Carrinho_has_produto/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Carrinho_has_produto.js");

router.post("/", Carrinho_has_produtoController.cadastrar);

router.get("/", Carrinho_has_produtoController.listar);

router.get("/:id", Carrinho_has_produtoController.buscarPorId);

router.put("/:id", Carrinho_has_produtoController.atualizar);

router.delete("/:id", Carrinho_has_produtoController.excluir);

module.exports = router;
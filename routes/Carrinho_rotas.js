// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do CarrinhoController. As rotas são:
// POST /Carrinho: para cadastrar um novo cliente.
// GET /Carrinho: para listar todos os clientes.
// GET /Carrinho/:id: para buscar um cliente específico pelo ID.
// PUT /Carrinho/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Carrinho/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const CarrinhoController = require("../controller/Carrinho_controller.js");

router.post("/", CarrinhoController.cadastrar);

router.get("/", CarrinhoController.listar);

router.get("/:id", CarrinhoController.buscarPorId);

router.put("/:id", CarrinhoController.atualizar);

router.delete("/:id", CarrinhoController.excluir);

module.exports = router;
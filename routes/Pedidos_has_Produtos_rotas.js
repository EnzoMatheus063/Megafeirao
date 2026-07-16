// nesse arquivo, definimos as rotas relacionadas aos pedidos e associamos cada rota a uma função do PedidosController. As rotas são:
// POST /pedidos: para cadastrar um novo pedido.
// GET /pedidos: para listar todos os pedidos.
// GET /pedidos/:id: para buscar um pedido específico pelo ID.
// PUT /pedidos/:id: para atualizar as informações de um pedido específico pelo ID.
// DELETE /pedidos/:id: para excluir um pedido específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Pedidos_has_Produtos_controller.js");

router.post("/", Pedidos_has_ProdutosController.cadastrar);

router.get("/", Pedidos_has_ProdutosController.listar);

router.get("/:id", Pedidos_has_ProdutosController.buscarPorId);

router.put("/:id", Pedidos_has_ProdutosController.atualizar);

router.delete("/:id", Pedidos_has_ProdutosController.excluir);

module.exports = router;
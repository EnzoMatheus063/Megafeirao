// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Produto: para cadastrar um novo cliente.
// GET /Produto: para listar todos os clientes.
// GET /Produto/:id: para buscar um cliente específico pelo ID.
// PUT /Produto/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Produto/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Produto_has_CoresController = require("../controller/Produto_has_Cores_controller.js");

router.post("/", Produto_has_CoresController.cadastrar);

router.get("/", Produto_has_CoresController.listar);

router.get("/:id", Produto_has_CoresController.buscarPorId);

router.put("/:id", Produto_has_CoresController.atualizar);

router.delete("/:id", Produto_has_CoresController.excluir);

module.exports = router;
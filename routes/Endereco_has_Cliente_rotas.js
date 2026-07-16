// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Endereco_has_Cliente: para cadastrar um novo cliente.
// GET /Endereco_has_Cliente: para listar todos os clientes.
// GET /Endereco_has_Cliente/:id: para buscar um cliente específico pelo ID.
// PUT /Endereco_has_Cliente/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Endereco_has_Cliente/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Endereco_has_Cliente_controller.js");

router.post("/", Endereco_has_ClienteController.cadastrar);

router.get("/", Endereco_has_ClienteController.listar);

router.get("/:id", Endereco_has_ClienteController.buscarPorId);

router.put("/:id", Endereco_has_ClienteController.atualizar);

router.delete("/:id", Endereco_has_ClienteController.excluir);

module.exports = router;
// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /enderecos: para cadastrar um novo endereco.
// GET /enderecos: para listar todos os enderecos.
// GET /enderecos/:id: para buscar um endereco específico pelo ID.
// PUT /enderecos/:id: para atualizar as informações de um endereco específico pelo ID.
// DELETE /enderecos/:id: para excluir um endereco específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const EnderecoController = require("../controller/Endereco_controller.js");

router.post("/", EnderecoController.cadastrar);

router.get("/", EnderecoController.listar);

router.get("/:id", EnderecoController.buscarPorId);

router.put("/:id", EnderecoController.atualizar);

router.delete("/:id", EnderecoController.excluir);

module.exports = router;
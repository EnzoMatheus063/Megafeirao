// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Tamanho: para cadastrar um novo cliente.
// GET /Tamanho: para listar todos os clientes.
// GET /Tamanho/:id: para buscar um cliente específico pelo ID.
// PUT /Tamanho/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Tamanho/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Tamanho_controller.js");

router.post("/", TamanhoController.cadastrar);

router.get("/", TamanhoController.listar);

router.get("/:id", TamanhoController.buscarPorId);

router.put("/:id", TamanhoController.atualizar);

router.delete("/:id", TamanhoController.excluir);

module.exports = router;
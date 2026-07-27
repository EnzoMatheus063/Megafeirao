// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do CoresController. As rotas são:
// POST /Cores: para cadastrar um novo cliente.
// GET /Cores: para listar todos os clientes.
// GET /Cores/:id: para buscar um cliente específico pelo ID.
// PUT /Cores/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Cores/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const CoresController = require("../controller/Cores_controller.js");

router.post("/", CoresController.cadastrar);

router.get("/", CoresController.listar);

router.get("/:id", CoresController.buscarPorId);

router.put("/:id", CoresController.atualizar);

router.delete("/:id", CoresController.excluir);

module.exports = router;
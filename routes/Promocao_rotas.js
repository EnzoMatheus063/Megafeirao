// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Promocao: para cadastrar um novo cliente.
// GET /Promocao: para listar todos os clientes.
// GET /Promocao/:id: para buscar um cliente específico pelo ID.
// PUT /Promocao/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Promocao/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const PromocaoController = require("../controller/Promocao_controller.js");

router.post("/", PromocaoController.cadastrar);

router.get("/", PromocaoController.listar);

router.get("/:id", PromocaoController.buscarPorId);

router.put("/:id", PromocaoController.atualizar);

router.delete("/:id", PromocaoController.excluir);

module.exports = router;
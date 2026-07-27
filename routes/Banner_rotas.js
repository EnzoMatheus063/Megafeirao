// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Banner: para cadastrar um novo cliente.
// GET /Banner: para listar todos os clientes.
// GET /Banner/:id: para buscar um cliente específico pelo ID.
// PUT /Banner/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Banner/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const BannerController = require("../controller/Banner_controller.js");

router.post("/", BannerController.cadastrar);

router.get("/", BannerController.listar);

router.get("/:id", BannerController.buscarPorId);

router.put("/:id", BannerController.atualizar);

router.delete("/:id", BannerController.excluir);

module.exports = router;
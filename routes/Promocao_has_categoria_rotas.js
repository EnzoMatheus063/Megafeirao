// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Promocao_has_categoria: para cadastrar um novo cliente.
// GET /Promocao_has_categoria: para listar todos os clientes.
// GET /Promocao_has_categoria/:id: para buscar um cliente específico pelo ID.
// PUT /Promocao_has_categoria/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Promocao_has_categoria/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Promocao_has_categoriaController = require("../controller/Promocao_has_categoria_controller.js");

router.post("/", Promocao_has_categoriaController.cadastrar);

router.get("/", Promocao_has_categoriaController.listar);

router.get("/:id", Promocao_has_categoriaController.buscarPorId);

router.put("/:id", Promocao_has_categoriaController.atualizar);

router.delete("/:id", Promocao_has_categoriaController.excluir);

module.exports = router;
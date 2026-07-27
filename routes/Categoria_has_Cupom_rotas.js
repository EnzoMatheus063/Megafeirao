// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /Categoria_has_Cupom: para cadastrar um novo cliente.
// GET /Categoria_has_Cupom: para listar todos os clientes.
// GET /Categoria_has_Cupom/:id: para buscar um cliente específico pelo ID.
// PUT /Categoria_has_Cupom/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /Categoria_has_Cupom/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Categoria_has_CupomController = require("../controller/Categoria_has_Cupom_controller.js");

router.post("/", Categoria_has_CupomController.cadastrar);

router.get("/", Categoria_has_CupomController.listar);

router.get("/:id", Categoria_has_CupomController.buscarPorId);

router.put("/:id", Categoria_has_CupomController.atualizar);

router.delete("/:id", Categoria_has_CupomController.excluir);

module.exports = router;
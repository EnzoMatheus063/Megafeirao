// nesse arquivo, definimos as rotas relacionadas aos cupons e associamos cada rota a uma função do CupomController. As rotas são:
// POST /Cupom_has_Categoria: para cadastrar um novo cupom.
// GET /Cupom_has_Categoria: para listar todos os cupons.
// GET /Cupom_has_Categoria/:id: para buscar um cupom específico pelo ID.
// PUT /Cupom_has_Categoria/:id: para atualizar as informações de um cupom específico pelo ID.
// DELETE /Cupom_has_Categoria/:id: para excluir um cupom específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Cupom_has_Caetegoria_controller.js");

router.post("/", Cupom_has_CategoriaController.cadastrar);

router.get("/", Cupom_has_CategoriaController.listar);

router.get("/:id", Cupom_has_CategoriaController.buscarPorId);

router.put("/:id", Cupom_has_CategoriaController.atualizar);

router.delete("/:id", Cupom_has_CategoriaController.excluir);

module.exports = router;
// nesse arquivo, definimos as rotas relacionadas às formas de pagamento e associamos cada rota a uma função do Forma_pagamentoController. As rotas são:
// POST /formas-pagamento: para cadastrar uma nova forma de pagamento.
// GET /formas-pagamento: para listar todas as formas de pagamento.
// GET /formas-pagamento/:id: para buscar uma forma de pagamento específica pelo ID.
// PUT /formas-pagamento/:id: para atualizar as informações de uma forma de pagamento específica pelo ID.
// DELETE /formas-pagamento/:id: para excluir uma forma de pagamento específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const Forma_pagamentoController = require("../controller/Forma_pagamento_controller.js");

router.post("/", Forma_pagamentoController.cadastrar);

router.get("/", Forma_pagamentoController.listar);

router.get("/:id", Forma_pagamentoController.buscarPorId);

router.put("/:id", Forma_pagamentoController.atualizar);

router.delete("/:id", Forma_pagamentoController.excluir);

module.exports = router;
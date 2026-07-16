// nesse arquivo, definimos as rotas relacionadas às imagens dos produtos e associamos cada rota a uma função do Imagem_produtoController. As rotas são:
// POST /imagens-produto: para cadastrar uma nova imagem de produto.
// GET /imagens-produto: para listar todas as imagens de produto.
// GET /imagens-produto/:id: para buscar uma imagem de produto específica pelo ID.
// PUT /imagens-produto/:id: para atualizar as informações de uma imagem de produto específica pelo ID.
// DELETE /imagens-produto/:id: para excluir uma imagem de produto específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const ClienteController = require("../controller/Imagem_produto_controller.js");

router.post("/", Imagem_produtoController.cadastrar);

router.get("/", Imagem_produtoController.listar);

router.get("/:id", Imagem_produtoController.buscarPorId);

router.put("/:id", Imagem_produtoController.atualizar);

router.delete("/:id", Imagem_produtoController.excluir);

module.exports = router;
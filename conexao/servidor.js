const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("./conexao");

// ===============================
// ROTAS
// ===============================

const clienteRotas = require("../routes/cliente_rotas");
app.use("/clientes", clienteRotas);

const avaliacaoHasProdutoRotas = require("../routes/Avaliacao_has_Produto_rotas");
app.use("/avaliacao_has_produto", avaliacaoHasProdutoRotas);

const bannerHasProdutoRotas = require("../routes/Banner_has_produto_rotas");
app.use("/banner_has_produto", bannerHasProdutoRotas);

const bannerRotas = require("../routes/Banner_rotas");
app.use("/banner", bannerRotas);

const carrinhoHasProdutoRotas = require("../routes/Carrinho_has_produto_rotas");
app.use("/carrinho_has_produto", carrinhoHasProdutoRotas);

const carrinhoRotas = require("../routes/Carrinho_rotas");
app.use("/carrinho", carrinhoRotas);

const cartaoPagamentoRotas = require("../routes/Cartao_pagamento_rotas");
app.use("/cartao_pagamento", cartaoPagamentoRotas);

const categoriaHasCupomRotas = require("../routes/Categoria_has_Cupom_rotas");
app.use("/categoria_has_cupom", categoriaHasCupomRotas);

const categoriaRotas = require("../routes/Categoria_rotas");
app.use("/categoria", categoriaRotas);

const coresRotas = require("../routes/Cores_rotas");
app.use("/cores", coresRotas);

const cupomHasCategoriaRotas = require("../routes/Cupom_has_Categoria_rotas");
app.use("/cupom_has_categoria", cupomHasCategoriaRotas);

const cupomHasProdutoRotas = require("../routes/Cupom_has_Produto_rotas");
app.use("/cupom_has_produto", cupomHasProdutoRotas);

const cupomRotas = require("../routes/Cupom_rotas");
app.use("/cupom", cupomRotas);

const enderecoHasClienteRotas = require("../routes/Endereco_has_Cliente_rotas");
app.use("/endereco_has_cliente", enderecoHasClienteRotas);

const enderecoRotas = require("../routes/Endereco_rotas");
app.use("/endereco", enderecoRotas);

const formaPagamentoRotas = require("../routes/Forma_pagamento_rotas");
app.use("/forma_pagamento", formaPagamentoRotas);

const freteRotas = require("../routes/Frete_rotas");
app.use("/frete", freteRotas);

const imagemProdutoRotas = require("../routes/Imagem_Produto_rotas");
app.use("/imagem_produto", imagemProdutoRotas);

const marcaRotas = require("../routes/Marca_rotas");
app.use("/marca", marcaRotas);

const pedidosHasProdutosRotas = require("../routes/Pedidos_has_Produtos_rotas");
app.use("/pedidos_has_produtos", pedidosHasProdutosRotas);

const pedidosRotas = require("../routes/Pedidos_rotas");
app.use("/pedidos", pedidosRotas);

const produtoHasCategoriaRotas = require("../routes/Produto_has_Categoria_rotas");
app.use("/produto_has_categoria", produtoHasCategoriaRotas);

const produtoHasCoresRotas = require("../routes/Produto_has_Cores_rotas");
app.use("/produto_has_cores", produtoHasCoresRotas);

const produtoRotas = require("../routes/Produto_rotas");
app.use("/produto", produtoRotas);

const promocaoHasCategoriaRotas = require("../routes/Promocao_has_categoria_rotas");
app.use("/promocao_has_categoria", promocaoHasCategoriaRotas);

const promocaoRotas = require("../routes/Promocao_rotas");
app.use("/promocao", promocaoRotas);

const tamanhoRotas = require("../routes/Tamanho_rotas");
app.use("/tamanho", tamanhoRotas);

// ===============================

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000!");
});
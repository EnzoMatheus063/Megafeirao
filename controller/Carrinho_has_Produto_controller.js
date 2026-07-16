const Carrinho_has_Produto_model = require("../model/Carrinho_has_Produto_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    CarrinhoHasProdutoModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { Carrinho, Produto } = req.params;

    CarrinhoHasProdutoModel.buscarPorId(
        Carrinho,
        Produto,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Carrinho não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR RELACIONAMENTO
exports.cadastrar = (req, res) => {

    const dados = req.body;

    CarrinhoHasProdutoModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Carrinho cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR RELACIONAMENTO
exports.atualizar = (req, res) => {

    const { Carrinho, Produto } = req.params;
    const dados = req.body;

    CarrinhoHasProdutoModel.atualizar(
        Carrinho,
        Produto,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Carrinho atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { Carrinho, Produto } = req.params;

    CarrinhoHasProdutoModel.excluir(
        Carrinho,
        Produto,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Carrinho excluído com sucesso!"
            });

        }
    );

};
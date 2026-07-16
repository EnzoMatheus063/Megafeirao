const Avaliacao_has_Produto_model = require("../model/Avaliacao_has_Produto_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    AvaliacaoHasProdutoModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { avaliacao, produto } = req.params;

    AvaliacaoHasProdutoModel.buscarPorId(
        avaliacao,
        produto,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Relacionamento não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR RELACIONAMENTO
exports.cadastrar = (req, res) => {

    const dados = req.body;

    AvaliacaoHasProdutoModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Avaliação cadastrada com sucesso!"
        });

    });

};

// ATUALIZAR RELACIONAMENTO
exports.atualizar = (req, res) => {

    const { avaliacao, produto } = req.params;
    const dados = req.body;

    AvaliacaoHasProdutoModel.atualizar(
        avaliacao,
        produto,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Avaliação atualizada com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { avaliacao, produto } = req.params;

    AvaliacaoHasProdutoModel.excluir(
        avaliacao,
        produto,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Avaliação excluída com sucesso!"
            });

        }
    );

};
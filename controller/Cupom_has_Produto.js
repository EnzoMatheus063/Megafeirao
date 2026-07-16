const Cupom_has_Produto = require("../model/Cupom_has_Produto_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    CupomHasProdutoModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { produto, cupom } = req.params;

    CupomHasProdutoModel.buscarPorId(
        produto,
        cupom,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Cupom não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR RELACIONAMENTO
exports.cadastrar = (req, res) => {

    const dados = req.body;

    CupomHasProdutoModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Cupom cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR RELACIONAMENTO
exports.atualizar = (req, res) => {

    const { produto, cupom } = req.params;
    const dados = req.body;

    CupomHasProdutoModel.atualizar(
        produto,
        cupom,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Cupom atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { produto, cupom } = req.params;

    CupomHasProdutoModel.excluir(
        produto,
        cupom,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Cupom excluído com sucesso!"
            });

        }
    );

};
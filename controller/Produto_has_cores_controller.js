const Produto_has_cores_model = require("../model/Produto_has_cores_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    ProdutoHasCoresModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR PRODUTO
exports.buscarPorId = (req, res) => {

    const { Cores, produto } = req.params;

    ProdutoHasCoresModel.buscarPorId(
        Cores,
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

// CADASTRAR Produto
exports.cadastrar = (req, res) => {

    const dados = req.body;

    ProdutoHasCoresModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR Produto
exports.atualizar = (req, res) => {

    const { Cores, produto } = req.params;
    const dados = req.body;

    ProdutoHasCoresModel.atualizar(
        Cores,
        produto,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Produto atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { Cores, produto } = req.params;

    ProdutoHasCoresModel.excluir(
        Cores,
        produto,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Produto excluído com sucesso!"
            });

        }
    );

};
const Promocao_has_categoria_model = require("../model/Promocao_has_categoria_model");

// LISTAR TODAS AS PROMOCOES
exports.listar = (req, res) => {

    PromocaoHasCategoriaModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR PROMOCAO
exports.buscarPorId = (req, res) => {

    const { categoria, Promocao } = req.params;

    PromocaoHasCategoriaModel.buscarPorId(
        categoria,
        Promocao,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Promocao não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR PROMOCAO
exports.cadastrar = (req, res) => {

    const dados = req.body;

    PromocaoHasCategoriaModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Promocao cadastrada com sucesso!"
        });

    });

};

// ATUALIZAR PROMOCAO
exports.atualizar = (req, res) => {

    const { categoria, Promocao } = req.params;
    const dados = req.body;

    PromocaoHasCategoriaModel.atualizar(
        categoria,
        Promocao,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Promocao atualizada com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { categoria, Promocao } = req.params;

    PromocaoHasCategoriaModel.excluir(
        categoria,
        Promocao,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Promocao excluída com sucesso!"
            });

        }
    );

};
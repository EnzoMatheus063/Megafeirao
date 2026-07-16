const Cupom_has_Categoria_model = require("../model/Cupom_has_Categoria_model.js");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    CupomHasCategoriaModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { categoria, cupom } = req.params;

  CupomHasCategoriaModel.buscarPorId(
        categoria,
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

    CupomHasCategoriaModel.cadastrar(dados, (erro, resultado) => {

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

    const { categoria, cupom } = req.params;
    const dados = req.body;

    CupomHasCategoriaModel.atualizar(
        categoria,
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

    const { categoria, cupom } = req.params;

    CupomHasCategoriaModel.excluir(
        categoria,
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
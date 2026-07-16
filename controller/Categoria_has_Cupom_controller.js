const Categoria_has_Cupom_model = require("../model/Categoria_has_Cupom_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    CategoriaHasCupomModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { categoria, cupom } = req.params;

    CategoriaHasCupomModel.buscarPorId(
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

    CategoriaHasCupomModel.cadastrar(dados, (erro, resultado) => {

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

    CategoriaHasCupomModel.atualizar(
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

    CategoriaHasCupomModel.excluir(
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
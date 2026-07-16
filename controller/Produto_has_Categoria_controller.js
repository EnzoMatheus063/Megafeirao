const produto_has_categoria_model = require("../model/Produto_has_Categoria_model.js");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    ProdutoHasCategoriaModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { categoria, produto } = req.params;

    ProdutoHasCategoriaModel.buscarPorId(
        categoria,
        produto,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "produto  não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR produto
exports.cadastrar = (req, res) => {

    const dados = req.body;

    ProdutoHasCategoriaModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "produto cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR produto
exports.atualizar = (req, res) => {

    const { categoria, produto } = req.params;
    const dados = req.body;

    ProdutoHasCategoriaModel.atualizar(
        categoria,
        produto,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "produto atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR produto
exports.excluir = (req, res) => {

    const { categoria, produto } = req.params;

    ProdutoHasCategoriaModel.excluir(
        categoria,
        produto,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "produto excluído com sucesso!"
            });

        }
    );

};
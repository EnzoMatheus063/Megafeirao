const Pedidos_has_Produtos_model = require("../model/Pedidos_has_Produtos_model.js");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    PedidosHasProdutosModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { pedido, produto } = req.params;

    PedidosHasProdutosModel.buscarPorId(
        pedido,
        produto,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "pedido não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR pedido
exports.cadastrar = (req, res) => {

    const dados = req.body;

    PedidosHasProdutosModel.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "pedido cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR pedido
exports.atualizar = (req, res) => {

    const { pedido, produto } = req.params;
    const dados = req.body;

    PedidosHasProdutosModel.atualizar(
        pedido,
        produto,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "pedido atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR pedido
exports.excluir = (req, res) => {

    const { pedido, produto } = req.params;

    PedidosHasProdutosModel.excluir(
        pedido,
        produto,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "pedido excluído com sucesso!"
            });

        }
    );

};
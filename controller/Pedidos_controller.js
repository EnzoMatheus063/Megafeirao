//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Pedidos_model = require("../model/Pedidos_model");

//==========================================
// CADASTRAR PEDIDOS
//==========================================

function cadastrar(req, res) {

    const pedido = req.body;

    // Validação dos campos obrigatórios

    if (
        !pedido.data_predido ||
        !pedido.nota_fiscal ||
        !pedido.data_entrega ||
        !pedido.status_entrega ||
        !pedido.codigo ||
        !pedido.status_pagamento ||
        !pedido.Cliente_idCliente ||
        !pedido.Loja_idLoja ||
        !pedido.Endereco_idEndereco ||
        !pedido.Formas_Pagamento_idFormas_Pagamento
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!pedido.Loja_idLoja) {

        pedido.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Pedidos_model.buscarPornota_fiscal(pedido.nota_fiscal, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Pedido já cadastrado."
            });

        }

        // Cadastra o pedido

        Pedidos_model.cadastrar(pedido, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar pedido."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Pedido cadastrado com sucesso!",
                idPedido: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR PEDIDOS
//==========================================

function listar(req, res) {

    Pedidos_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar pedidos."
            });

        }
        // Retorna a lista de pedidos em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR PEDIDO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Pedidos_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar pedido."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Pedido não encontrado."
            });

        }
        // Retorna o pedido encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PEDIDO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do pedido a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do pedido a partir do corpo da requisição
    const pedido = req.body;

    Pedidos_model.atualizar(id, pedido, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar pedido."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Pedido atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PEDIDO
//==========================================

function excluir(req, res) {
    // Obtém o ID do pedido a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    Pedidos_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir pedido."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Pedido excluído com sucesso."
        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};
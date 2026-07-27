//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Cartao_pagamento_model = require("../model/Cartao_pagamento_models.js");

//==========================================
// CADASTRAR CARTÃO DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const cartao = req.body;

    // Validação dos campos obrigatórios

    if (
        !cartao.numero ||
        !cartao.cpf ||
        !cartao.cvv ||
        !cartao.nome_propietario ||
        !cartao.nome_indentificacao ||
        !cartao.bandeira ||
        !cartao.tipo ||
       !cartao.ativo ||
       !cartao.Cliente_idCliente               
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!cartao.Loja_idLoja) {

        cartao.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Cartao_pagamento_model.buscarPorCpf(cartao.cpf, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "E-mail já cadastrado."
            });

        }

        // Cadastra o cliente

        Cartao_pagamento_model.cadastrar(cartao, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cartão de pagamento."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cartão de pagamento cadastrado com sucesso!",
                idCartao: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CARTÕES DE PAGAMENTO
//==========================================

function listar(req, res) {

    Cartao_pagamento_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cartões de pagamento."
            });

        }
        // Retorna a lista de cartões de pagamento em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARTÃO DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Cartao_pagamento_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cartão de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cartão de pagamento não encontrado."
            });

        }
        // Retorna o cartão de pagamento encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARTÃO DE PAGAMENTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do cartão de pagamento a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do cartão de pagamento a partir do corpo da requisição
    const cartao = req.body;

    Cartao_pagamento_model.atualizar(id, cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARTÃO DE PAGAMENTO
//==========================================

function excluir(req, res) {
    // Obtém o ID do cartão de pagamento a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    Cartao_pagamento_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cartão de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão de pagamento excluído com sucesso."
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
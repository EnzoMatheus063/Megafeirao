//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Forma_Pagamento_model = require("../model/Forma_Pagamento_model");

//==========================================
// CADASTRAR FORMA DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const forma_pagamento = req.body;

    // Validação dos campos obrigatórios

    if (
        !forma_pagamento.nome ||
        !forma_pagamento.link ||
        !forma_pagamento.ativo 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!forma_pagamento.Loja_idLoja) {

        forma_pagamento.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Forma_Pagamento_model.buscarPornome(forma_pagamento.email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Nome já cadastrado."
            });

        }

        // Cadastra o cliente

        Forma_Pagamento_model.cadastrar(forma_pagamento, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cliente."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Forma de pagamento cadastrada com sucesso!",
                idForma_Pagamento: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    Forma_Pagamento_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar formas de pagamento."
            });

        }
        // Retorna a lista de formas de pagamento em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR FORMA DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Forma_Pagamento_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar forma de pagamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Forma de pagamento não encontrada."
            });

        }
        // Retorna o cliente encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR FORMA DE PAGAMENTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da forma de pagamento a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da forma de pagamento a partir do corpo da requisição
    const forma_pagamento = req.body;

    Forma_Pagamento_model.atualizar(id, forma_pagamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR FORMA DE PAGAMENTO
//==========================================

function excluir(req, res) {
    // Obtém o ID da forma de pagamento a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    Forma_Pagamento_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir forma de pagamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Forma de pagamento excluída com sucesso."
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
//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Cupom_model = require("../model/Cupom_model");

//==========================================
// CADASTRAR CUPOM
//==========================================

function cadastrar(req, res) {

    const cupom = req.body;

    // Validação dos campos obrigatórios

    if (
        !cupom.nome ||
        !cupom.data_validade ||
        !cupom.desconto ||
        !cupom.quantidade ||
        !cupom.loja_idLoja
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!cupom.loja_idLoja) {

        cupom.loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Cupom_model.buscarPornome(cupom.nome, (erro, resultado) => {

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

        // Cadastra o cupom

        Cupom_model.cadastrar(cupom, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cupom."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cupom cadastrado com sucesso!",
                idCupom: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CUPOMS
//==========================================

function listar(req, res) {

    Cupom_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cupons."
            });

        }
        // Retorna a lista de cupons em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CUPOM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Cupom_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cupom."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cupom não encontrado."
            });

        }
        // Retorna o cupom encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CUPOM
//==========================================

function atualizar(req, res) {
    // Obtém o ID do cupom a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do cupom a partir do corpo da requisição
    const cupom = req.body;

    Cupom_model.atualizar(id, cupom, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cupom."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cupom atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CUPOM
//==========================================

function excluir(req, res) {
    // Obtém o ID do cupom a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    Cupom_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cupom."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cupom excluído com sucesso."
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
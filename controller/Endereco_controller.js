//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Endereco_Model = require("../model/Endereco_model");

//==========================================
// CADASTRAR ENDERECO
//==========================================

function cadastrar(req, res) {

    const endereco = req.body;

    // Validação dos campos obrigatórios

    if (
        !endereco.rua ||
        !endereco.cep ||
        !endereco.bairro ||
        !endereco.numero ||
        !endereco.complemento ||
        !endereco.tipo 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!endereco.Loja_idLoja) {

        endereco.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Endereco_Model.buscarPorcep(endereco.cep, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "CEP já cadastrado."
            });

        }

        // Cadastra o endereço

        Endereco_Model.cadastrar(endereco, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar endereço."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cliente cadastrado com sucesso!",
                idCliente: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    Endereco_Model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar endereços."
            });

        }
        // Retorna a lista de endereços em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR ENDERECO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Endereco_Model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar endereço."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Endereço não encontrado."
            });

        }
        // Retorna o endereço encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR ENDERECO
//==========================================

function atualizar(req, res) {
    // Obtém o ID do endereço a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do endereço a partir do corpo da requisição
    const endereco = req.body;

    Endereco_Model.atualizar(id, endereco, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar endereço."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Endereço atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR ENDERECO
//==========================================

function excluir(req, res) {
    // Obtém o ID do endereço a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    Endereco_Model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir endereço."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Endereço excluído com sucesso."
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
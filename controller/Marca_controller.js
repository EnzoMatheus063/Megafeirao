//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Marca_model = require("../model/Marca_model");

//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(req, res) {

    const marca = req.body;

    // Validação dos campos obrigatórios

    if (
        !marca.nome ||
        !marca.logo 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!marca.Loja_idLoja) {

        marca.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Marca_model.buscarPorEmail(marca.email, (erro, resultado) => {

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

        // Cadastra a marca

        Marca_model.cadastrar(marca, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar marca."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Marca cadastrada com sucesso!",
                idMarca: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR MARCAS
//==========================================

function listar(req, res) {

    Marca_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar marcas."
            });

        }
        // Retorna a lista de marcas em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Marca_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar marca."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Marca não encontrada."
            });

        }
        // Retorna a marca encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(req, res) {
    // Obtém o ID da marca a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da marca a partir do corpo da requisição
    const marca = req.body;

    Marca_model.atualizar(id, marca, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar marca."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Marca atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(req, res) {
    // Obtém o ID da marca a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    Marca_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir marca."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Marca excluída com sucesso."
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
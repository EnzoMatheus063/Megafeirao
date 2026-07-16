//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Promocao_model = require("../model/Promocao_model");

//==========================================
// CADASTRAR PROMOCAO
//==========================================

function cadastrar(req, res) {

    const promocao = req.body;

    // Validação dos campos obrigatórios

    if (
        !promocao.data_inicio||
        !promocao.data_final ||
        !promocao.valor_promocao ||
        !promocao.nome ||
        !promocao.Banner_idBanner ||
        !promocao.Produto_idProduto ||
        !promocao.Loja_idLoja ||
        !promocao.loja_logista_idLogista ||
        !promocao.Marca_idMarca ||
        !promocao.Categoria_idCategoria
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!promocao.Loja_idLoja) {

        promocao.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Promocao_model.buscarPornome(promocao.nome, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Nome da promoção já cadastrado."
            });

        }

        // Cadastra a promoção

        Promocao_model.cadastrar(promocao, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar promoção."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Promoção cadastrada com sucesso!",
                idPromocao: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR PROMOÇÕES
//==========================================

function listar(req, res) {

    Promocao_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar promoções."
            });

        }
        // Retorna a lista de promoções em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR PROMOÇÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Promocao_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar promoção."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Promoção não encontrada  ."
            });

        }
        // Retorna a promoção encontrada em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PROMOÇÃO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da promoção a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da promoção a partir do corpo da requisição
    const promocao = req.body;

    Promocao_model.atualizar(id, promocao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar promoção."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Promoção atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PROMOÇÃO
//==========================================

function excluir(req, res) {
    // Obtém o ID da promoção a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    Promocao_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir promoção."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Promoção excluída com sucesso."
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
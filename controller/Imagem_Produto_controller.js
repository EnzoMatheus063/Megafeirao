//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Imagem_Produto_model = require("../model/Imagem_Produto_model");

//==========================================
// CADASTRAR IMAGEM DE PRODUTO
//==========================================

function cadastrar(req, res) {

    const imagem_produto = req.body;

    // Validação dos campos obrigatórios

    if (
        !imagem_produto.arquivo ||
        !imagem_produto.Produto_idProduto 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!imagem_produto.Loja_idLoja) {

        imagem_produto.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Imagem_Produto_model.buscarPorEmail(imagem_produto.email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Imagem de produto já cadastrada."
            });

        }

        // Cadastra o cliente

        Imagem_Produto_model.cadastrar(imagem_produto, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar imagem de produto."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Imagem de produto cadastrada com sucesso!",
                idImagem_Produto: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    Imagem_Produto_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens de produtos."
            });

        }
        // Retorna a lista de imagens de produtos em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Imagem_Produto_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar imagem de produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Imagem de produto não encontrada."
            });

        }
        // Retorna o cliente encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR IMAGEM DE PRODUTO
//==========================================

function atualizar(req, res) {
    // Obtém o ID da imagem de produto a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da imagem de produto a partir do corpo da requisição
    const imagem_produto = req.body;

    Imagem_Produto_model.atualizar(id, imagem_produto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar imagem de produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem de produto atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR IMAGEM DE PRODUTO
//==========================================

function excluir(req, res) {
    // Obtém o ID da imagem de produto a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    Imagem_Produto_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir imagem de produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem de produto excluída com sucesso."
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
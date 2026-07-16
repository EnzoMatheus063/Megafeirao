//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Frete_model = require("../model/Frete_model");

//==========================================
// CADASTRAR FRETE
//==========================================

function cadastrar(req, res) {

    const frete = req.body;

    // Validação dos campos obrigatórios

    if (
        !frete.valor ||
        !frete.tipo ||
        !frete.bairro ||
        !frete.entrega_full ||
        !frete.codigo_rastreio ||
        !frete.Pedidos_idPedidos ||
        !frete.Loja_idLoja ||
        !frete.Pedidos_idCliente_idCliente ||
        !frete.Pedido_loja_idLoja ||
        !frete.Pedidos_Endereco_idEndereco   
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!frete.Loja_idLoja) {

        frete.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Frete_model.buscarPorbairro(frete.bairro, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Bairro já cadastrado."
            });

        }

        // Cadastra o frete

        Frete_model.cadastrar(frete, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar frete."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Frete cadastrado com sucesso!",
                idFrete: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR FRETES
//==========================================

function listar(req, res) {

    Frete_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar fretes."
            });

        }
        // Retorna a lista de fretes em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR FRETE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Frete_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar frete."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Frete não encontrado."
            });

        }
        // Retorna o frete encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR FRETE
//==========================================

function atualizar(req, res) {
    // Obtém o ID do frete a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados do frete a partir do corpo da requisição
    const frete = req.body;

    Frete_model.atualizar(id, frete, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar frete."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Frete atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR FRETE
//==========================================

function excluir(req, res) {
    // Obtém o ID do frete a ser excluído a partir dos parâmetros da URL
    const id = req.params.id;

    Frete_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir frete."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Frete excluído com sucesso."
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
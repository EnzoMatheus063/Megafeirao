//==========================================
// IMPORTA O MODEL
// passe aqui o caminho correto do seu arquivo model
//==========================================

const Cores_model = require("../model/Cores_model");

//==========================================
// CADASTRAR COR
//==========================================

function cadastrar(req, res) {

    const cor = req.body;

    // Validação dos campos obrigatórios

    if (
        !cor.nome ||
        !cor.codigo_cor 
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Caso não seja enviado o código da loja
    if (!cor.Loja_idLoja) {

        cor.Loja_idLoja = 1;

    }

    // Verifica se já existe um usuário com o mesmo e-mail

    Cores_model.buscarPorNome(cor.nome, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Cor já cadastrada."
            });

        }

        // Cadastra a cor

        Cores_model.cadastrar(cor, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cor."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cor cadastrada com sucesso!",
                idCor: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CORES
//==========================================

function listar(req, res) {

    Cores_model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cores."
            });

        }
        // Retorna a lista de cores em formato JSON
        res.json(resultado);

    });

}

//==========================================
// BUSCAR COR POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    Cores_model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cor."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cor não encontrada."
            });

        }
        // Retorna o cliente encontrado em formato JSON
        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR COR
//==========================================

function atualizar(req, res) {
    // Obtém o ID da cor a ser atualizada a partir dos parâmetros da URL
    const id = req.params.id;
    // Obtém os dados atualizados da cor a partir do corpo da requisição
    const cor = req.body;

    Cores_model.atualizar(id, cor, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cor."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cor atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR COR
//==========================================

function excluir(req, res) {
    // Obtém o ID da cor a ser excluída a partir dos parâmetros da URL
    const id = req.params.id;

    Cores_model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cor."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cor excluída com sucesso."
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
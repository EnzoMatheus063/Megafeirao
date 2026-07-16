const Endereco_has_Cliente = require("../model/Endereco_has_Cliente_model");

// LISTAR TODOS OS RELACIONAMENTOS
exports.listar = (req, res) => {

    EnderecoHasCliente.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

// BUSCAR RELACIONAMENTO
exports.buscarPorId = (req, res) => {

    const { endereco, cliente } = req.params;

    EnderecoHasCliente.buscarPorId(
        endereco,
        cliente,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: "Endereco não encontrado."
                });
            }

            res.status(200).json(resultado[0]);

        }
    );

};

// CADASTRAR RELACIONAMENTO
exports.cadastrar = (req, res) => {

    const dados = req.body;

    EnderecoHasCliente.cadastrar(dados, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Endereco cadastrado com sucesso!"
        });

    });

};

// ATUALIZAR RELACIONAMENTO
exports.atualizar = (req, res) => {

    const { endereco, cliente } = req.params;
    const dados = req.body;

    EnderecoHasCliente.atualizar(
        endereco,
        cliente,
        dados,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Endereco atualizado com sucesso!"
            });

        }
    );

};

// EXCLUIR RELACIONAMENTO
exports.excluir = (req, res) => {

    const { endereco, cliente } = req.params;

    EnderecoHasCliente.excluir(
        endereco,
        cliente,
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Endereco excluído com sucesso!"
            });

        }
    );

};
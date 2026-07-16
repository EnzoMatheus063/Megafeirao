const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedido
// =========================

function cadastrar(pedido, callback) {

    const sql = `INSERT INTO Pedido
        ( data_pedido, nota_fiscal, data_entrega, status_entrega, codigo, status_pagamento,Cliente_idCliente,
         Loja_idLoja, Endereco_idEndereco, Formas_Pagamento_idFormas_Pagamento )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedido.data_pedido,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.codigo,
            pedido.status_pagamento,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento
        ],
        callback
    );

}

// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Pedido
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedido
        WHERE idPedido = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPornota_fiscal(nota_fiscal, callback) {

    const sql = `
        SELECT * FROM Pedido
        WHERE nota_fiscal = ?
    `;

    conexao.query(sql, [nota_fiscal], callback);

}

// =========================
// Atualizar pedido
// =========================

function atualizar(id, pedido, callback) {

    const sql = `
        UPDATE Pedido
        SET

            data_pedido = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            codigo = ?,
            status_pagamento = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Loja_idLoja = ?,
            loja_logista_idLogista = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?

        WHERE idPedido = ?
    `;

    conexao.query(
        sql,
        [
            pedido.data_pedido,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.codigo,
            pedido.status_pagamento,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedido
        WHERE idPedido = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};
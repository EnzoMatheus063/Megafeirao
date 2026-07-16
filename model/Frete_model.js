const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Frete
// =========================

function cadastrar(frete, callback) {

    const sql = `INSERT INTO Frete
        ( valor, tipo, bairro, entrega_full, codigo_rastreio, Pedidos_idPedidos, Pedidos_idCliente_idCliente, Pedido_loja_idLoja, Pedidos_Endereco_idEndereco )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_idCliente_idCliente,
            frete.Pedido_loja_idLoja,
            frete.Pedidos_Endereco_idEndereco
        ],
        callback
    );

}

// =========================
// Listar Frete
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Frete
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorcodigo_rastreio(codigo_rastreio, callback) {

    const sql = `
        SELECT * FROM Frete
        WHERE codigo_rastreio = ?
    `;

    conexao.query(sql, [codigo_rastreio], callback);

}

// =========================
// Atualizar frete
// =========================

function atualizar(id, frete, callback) {

    const sql = `
        UPDATE Frete
        SET

            valor = ?,
            tipo = ?,
            bairro = ?,
            entrega_full = ?,
            codigo_rastreio = ?,
            Pedidos_idPedidos = ?,
            Pedidos_idCliente_idCliente = ?,
            Pedido_loja_idLoja = ?,
            Pedidos_Endereco_idEndereco = ?
        WHERE idFrete = ?
    `;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_idCliente_idCliente,
            frete.Pedido_loja_idLoja,
            frete.Pedidos_Endereco_idEndereco,
            id
        ],
        callback
    );

}

// =========================
// Excluir Frete
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorcodigo_rastreio,
    atualizar,
    excluir

};
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom_has_Produto
// =========================

function cadastrar(cupom_has_produto, callback) {

    const sql = `INSERT INTO Cupom_has_Produto
( Quantidade_Produto, Preco_Total, Cliente_idCliente ) VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            cupom_has_produto.Quantidade_Produto,
            cupom_has_produto.Preco_Total,
            cupom_has_produto.Cliente_idCliente
        ],
        callback
    );

}


// =========================
// Listar Cupon_has_Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cupom_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE idCupom_has_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCliente_idCliente(cliente_id, callback) {

    const sql = `
        SELECT * FROM Cupom_has_Produto
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [cliente_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, cupom_has_produto, callback) {

    const sql = `
        UPDATE Cupom_has_Produto
        SET

            Quantidade_Produto = ?,
            Preco_Total = ?,
            Cliente_idCliente = ?

        WHERE idCupom_has_Produto = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_produto.Quantidade_Produto,
            cupom_has_produto.Preco_Total,
            cupom_has_produto.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom_has_Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cupom_has_Produto
        WHERE idCupom_has_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente_idCliente,
    atualizar,
    excluir

};
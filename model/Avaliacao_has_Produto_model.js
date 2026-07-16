const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Avaliação_has_Produto
// =========================

function cadastrar(avaliacao_has_produto, callback) {

    const sql = `INSERT INTO Avaliacao_has_Produto
        ( data_avaliacao, nota, descricao, Produto_idProduto )
        VALUES (?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            avaliacao_has_produto.data_avaliacao,
            avaliacao_has_produto.nota,
            avaliacao_has_produto.descricao,
            avaliacao_has_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Avaliações_has_Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Avaliacao_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_has_Produto
        WHERE idAvaliacao_has_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorProduto_idProduto(produto_id, callback) {

    const sql = `
        SELECT * FROM Avaliacao_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produto_id], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, avaliacao_has_produto, callback) {

    const sql = `
        UPDATE Avaliacao_has_Produto
        SET

            data_avaliacao = ?,
            nota = ?,
            descricao = ?,
            Produto_idProduto = ?

        WHERE idAvaliacao_has_Produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao_has_produto.data_avaliacao,
            avaliacao_has_produto.nota,
            avaliacao_has_produto.descricao,
            avaliacao_has_produto.Produto_idProduto,
            id
        ],
        callback

    );

}

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM avaliacao_has_produto
        WHERE idAvaliacao_has_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProduto_idProduto,
    atualizar,
    excluir

};
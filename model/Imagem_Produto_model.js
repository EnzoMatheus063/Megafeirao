const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem_Produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `INSERT INTO Imagem_Produto
        ( arquivo, Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Imagens_Produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Imagem_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorProduto_idProduto(produto_id, callback) {

    const sql = `
        SELECT * FROM Imagem_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produto_id], callback);

}

// =========================
// Atualizar Imagem_Produto
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE Imagem_Produto
        SET

            arquivo = ?,
            Produto_idProduto = ?,
            Loja_idLoja = ?

        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Imagem_Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem_Produto
        WHERE idImagem_Produto = ?
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
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Carrinho_has_produto
// =========================

function cadastrar(carrinho_has_produto, callback) {

    const sql = `INSERT INTO Carrinho_has_produto
( Carrinho_idCarrinho, Produto_idProduto )(?, ?)`;

    conexao.query(
        sql,
        [
                carrinho_has_produto.Carrinho_idCarrinho,
                carrinho_has_produto.Produto_idProduto
        ],
        callback
    );

}


// =========================
// Listar Carrinho_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Carrinho_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Carrinho_has_produto
        WHERE idCarrinho_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorProduto_idProduto(produto_id, callback) {

    const sql = `
        SELECT * FROM Carrinho_has_produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produto_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, carrinho_has_produto, callback) {

    const sql = `
        UPDATE Carrinho_has_produto
        SET

            Carrinho_idCarrinho = ?,
            Produto_idProduto = ?,
            status_visibilidade = ?,
            Loja_idLoja = ?

        WHERE idCarrinho_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            carrinho_has_produto.Carrinho_idCarrinho,
            carrinho_has_produto.Produto_idProduto,
            carrinho_has_produto.status_visibilidade,
            carrinho_has_produto.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir carrinho_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho_has_produto
        WHERE idCarrinho_has_produto = ?
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
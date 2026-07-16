const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto_has_Categoria
// =========================

function cadastrar(produto_has_categoria, callback) {

    const sql = `INSERT INTO Produto_has_Categoria
( Produto_idProduto, Categoria_idCategoria ) VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_categoria.Produto_idProduto,
            produto_has_categoria.Categoria_idCategoria
        ],
        callback
    );

}


// =========================
// Listar Produto_has_Categoria
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Produto_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Produto_has_Categoria
        WHERE idProduto_has_Categoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorProduto_idProduto(produto_id, callback) {

    const sql = `
        SELECT * FROM Produto_has_Categoria
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produto_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, produto_has_categoria, callback) {

    const sql = `
        UPDATE Produto_has_Categoria
        SET

            produto_idproduto = ?,
            categoria_idcategoria = ?

        WHERE idProduto_has_Categoria = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_categoria.Produto_idProduto,
            produto_has_categoria.Categoria_idCategoria,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto_has_Categoria
        WHERE idProduto_has_Categoria = ?
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
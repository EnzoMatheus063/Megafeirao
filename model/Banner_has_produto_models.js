const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar banner_has_produto
// =========================

function cadastrar(banner_has_produto, callback) {

    const sql = `INSERT INTO banner_has_produto
   ( Banner_idBanner, Produto_idProduto )
    (?, ?)`;

    conexao.query(
        sql,
        [
                banner_has_produto.Banner_idBanner,
                banner_has_produto.Produto_idProduto
        ],
        callback
    );

}


// =========================
// Listar banner_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Banner_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_produto
        WHERE idBanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorBanner_idBanner(banner_id, callback) {

    const sql = `
        SELECT * FROM Banner_has_produto
        WHERE Banner_idBanner = ?
    `;

    conexao.query(sql, [banner_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner_has_produto, callback) {

    const sql = `
        UPDATE Banner_has_produto
        SET

            Banner_idBanner = ?,
            Produto_idProduto = ?,

        WHERE idBanner_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            banner_has_produto.Banner_idBanner,
            banner_has_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Banner_has_produto
        WHERE idBanner_has_produto = ?
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
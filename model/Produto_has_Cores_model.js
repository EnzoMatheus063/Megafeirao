const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_cores
// =========================

function cadastrar(produto_has_cores, callback) {

    const sql = `INSERT INTO produto_has_cores
   ( Produto_idProduto, Cores_idCores )
    (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_cores.Produto_idProduto,
            produto_has_cores.Cores_idCores
        ],
        callback
    );

}


// =========================
// Listar produto_has_cores
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_cores
        WHERE idproduto_has_cores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorProduto_idProduto(produto_id, callback) {

    const sql = `
        SELECT * FROM produto_has_cores
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produto_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, produto_has_cores, callback) {

    const sql = `
        UPDATE produto_has_cores
        SET

            Produto_idProduto = ?,
            Cores_idCores = ?,

        WHERE idproduto_has_cores = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_cores.Produto_idProduto,
            produto_has_cores.Cores_idCores,
            id
        ],
        callback
    );

}

// =========================
// Excluir Produto_has_cores
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_cores
        WHERE idproduto_has_cores = ?
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
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom_has_Categoria
// =========================

function cadastrar(cupom_has_categoria, callback) {

    const sql = `INSERT INTO cupom_has_Categoria
   ( Cupom_idCupom, Categoria_idCategoria )
    (?, ?)`;

    conexao.query(
        sql,
        [
                cupom_has_categoria.Cupom_idCupom,
                cupom_has_categoria.Categoria_idCategoria
        ],
        callback
    );

}


// =========================
// Listar Cupom_has_Categoria
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom_has_Categoria
        WHERE idcupom_has_Categoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCupom_idCupom(cupom_id, callback) {

    const sql = `
        SELECT * FROM cupom_has_Categoria
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupom_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, cupom_has_categoria, callback) {

    const sql = `
        UPDATE cupom_has_Categoria
        SET

            Cupom_idCupom = ?,
            Categoria_idCategoria = ?,

        WHERE idcupom_has_Categoria = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_categoria.Cupom_idCupom,
            cupom_has_categoria.Categoria_idCategoria,
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
        DELETE FROM cupom_has_Categoria
        WHERE idcupom_has_Categoria = ?
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
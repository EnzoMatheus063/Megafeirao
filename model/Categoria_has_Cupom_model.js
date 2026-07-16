const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Categoria_has_Cupom
// =========================

function cadastrar(categoria_has_cupom, callback) {

    const sql = `INSERT INTO Categoria_has_Cupom
( Categoria_idCategoria, Cupom_idCupom ) VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            categoria_has_cupom.Categoria_idCategoria,
            categoria_has_cupom.Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Listar Endereços
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria_has_Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE idCategoria_has_Cupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCupom_idCupom(cupom_id, callback) {

    const sql = `
        SELECT * FROM Categoria_has_Cupom
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupom_id], callback);

}

// =========================
// Atualizar Categoria_has_Cupom
// =========================

function atualizar(id, categoria_has_cupom, callback) {

    const sql = `
        UPDATE Categoria_has_Cupom
        SET

            Categoria_idCategoria = ?,
            Cupom_idCupom = ?

        WHERE idCategoria_has_Cupom = ?
    `;

    conexao.query(
        sql,
        [
            categoria_has_cupom.Categoria_idCategoria,
            categoria_has_cupom.Cupom_idCupom,
            id
        ],
        callback
    );

}

// =========================
// Excluir Categoria_has_Cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categoria_has_Cupom
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCupom_idCupom,
    atualizar,
    excluir

};
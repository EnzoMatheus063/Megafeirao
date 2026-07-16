const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promocao_has_Categoria
// =========================

function cadastrar(promocao_has_categoria, callback) {

    const sql = `INSERT INTO Promocao_has_Categoria
( Promocao_idPromocao, Categoria_idCategoria ) VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            promocao_has_categoria.Promocao_idPromocao,
            promocao_has_categoria.Categoria_idCategoria
        ],
        callback
    );

}


// =========================
// Listar Promocoes_has_Categoria
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao_has_Categoria
        WHERE idPromocao_has_Categoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCategoria_idCategoria(categoria_id, callback) {

    const sql = `
        SELECT * FROM Promocao_has_Categoria
        WHERE Categoria_idCategoria = ?
    `;

    conexao.query(sql, [categoria_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, promocao_has_categoria, callback) {

    const sql = `
        UPDATE Promocao_has_Categoria
        SET

            Promocao_idPromocao = ?,
            Categoria_idCategoria = ?

        WHERE idPromocao_has_Categoria = ?
    `;

    conexao.query(
        sql,
        [
            promocao_has_categoria.Promocao_idPromocao,
            promocao_has_categoria.Categoria_idCategoria,
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
        DELETE FROM Promocao_has_Categoria
        WHERE idPromocao_has_Categoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCategoria_idCategoria,
    atualizar,
    excluir

};
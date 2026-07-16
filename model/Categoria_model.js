const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Categoria
// =========================

function cadastrar(categoria, callback) {

    const sql = `INSERT INTO Categoria
( nome)  (?)`;

    conexao.query(
        sql,
        [
                categoria.nome,
                categoria.descricao,

        ],
        callback
    );

}

// =========================
// Listar Endereços
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT * FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(id, categoria, callback) {

    const sql = `
        UPDATE Categoria
        SET

            nome = ?,
            descricao = ?,
            tipo = ?

        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            categoria.nome,
        ],
        callback
    );

}

// =========================
// Excluir Categoria
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};
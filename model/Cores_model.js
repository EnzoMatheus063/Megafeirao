const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cores
// =========================

function cadastrar(Cores, callback) {

    const sql = `INSERT INTO Cores
        ( nome, codigo_cor )
        VALUES (?)`;

    conexao.query(
        sql,
        [
            Cores.nome,
            Cores.codigo_cor
        ],
        callback
    );

}

// =========================
// Listar Cores
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorcodigo_cor(codigo_cor, callback) {

    const sql = `
        SELECT * FROM Cores
        WHERE codigo_cor = ?
    `;

    conexao.query(sql, [codigo_cor], callback);

}

// =========================
// Atualizar Cores
// =========================

function atualizar(id, Cores, callback) {

    const sql = `
        UPDATE Cores
        SET
            nome = ?,
            codigo_cor = ?
        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [
            Cores.nome,
            Cores.codigo_cor,
            id
        ],
        callback
    );

}
// =========================
// Excluir Cores
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cores
        WHERE idCores = ?
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
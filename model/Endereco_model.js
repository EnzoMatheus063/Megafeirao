const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar endereço
// =========================

function cadastrar(endereco, callback) {

    const sql = `INSERT INTO Endereco
( rua, cep, bairro, numero, complemento, tipo  )(?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
                endereco.rua,
                endereco.cep,
                endereco.bairro,
                endereco.numero,
                endereco.complemento,
                endereco.tipo,

        ],
        callback
    );

}

// =========================
// Listar Endereços
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorcep(cep, callback) {

    const sql = `
        SELECT * FROM endereco
        WHERE cep = ?
    `;

    conexao.query(sql, [cep], callback);

}

// =========================
// Atualizar Endereco
// =========================

function atualizar(id, endereco, callback) {

    const sql = `
        UPDATE Endereco
        SET

            rua = ?,
            cep = ?,
            bairro = ?,
            numero = ?,
            complemento = ?,
            tipo = ?

        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.bairro,
            endereco.numero,
            endereco.complemento,
            endereco.tipo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Endereco
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorcep,
    atualizar,
    excluir

};
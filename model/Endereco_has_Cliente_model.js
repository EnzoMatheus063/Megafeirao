const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Endereço_has_Cliente
// =========================

function cadastrar(endereco_has_cliente, callback) {

    const sql = `INSERT INTO Endereco_has_Cliente
        ( Endereco_idEndereco, Endereco_loja_idLoja,
          Endereco_loja_lojista_idLoja, Cliente_idCliente )
        VALUES (?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            endereco_has_cliente.Endereco_idEndereco,
            endereco_has_cliente.Endereco_loja_idLoja,
            endereco_has_cliente.Endereco_loja_lojista_idLoja,
            endereco_has_cliente.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Endereços_has_Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE idEndereco_has_Cliente = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEndereco_idEndereco(endereco_id, callback) {

    const sql = `
        SELECT * FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
    `;

    conexao.query(sql, [endereco_id], callback);

}

// =========================
// Atualizar Endereco_has_Cliente
// =========================

function atualizar(id, endereco_has_cliente, callback) {

    const sql = `
        UPDATE Endereco_has_Cliente
        SET

            Endereco_idEndereco = ?,
            Endereco_Loja_idLoja = ?,
            Endereco_Loja_lojista_idlojista = ?,
            Cliente_idCliente = ?,

        WHERE idEndereco_has_Cliente = ?
    `;

    conexao.query(
        sql,
        [
            endereco_has_cliente.Endereco_idEndereco,
            endereco_has_cliente.Endereco_Loja_idLoja,
            endereco_has_cliente.Endereco_Loja_lojista_idlojista,
            endereco_has_cliente.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Endereco_has_Cliente
        WHERE idEndereco_has_Cliente = ?
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
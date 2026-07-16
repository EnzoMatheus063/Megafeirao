const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartao_pagamento
// =========================

function cadastrar(cartao_pagamento, callback) {

    const sql = `INSERT INTO Cartao_pagamento
   ( Numero, Cpf, cvv, nome_propietario, nome_indentificacao, bandeira, tipo, ativo, Cliente_idCliente  )
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cartao_pagamento.Numero,
            cartao_pagamento.Cpf,
            cartao_pagamento.CVV,
            cartao_pagamento.nome_propietario,
            cartao_pagamento.nome_indentificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente
        ],
        callback
    );

}


// =========================
// Listar Cartao_pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCartao_idCartao(cartao_id, callback) {

    const sql = `
        SELECT * FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [cartao_id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, cartao_pagamento, callback) {

    const sql = `
        UPDATE Cartao_pagamento
        SET

            Numero = ?,
            Cpf = ?,
            cvv = ?,
            nome_propietario = ?,
            nome_indentificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?

        WHERE idCartao_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao_pagamento.Numero,
            cartao_pagamento.Cpf,
            cartao_pagamento.CVV,
            cartao_pagamento.nome_propietario,
            cartao_pagamento.nome_indentificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir cartao_pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
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
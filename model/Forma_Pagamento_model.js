const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Forma_Pagamento
// =========================

function cadastrar(forma_pagamento, callback) {

    const sql = `INSERT INTO Forma_Pagamento
( nome, link, ativo  )(?, ?, ?)`;

    conexao.query(
        sql,
        [
            forma_pagamento.nome,
            forma_pagamento.link,
            forma_pagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Forma_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Forma_Pagamento
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT * FROM Forma_Pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Forma_Pagamento
// =========================

function atualizar(id, forma_pagamento, callback) {

    const sql = `
        UPDATE Forma_Pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?,
            tipo = ?

        WHERE idForma_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            forma_pagamento.nome,
            forma_pagamento.link,
            forma_pagamento.ativo,
            forma_pagamento.tipo,
            id
        ],
        callback
    );

}


// =========================
// Excluir forma_pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
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
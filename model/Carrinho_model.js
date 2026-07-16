const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(carrinho, callback) {

    const sql = `INSERT INTO carrinho
        ( quantidade_produto, preco_total, Cliente_idCliente)
        VALUES (?,?,?)`;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente
        ],
        callback
    );

}
// =========================
// Listar Carrinhos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCliente_idCliente(cliente_id, callback) {

    const sql = `
        SELECT * FROM carrinho
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [cliente_id], callback);

}

// =========================
// Atualizar carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
            Cliente_idCliente = ?
        WHERE idCarrinho = ?
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente,
            id
        ],
        callback
    );

}


// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM carrinho
        WHERE idCarrinho = ?
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
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedidos_has_produtos
// =========================

function cadastrar(pedidos_has_produtos, callback) {

    const sql = `INSERT INTO pedidos_has_produtos
   ( Pedidos_idPedidos, Produtos_idProdutos )
    (?, ?)`;

    conexao.query(
        sql,
        [
                pedidos_has_produtos.Pedidos_idPedidos,
                pedidos_has_produtos.Produtos_idProdutos
        ],
        callback
    );

}


// =========================
// Listar pedidos_has_produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM pedidos_has_produtos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM pedidos_has_produtos
        WHERE idpedidos_has_produtos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorPedidos_idPedidos(pedidos_id, callback) {

    const sql = `
        SELECT * FROM pedidos_has_produtos
        WHERE Pedidos_idPedidos = ?
    `;

    conexao.query(sql, [pedidos_id], callback);

}

// =========================
// Atualizar pedidos_has_produtos
// =========================

function atualizar(id, pedidos_has_produtos, callback) {

    const sql = `
        UPDATE pedidos_has_produtos
        SET

            Pedidos_idPedidos = ?,
            Produtos_idProdutos = ?,

        WHERE idpedidos_has_produtos = ?
    `;

    conexao.query(
        sql,
        [
            pedidos_has_produtos.Pedidos_idPedidos,
            pedidos_has_produtos.Produtos_idProdutos,
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
        DELETE FROM pedidos_has_produtos
        WHERE idpedidos_has_produtos  = ?
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
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promocao
// =========================

function cadastrar(promocao, callback) {

    const sql = `INSERT INTO Promocao
        ( data_inicio, data_final, Valor_promocao,nome, Banner_idBanner, Produto_idProduto, Loja_idLoja, loja_logista_idLogista, Marca_idMarca, Categoria_idCategoria )
        VALUES (?,?,?,?,?,?,?,?,?,?)`;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.Valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner,
            promocao.Produto_idProduto,
            promocao.Loja_idLoja,
            promocao.loja_logista_idLogista,
            promocao.Marca_idMarca,
            promocao.Categoria_idCategoria
        ],
        callback
    );

}

// =========================
// Listar Promocoes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);
        [
            promocao.descricao,
            promocao.codigo,
            promocao.preco_antigo,
            promocao.preco_Promocional,
            promocao.quantidade_estoque,
            promocao.ativo,
            promocao.Loja_idLoja,
            promocao.loja_logista_idLogista,
            promocao.Marca_idMarca,
            promocao.Categoria_idCategoria
        ],
        callback

}

// =========================
// Listar Promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorcodigo(codigo, callback) {

    const sql = `
        SELECT * FROM Promocao
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar promocao
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            data_inicio = ?,
            data_final = ?,
            Valor_promocao = ?,
            nome = ?,
            Banner_idBanner = ?,
            Produto_idProduto = ?,
            Loja_idLoja = ?,
            loja_logista_idLogista = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?

        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.Valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner,
            promocao.Produto_idProduto,
            promocao.Loja_idLoja,
            promocao.loja_logista_idLogista,
            promocao.Marca_idMarca,
            promocao.Categoria_idCategoria,
            id
        ],
        callback
    );

}



// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
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
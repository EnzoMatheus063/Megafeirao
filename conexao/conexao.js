// conectar com o servidor do node.js e o banco de dados MySQL
const mysql= require("mysql2");

// variável que armazena a conexão com o banco de dados
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",  // "senha do Mysql"
    database: " MEGAFEIRAO"
});
conexao.connect((erro)=>{
    if(erro){
        console.log("Erro ao conectar:", erro);
        return; 

    }

    console.log("Banco conectado com sucesso!");
});

module.exports = conexao;
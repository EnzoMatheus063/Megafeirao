-- COMENTÁRIO DE 1 LINHA

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE MEGAFEIRAO;

-- COMANDO PARA EXCLUIR O BANCO DE DADOS
DROP DATABASE MEGAFEIRAO;

-- INICIALIZAR O BANCO DE DADOS
USE MEGAFEIRAO;

-- CRIAR TABELAS QUE NÃO TEM CHAVE ESTRANGEIRA
CREATE TABLE logista(
idlojista int primary key auto_increment,
nome varchar(200) not null,
cpf mediumint(12) not null unique,
cnpj varchar(120) unique,
email varchar(120) not null,
senha varchar (13) not null,
telefone mediumint(14) 
);
-- COMANDO PARA EXCLUIR UMA TABELA
DROP TABLE LOGISTA;

CREATE TABLE ENDERECO(
idEndereco int primary key auto_increment,
rua varchar(45) not null,
cep mediumint(11) not null,
bairro varchar(45) not null,
numero int,
complemento varchar(200),
tipo varchar(45)
);

CREATE TABLE Forma_Pagamento(
idforma_pagamento int primary key auto_increment,
nome varchar(45) not null,
link varchar(200),
ativo boolean
);

CREATE TABLE Categoria(
idCategoria int primary key auto_increment,
nome varchar(100) not null
);

create table Tamanho(
idTamanho int primary key auto_increment,
tamanho varchar(20)
);

create table cores(
idCores int primary key auto_increment,
nome varchar (20) not null,
codigo_cor varchar (20)
);

-- criar tabelas com chaves estrangeiras FK

CREATE TABLE Loja(
idloja int primary key auto_increment,
nome varchar(200) not null,
whatsapp varchar(50),
instagram varchar(50),
facebook varchar(50),
linkedin varchar(50),
telefone mediumint(14) not null,
email varchar(120) not null,
Endereco_idEndereco int,
Lojista_idLojista int,
FOREIGN KEY (Endereco_idEndereco) References Endereco (idEndereco),

FOREIGN KEY (Logista_idLogista) References Logista (idLogista)

);


create table Cliente(
idCliente int primary key auto_increment,
nome varchar(200) not null,
cpf mediumint (12) not null,
telefone mediumint(15) not null,
email varchar (120) not null,
senhar varchar(13) not null,
data_nascimento date not null,
Loja_idLoja int,
foreign key (Loja_idLoja) References loja (idLoja)
);

CREATE TABLE Marca(
idMarca int primary key auto_increment,
nome varchar(45) not null,
logo longblob
);

CREATE TABLE Cupom(
idCupom int primary key auto_increment,
nome varchar(45) not null,
data_validade date not null,
desconto float not null,
quantidade int not null,
Loja_idLoja int,
foreign key (Loja_idLoja) references Loja (idLoja)
);


Create table Categoria_has_Cupom(
Categoria_idCategoria int,
Cupom_idCupom int,
foreign key (Categoria_idCategoria)  references Categoria(idCategoria),
foreign key(Cupom_idCupom) References Cupom (idCupom)
);

Create table Banner(
idBanner int primary key auto_increment,
imagem longblob not null,
data_inicio date not null,
data_final datetime,
status_visibilidade boolean,
Loja_idLoja int,
foreign key (Loja_idLoja) references Loja (idLoja)
);

Create table Produto(
idProduto int primary key auto_increment,
nome varchar (100) not null,
descricao text (1000) not null,
codigo varchar (45) not null,
preco_antigo float not null,
preco_promocional float,
quantidade_estoque int not null,
ativo boolean, 
loja_idLoja int,
loja_logista_idLogista int,
marca_idMarca int,
 Categoria_idCategoria int,
 foreign key (loja_idLoja) references Loja (idLoja),
 foreign key (Marca_idMarca) references Marca (idMarca),
 foreign key (Categoria_idCategoria) references Categoria (idCategoria)
 );


create table Cupom_has_Produto(
Cupom_idCupom int ,
Produto_idProduto int,
foreign key (Cupom_idCupom)  references Cupom(idCupom),
foreign key(Produto_idProduto) References Produto (idProduto)
);


create table carrinho(
idCarrinho int primary key auto_increment,
Quantidade_Produto int not null,
Preco_Total float not null,
Cliente_idCliente int
);

create table Pedidos(
idPedidos int primary key auto_increment,
data_pedido date not null,
nota_fiscal longblob not null,
data_entrega date not null,
status_entrega varchar (45) not null,
codigo varchar (45),
status_pagamento varchar (45) not null,
Cliente_idCliente int,
Loja_idLoja int,
Endereco_idEndereco int,
Formas_pagamento_idFormas_pagamento int,
foreign key (Cliente_idCliente) references Cliente (idCliente),
foreign key (Loja_idLoja) references Loja (idLoja),
foreign key (Endereco_idEndereco) references Endereco (idEndereco),
foreign key (Formas_pagamento_idFormas_pagamento) references Forma_pagamento (idForma_pagamento)

);

create table Frete(
idFrete int primary key auto_increment,
valor float not null,
tipo varchar (45) not null,
bairro varchar (45),
entrega_full boolean,
codigo_rastreio varchar(100),
Pedidos_idPedidos int,
Pedidos_Cliente_idCliente int,
Pedidos_loja_idLoja int,
Pedidos_Endereco_idEndereco int,
foreign key (Pedidos_idPedidos) references Pedidos (idPedidos),
foreign key (Pedidos_Cliente_idCliente) references Pedidos (Cliente_idCliente),
foreign key (Pedidos_Loja_idLoja) references Pedidos (Loja_idLoja),
foreign key (Pedidos_Endereco_idEndereco) references Pedidos (Endereco_idEndereco)
);

create table Promocao(
idPromocao int primary key auto_increment,
data_inicio date not null,
data_final date not null,
valor_promocao float not null,
nome varchar(45),
Banner_idBanner int,
foreign key (Banner_idBanner) references Banner (idBanner)
);

Create table carrinho(
idCarrinho int primary key auto_increment,
quantidade_produto int not null,
preco_total float not null,
Cliente_idCliente int,
foreign key (Cliente_idCliente) References Cliente (idCliente)
);

create table Avaliacao_Produto(
idAvaliacao_Produto int primary key auto_increment,
data_avaliacao date not null,
nota float not null,
descricao text (250),
Produto_idProduto int,
foreign key (Produto_idProduto) references Produto (idProduto)
);

Create table Imagem_Produto(
idImagem_produto int primary key auto_increment,
aqrquivo longblob not null,
Produto_idProduto int,
foreign key (Produto_idProduto) references Produto (idProduto)
);

create table Endereco_has_Cliente(
Endereco_idEndereco int,
Endereco_Loja_idLoja int,
Endereco_Loja_lojista_idLojista int,
Cliente_idCliente int,
foreign key (Endereco_idEndereco)  references Endereco (idEndereco),
foreign key (Cliente_idCliente)  references Cliente (idCliente)
);

create table Carrinho_has_produto(
Carrinho_idCarrinho int ,
Produto_idproduto int,
foreign key (Carrinho_idCarrinho)  references Carrinho (idCarrinho),
foreign key(produto_idproduto) References Produto (idProduto)
);


create table Promocao_has_Produto(
Promocao_idPromocao int ,
produto_idproduto int,
foreign key (Promocao_idPromocao)  references Promocao (idPromocao),
foreign key(produto_idproduto) References Produto (idProduto)
);


create table Promocao_has_Categoria(
Promocao_idPromocao int ,
Categoria_idCategoria int,
foreign key (Promocao_idPromocao)  references Promocao (idPromocao),
foreign key(Categoria_idCategoria) References Categoria (idCategoria)
);

create table Produto_has_Categoria(
produto_idproduto int,
Categoria_idCategoria int,
foreign key (produto_idproduto)  references produto (idproduto),
foreign key (Categoria_idCategoria)  references Categoria (idCategoria)
);

create table Cupom_has_Categoria(
Cupom_idCupom int,
Categoria_idCategoria int,
foreign key (Cupom_idCupom)  references Cupom (idCupom),
foreign key (Categoria_idCategoria)  references Categoria (idCategoria)
);

create table produto_has_Categoria(
produto_idproduto int,
Categoria_idCategoria int,
foreign key (produto_idproduto)  references produto (idProduto),
foreign key (Categoria_idCategoria)  references Categoria (idCategoria)
);


create table Cartao_pagamento(
numero int,
data_vencimento MEDIUMINT(40),
cvc int,
cpf MEDIUMINT(11),
nome_propietario VARCHAR(200),
nome_indentificacao VARCHAR(45),
bandeira VARCHAR(45),
tipo VARCHAR(45),
ativo VARCHAR(45),
Cliente_idCliente int,
foreign key (Cliente_idCliente)  references Cliente (idCliente)
);

create table produto_has_Cores(
produto_idproduto int,
Cores_idCores int,
foreign key (produto_idproduto)  references produto (idProduto),
foreign key (Cores_idCores)  references Cores (idCores)
);

create table Pedidos_has_produto(
Pedidos_idPedidos int,
produto_idproduto int,
foreign key (Pedidos_idPedidos)  references Pedidos (idPedidos),
foreign key (produto_idproduto)  references produto (idProduto)
);

create table Banner_has_produto(
Banner_idBanner int,
produto_idproduto int,
foreign key (Banner_idBanner)  references Banner (idBanner),
foreign key (produto_idproduto)  references produto (idproduto)
);
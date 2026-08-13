/* ==========================================================
   DADOS DO PRODUTO
========================================================== */

const produto = {

    nome: "Filé de Peito de Frango",

    subtitulo:
        "Confira o produto para você e ele e o insira.",

    descricao:
        "Filé de Peito de Frango Congelado Super Frango 1kg.",

    imagemPrincipal:
        "../Assets/produtos/frango.png",

    imagens: [

        {
            imagem: "../Assets/produtos/frango.png",
            nome: "Filé de Peito Super Frango",
            descricao: "Imagem 01"
        },

        {
            imagem: "../Assets/produtos/frango.png",
            nome: "Filé de Peito Super Frango",
            descricao: "Imagem 02"
        },

        {
            imagem: "../Assets/produtos/frango.png",
            nome: "Filé de Peito Super Frango",
            descricao: "Imagem 03"
        }

    ],

    estoque: 24,

    peso: "1kg",

    tipo: "Resfriado",

    preco: 25.70,

    avaliacoes: [

        {
            nome: "Mariana S.",
            estrelas: "★★★★★",
            texto: "Muito gostoso."
        },

        {
            nome: "Carlos M.",
            estrelas: "★★★★★",
            texto: "Chegou em ótimo estado."
        },

        {
            nome: "Fernanda A.",
            estrelas: "★★★★★",
            texto: "Ótimo preço."
        },

        {
            nome: "Rafael P.",
            estrelas: "★★★★★",
            texto: "Muito bem embalado."
        }

    ]

};


/* ==========================================================
   DADOS DA PÁGINA
========================================================== */

const pagina = {

    titulo: "Detalhes do Produto",

    menu: {

        inicio: "Início",

        categorias: "Categorias",

        ofertas: "Ofertas",

        busca: "Buscar"

    },

    rodape:
        "Mega Feirão - Todos os direitos reservados."

};


/* ==========================================================
   ELEMENTOS DO HTML
========================================================== */

const nomeProduto =
    document.getElementById("nomeProduto");

const subtituloProduto =
    document.getElementById("subtituloProduto");

const descricaoProduto =
    document.getElementById("descricaoProduto");

const imagemPrincipal =
    document.getElementById("imagemPrincipal");

const imagemProduto01 =
    document.getElementById("imagemProduto01");

const imagemProduto02 =
    document.getElementById("imagemProduto02");

const imagemProduto03 =
    document.getElementById("imagemProduto03");

const imagemDisponibilidade =
    document.getElementById("imagemDisponibilidade");

const imagemPreco =
    document.getElementById("imagemPreco");

const precoProduto =
    document.getElementById("precoProduto");

const estoqueProduto =
    document.getElementById("estoqueProduto");

const pesoProduto =
    document.getElementById("pesoProduto");

const tipoProduto =
    document.getElementById("tipoProduto");

const limiteQuantidade =
    document.getElementById("limiteQuantidade");

const quantidadeProduto =
    document.getElementById("quantidadeProduto");


/* ==========================================================
   PREENCHIMENTO DO CABEÇALHO
========================================================== */

document.getElementById("tituloPagina").textContent =
    pagina.titulo;

document.getElementById("menuInicio").textContent =
    pagina.menu.inicio;

document.getElementById("menuCategorias").textContent =
    pagina.menu.categorias;

document.getElementById("menuOfertas").textContent =
    pagina.menu.ofertas;

document.getElementById("campoBusca").placeholder =
    pagina.menu.busca;


/* ==========================================================
   PREENCHIMENTO DO PRODUTO
========================================================== */

nomeProduto.textContent =
    produto.nome;

subtituloProduto.textContent =
    produto.subtitulo;

descricaoProduto.textContent =
    produto.descricao;


/* ==========================================================
   IMAGEM PRINCIPAL
========================================================== */

imagemPrincipal.src =
    produto.imagemPrincipal;

imagemPrincipal.alt =
    produto.nome;


/* ==========================================================
   IMAGENS DA GALERIA
========================================================== */

imagemProduto01.src =
    produto.imagens[0].imagem;

imagemProduto01.alt =
    produto.imagens[0].nome;


imagemProduto02.src =
    produto.imagens[1].imagem;

imagemProduto02.alt =
    produto.imagens[1].nome;


imagemProduto03.src =
    produto.imagens[2].imagem;

imagemProduto03.alt =
    produto.imagens[2].nome;


/* ==========================================================
   NOMES DAS IMAGENS
========================================================== */

document.getElementById("nomeImagem01").textContent =
    produto.imagens[0].nome;

document.getElementById("descricaoImagem01").textContent =
    produto.imagens[0].descricao;


document.getElementById("nomeImagem02").textContent =
    produto.imagens[1].nome;

document.getElementById("descricaoImagem02").textContent =
    produto.imagens[1].descricao;


document.getElementById("nomeImagem03").textContent =
    produto.imagens[2].nome;

document.getElementById("descricaoImagem03").textContent =
    produto.imagens[2].descricao;


/* ==========================================================
   DISPONIBILIDADE
========================================================== */

imagemDisponibilidade.src =
    produto.imagemPrincipal;

imagemDisponibilidade.alt =
    produto.nome;


estoqueProduto.textContent =
    "Em estoque: " + produto.estoque + " unidades";


pesoProduto.textContent =
    "Peso: " + produto.peso;


tipoProduto.textContent =
    "Tipo: " + produto.tipo;


/* ==========================================================
   PREÇO
========================================================== */

imagemPreco.src =
    produto.imagemPrincipal;

imagemPreco.alt =
    produto.nome;


precoProduto.textContent =
    formatarPreco(produto.preco);


/* ==========================================================
   QUANTIDADE MÁXIMA
========================================================== */

quantidadeProduto.max =
    produto.estoque;


limiteQuantidade.textContent =
    "Máx. " + produto.estoque + " itens";


/* ==========================================================
   PREENCHIMENTO DAS AVALIAÇÕES
========================================================== */

document.getElementById("nomeAvaliador01").textContent =
    produto.avaliacoes[0].nome;

document.getElementById("estrelasAvaliacao01").textContent =
    produto.avaliacoes[0].estrelas;

document.getElementById("textoAvaliacao01").textContent =
    produto.avaliacoes[0].texto;


document.getElementById("nomeAvaliador02").textContent =
    produto.avaliacoes[1].nome;

document.getElementById("estrelasAvaliacao02").textContent =
    produto.avaliacoes[1].estrelas;

document.getElementById("textoAvaliacao02").textContent =
    produto.avaliacoes[1].texto;


document.getElementById("nomeAvaliador03").textContent =
    produto.avaliacoes[2].nome;

document.getElementById("estrelasAvaliacao03").textContent =
    produto.avaliacoes[2].estrelas;

document.getElementById("textoAvaliacao03").textContent =
    produto.avaliacoes[2].texto;


document.getElementById("nomeAvaliador04").textContent =
    produto.avaliacoes[3].nome;

document.getElementById("estrelasAvaliacao04").textContent =
    produto.avaliacoes[3].estrelas;

document.getElementById("textoAvaliacao04").textContent =
    produto.avaliacoes[3].texto;


/* ==========================================================
   RODAPÉ
========================================================== */

document.getElementById("textoRodape").textContent =
    pagina.rodape;


/* ==========================================================
   FUNÇÃO PARA FORMATAR PREÇO
========================================================== */

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}


/* ==========================================================
   FUNÇÃO PARA MOSTRAR MENSAGEM
========================================================== */

function mostrarMensagem(texto) {

    const mensagem =
        document.getElementById("mensagemSistema");

    mensagem.textContent = texto;

    mensagem.classList.add("exibir");

    setTimeout(() => {

        mensagem.classList.remove("exibir");

    }, 2500);

}


/* ==========================================================
   FUNÇÃO PARA PEGAR A QUANTIDADE
========================================================== */

function obterQuantidade() {

    let quantidade =
        Number(quantidadeProduto.value);


    if (quantidade < 1) {

        quantidade = 1;

        quantidadeProduto.value = 1;

    }


    if (quantidade > produto.estoque) {

        quantidade = produto.estoque;

        quantidadeProduto.value =
            produto.estoque;

        mostrarMensagem(
            "Quantidade maior que o estoque disponível."
        );

    }


    return quantidade;

}


/* ==========================================================
   ADICIONAR AO CARRINHO
========================================================== */

function adicionarAoCarrinho() {

    const quantidade =
        obterQuantidade();

    const total =
        quantidade * produto.preco;


    mostrarMensagem(

        quantidade +
        " item(ns) adicionado(s) ao carrinho. Total: " +
        formatarPreco(total)

    );

}


/* ==========================================================
   COMPRAR AGORA
========================================================== */

function comprarAgora() {

    const quantidade =
        obterQuantidade();

    const total =
        quantidade * produto.preco;


    mostrarMensagem(

        "Compra iniciada. Total: " +
        formatarPreco(total)

    );

}


/* ==========================================================
   BOTÕES DO TOPO
========================================================== */

document
    .getElementById("btnAdicionarTopo")
    .addEventListener(
        "click",
        adicionarAoCarrinho
    );


document
    .getElementById("btnComprarTopo")
    .addEventListener(
        "click",
        comprarAgora
    );


/* ==========================================================
   BOTÕES DA ÁREA DE QUANTIDADE
========================================================== */

document
    .getElementById("btnAdicionarCarrinho")
    .addEventListener(
        "click",
        adicionarAoCarrinho
    );


document
    .getElementById("btnComprarAgora")
    .addEventListener(
        "click",
        comprarAgora
    );


/* ==========================================================
   VALIDAÇÃO DA QUANTIDADE
========================================================== */

quantidadeProduto.addEventListener(
    "change",
    () => {

        obterQuantidade();

    }
);


/* ==========================================================
   BOTÃO VER AVALIAÇÕES
========================================================== */

document
    .getElementById("btnVerTodasAvaliacoes")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("secaoAvaliacoes")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* ==========================================================
   BOTÃO ESCREVER AVALIAÇÃO
========================================================== */

document
    .getElementById("btnEscreverAvaliacao")
    .addEventListener(
        "click",
        () => {

            mostrarMensagem(
                "Área para escrever avaliação."
            );

        }
    );


/* ==========================================================
   BOTÃO DE BUSCA
========================================================== */

document
    .getElementById("btnBuscar")
    .addEventListener(
        "click",
        () => {

            const busca =
                document
                    .getElementById("campoBusca")
                    .value
                    .trim();


            if (busca === "") {

                mostrarMensagem(
                    "Digite um produto para pesquisar."
                );

                return;

            }


            mostrarMensagem(
                "Pesquisando por: " + busca
            );

        }
    );


/* ==========================================================
   ABAS
========================================================== */

document
    .getElementById("abaDescricao")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("secaoDescricao")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


document
    .getElementById("abaDetalhes")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("secaoQuantidadePreco")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


document
    .getElementById("abaAvaliacoes")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("secaoAvaliacoes")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );
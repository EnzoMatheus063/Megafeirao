/* ==========================================================
    DADOS DA PÁGINA
========================================================== */

const pagina = {

    logo: {

        titulo: "Mega Feirão",

        imagem: "../Assets/logo.png"

    },

    pesquisa: {

        placeholder: "Pesquisar produtos..."

    },

    menu: {

        inicio: "Início",

        produtos: "Produtos",

        ofertas: "Ofertas",

        contato: "Contato"

    },

    carrinho: {

        titulo: "Meu Carrinho",

        descricao:
        "Confira os produtos adicionados antes de finalizar sua compra."

    },

    resumo: {

        titulo: "Resumo da Compra",

        descricao:
        "Confira os valores antes de finalizar o pedido.",

        continuar: "Continuar Comprando",

        finalizar: "Finalizar Compra"

    }

};

/* ==========================================================
    HEADER
========================================================== */

document.getElementById("logoImagem").src =
pagina.logo.imagem;

document.getElementById("logoTitulo").textContent =
pagina.logo.titulo;

/* ==========================================================
    PESQUISA
========================================================== */

document.getElementById("campoPesquisa").placeholder =
pagina.pesquisa.placeholder;

/* ==========================================================
    MENU
========================================================== */

document.getElementById("menuInicio").textContent =
pagina.menu.inicio;

document.getElementById("menuProdutos").textContent =
pagina.menu.produtos;

document.getElementById("menuOfertas").textContent =
pagina.menu.ofertas;

document.getElementById("menuContato").textContent =
pagina.menu.contato;

/* ==========================================================
    TÍTULO DO CARRINHO
========================================================== */

document.getElementById("tituloCarrinho").textContent =
pagina.carrinho.titulo;

document.getElementById("descricaoCarrinho").textContent =
pagina.carrinho.descricao;

/* ==========================================================
    PRODUTOS
========================================================== */

const produtos = [

    {

        imagem:"/assets/produto1.png",

        nome:"Carne Picanha Grill Kg",

        preco:"R$ 104,99",

        quantidade:"Qtd: 1",

        total:"R$ 104,99"

    },

    {

        imagem:"/assets/produto2.png",

        nome:"Lenço Umedecido Aloe Vera Pampers Pacote 48 Unidades",

        preco:"R$ 20,99",

        quantidade:"Qtd: 2",

        total:"R$ 41,98"

    },

    {

        imagem:"/assets/produto3.png",

        nome:"Whisky Escocês Single Malt 12 Anos Glenfiddich Garrafa 750ml",

        preco:"R$ 534,97",

        quantidade:"Qtd: 1",

        total:"R$ 534,97"

    }

];

/* ==========================================================
    PRODUTO 1
========================================================== */

document.getElementById("produtoImagem1").src =
produtos[0].imagem;

document.getElementById("produtoNome1").textContent =
produtos[0].nome;

document.getElementById("produtoPreco1").textContent =
produtos[0].preco;

document.getElementById("produtoQuantidade1").textContent =
produtos[0].quantidade;

document.getElementById("produtoTotal1").textContent =
produtos[0].total;

/* ==========================================================
    PRODUTO 2
========================================================== */

document.getElementById("produtoImagem2").src =
produtos[1].imagem;

document.getElementById("produtoNome2").textContent =
produtos[1].nome;

document.getElementById("produtoPreco2").textContent =
produtos[1].preco;

document.getElementById("produtoQuantidade2").textContent =
produtos[1].quantidade;

document.getElementById("produtoTotal2").textContent =
produtos[1].total;

/* ==========================================================
    PRODUTO 3
========================================================== */

document.getElementById("produtoImagem3").src =
produtos[2].imagem;

document.getElementById("produtoNome3").textContent =
produtos[2].nome;

document.getElementById("produtoPreco3").textContent =
produtos[2].preco;

document.getElementById("produtoQuantidade3").textContent =
produtos[2].quantidade;

document.getElementById("produtoTotal3").textContent =
produtos[2].total;

/* ==========================================================
    RESUMO
========================================================== */

document.getElementById("tituloResumo").textContent =
pagina.resumo.titulo;

document.getElementById("descricaoResumo").textContent =
pagina.resumo.descricao;

document.getElementById("btnContinuar").textContent =
pagina.resumo.continuar;

document.getElementById("btnFinalizar").textContent =
pagina.resumo.finalizar;

/* ==========================================================
    CARDS DO RESUMO
========================================================== */

document.getElementById("tituloSubtotal").textContent =
"Subtotal";

document.getElementById("valorSubtotal").textContent =
"R$ 681,94";

document.getElementById("descricaoSubtotal").textContent =
"Valor dos produtos.";

document.getElementById("tituloDesconto").textContent =
"Desconto";

document.getElementById("valorDesconto").textContent =
" R$ 0";

document.getElementById("descricaoDesconto").textContent =
"Cupom aplicado.";

document.getElementById("tituloFrete").textContent =
"Frete";

document.getElementById("valorFrete").textContent =
"Grátis";

document.getElementById("descricaoFrete").textContent =
"Entrega padrão.";

document.getElementById("tituloTotal").textContent =
"Total";

document.getElementById("valorTotal").textContent =
"R$ 681,94";

document.getElementById("descricaoTotal").textContent =
"Valor final da compra.";
/* ==========================================================
    CHECKOUT
========================================================== */

const checkout = {

    titulo: "Finalizar Compra",

    descricao:
        "Preencha os dados abaixo para concluir seu pedido.",

    cep: "CEP",

    cepPlaceholder: "Digite seu CEP",

    cupom: "Cupom de Desconto",

    cupomPlaceholder: "Digite seu cupom",

    pagamento: "Forma de Pagamento",

    entrega: "Tipo de Entrega",

    voltar: "Voltar ao Carrinho",

    confirmar: "Confirmar Pedido"

};

/* ==========================================================
    TÍTULOS
========================================================== */

document.getElementById("tituloCheckout").textContent =
checkout.titulo;

document.getElementById("descricaoCheckout").textContent =
checkout.descricao;

/* ==========================================================
    CEP
========================================================== */

document.getElementById("lblCep").textContent =
checkout.cep;

document.getElementById("cep").placeholder =
checkout.cepPlaceholder;

/* ==========================================================
    CUPOM
========================================================== */

document.getElementById("lblCupom").textContent =
checkout.cupom;

document.getElementById("cupom").placeholder =
checkout.cupomPlaceholder;

/* ==========================================================
    PAGAMENTO
========================================================== */

document.getElementById("lblPagamento").textContent =
checkout.pagamento;

document.getElementById("pagamentoOpcao1").textContent =
"Cartão de Crédito";

document.getElementById("pagamentoOpcao2").textContent =
"Cartão de Débito";

document.getElementById("pagamentoOpcao3").textContent =
"PIX";

document.getElementById("pagamentoOpcao4").textContent =
"Boleto Bancário";

/* ==========================================================
    ENTREGA
========================================================== */

document.getElementById("lblEntrega").textContent =
checkout.entrega;

document.getElementById("entregaOpcao1").textContent =
"Entrega Normal";

document.getElementById("entregaOpcao2").textContent =
"Entrega Expressa";

document.getElementById("entregaOpcao3").textContent =
"Retirar na Loja";

/* ==========================================================
    BOTÕES
========================================================== */

document.getElementById("btnVoltarCarrinho").textContent =
checkout.voltar;

document.getElementById("btnConfirmarPedido").textContent =
checkout.confirmar;

/* ==========================================================
    FOOTER
========================================================== */

const footer = {

    titulo1: "Mega Feirão",

    texto1:
        "As melhores ofertas para você todos os dias.",

    titulo2: "Atendimento",

    texto2:
        "Segunda a Sexta das 08:00 às 18:00.",

    titulo3: "Contato",

    texto3:
        "(11) 99999-9999\ncontato@megafeirao.com",

    copyright:
        "© 2025 Mega Feirão - Todos os direitos reservados."

};

/* ==========================================================
    PREENCHIMENTO DO FOOTER
========================================================== */

document.getElementById("footerTitulo1").textContent =
footer.titulo1;

document.getElementById("footerTexto1").textContent =
footer.texto1;

document.getElementById("footerTitulo2").textContent =
footer.titulo2;

document.getElementById("footerTexto2").textContent =
footer.texto2;

document.getElementById("footerTitulo3").textContent =
footer.titulo3;

document.getElementById("footerTexto3").textContent =
footer.texto3;

document.getElementById("copyright").textContent =
footer.copyright;

/* ==========================================================
    MÁSCARA DO CEP
========================================================== */

const campoCep = document.getElementById("cep");

campoCep.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

    this.value = valor.substring(0, 9);

});

/* ==========================================================
    BOTÃO CONTINUAR COMPRANDO
========================================================== */

document.getElementById("btnContinuar")
.addEventListener("click", function () {

    window.location.href = "produtos.html";

});

/* ==========================================================
    BOTÃO FINALIZAR
========================================================== */

document.getElementById("btnFinalizar")
.addEventListener("click", function () {

    document
        .getElementById("checkout")
        ?.scrollIntoView({

            behavior: "smooth"

        });

});

/* ==========================================================
    BOTÃO VOLTAR
========================================================== */

document.getElementById("btnVoltarCarrinho")
.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
    VALIDAÇÃO DO FORMULÁRIO
========================================================== */

document.getElementById("formCheckout")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const cep =
        document.getElementById("cep").value.trim();

    const pagamento =
        document.getElementById("pagamento").value;

    const entrega =
        document.getElementById("entrega").value;

    if (cep.length < 9) {

        alert("Informe um CEP válido.");

        document.getElementById("cep").focus();

        return;

    }

    if (pagamento === "") {

        alert("Selecione a forma de pagamento.");

        return;

    }

    if (entrega === "") {

        alert("Selecione o tipo de entrega.");

        return;

    }

    alert("Pedido confirmado com sucesso!");

    this.reset();

});

/* ==========================================================
    LINKS DO MENU
========================================================== */

document.getElementById("menuInicio").href = "index.html";

document.getElementById("menuProdutos").href = "produtos.html";

document.getElementById("menuOfertas").href = "ofertas.html";

document.getElementById("menuContato").href = "contato.html";

/* ==========================================================
    FIM DO ARQUIVO
========================================================== */
/* ==========================================================
   DADOS DO PAINEL
========================================================== */

const painel = {

    /* ==========================================
       LOGO
    ========================================== */

    logo:{

        imagem:"../Assets/logo.png",

        titulo:"Painel do Lojista"

    },

    /* ==========================================
       MENU
    ========================================== */

    menu:{

        produtos:"Produtos",

        banners:"Banners",

        promocoes:"Promoções",

        vendas:"Vendas",

        configuracoes:"Configurações"

    },

    /* ==========================================
       PESQUISA
    ========================================== */

    pesquisa:{

        placeholder:"Pesquisar produtos, banners ou promoções..."

    },

    /* ==========================================
       HERO
    ========================================== */

    hero:{

        titulo:"Gerencie todo o conteúdo da sua loja",

        descricao:"Cadastre produtos, banners e promoções de forma rápida e organizada.",

        rascunhos:"Ver Rascunhos",

        novoCadastro:"Novo Cadastro",

        filtroProdutos:"Produtos",

        filtroBanners:"Banners",

        filtroPromocoes:"Promoções"

    }

};

/* ==========================================================
   LOGO
========================================================== */

document.getElementById("logoImagem").src =
painel.logo.imagem;

document.getElementById("logoTitulo").textContent =
painel.logo.titulo;

/* ==========================================================
   MENU
========================================================== */

document.getElementById("menuProdutos").textContent =
painel.menu.produtos;

document.getElementById("menuBanners").textContent =
painel.menu.banners;

document.getElementById("menuPromocoes").textContent =
painel.menu.promocoes;

document.getElementById("menuVendas").textContent =
painel.menu.vendas;

document.getElementById("menuConfiguracoes").textContent =
painel.menu.configuracoes;

/* ==========================================================
   PESQUISA
========================================================== */

document.getElementById("campoPesquisa").placeholder =
painel.pesquisa.placeholder;

/* ==========================================================
   HERO
========================================================== */

document.getElementById("tituloHero").textContent =
painel.hero.titulo;

document.getElementById("descricaoHero").textContent =
painel.hero.descricao;

document.getElementById("btnRascunhos").textContent =
painel.hero.rascunhos;

document.getElementById("btnNovoCadastro").textContent =
painel.hero.novoCadastro;

document.getElementById("btnFiltroProdutos").textContent =
painel.hero.filtroProdutos;

document.getElementById("btnFiltroBanners").textContent =
painel.hero.filtroBanners;

document.getElementById("btnFiltroPromocoes").textContent =
painel.hero.filtroPromocoes;

/* ==========================================================
   CADASTRO DE PRODUTO
========================================================== */

const cadastroProduto = {

    titulo:"Cadastro de Produto",

    descricao:"Preencha os dados do produto para disponibilizá-lo na loja.",

    imagem:"../Assets/produto1.png",

    labels:{

        nome:"Nome do Produto",

        sku:"Carne Picanha Grill",

        categoria:"Categoria",

        preco:"Preço",

        precoPromo:"Preço Promocional",

        estoque:"Estoque",

        descricao:"Descrição Curta",

        imagem:"Imagem"

    },

    botoes:{

        rascunho:"Salvar Rascunho",

        salvar:"Salvar Produto"

    }

};

document.getElementById("tituloCadastroProduto").textContent =
cadastroProduto.titulo;

document.getElementById("descricaoCadastroProduto").textContent =
cadastroProduto.descricao;

document.getElementById("imagemCadastroProduto").src =
cadastroProduto.imagem;

document.getElementById("lblNomeProduto").textContent =
cadastroProduto.labels.nome;

document.getElementById("lblSku").textContent =
cadastroProduto.labels.sku;

document.getElementById("lblCategoria").textContent =
cadastroProduto.labels.categoria;

document.getElementById("lblPreco").textContent =
cadastroProduto.labels.preco;

document.getElementById("lblPrecoPromo").textContent =
cadastroProduto.labels.precoPromo;

document.getElementById("lblEstoque").textContent =
cadastroProduto.labels.estoque;

document.getElementById("lblDescricaoCurta").textContent =
cadastroProduto.labels.descricao;

document.getElementById("lblImagemProduto").textContent =
cadastroProduto.labels.imagem;

document.getElementById("btnSalvarRascunhoProduto").textContent =
cadastroProduto.botoes.rascunho;

document.getElementById("btnSalvarProduto").textContent =
cadastroProduto.botoes.salvar;
/* ==========================================================
   PRODUTOS CADASTRADOS
========================================================== */

const produtos = {

    titulo:"Seus Produtos",

    descricao:"Produtos cadastrados recentemente.",

    lista:[

        {

            imagem:"../Assets/produto1.png",

            nome:"Carne Picanha Grill ",

            descricao:"Este item possui peso variável e seu valor total poderá ser alterado após a separação",

            preco:"R$ 105,97",

            estoque:"Estoque: 12"

        },

        {

            imagem:"../Assets/produto2.png",

            nome:"Ovos Iana 20X1",

            descricao:"extra branco, tamanho médio, 20 unidades",

            preco:"R$ 14,97",

            estoque:"Estoque: 48"

        },

        {

            imagem:"../Assets/produto3.png",

            nome:"Whisky Glenfiddich",

            descricao:"Whisky Escocês Single Malt 12 Anos Glenfiddich Garrafa 750ml",

            preco:"R$ 534,97",

            estoque:"Estoque: 23"

        },

        {

            imagem:"../Assets/produto4.png",

            nome:" ARROZ NAMORADO BRANCO TP1 5kg ",

            descricao:"Arroz Namorado Branco Tipo 1 5kg - Pacote com 5kg de arroz branco tipo 1, ideal para o preparo de refeições saborosas e nutritivas.",

            preco:"R$ 19,85",

            estoque:"Estoque: 15"

        },

        {

            imagem:"../Assets/produto5.png",

            nome:"Cerveja Skol c/15uni 269ML",

            descricao:"Cerveja Skol Pilsen c/15uni 269ML",

            preco:"R$ 38,55",

            estoque:"Estoque: 8"

        },

        {

            imagem:"../Assets/produto6.png",

            nome:" Condicionador Seda Cocriações Liso Perfeito Frasco 325ml ",

            descricao:" Condicionador Seda Cocriações Liso Perfeito Frasco 325ml - Fórmula enriquecida com ingredientes que ajudam a controlar o frizz e deixar os fios mais lisos e sedosos.",

            preco:"R$ 15,97",

            estoque:"Estoque: 34"

        }

    ]

};

/* ==========================================================
   TÍTULO DA SEÇÃO
========================================================== */

document.getElementById("tituloProdutos").textContent =
produtos.titulo;

document.getElementById("descricaoProdutos").textContent =
produtos.descricao;

/* ==========================================================
   PRODUTO 1
========================================================== */

document.getElementById("produtoImagem1").src =
produtos.lista[0].imagem;

document.getElementById("produtoNome1").textContent =
produtos.lista[0].nome;

document.getElementById("produtoDescricao1").textContent =
produtos.lista[0].descricao;

document.getElementById("produtoPreco1").textContent =
produtos.lista[0].preco;

document.getElementById("produtoEstoque1").textContent =
produtos.lista[0].estoque;

document.getElementById("btnEditarProduto1").textContent = "Editar";
document.getElementById("btnExcluirProduto1").textContent = "Excluir";
document.getElementById("btnVisualizarProduto1").textContent = "Visualizar";

/* ==========================================================
   PRODUTO 2
========================================================== */

document.getElementById("produtoImagem2").src = produtos.lista[1].imagem;
document.getElementById("produtoNome2").textContent = produtos.lista[1].nome;
document.getElementById("produtoDescricao2").textContent = produtos.lista[1].descricao;
document.getElementById("produtoPreco2").textContent = produtos.lista[1].preco;
document.getElementById("produtoEstoque2").textContent = produtos.lista[1].estoque;

document.getElementById("btnEditarProduto2").textContent = "Editar";
document.getElementById("btnExcluirProduto2").textContent = "Excluir";
document.getElementById("btnVisualizarProduto2").textContent = "Visualizar";

/* ==========================================================
   PRODUTO 3
========================================================== */

document.getElementById("produtoImagem3").src = produtos.lista[2].imagem;
document.getElementById("produtoNome3").textContent = produtos.lista[2].nome;
document.getElementById("produtoDescricao3").textContent = produtos.lista[2].descricao;
document.getElementById("produtoPreco3").textContent = produtos.lista[2].preco;
document.getElementById("produtoEstoque3").textContent = produtos.lista[2].estoque;

document.getElementById("btnEditarProduto3").textContent = "Editar";
document.getElementById("btnExcluirProduto3").textContent = "Excluir";
document.getElementById("btnVisualizarProduto3").textContent = "Visualizar";

/* ==========================================================
   PRODUTO 4
========================================================== */

document.getElementById("produtoImagem4").src = produtos.lista[3].imagem;
document.getElementById("produtoNome4").textContent = produtos.lista[3].nome;
document.getElementById("produtoDescricao4").textContent = produtos.lista[3].descricao;
document.getElementById("produtoPreco4").textContent = produtos.lista[3].preco;
document.getElementById("produtoEstoque4").textContent = produtos.lista[3].estoque;

document.getElementById("btnEditarProduto4").textContent = "Editar";
document.getElementById("btnExcluirProduto4").textContent = "Excluir";
document.getElementById("btnVisualizarProduto4").textContent = "Visualizar";

/* ==========================================================
   PRODUTO 5
========================================================== */

document.getElementById("produtoImagem5").src = produtos.lista[4].imagem;
document.getElementById("produtoNome5").textContent = produtos.lista[4].nome;
document.getElementById("produtoDescricao5").textContent = produtos.lista[4].descricao;
document.getElementById("produtoPreco5").textContent = produtos.lista[4].preco;
document.getElementById("produtoEstoque5").textContent = produtos.lista[4].estoque;

document.getElementById("btnEditarProduto5").textContent = "Editar";
document.getElementById("btnExcluirProduto5").textContent = "Excluir";
document.getElementById("btnVisualizarProduto5").textContent = "Visualizar";

/* ==========================================================
   PRODUTO 6
========================================================== */

document.getElementById("produtoImagem6").src = produtos.lista[5].imagem;
document.getElementById("produtoNome6").textContent = produtos.lista[5].nome;
document.getElementById("produtoDescricao6").textContent = produtos.lista[5].descricao;
document.getElementById("produtoPreco6").textContent = produtos.lista[5].preco;
document.getElementById("produtoEstoque6").textContent = produtos.lista[5].estoque;

document.getElementById("btnEditarProduto6").textContent = "Editar";
document.getElementById("btnExcluirProduto6").textContent = "Excluir";
document.getElementById("btnVisualizarProduto6").textContent = "Visualizar";
/* ==========================================================
   CADASTRO DE BANNER
========================================================== */

const banners = {

    titulo:"Cadastro de Banner",

    descricao:"Cadastre banners promocionais para destacar campanhas na página inicial.",

    imagem:"../Assets/banner.png",

    labels:{

        titulo:"Título do Banner",

        tipo:"Tipo de Banner",

        imagem:"Imagem",

        textoPrincipal:"Texto Principal",

        textoSecundario:"Texto Secundário",

        link:"Link do Botão"

    },

    botoes:{

        preview:"Pré-visualizar",

        salvar:"Salvar Banner"

    },

    lista:[

        {

            imagem:"../Assets/banner1.png",

            titulo:"Mega Feirão",

            descricao:"Descontos de até 70% em toda a loja.",

            status:"Ativo"

        },

        {

            imagem:"../Assets/banner2.png",

            titulo:"Volta às Aulas",

            descricao:"Ofertas especiais em informática.",

            status:"Agendado"

        }

    ]

};

/* ==========================================================
   FORMULÁRIO DE BANNER
========================================================== */

document.getElementById("tituloBanner").textContent =
banners.titulo;

document.getElementById("descricaoBanner").textContent =
banners.descricao;

document.getElementById("imagemBanner").src =
banners.imagem;

document.getElementById("lblTituloBanner").textContent =
banners.labels.titulo;

document.getElementById("lblTipoBanner").textContent =
banners.labels.tipo;

document.getElementById("lblImagemBanner").textContent =
banners.labels.imagem;

document.getElementById("lblTextoPrincipal").textContent =
banners.labels.textoPrincipal;

document.getElementById("lblTextoSecundario").textContent =
banners.labels.textoSecundario;

document.getElementById("lblLinkBanner").textContent =
banners.labels.link;

document.getElementById("btnPreviewBanner").textContent =
banners.botoes.preview;

document.getElementById("btnSalvarBanner").textContent =
banners.botoes.salvar;

/* ==========================================================
   BANNERS CADASTRADOS
========================================================== */

document.getElementById("tituloCampanhas").textContent =
"Banners e Campanhas";

document.getElementById("descricaoCampanhas").textContent =
"Campanhas cadastradas recentemente.";

/* Banner 1 */

document.getElementById("bannerImagem1").src =
banners.lista[0].imagem;

document.getElementById("bannerTitulo1").textContent =
banners.lista[0].titulo;

document.getElementById("bannerDescricao1").textContent =
banners.lista[0].descricao;

document.getElementById("bannerStatus1").textContent =
banners.lista[0].status;

document.getElementById("btnEditarBanner1").textContent =
"Editar";

document.getElementById("btnExcluirBanner1").textContent =
"Excluir";

document.getElementById("btnVisualizarBanner1").textContent =
"Visualizar";

/* Banner 2 */

document.getElementById("bannerImagem2").src =
banners.lista[1].imagem;

document.getElementById("bannerTitulo2").textContent =
banners.lista[1].titulo;

document.getElementById("bannerDescricao2").textContent =
banners.lista[1].descricao;

document.getElementById("bannerStatus2").textContent =
banners.lista[1].status;

document.getElementById("btnEditarBanner2").textContent =
"Editar";

document.getElementById("btnExcluirBanner2").textContent =
"Excluir";

document.getElementById("btnVisualizarBanner2").textContent =
"Visualizar";

/* ==========================================================
   PROMOÇÕES
========================================================== */

const promocoes = {

    titulo:"Cadastro de Promoção",

    descricao:"Cadastre promoções para aumentar as vendas da sua loja.",

    imagem:"../Assets/promocao_inverno.png",

    labels:{

        nome:"Nome da Promoção",

        tipo:"Tipo de Desconto",

        valor:"Valor do Desconto",

        inicio:"Data de Início",

        fim:"Data de Término",

        aplicar:"Aplicar em"

    },

    botoes:{

        rascunho:"Salvar Rascunho",

        salvar:"Salvar Promoção"

    },

    status:[

        {

            titulo:"Promoção de Inverno",

            descricao:"Até 40% OFF",

            situacao:"Ativa",

            imagem:"../Assets/promocao_inverno.png"

        },

        {

            titulo:"Black Friday",

            descricao:"Programada",

            situacao:"Agendada",

            imagem:"../Assets/promocao_black_friday.png"

        },

        {

            titulo:"Liquidacao",

            descricao:"Em edição",

            situacao:"Rascunho",

            imagem:"../Assets/promocao_liquidacao.png"

        },

        {

            titulo:"Dia dos Namorados",

            descricao:"Encerrada",

            situacao:"Expirada",

            imagem:"../Assets/promocao_dia_namorados.png"

        }

    ]

};

/* ==========================================================
   FORMULÁRIO DE PROMOÇÃO
========================================================== */

document.getElementById("tituloCadastroPromocao").textContent =
promocoes.titulo;

document.getElementById("descricaoCadastroPromocao").textContent =
promocoes.descricao;

document.getElementById("imagemPromocao").src =
promocoes.imagem;

document.getElementById("lblNomePromocao").textContent =
promocoes.labels.nome;

document.getElementById("lblTipoDesconto").textContent =
promocoes.labels.tipo;

document.getElementById("lblValorDesconto").textContent =
promocoes.labels.valor;

document.getElementById("lblInicioPromocao").textContent =
promocoes.labels.inicio;

document.getElementById("lblFimPromocao").textContent =
promocoes.labels.fim;

document.getElementById("lblAplicarEm").textContent =
promocoes.labels.aplicar;

document.getElementById("btnSalvarRascunhoPromocao").textContent =
promocoes.botoes.rascunho;

document.getElementById("btnSalvarPromocao").textContent =
promocoes.botoes.salvar;

/* ==========================================================
   STATUS DAS PROMOÇÕES
========================================================== */

for(let i=1;i<=4;i++){

    document.getElementById("statusImagem"+i).src =
    promocoes.status[i-1].imagem;

    document.getElementById("statusTitulo"+i).textContent =
    promocoes.status[i-1].titulo;

    document.getElementById("statusDescricao"+i).textContent =
    promocoes.status[i-1].descricao;

    document.getElementById("statusSituacao"+i).textContent =
    promocoes.status[i-1].situacao;

}
/* ==========================================================
   RESUMO DO PAINEL
========================================================== */

const resumo = {

    titulo:"Resumo Geral",

    descricao:"Acompanhe rapidamente os principais números da sua loja.",

    cards:[

        {

            titulo:"Produtos",

            valor:"126",

            descricao:"Produtos cadastrados"

        },

        {

            titulo:"Banners",

            valor:"8",

            descricao:"Campanhas disponíveis"

        },

        {

            titulo:"Promoções",

            valor:"14",

            descricao:"Promoções cadastradas"

        }

    ],

    grafico:{

        titulo:"Cadastros por Mês",

        descricao:"Quantidade de conteúdos cadastrados nos últimos meses.",

        imagem:"../Assets/grafico_banners.png"

    }

};

/* ==========================================================
   RESUMO
========================================================== */

document.getElementById("tituloResumo").textContent =
resumo.titulo;

document.getElementById("descricaoResumo").textContent =
resumo.descricao;

for(let i = 1; i <= 3; i++){

    document.getElementById("tituloResumoCard"+i).textContent =
    resumo.cards[i-1].titulo;

    document.getElementById("valorResumoCard"+i).textContent =
    resumo.cards[i-1].valor;

    document.getElementById("descricaoResumoCard"+i).textContent =
    resumo.cards[i-1].descricao;

}

/* ==========================================================
   GRÁFICO
========================================================== */

document.getElementById("tituloGrafico").textContent =
resumo.grafico.titulo;

document.getElementById("descricaoGrafico").textContent =
resumo.grafico.descricao;

document.getElementById("imagemGrafico").src =
resumo.grafico.imagem;

/* ==========================================================
   RODAPÉ
========================================================== */

const footer = {

    dica:"Mantenha seus produtos, banners e promoções sempre atualizados para aumentar as vendas.",

    produtos:"Produtos",

    banners:"Banners",

    promocoes:"Promoções",

    ajuda:"Ajuda",

    termos:"Termos de Uso",

    privacidade:"Política de Privacidade",

    copyright:"© 2026 Mega Feirão - Todos os direitos reservados."

};

document.getElementById("footerDica").textContent =
footer.dica;

document.getElementById("footerProdutos").textContent =
footer.produtos;

document.getElementById("footerBanners").textContent =
footer.banners;

document.getElementById("footerPromocoes").textContent =
footer.promocoes;

document.getElementById("footerAjuda").textContent =
footer.ajuda;

document.getElementById("footerTermos").textContent =
footer.termos;

document.getElementById("footerPrivacidade").textContent =
footer.privacidade;

document.getElementById("footerCopyright").textContent =
footer.copyright;

/* ==========================================================
   LINKS
========================================================== */

document.getElementById("footerProdutos").href =
"produtos.html";

document.getElementById("footerBanners").href =
"banners.html";

document.getElementById("footerPromocoes").href =
"promocoes.html";

document.getElementById("footerAjuda").href =
"ajuda.html";

document.getElementById("footerTermos").href =
"termos.html";

document.getElementById("footerPrivacidade").href =
"privacidade.html";

/* ==========================================================
   EVENTOS DOS BOTÕES
========================================================== */

document.getElementById("btnNovoCadastro")
.addEventListener("click", function(){

    alert("Novo cadastro iniciado.");

});

document.getElementById("btnRascunhos")
.addEventListener("click", function(){

    alert("Abrindo rascunhos.");

});

document.getElementById("btnSalvarProduto")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Produto salvo com sucesso!");

});

document.getElementById("btnSalvarBanner")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Banner salvo com sucesso!");

});

document.getElementById("btnSalvarPromocao")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Promoção salva com sucesso!");

});

document.getElementById("btnPreviewBanner")
.addEventListener("click", function(){

    alert("Pré-visualização do banner.");

});

/* ==========================================================
   FILTROS
========================================================== */

document.getElementById("btnFiltroProdutos")
.addEventListener("click", function(){

    alert("Filtro: Produtos");

});

document.getElementById("btnFiltroBanners")
.addEventListener("click", function(){

    alert("Filtro: Banners");

});

document.getElementById("btnFiltroPromocoes")
.addEventListener("click", function(){

    alert("Filtro: Promoções");

});

/* ==========================================================
   PESQUISA
========================================================== */

document.getElementById("campoPesquisa")
.addEventListener("keyup", function(event){

    if(event.key === "Enter"){

        alert("Pesquisar: " + this.value);

    }

});

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

window.addEventListener("load", function(){

    console.log("Painel de Conteúdo do Lojista carregado com sucesso.");

});
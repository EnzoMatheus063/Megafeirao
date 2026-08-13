/* ==========================================================
   PAINEL DO LOJISTA
   JAVASCRIPT PRINCIPAL
========================================================== */


/* ==========================================================
   DADOS DO PAINEL
========================================================== */

const painel = {

    logo: {

        imagem: "../Assets/logo.png",

        titulo: "Painel do Lojista"

    },

    menu: {

        produtos: "Produtos",

        banners: "Banners",

        promocoes: "Promoções",

        vendas: "Vendas",

        configuracoes: "Configurações"

    },

    pesquisa: {

        placeholder:
        "Pesquisar produtos, banners ou promoções..."

    },

    hero: {

        titulo:
        "Gerencie todo o conteúdo da sua loja",

        descricao:
        "Cadastre produtos, banners e promoções de forma rápida e organizada.",

        rascunhos:
        "Ver Rascunhos",

        novoCadastro:
        "Novo Cadastro",

        filtroProdutos:
        "Produtos",

        filtroBanners:
        "Banners",

        filtroPromocoes:
        "Promoções"

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

    titulo:
    "Cadastro de Produto",

    descricao:
    "Preencha os dados do produto para disponibilizá-lo na loja.",

    imagem:
    "../Assets/produto1.png",

    labels: {

        nome:
        "Nome do Produto",

        sku:
        "Código do Produto",

        categoria:
        "Categoria",

        preco:
        "Preço",

        precoPromo:
        "Preço Promocional",

        estoque:
        "Estoque",

        descricao:
        "Descrição Curta",

        imagem:
        "Imagem"

    },

    botoes: {

        rascunho:
        "Salvar Rascunho",

        salvar:
        "Salvar Produto"

    }

};


/* ==========================================================
   PREENCHIMENTO DO CADASTRO DE PRODUTO
========================================================== */

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
   CARREGAR CATEGORIAS DO BANCO
========================================================== */

const selectCategoria =
document.getElementById("categoriaProduto");

if (selectCategoria) {

    fetch("http://localhost:3000/categoria")

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar categorias."
                );

            }

            return response.json();

        })

        .then(function(categorias) {

            categorias.forEach(function(categoria) {

                const option =
                document.createElement("option");

                option.value =
                categoria.idCategoria;

                option.textContent =
                categoria.nome;

                selectCategoria.appendChild(option);

            });

        })

        .catch(function(erro) {

            console.error(
                "Erro ao carregar categorias:",
                erro
            );

        });

}


/* ==========================================================
   PRODUTOS CADASTRADOS
========================================================== */

const produtos = {

    titulo:
    "Seus Produtos",

    descricao:
    "Produtos cadastrados recentemente.",

    lista: [

        {

            imagem:
            "../Assets/produto1.png",

            nome:
            "Carne Picanha Grill",

            descricao:
            "Este item possui peso variável e seu valor total poderá ser alterado após a separação",

            preco:
            "R$ 105,97",

            estoque:
            "Estoque: 12"

        },

        {

            imagem:
            "../Assets/produto2.png",

            nome:
            "Ovos Iana 20X1",

            descricao:
            "Extra branco, tamanho médio, 20 unidades",

            preco:
            "R$ 14,97",

            estoque:
            "Estoque: 48"

        },

        {

            imagem:
            "../Assets/produto3.png",

            nome:
            "Whisky Glenfiddich",

            descricao:
            "Whisky Escocês Single Malt 12 Anos Glenfiddich Garrafa 750ml",

            preco:
            "R$ 534,97",

            estoque:
            "Estoque: 23"

        },

        {

            imagem:
            "../Assets/produto4.png",

            nome:
            "Arroz Namorado Branco TP1 5kg",

            descricao:
            "Arroz Namorado Branco Tipo 1 5kg - Pacote com 5kg de arroz branco tipo 1.",

            preco:
            "R$ 19,85",

            estoque:
            "Estoque: 15"

        },

        {

            imagem:
            "../Assets/produto5.png",

            nome:
            "Cerveja Skol c/15uni 269ML",

            descricao:
            "Cerveja Skol Pilsen c/15uni 269ML",

            preco:
            "R$ 38,55",

            estoque:
            "Estoque: 8"

        },

        {

            imagem:
            "../Assets/produto6.png",

            nome:
            "Condicionador Seda Liso Perfeito",

            descricao:
            "Condicionador Seda Cocriações Liso Perfeito Frasco 325ml.",

            preco:
            "R$ 15,97",

            estoque:
            "Estoque: 34"

        }

    ]

};


/* ==========================================================
   TÍTULO DOS PRODUTOS
========================================================== */

document.getElementById("tituloProdutos").textContent =
produtos.titulo;

document.getElementById("descricaoProdutos").textContent =
produtos.descricao;


/* ==========================================================
   PREENCHIMENTO DOS 6 PRODUTOS
========================================================== */

for (
    let i = 1;
    i <= produtos.lista.length;
    i++
) {

    const produto =
    produtos.lista[i - 1];

    document.getElementById(
        "produtoImagem" + i
    ).src = produto.imagem;

    document.getElementById(
        "produtoNome" + i
    ).textContent = produto.nome;

    document.getElementById(
        "produtoDescricao" + i
    ).textContent = produto.descricao;

    document.getElementById(
        "produtoPreco" + i
    ).textContent = produto.preco;

    document.getElementById(
        "produtoEstoque" + i
    ).textContent = produto.estoque;

    document.getElementById(
        "btnEditarProduto" + i
    ).textContent = "Editar";

    document.getElementById(
        "btnExcluirProduto" + i
    ).textContent = "Excluir";

    document.getElementById(
        "btnVisualizarProduto" + i
    ).textContent = "Visualizar";

}


/* ==========================================================
   CADASTRO DE INFORMAÇÕES DO PRODUTO
========================================================== */

const informacoesProduto = {

    titulo:
    "Informações Complementares",

    descricao:
    "Cadastre marcas, categorias, cores, tamanhos e imagens para utilizar nos produtos.",

    marca: {

        titulo:
        "Marca",

        nome:
        "Nome da Marca",

        logo:
        "Logo da Marca",

        botao:
        "Salvar Marca"

    },

    categoria: {

        titulo:
        "Categoria",

        nome:
        "Nome da Categoria",

        botao:
        "Salvar Categoria"

    },

    cor: {

        titulo:
        "Cor",

        nome:
        "Nome da Cor",

        codigo:
        "Código da Cor",

        botao:
        "Salvar Cor"

    },

    tamanho: {

        titulo:
        "Tamanho",

        nome:
        "Descrição do Tamanho",

        botao:
        "Salvar Tamanho"

    },

    imagem: {

        titulo:
        "Imagem do Produto",

        produto:
        "Produto",

        arquivo:
        "Imagem",

        botao:
        "Salvar Imagem"

    }

};


/* ==========================================================
   TÍTULO DA ÁREA
========================================================== */

document.getElementById(
    "tituloInformacoesProduto"
).textContent =
informacoesProduto.titulo;

document.getElementById(
    "descricaoInformacoesProduto"
).textContent =
informacoesProduto.descricao;


/* ==========================================================
   MARCA
========================================================== */

document.getElementById(
    "tituloMarca"
).textContent =
informacoesProduto.marca.titulo;

document.getElementById(
    "lblNomeMarca"
).textContent =
informacoesProduto.marca.nome;

document.getElementById(
    "lblLogoMarca"
).textContent =
informacoesProduto.marca.logo;

document.getElementById(
    "btnSalvarMarca"
).textContent =
informacoesProduto.marca.botao;


/* ==========================================================
   CATEGORIA
========================================================== */

document.getElementById(
    "tituloCategoriaCadastro"
).textContent =
informacoesProduto.categoria.titulo;

document.getElementById(
    "lblNomeCategoriaCadastro"
).textContent =
informacoesProduto.categoria.nome;

document.getElementById(
    "btnSalvarCategoria"
).textContent =
informacoesProduto.categoria.botao;


/* ==========================================================
   COR
========================================================== */

document.getElementById(
    "tituloCor"
).textContent =
informacoesProduto.cor.titulo;

document.getElementById(
    "lblNomeCor"
).textContent =
informacoesProduto.cor.nome;

document.getElementById(
    "lblCodigoCor"
).textContent =
informacoesProduto.cor.codigo;

document.getElementById(
    "btnSalvarCor"
).textContent =
informacoesProduto.cor.botao;


/* ==========================================================
   TAMANHO
========================================================== */

document.getElementById(
    "tituloTamanho"
).textContent =
informacoesProduto.tamanho.titulo;

document.getElementById(
    "lblNomeTamanho"
).textContent =
informacoesProduto.tamanho.nome;

document.getElementById(
    "btnSalvarTamanho"
).textContent =
informacoesProduto.tamanho.botao;


/* ==========================================================
   IMAGEM DO PRODUTO
========================================================== */

document.getElementById(
    "tituloImagemProdutoCadastro"
).textContent =
informacoesProduto.imagem.titulo;

document.getElementById(
    "lblProdutoImagemCadastro"
).textContent =
informacoesProduto.imagem.produto;

document.getElementById(
    "lblArquivoImagem"
).textContent =
informacoesProduto.imagem.arquivo;

document.getElementById(
    "btnSalvarImagemProduto"
).textContent =
informacoesProduto.imagem.botao;


/* ==========================================================
   CADASTRO DE BANNER
========================================================== */

const banners = {

    titulo:
    "Cadastro de Banner",

    descricao:
    "Cadastre banners promocionais para destacar campanhas na página inicial.",

    imagem:
    "../Assets/banner.png",

    labels: {

        titulo:
        "Título do Banner",

        tipo:
        "Tipo de Banner",

        imagem:
        "Imagem",

        textoPrincipal:
        "Texto Principal",

        textoSecundario:
        "Texto Secundário",

        link:
        "Link do Botão"

    },

    botoes: {

        preview:
        "Pré-visualizar",

        salvar:
        "Salvar Banner"

    },

    lista: [

        {

            imagem:
            "../Assets/banner1.png",

            titulo:
            "Mega Feirão",

            descricao:
            "Descontos de até 70% em toda a loja.",

            status:
            "Ativo"

        },

        {

            imagem:
            "../Assets/banner2.png",

            titulo:
            "Volta às Aulas",

            descricao:
            "Ofertas especiais em informática.",

            status:
            "Agendado"

        }

    ]

};


/* ==========================================================
   FORMULÁRIO DE BANNER
========================================================== */

document.getElementById(
    "tituloBanner"
).textContent =
banners.titulo;

document.getElementById(
    "descricaoBanner"
).textContent =
banners.descricao;

document.getElementById(
    "imagemBanner"
).src =
banners.imagem;

document.getElementById(
    "lblTituloBanner"
).textContent =
banners.labels.titulo;

document.getElementById(
    "lblTipoBanner"
).textContent =
banners.labels.tipo;

document.getElementById(
    "lblImagemBanner"
).textContent =
banners.labels.imagem;

document.getElementById(
    "lblTextoPrincipal"
).textContent =
banners.labels.textoPrincipal;

document.getElementById(
    "lblTextoSecundario"
).textContent =
banners.labels.textoSecundario;

document.getElementById(
    "lblLinkBanner"
).textContent =
banners.labels.link;

document.getElementById(
    "btnPreviewBanner"
).textContent =
banners.botoes.preview;

document.getElementById(
    "btnSalvarBanner"
).textContent =
banners.botoes.salvar;


/* ==========================================================
   BANNERS CADASTRADOS
========================================================== */

document.getElementById(
    "tituloCampanhas"
).textContent =
"Banners e Campanhas";

document.getElementById(
    "descricaoCampanhas"
).textContent =
"Campanhas cadastradas recentemente.";


for (
    let i = 1;
    i <= banners.lista.length;
    i++
) {

    const banner =
    banners.lista[i - 1];

    document.getElementById(
        "bannerImagem" + i
    ).src = banner.imagem;

    document.getElementById(
        "bannerTitulo" + i
    ).textContent = banner.titulo;

    document.getElementById(
        "bannerDescricao" + i
    ).textContent = banner.descricao;

    document.getElementById(
        "bannerStatus" + i
    ).textContent = banner.status;

    document.getElementById(
        "btnEditarBanner" + i
    ).textContent = "Editar";

    document.getElementById(
        "btnExcluirBanner" + i
    ).textContent = "Excluir";

    document.getElementById(
        "btnVisualizarBanner" + i
    ).textContent = "Visualizar";

}


/* ==========================================================
   PROMOÇÕES
========================================================== */

const promocoes = {

    titulo:
    "Cadastro de Promoção",

    descricao:
    "Cadastre promoções para aumentar as vendas da sua loja.",

    imagem:
    "../Assets/promocao_inverno.png",

    labels: {

        nome:
        "Nome da Promoção",

        tipo:
        "Tipo de Desconto",

        valor:
        "Valor do Desconto",

        inicio:
        "Data de Início",

        fim:
        "Data de Término",

        aplicar:
        "Aplicar em"

    },

    botoes: {

        rascunho:
        "Salvar Rascunho",

        salvar:
        "Salvar Promoção"

    },

    status: [

        {

            titulo:
            "Promoção de Inverno",

            descricao:
            "Até 40% OFF",

            situacao:
            "Ativa",

            imagem:
            "../Assets/promocao_inverno.png"

        },

        {

            titulo:
            "Black Friday",

            descricao:
            "Programada",

            situacao:
            "Agendada",

            imagem:
            "../Assets/promocao_black_friday.png"

        },

        {

            titulo:
            "Liquidação",

            descricao:
            "Em edição",

            situacao:
            "Rascunho",

            imagem:
            "../Assets/promocao_liquidacao.png"

        },

        {

            titulo:
            "Dia dos Namorados",

            descricao:
            "Encerrada",

            situacao:
            "Expirada",

            imagem:
            "../Assets/promocao_dia_namorados.png"

        }

    ]

};


/* ==========================================================
   FORMULÁRIO DE PROMOÇÃO
========================================================== */

document.getElementById(
    "tituloCadastroPromocao"
).textContent =
promocoes.titulo;

document.getElementById(
    "descricaoCadastroPromocao"
).textContent =
promocoes.descricao;

document.getElementById(
    "imagemPromocao"
).src =
promocoes.imagem;

document.getElementById(
    "lblNomePromocao"
).textContent =
promocoes.labels.nome;

document.getElementById(
    "lblTipoDesconto"
).textContent =
promocoes.labels.tipo;

document.getElementById(
    "lblValorDesconto"
).textContent =
promocoes.labels.valor;

document.getElementById(
    "lblInicioPromocao"
).textContent =
promocoes.labels.inicio;

document.getElementById(
    "lblFimPromocao"
).textContent =
promocoes.labels.fim;

document.getElementById(
    "lblAplicarEm"
).textContent =
promocoes.labels.aplicar;

document.getElementById(
    "btnSalvarRascunhoPromocao"
).textContent =
promocoes.botoes.rascunho;

document.getElementById(
    "btnSalvarPromocao"
).textContent =
promocoes.botoes.salvar;


/* ==========================================================
   STATUS DAS PROMOÇÕES
========================================================== */

for (
    let i = 1;
    i <= promocoes.status.length;
    i++
) {

    const promocao =
    promocoes.status[i - 1];

    document.getElementById(
        "statusImagem" + i
    ).src = promocao.imagem;

    document.getElementById(
        "statusTitulo" + i
    ).textContent = promocao.titulo;

    document.getElementById(
        "statusDescricao" + i
    ).textContent = promocao.descricao;

    document.getElementById(
        "statusSituacao" + i
    ).textContent = promocao.situacao;

}


/* ==========================================================
   RESUMO DO PAINEL
========================================================== */

const resumo = {

    titulo:
    "Resumo Geral",

    descricao:
    "Acompanhe rapidamente os principais números da sua loja.",

    cards: [

        {

            titulo:
            "Produtos",

            valor:
            "126",

            descricao:
            "Produtos cadastrados"

        },

        {

            titulo:
            "Banners",

            valor:
            "8",

            descricao:
            "Campanhas disponíveis"

        },

        {

            titulo:
            "Promoções",

            valor:
            "14",

            descricao:
            "Promoções cadastradas"

        }

    ],

    grafico: {

        titulo:
        "Cadastros por Mês",

        descricao:
        "Quantidade de conteúdos cadastrados nos últimos meses.",

        imagem:
        "../Assets/grafico_banners.png"

    }

};


/* ==========================================================
   RESUMO
========================================================== */

document.getElementById(
    "tituloResumo"
).textContent =
resumo.titulo;

document.getElementById(
    "descricaoResumo"
).textContent =
resumo.descricao;


for (
    let i = 1;
    i <= resumo.cards.length;
    i++
) {

    document.getElementById(
        "tituloResumoCard" + i
    ).textContent =
    resumo.cards[i - 1].titulo;

    document.getElementById(
        "valorResumoCard" + i
    ).textContent =
    resumo.cards[i - 1].valor;

    document.getElementById(
        "descricaoResumoCard" + i
    ).textContent =
    resumo.cards[i - 1].descricao;

}


/* ==========================================================
   GRÁFICO
========================================================== */

document.getElementById(
    "tituloGrafico"
).textContent =
resumo.grafico.titulo;

document.getElementById(
    "descricaoGrafico"
).textContent =
resumo.grafico.descricao;

document.getElementById(
    "imagemGrafico"
).src =
resumo.grafico.imagem;


/* ==========================================================
   RODAPÉ
========================================================== */

const footer = {

    dica:
    "Mantenha seus produtos, banners e promoções sempre atualizados para aumentar as vendas.",

    produtos:
    "Produtos",

    banners:
    "Banners",

    promocoes:
    "Promoções",

    ajuda:
    "Ajuda",

    termos:
    "Termos de Uso",

    privacidade:
    "Política de Privacidade",

    copyright:
    "© 2026 Mega Feirão - Todos os direitos reservados."

};


/* ==========================================================
   PREENCHIMENTO DO RODAPÉ
========================================================== */

document.getElementById(
    "footerDica"
).textContent =
footer.dica;

document.getElementById(
    "footerProdutos"
).textContent =
footer.produtos;

document.getElementById(
    "footerBanners"
).textContent =
footer.banners;

document.getElementById(
    "footerPromocoes"
).textContent =
footer.promocoes;

document.getElementById(
    "footerAjuda"
).textContent =
footer.ajuda;

document.getElementById(
    "footerTermos"
).textContent =
footer.termos;

document.getElementById(
    "footerPrivacidade"
).textContent =
footer.privacidade;

document.getElementById(
    "footerCopyright"
).textContent =
footer.copyright;


/* ==========================================================
   LINKS DO RODAPÉ
========================================================== */

document.getElementById(
    "footerProdutos"
).href =
"produtos.html";

document.getElementById(
    "footerBanners"
).href =
"banners.html";

document.getElementById(
    "footerPromocoes"
).href =
"promocoes.html";

document.getElementById(
    "footerAjuda"
).href =
"ajuda.html";

document.getElementById(
    "footerTermos"
).href =
"termos.html";

document.getElementById(
    "footerPrivacidade"
).href =
"privacidade.html";


/* ==========================================================
   BOTÃO NOVO CADASTRO
========================================================== */

document.getElementById(
    "btnNovoCadastro"
)
.addEventListener("click", function(){

    document.getElementById(
        "formProduto"
    ).scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

});


/* ==========================================================
   BOTÃO RASCUNHOS
========================================================== */

document.getElementById(
    "btnRascunhos"
)
.addEventListener("click", function(){

    alert(
        "Abrindo rascunhos."
    );

});


/* ==========================================================
   SALVAR PRODUTO
========================================================== */

document.getElementById(
    "btnSalvarProduto"
)
.addEventListener("click", function(event){

    event.preventDefault();

    const nome =
    document.getElementById(
        "nomeProduto"
    ).value.trim();

    const codigo =
    document.getElementById(
        "skuProduto"
    ).value.trim();

    const categoria =
    document.getElementById(
        "categoriaProduto"
    ).value;

    const preco =
    document.getElementById(
        "precoProduto"
    ).value;

    const estoque =
    document.getElementById(
        "estoqueProduto"
    ).value;

    if (
        nome === "" ||
        codigo === "" ||
        categoria === "" ||
        preco === "" ||
        estoque === ""
    ){

        alert(
            "Preencha os campos obrigatórios do produto."
        );

        return;

    }

    alert(
        "Produto salvo com sucesso!"
    );

});


/* ==========================================================
   SALVAR RASCUNHO DO PRODUTO
========================================================== */

document.getElementById(
    "btnSalvarRascunhoProduto"
)
.addEventListener("click", function(){

    alert(
        "Produto salvo como rascunho."
    );

});


/* ==========================================================
   PREVIEW DO BANNER
========================================================== */

document.getElementById(
    "btnPreviewBanner"
)
.addEventListener("click", function(){

    alert(
        "Pré-visualização do banner."
    );

});


/* ==========================================================
   SALVAR BANNER
========================================================== */

document.getElementById(
    "btnSalvarBanner"
)
.addEventListener("click", function(event){

    event.preventDefault();

    const titulo =
    document.getElementById(
        "tituloBannerInput"
    ).value.trim();

    if(titulo === ""){

        alert(
            "Informe o título do banner."
        );

        return;

    }

    alert(
        "Banner salvo com sucesso!"
    );

});


/* ==========================================================
   SALVAR RASCUNHO DA PROMOÇÃO
========================================================== */

document.getElementById(
    "btnSalvarRascunhoPromocao"
)
.addEventListener("click", function(){

    alert(
        "Promoção salva como rascunho."
    );

});


/* ==========================================================
   SALVAR PROMOÇÃO
========================================================== */

document.getElementById(
    "btnSalvarPromocao"
)
.addEventListener("click", function(event){

    event.preventDefault();

    const nome =
    document.getElementById(
        "nomePromocao"
    ).value.trim();

    if(nome === ""){

        alert(
            "Informe o nome da promoção."
        );

        return;

    }

    alert(
        "Promoção salva com sucesso!"
    );

});


/* ==========================================================
   FILTRO PRODUTOS
========================================================== */

document.getElementById(
    "btnFiltroProdutos"
)
.addEventListener("click", function(){

    document.getElementById(
        "tituloProdutos"
    ).scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

});


/* ==========================================================
   FILTRO BANNERS
========================================================== */

document.getElementById(
    "btnFiltroBanners"
)
.addEventListener("click", function(){

    document.querySelector(
        ".banners"
    ).scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

});


/* ==========================================================
   FILTRO PROMOÇÕES
========================================================== */

document.getElementById(
    "btnFiltroPromocoes"
)
.addEventListener("click", function(){

    document.querySelector(
        ".promocoes"
    ).scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

});


/* ==========================================================
   PESQUISA
========================================================== */

document.getElementById(
    "campoPesquisa"
)
.addEventListener("keyup", function(event){

    if(event.key !== "Enter"){

        return;

    }

    const pesquisa =
    this.value.trim();

    if(pesquisa === ""){

        alert(
            "Digite algo para pesquisar."
        );

        return;

    }

    alert(
        "Pesquisar: " + pesquisa
    );

});


/* ==========================================================
   CADASTRAR MARCA
========================================================== */

document.getElementById(
    "btnSalvarMarca"
)
.addEventListener("click", function(){

    const nomeMarca =
    document.getElementById(
        "nomeMarca"
    ).value.trim();

    if(nomeMarca === ""){

        alert(
            "Informe o nome da marca."
        );

        return;

    }

    alert(
        "Marca cadastrada com sucesso!"
    );

    document.getElementById(
        "nomeMarca"
    ).value = "";

    document.getElementById(
        "logoMarca"
    ).value = "";

});


/* ==========================================================
   CADASTRAR CATEGORIA
========================================================== */

document.getElementById(
    "btnSalvarCategoria"
)
.addEventListener("click", function(){

    const categoriaNome =
    document.getElementById(
        "nomeCategoria"
    ).value.trim();

    if(categoriaNome === ""){

        alert(
            "Por favor, preencha o nome da categoria."
        );

        return;

    }

    const novaCategoria = {

        nome: categoriaNome

    };


    fetch(
        "http://localhost:3000/categoria",
        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body:
            JSON.stringify(
                novaCategoria
            )

        }
    )

    .then(function(response){

        if(!response.ok){

            throw new Error(
                "Erro ao cadastrar categoria."
            );

        }

        return response.json();

    })

    .then(function(data){

        console.log(
            "Categoria cadastrada:",
            data
        );

        alert(
            "Categoria cadastrada com sucesso!"
        );

        document.getElementById(
            "nomeCategoria"
        ).value = "";


        /* ==========================================
           ATUALIZA AS CATEGORIAS DO PRODUTO
        ========================================== */

        if(selectCategoria){

            const option =
            document.createElement(
                "option"
            );

            option.value =
            data.idCategoria ||
            data.insertId ||
            "";

            option.textContent =
            categoriaNome;

            selectCategoria.appendChild(
                option
            );

        }

    })

    .catch(function(erro){

        console.error(
            "Erro ao cadastrar categoria:",
            erro
        );

        alert(
            "Erro ao cadastrar categoria."
        );

    });

});


/* ==========================================================
   CADASTRAR COR
========================================================== */

document.getElementById(
    "btnSalvarCor"
)
.addEventListener("click", function(){

    const nomeCor =
    document.getElementById(
        "nomeCor"
    ).value.trim();

    const codigoCor =
    document.getElementById(
        "codigoCor"
    ).value;

    if(nomeCor === ""){

        alert(
            "Informe o nome da cor."
        );

        return;

    }

    console.log(
        "Cor:",
        nomeCor
    );

    console.log(
        "Código:",
        codigoCor
    );

    alert(
        "Cor cadastrada com sucesso!"
    );

    document.getElementById(
        "nomeCor"
    ).value = "";

});


/* ==========================================================
   CADASTRAR TAMANHO
========================================================== */

document.getElementById(
    "btnSalvarTamanho"
)
.addEventListener("click", function(){

    const tamanho =
    document.getElementById(
        "nomeTamanho"
    ).value.trim();

    if(tamanho === ""){

        alert(
            "Informe o tamanho."
        );

        return;

    }

    alert(
        "Tamanho cadastrado com sucesso!"
    );

    document.getElementById(
        "nomeTamanho"
    ).value = "";

});


/* ==========================================================
   CADASTRAR IMAGEM DO PRODUTO
========================================================== */

document.getElementById(
    "btnSalvarImagemProduto"
)
.addEventListener("click", function(){

    const produto =
    document.getElementById(
        "produtoImagemCadastro"
    ).value;

    const arquivo =
    document.getElementById(
        "arquivoImagemProduto"
    ).files[0];

    if(produto === ""){

        alert(
            "Selecione o produto."
        );

        return;

    }

    if(!arquivo){

        alert(
            "Selecione uma imagem."
        );

        return;

    }

    alert(
        "Imagem selecionada com sucesso!"
    );

});


/* ==========================================================
   BOTÕES DOS PRODUTOS
========================================================== */

for(let i = 1; i <= 6; i++){

    const btnEditar =
    document.getElementById(
        "btnEditarProduto" + i
    );

    const btnExcluir =
    document.getElementById(
        "btnExcluirProduto" + i
    );

    const btnVisualizar =
    document.getElementById(
        "btnVisualizarProduto" + i
    );


    if(btnEditar){

        btnEditar.addEventListener(
            "click",
            function(){

                alert(
                    "Editando produto " + i
                );

            }
        );

    }


    if(btnExcluir){

        btnExcluir.addEventListener(
            "click",
            function(){

                const confirmar =
                confirm(
                    "Deseja excluir este produto?"
                );

                if(confirmar){

                    alert(
                        "Produto excluído."
                    );

                }

            }
        );

    }


    if(btnVisualizar){

        btnVisualizar.addEventListener(
            "click",
            function(){

                alert(
                    "Visualizando produto " + i
                );

            }
        );

    }

}


/* ==========================================================
   BOTÕES DOS BANNERS
========================================================== */

for(let i = 1; i <= 2; i++){

    const btnEditar =
    document.getElementById(
        "btnEditarBanner" + i
    );

    const btnExcluir =
    document.getElementById(
        "btnExcluirBanner" + i
    );

    const btnVisualizar =
    document.getElementById(
        "btnVisualizarBanner" + i
    );


    if(btnEditar){

        btnEditar.addEventListener(
            "click",
            function(){

                alert(
                    "Editando banner " + i
                );

            }
        );

    }


    if(btnExcluir){

        btnExcluir.addEventListener(
            "click",
            function(){

                const confirmar =
                confirm(
                    "Deseja excluir este banner?"
                );

                if(confirmar){

                    alert(
                        "Banner excluído."
                    );

                }

            }
        );

    }


    if(btnVisualizar){

        btnVisualizar.addEventListener(
            "click",
            function(){

                alert(
                    "Visualizando banner " + i
                );

            }
        );

    }

}


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

window.addEventListener(
    "load",
    function(){

        console.log(
            "Painel do Lojista carregado com sucesso."
        );

    }
);
/* ==========================================================
    HOME
========================================================== */

const home = {

    /* ==========================================
        LOGO
    ========================================== */

    logo:{

        titulo:"Mega Feirão",

        imagem:"../Assets/logo.png"

    },

    /* ==========================================
        MENU SUPERIOR
    ========================================== */

    menuSuperior:{

        ofertaSemana:"Oferta da Semana",

        ofertaDia:"Oferta do Dia",

        categorias:"Categorias",

        contato:"Contato"

    },

    /* ==========================================
        MENU LATERAL
    ========================================== */

    menuLateral:{

        inicio:"Início",

        ofertas:"Ofertas",

        vendidos:"Mais Vendidos",

        cupons:"Cupons",

        conta:"Minha Conta"

    },

    /* ==========================================
        PESQUISA
    ========================================== */

    pesquisa:{

        placeholder:"Pesquisar produtos..."

    },

    /* ==========================================
        USUÁRIO
    ========================================== */

    usuario:{

        foto:"../Assets/usuario.png",

        titulo:"Bem-vindo!",

        descricao:"Encontre as melhores ofertas da loja.",

        criarConta:"Criar Conta",

        entrar:"Entrar"

    },

    /* ==========================================
        BANNER
    ========================================== */

    banner:{

        titulo:"As melhores ofertas estão aqui",

        descricao:
        "Produtos com qualidade, menor preço e entrega rápida.",

        imagem:"../Assets/banner.png",

        placeholder:"O que você procura?",

        botaoSemana:"Oferta da Semana",

        botaoDia:"Oferta do Dia"

    }

};

/* ==========================================================
    LOGO
========================================================== */

document.getElementById("logoImagem").src =
home.logo.imagem;

document.getElementById("logoTitulo").textContent =
home.logo.titulo;

/* ==========================================================
    MENU SUPERIOR
========================================================== */

document.getElementById("menuOfertaSemana").textContent =
home.menuSuperior.ofertaSemana;

document.getElementById("menuOfertaDia").textContent =
home.menuSuperior.ofertaDia;

document.getElementById("menuCategorias").textContent =
home.menuSuperior.categorias;

document.getElementById("menuContato").textContent =
home.menuSuperior.contato;

/* ==========================================================
    MENU LATERAL
========================================================== */

document.getElementById("menuInicio").textContent =
home.menuLateral.inicio;

document.getElementById("menuOfertas").textContent =
home.menuLateral.ofertas;

document.getElementById("menuMaisVendidos").textContent =
home.menuLateral.vendidos;

document.getElementById("menuCupons").textContent =
home.menuLateral.cupons;

document.getElementById("menuMinhaConta").textContent =
home.menuLateral.conta;

/* ==========================================================
    PESQUISA
========================================================== */

document.getElementById("campoPesquisa").placeholder =
home.pesquisa.placeholder;

/* ==========================================================
    USUÁRIO
========================================================== */

document.getElementById("fotoUsuario").src =
home.usuario.foto;

document.getElementById("tituloUsuario").textContent =
home.usuario.titulo;

document.getElementById("descricaoUsuario").textContent =
home.usuario.descricao;

document.getElementById("btnCriarConta").textContent =
home.usuario.criarConta;

document.getElementById("btnEntrar").textContent =
home.usuario.entrar;

/* ==========================================================
    BANNER
========================================================== */

document.getElementById("bannerTitulo").textContent =
home.banner.titulo;

document.getElementById("bannerDescricao").textContent =
home.banner.descricao;

document.getElementById("imagemBanner").src =
home.banner.imagem;

document.getElementById("bannerPesquisa").placeholder =
home.banner.placeholder;

document.getElementById("btnOfertaSemana").textContent =
home.banner.botaoSemana;

document.getElementById("btnOfertaDia").textContent =
home.banner.botaoDia;
/* ==========================================================
    CATEGORIAS
========================================================== */

const categorias = {

    titulo: "Categorias",

    descricao: "Escolha uma categoria para encontrar os melhores produtos.",

    botao: "Ver Todas"

};

document.getElementById("tituloCategorias").textContent =
categorias.titulo;

document.getElementById("descricaoCategorias").textContent =
categorias.descricao;

document.getElementById("btnCategorias").textContent =
categorias.botao;

/* ==========================================================
    LISTA DE CATEGORIAS
========================================================== */

const listaCategorias = [

    {

        imagem: "../Assets/icone_açougue.png",

        titulo: "Açougue, Aves e Peixaria",

        descricao: "Aves e Frangos, Bovinos, Linguiças e Peixaria."

    },

    {

        imagem: "../Assets/icone_produtos.png",

        titulo: "Casa",

        descricao: "Tudo para sua casa."

    },

    {

        imagem: "../Assets/icone_alimentosbasicos.png",

        titulo: "Alimentos Básicos",

        descricao: "Arroz, Feijão, Cestas Básicas , Farinhas e Farofas."

    }

];

/* Categoria 1 */

document.getElementById("categoriaImagem1").src =
listaCategorias[0].imagem;

document.getElementById("categoriaTitulo1").textContent =
listaCategorias[0].titulo;

document.getElementById("categoriaDescricao1").textContent =
listaCategorias[0].descricao;

/* Categoria 2 */

document.getElementById("categoriaImagem2").src =
listaCategorias[1].imagem;

document.getElementById("categoriaTitulo2").textContent =
listaCategorias[1].titulo;

document.getElementById("categoriaDescricao2").textContent =
listaCategorias[1].descricao;

/* Categoria 3 */

document.getElementById("categoriaImagem3").src =
listaCategorias[2].imagem;

document.getElementById("categoriaTitulo3").textContent =
listaCategorias[2].titulo;

document.getElementById("categoriaDescricao3").textContent =
listaCategorias[2].descricao;

/* ==========================================================
    OFERTAS DO DIA
========================================================== */

document.getElementById("tituloOfertasDia").textContent =
"Ofertas do Dia";

document.getElementById("descricaoOfertasDia").textContent =
"Aproveite os melhores descontos de hoje.";

const ofertas = [

    {

        imagem:"../Assets/produto1.png",

        titulo:"Carne Picanha Grill Kg",

        preco:"R$ 105,97"

    },

    {

        imagem:"/Assets/produto2.png",

        titulo:"Ovos Iana Extra Branco 20X1",

        preco:"R$ 14,97"
    },

    {

        imagem:"/Assets/produto3.png",

        titulo:"Whisky Escocês Single Malt 12 Anos Glenfiddich Garrafa 750ml",

        preco:"R$ 534,97"

    },

    {

        imagem:"/Assets/produto4.png",

        titulo:"Arroz Branco Tio Urbano Seleção Especial 5kg Tipo 1",

        preco:"R$ 24,95"

    }

];

/* Produto 1 */

document.getElementById("produtoImagem1").src =
ofertas[0].imagem;

document.getElementById("produtoTitulo1").textContent =
ofertas[0].titulo;

document.getElementById("produtoPreco1").textContent =
ofertas[0].preco;

/* Produto 2 */

document.getElementById("produtoImagem2").src =
ofertas[1].imagem;

document.getElementById("produtoTitulo2").textContent =
ofertas[1].titulo;

document.getElementById("produtoPreco2").textContent =
ofertas[1].preco;

/* Produto 3 */

document.getElementById("produtoImagem3").src =
ofertas[2].imagem;

document.getElementById("produtoTitulo3").textContent =
ofertas[2].titulo;

document.getElementById("produtoPreco3").textContent =
ofertas[2].preco;

/* Produto 4 */

document.getElementById("produtoImagem4").src =
ofertas[3].imagem;

document.getElementById("produtoTitulo4").textContent =
ofertas[3].titulo;

document.getElementById("produtoPreco4").textContent =
ofertas[3].preco;

/* ==========================================================
    PROMOÇÕES DA SEMANA
========================================================== */

document.getElementById("tituloPromocoes").textContent =
"Promoções da Semana";

document.getElementById("descricaoPromocoes").textContent =
"Os produtos mais vendidos com preços especiais.";

document.getElementById("btnPromocoes").textContent =
"Ver Promoções";

const promocoes = [

    {

        imagem:"/Assets/produto5.png",

        titulo:"Cerveja Skol Pilsen c/15uni 269ML",

        preco:"R$ 38,55"

    },

    {

        imagem:"/Assets/produto6.png",

        titulo:"Shampoo Seda Cocriações Liso Perfeito Frasco 325ml",

        preco:"R$ 13,95 "

    },

    {

        imagem:"../Assets/produto7.png",

        titulo:"Limpador Perfumado Bela Flore Casa & Perfume Frasco 2l",

        preco:"R$ 17,97"

    },

    {

        imagem:"../Assets/produto8.png",

        titulo:"Panela De Pressao Tramontina Vancouver Starflon 4,5L R.20582 Vermelha",

        preco:"R$ 179,95"

    }

];

/* Produto 5 */

document.getElementById("produtoImagem5").src =
promocoes[0].imagem;

document.getElementById("produtoTitulo5").textContent =
promocoes[0].titulo;

document.getElementById("produtoPreco5").textContent =
promocoes[0].preco;

/* Produto 6 */

document.getElementById("produtoImagem6").src =
promocoes[1].imagem;

document.getElementById("produtoTitulo6").textContent =
promocoes[1].titulo;

document.getElementById("produtoPreco6").textContent =
promocoes[1].preco;

/* Produto 7 */

document.getElementById("produtoImagem7").src =
promocoes[2].imagem;

document.getElementById("produtoTitulo7").textContent =
promocoes[2].titulo;

document.getElementById("produtoPreco7").textContent =
promocoes[2].preco;

/* Produto 8 */

document.getElementById("produtoImagem8").src =
promocoes[3].imagem;

document.getElementById("produtoTitulo8").textContent =
promocoes[3].titulo;

document.getElementById("produtoPreco8").textContent =
promocoes[3].preco;
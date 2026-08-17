/* ==========================================================
   PAINEL DO LOJISTA
   JAVASCRIPT PRINCIPAL
========================================================== */


/* ==========================================================
   CONFIGURAÇÃO DA API
========================================================== */

const API = "http://localhost:3000";


/* ==========================================================
   ROTAS DA API
========================================================== */

const ROTAS = {

    categorias:
        API + "/categorias",

    marcas:
        API + "/marcas",

    cores:
        API + "/cores",

    tamanhos:
        API + "/tamanhos",

    produtos:
        API + "/produtos",

    imagens:
        API + "/imagem_produto"

};


/* ==========================================================
   FUNÇÃO AUXILIAR
========================================================== */

function elemento(id) {

    return document.getElementById(id);

}


/* ==========================================================
   FUNÇÃO PARA LER RESPOSTA DO SERVIDOR
========================================================== */

async function lerResposta(response) {

    const texto =
        await response.text();


    if (!texto) {

        return {};

    }


    try {

        return JSON.parse(texto);

    }
    catch (erro) {

        console.error(
            "O servidor não retornou JSON:"
        );

        console.error(texto);

        throw new Error(
            "O servidor retornou uma resposta inválida."
        );

    }

}


/* ==========================================================
   DADOS VISUAIS DO PAINEL
========================================================== */

const painel = {

    logo: {

        imagem:
            "../Assets/logo.png",

        titulo:
            "Painel do Lojista"

    },

    menu: {

        produtos:
            "Produtos",

        banners:
            "Banners",

        promocoes:
            "Promoções",

        vendas:
            "Vendas",

        configuracoes:
            "Configurações"

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
   CABEÇALHO
========================================================== */

if (elemento("logoImagem")) {

    elemento("logoImagem").src =
        painel.logo.imagem;

}


if (elemento("logoTitulo")) {

    elemento("logoTitulo").textContent =
        painel.logo.titulo;

}


if (elemento("menuProdutos")) {

    elemento("menuProdutos").textContent =
        painel.menu.produtos;

}


if (elemento("menuBanners")) {

    elemento("menuBanners").textContent =
        painel.menu.banners;

}


if (elemento("menuPromocoes")) {

    elemento("menuPromocoes").textContent =
        painel.menu.promocoes;

}


if (elemento("menuVendas")) {

    elemento("menuVendas").textContent =
        painel.menu.vendas;

}


if (elemento("menuConfiguracoes")) {

    elemento("menuConfiguracoes").textContent =
        painel.menu.configuracoes;

}


if (elemento("campoPesquisa")) {

    elemento("campoPesquisa").placeholder =
        painel.pesquisa.placeholder;

}


/* ==========================================================
   HERO
========================================================== */

if (elemento("tituloHero")) {

    elemento("tituloHero").textContent =
        painel.hero.titulo;

}


if (elemento("descricaoHero")) {

    elemento("descricaoHero").textContent =
        painel.hero.descricao;

}


if (elemento("btnRascunhos")) {

    elemento("btnRascunhos").textContent =
        painel.hero.rascunhos;

}


if (elemento("btnNovoCadastro")) {

    elemento("btnNovoCadastro").textContent =
        painel.hero.novoCadastro;

}


if (elemento("btnFiltroProdutos")) {

    elemento("btnFiltroProdutos").textContent =
        painel.hero.filtroProdutos;

}


if (elemento("btnFiltroBanners")) {

    elemento("btnFiltroBanners").textContent =
        painel.hero.filtroBanners;

}


if (elemento("btnFiltroPromocoes")) {

    elemento("btnFiltroPromocoes").textContent =
        painel.hero.filtroPromocoes;

}


/* ==========================================================
   CADASTRO DE PRODUTO - TEXTOS
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


if (elemento("tituloCadastroProduto")) {

    elemento("tituloCadastroProduto").textContent =
        cadastroProduto.titulo;

}


if (elemento("descricaoCadastroProduto")) {

    elemento("descricaoCadastroProduto").textContent =
        cadastroProduto.descricao;

}


if (elemento("imagemCadastroProduto")) {

    elemento("imagemCadastroProduto").src =
        cadastroProduto.imagem;

}


if (elemento("lblNomeProduto")) {

    elemento("lblNomeProduto").textContent =
        cadastroProduto.labels.nome;

}


if (elemento("lblSku")) {

    elemento("lblSku").textContent =
        cadastroProduto.labels.sku;

}


if (elemento("lblCategoria")) {

    elemento("lblCategoria").textContent =
        cadastroProduto.labels.categoria;

}


if (elemento("lblPreco")) {

    elemento("lblPreco").textContent =
        cadastroProduto.labels.preco;

}


if (elemento("lblPrecoPromo")) {

    elemento("lblPrecoPromo").textContent =
        cadastroProduto.labels.precoPromo;

}


if (elemento("lblEstoque")) {

    elemento("lblEstoque").textContent =
        cadastroProduto.labels.estoque;

}


if (elemento("lblDescricaoCurta")) {

    elemento("lblDescricaoCurta").textContent =
        cadastroProduto.labels.descricao;

}


if (elemento("lblImagemProduto")) {

    elemento("lblImagemProduto").textContent =
        cadastroProduto.labels.imagem;

}


if (elemento("btnSalvarRascunhoProduto")) {

    elemento("btnSalvarRascunhoProduto").textContent =
        cadastroProduto.botoes.rascunho;

}


if (elemento("btnSalvarProduto")) {

    elemento("btnSalvarProduto").textContent =
        cadastroProduto.botoes.salvar;

}


/* ==========================================================
   CARREGAR CATEGORIAS
========================================================== */

async function carregarCategorias() {

    const select =
        elemento("categoriaProduto");


    if (!select) {

        return;

    }


    try {

        const response =
            await fetch(
                ROTAS.categorias
            );


        const resultado =
            await lerResposta(response);


        if (!response.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao buscar categorias."
            );

        }


        const categorias =
            Array.isArray(resultado)
                ? resultado
                : resultado.dados ||
                resultado.categorias ||
                resultado.resultado ||
                [];


        select.innerHTML =
            '<option value="">Selecione...</option>';


        categorias.forEach(
            function (categoria) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    categoria.idCategoria;


                option.textContent =
                    categoria.nome;


                select.appendChild(
                    option
                );

            }
        );


    }
    catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );

    }

}


/* ==========================================================
   CARREGAR PRODUTOS PARA O SELECT DE IMAGENS
========================================================== */

async function carregarProdutosImagem() {

    const select =
        elemento(
            "produtoImagemAux"
        );


    if (!select) {

        return;

    }


    try {

        const response =
            await fetch(
                ROTAS.produtos
            );


        const resultado =
            await lerResposta(response);


        if (!response.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao buscar produtos."
            );

        }


        const produtos =
            Array.isArray(resultado)
                ? resultado
                : resultado.produtos ||
                resultado.dados ||
                resultado.resultado ||
                [];


        select.innerHTML =
            '<option value="">Selecione...</option>';


        produtos.forEach(
            function (produto) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    produto.idProduto;


                option.textContent =
                    produto.nome;


                select.appendChild(
                    option
                );

            }
        );


    }
    catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );

    }

}


/* ==========================================================
   CADASTRAR PRODUTO
========================================================== */

const formProduto =
    elemento("formProduto");


if (formProduto) {

    formProduto.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const nome =
                elemento(
                    "nomeProduto"
                ).value.trim();


            const codigo =
                elemento(
                    "skuProduto"
                ).value.trim();


            const categoria =
                elemento(
                    "categoriaProduto"
                ).value;


            const preco =
                elemento(
                    "precoProduto"
                ).value;


            const precoPromocional =
                elemento(
                    "precoPromocional"
                ).value;


            const estoque =
                elemento(
                    "estoqueProduto"
                ).value;


            const descricao =
                elemento(
                    "descricaoCurta"
                ).value.trim();


            if (
                nome === "" ||
                codigo === "" ||
                categoria === "" ||
                preco === "" ||
                estoque === ""
            ) {

                alert(
                    "Preencha os campos obrigatórios."
                );

                return;

            }


            const produto = {

                nome:
                    nome,

                codigo:
                    codigo,

                descricao:
                    descricao,

                preco:
                    Number(preco),

                preco_promo:
                    precoPromocional !== ""
                        ? Number(
                            precoPromocional
                        )
                        : null,

                estoque:
                    Number(estoque),

                Categoria_idCategoria:
                    Number(categoria)

            };


            console.log(
                "Produto enviado:",
                produto
            );


            try {

                const response =
                    await fetch(
                        ROTAS.produtos,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    produto
                                )

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta produto:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar produto."
                    );

                }


                alert(
                    data.mensagem ||
                    "Produto cadastrado com sucesso!"
                );


                formProduto.reset();


                await carregarProdutosImagem();


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   CADASTRAR MARCA
========================================================== */

const btnSalvarMarca =
    elemento(
        "btnSalvarMarca"
    );


if (btnSalvarMarca) {

    btnSalvarMarca.addEventListener(
        "click",
        async function () {

            const campoNome =
                elemento(
                    "marcaNome"
                );


            const campoLogo =
                elemento(
                    "marcaLogo"
                );


            const nome =
                campoNome.value.trim();


            const logo =
                campoLogo.files[0];


            if (nome === "") {

                alert(
                    "Informe o nome da marca."
                );

                campoNome.focus();

                return;

            }


            const formData =
                new FormData();


            formData.append(
                "nome",
                nome
            );


            if (logo) {

                formData.append(
                    "logo",
                    logo
                );

            }


            console.log(
                "Cadastrando marca:",
                nome
            );


            try {

                const response =
                    await fetch(
                        ROTAS.marcas,
                        {

                            method:
                                "POST",

                            body:
                                formData

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta marca:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar marca."
                    );

                }


                alert(
                    data.mensagem ||
                    "Marca cadastrada com sucesso!"
                );


                campoNome.value =
                    "";


                campoLogo.value =
                    "";


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar marca:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   CADASTRAR CATEGORIA
========================================================== */

const btnSalvarCategoria =
    elemento(
        "btnSalvarCategoriaAux"
    );


if (btnSalvarCategoria) {

    btnSalvarCategoria.addEventListener(
        "click",
        async function () {

            const campo =
                elemento(
                    "categoriaNomeAux"
                );


            const nome =
                campo.value.trim();


            if (nome === "") {

                alert(
                    "Informe o nome da categoria."
                );

                campo.focus();

                return;

            }


            const categoria = {

                nome:
                    nome

            };


            console.log(
                "Categoria enviada:",
                categoria
            );


            try {

                const response =
                    await fetch(
                        ROTAS.categorias,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    categoria
                                )

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta categoria:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar categoria."
                    );

                }


                alert(
                    data.mensagem ||
                    "Categoria cadastrada com sucesso!"
                );


                campo.value =
                    "";


                await carregarCategorias();


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar categoria:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   CADASTRAR COR
========================================================== */

const btnSalvarCor =
    elemento(
        "btnSalvarCor"
    );


if (btnSalvarCor) {

    btnSalvarCor.addEventListener(
        "click",
        async function () {

            const campoNome =
                elemento(
                    "corNome"
                );


            const campoCodigo =
                elemento(
                    "codigoCor"
                );


            const nome =
                campoNome.value.trim();


            const codigoCor =
                campoCodigo.value;


            if (nome === "") {

                alert(
                    "Informe o nome da cor."
                );

                campoNome.focus();

                return;

            }


            const cor = {

                nome:
                    nome,

                codigo_cor:
                    codigoCor

            };


            console.log(
                "Cor enviada:",
                cor
            );


            try {

                const response =
                    await fetch(
                        ROTAS.cores,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    cor
                                )

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta cor:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar cor."
                    );

                }


                alert(
                    data.mensagem ||
                    "Cor cadastrada com sucesso!"
                );


                campoNome.value =
                    "";


                campoCodigo.value =
                    "#000000";


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar cor:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   CADASTRAR TAMANHO
========================================================== */

const btnSalvarTamanho =
    elemento(
        "btnSalvarTamanho"
    );


if (btnSalvarTamanho) {

    btnSalvarTamanho.addEventListener(
        "click",
        async function () {

            const campo =
                elemento(
                    "nomeTamanhoAux"
                );


            const tamanho =
                campo.value.trim();


            if (tamanho === "") {

                alert(
                    "Informe o tamanho."
                );

                campo.focus();

                return;

            }


            const dados = {

                tm:
                    tamanho

            };


            console.log(
                "Tamanho enviado:",
                dados
            );


            try {

                const response =
                    await fetch(
                        ROTAS.tamanhos,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    dados
                                )

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta tamanho:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar tamanho."
                    );

                }


                alert(
                    data.mensagem ||
                    "Tamanho cadastrado com sucesso!"
                );


                campo.value =
                    "";


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar tamanho:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   CADASTRAR IMAGEM DO PRODUTO
========================================================== */

const btnSalvarImagem =
    elemento(
        "btnSalvarImagem"
    );


if (btnSalvarImagem) {

    btnSalvarImagem.addEventListener(
        "click",
        async function () {

            const campoProduto =
                elemento(
                    "produtoImagemAux"
                );


            const campoArquivo =
                elemento(
                    "arquivoImagemAux"
                );


            const produtoId =
                campoProduto.value;


            const arquivo =
                campoArquivo.files[0];


            if (produtoId === "") {

                alert(
                    "Selecione um produto."
                );

                return;

            }


            if (!arquivo) {

                alert(
                    "Selecione uma imagem."
                );

                return;

            }


            const formData =
                new FormData();


            formData.append(
                "Produto_idProduto",
                produtoId
            );


            formData.append(
                "imagem",
                arquivo
            );


            try {

                const response =
                    await fetch(
                        ROTAS.imagens,
                        {

                            method:
                                "POST",

                            body:
                                formData

                        }
                    );


                const data =
                    await lerResposta(
                        response
                    );


                console.log(
                    "Resposta imagem:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.mensagem ||
                        "Erro ao cadastrar imagem."
                    );

                }


                alert(
                    data.mensagem ||
                    "Imagem cadastrada com sucesso!"
                );


                campoProduto.value =
                    "";


                campoArquivo.value =
                    "";


            }
            catch (erro) {

                console.error(
                    "Erro ao cadastrar imagem:",
                    erro
                );


                alert(
                    erro.message
                );

            }

        }
    );

}


/* ==========================================================
   PRODUTOS DE EXEMPLO
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
                "Produto cadastrado na loja.",

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
                "Produto cadastrado na loja.",

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
                "Produto cadastrado na loja.",

            preco:
                "R$ 534,97",

            estoque:
                "Estoque: 23"

        },

        {

            imagem:
                "../Assets/produto4.png",

            nome:
                "Arroz Namorado 5kg",

            descricao:
                "Produto cadastrado na loja.",

            preco:
                "R$ 19,85",

            estoque:
                "Estoque: 15"

        },

        {

            imagem:
                "../Assets/produto5.png",

            nome:
                "Cerveja Skol",

            descricao:
                "Produto cadastrado na loja.",

            preco:
                "R$ 38,55",

            estoque:
                "Estoque: 8"

        },

        {

            imagem:
                "../Assets/produto6.png",

            nome:
                "Condicionador Seda",

            descricao:
                "Produto cadastrado na loja.",

            preco:
                "R$ 15,97",

            estoque:
                "Estoque: 34"

        }

    ]

};


/* ==========================================================
   EXIBIR PRODUTOS
========================================================== */

if (elemento("tituloProdutos")) {

    elemento("tituloProdutos").textContent =
        produtos.titulo;

}


if (elemento("descricaoProdutos")) {

    elemento("descricaoProdutos").textContent =
        produtos.descricao;

}


for (
    let i = 1;
    i <= produtos.lista.length;
    i++
) {

    const produto =
        produtos.lista[
        i - 1
        ];


    if (
        elemento(
            "produtoImagem" + i
        )
    ) {

        elemento(
            "produtoImagem" + i
        ).src =
            produto.imagem;

    }


    if (
        elemento(
            "produtoNome" + i
        )
    ) {

        elemento(
            "produtoNome" + i
        ).textContent =
            produto.nome;

    }


    if (
        elemento(
            "produtoDescricao" + i
        )
    ) {

        elemento(
            "produtoDescricao" + i
        ).textContent =
            produto.descricao;

    }


    if (
        elemento(
            "produtoPreco" + i
        )
    ) {

        elemento(
            "produtoPreco" + i
        ).textContent =
            produto.preco;

    }


    if (
        elemento(
            "produtoEstoque" + i
        )
    ) {

        elemento(
            "produtoEstoque" + i
        ).textContent =
            produto.estoque;

    }


    if (
        elemento(
            "btnEditarProduto" + i
        )
    ) {

        elemento(
            "btnEditarProduto" + i
        ).textContent =
            "Editar";

    }


    if (
        elemento(
            "btnExcluirProduto" + i
        )
    ) {

        elemento(
            "btnExcluirProduto" + i
        ).textContent =
            "Excluir";

    }


    if (
        elemento(
            "btnVisualizarProduto" + i
        )
    ) {

        elemento(
            "btnVisualizarProduto" + i
        ).textContent =
            "Visualizar";

    }

}


/* ==========================================================
   BANNERS
========================================================== */

const banners = {

    titulo:
        "Cadastro de Banner",

    descricao:
        "Cadastre banners promocionais para destacar campanhas na página inicial.",

    imagem:
        "../Assets/banner.png",

    lista: [

        {

            imagem:
                "../Assets/banner1.png",

            titulo:
                "Mega Feirão",

            descricao:
                "Descontos especiais.",

            status:
                "Ativo"

        },

        {

            imagem:
                "../Assets/banner2.png",

            titulo:
                "Volta às Aulas",

            descricao:
                "Ofertas especiais.",

            status:
                "Agendado"

        }

    ]

};


/* ==========================================================
   TEXTOS BANNER
========================================================== */

if (elemento("tituloBanner")) {

    elemento("tituloBanner").textContent =
        banners.titulo;

}


if (elemento("descricaoBanner")) {

    elemento("descricaoBanner").textContent =
        banners.descricao;

}


if (elemento("imagemBanner")) {

    elemento("imagemBanner").src =
        banners.imagem;

}


if (elemento("lblTituloBanner")) {

    elemento("lblTituloBanner").textContent =
        "Título do Banner";

}


if (elemento("lblTipoBanner")) {

    elemento("lblTipoBanner").textContent =
        "Tipo de Banner";

}


if (elemento("lblImagemBanner")) {

    elemento("lblImagemBanner").textContent =
        "Imagem";

}


if (elemento("lblTextoPrincipal")) {

    elemento("lblTextoPrincipal").textContent =
        "Texto Principal";

}


if (elemento("lblTextoSecundario")) {

    elemento("lblTextoSecundario").textContent =
        "Texto Secundário";

}


if (elemento("lblLinkBanner")) {

    elemento("lblLinkBanner").textContent =
        "Link do Botão";

}


if (elemento("btnPreviewBanner")) {

    elemento("btnPreviewBanner").textContent =
        "Pré-visualizar";

}


if (elemento("btnSalvarBanner")) {

    elemento("btnSalvarBanner").textContent =
        "Salvar Banner";

}


/* ==========================================================
   BANNERS CADASTRADOS
========================================================== */

if (elemento("tituloCampanhas")) {

    elemento("tituloCampanhas").textContent =
        "Banners e Campanhas";

}


if (elemento("descricaoCampanhas")) {

    elemento("descricaoCampanhas").textContent =
        "Campanhas cadastradas recentemente.";

}


for (
    let i = 1;
    i <= banners.lista.length;
    i++
) {

    const banner =
        banners.lista[
        i - 1
        ];


    if (
        elemento(
            "bannerImagem" + i
        )
    ) {

        elemento(
            "bannerImagem" + i
        ).src =
            banner.imagem;

    }


    if (
        elemento(
            "bannerTitulo" + i
        )
    ) {

        elemento(
            "bannerTitulo" + i
        ).textContent =
            banner.titulo;

    }


    if (
        elemento(
            "bannerDescricao" + i
        )
    ) {

        elemento(
            "bannerDescricao" + i
        ).textContent =
            banner.descricao;

    }


    if (
        elemento(
            "bannerStatus" + i
        )
    ) {

        elemento(
            "bannerStatus" + i
        ).textContent =
            banner.status;

    }


    if (
        elemento(
            "btnEditarBanner" + i
        )
    ) {

        elemento(
            "btnEditarBanner" + i
        ).textContent =
            "Editar";

    }


    if (
        elemento(
            "btnExcluirBanner" + i
        )
    ) {

        elemento(
            "btnExcluirBanner" + i
        ).textContent =
            "Excluir";

    }


    if (
        elemento(
            "btnVisualizarBanner" + i
        )
    ) {

        elemento(
            "btnVisualizarBanner" + i
        ).textContent =
            "Visualizar";

    }

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

    lista: [

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
   TEXTOS PROMOÇÕES
========================================================== */

if (elemento("tituloCadastroPromocao")) {

    elemento("tituloCadastroPromocao").textContent =
        promocoes.titulo;

}


if (elemento("descricaoCadastroPromocao")) {

    elemento("descricaoCadastroPromocao").textContent =
        promocoes.descricao;

}


if (elemento("imagemPromocao")) {

    elemento("imagemPromocao").src =
        promocoes.imagem;

}


if (elemento("lblNomePromocao")) {

    elemento("lblNomePromocao").textContent =
        "Nome da Promoção";

}


if (elemento("lblTipoDesconto")) {

    elemento("lblTipoDesconto").textContent =
        "Tipo de Desconto";

}


if (elemento("lblValorDesconto")) {

    elemento("lblValorDesconto").textContent =
        "Valor do Desconto";

}


if (elemento("lblInicioPromocao")) {

    elemento("lblInicioPromocao").textContent =
        "Data de Início";

}


if (elemento("lblFimPromocao")) {

    elemento("lblFimPromocao").textContent =
        "Data de Término";

}


if (elemento("lblAplicarEm")) {

    elemento("lblAplicarEm").textContent =
        "Aplicar em";

}


if (elemento("btnSalvarRascunhoPromocao")) {

    elemento("btnSalvarRascunhoPromocao").textContent =
        "Salvar Rascunho";

}


if (elemento("btnSalvarPromocao")) {

    elemento("btnSalvarPromocao").textContent =
        "Salvar Promoção";

}


/* ==========================================================
   PROMOÇÕES CADASTRADAS
========================================================== */

if (elemento("tituloPromocoes")) {

    elemento("tituloPromocoes").textContent =
        "Promoções Cadastradas";

}


if (elemento("descricaoPromocoes")) {

    elemento("descricaoPromocoes").textContent =
        "Acompanhe as promoções da loja.";

}


for (
    let i = 1;
    i <= promocoes.lista.length;
    i++
) {

    const promocao =
        promocoes.lista[
        i - 1
        ];


    if (
        elemento(
            "statusImagem" + i
        )
    ) {

        elemento(
            "statusImagem" + i
        ).src =
            promocao.imagem;

    }


    if (
        elemento(
            "statusTitulo" + i
        )
    ) {

        elemento(
            "statusTitulo" + i
        ).textContent =
            promocao.titulo;

    }


    if (
        elemento(
            "statusDescricao" + i
        )
    ) {

        elemento(
            "statusDescricao" + i
        ).textContent =
            promocao.descricao;

    }


    if (
        elemento(
            "statusSituacao" + i
        )
    ) {

        elemento(
            "statusSituacao" + i
        ).textContent =
            promocao.situacao;

    }

}


/* ==========================================================
   RESUMO
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
                "0",

            descricao:
                "Produtos cadastrados"

        },

        {

            titulo:
                "Banners",

            valor:
                "0",

            descricao:
                "Campanhas disponíveis"

        },

        {

            titulo:
                "Promoções",

            valor:
                "0",

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


if (elemento("tituloResumo")) {

    elemento("tituloResumo").textContent =
        resumo.titulo;

}


if (elemento("descricaoResumo")) {

    elemento("descricaoResumo").textContent =
        resumo.descricao;

}


for (
    let i = 1;
    i <= resumo.cards.length;
    i++
) {

    if (
        elemento(
            "tituloResumoCard" + i
        )
    ) {

        elemento(
            "tituloResumoCard" + i
        ).textContent =
            resumo.cards[
                i - 1
            ].titulo;

    }


    if (
        elemento(
            "valorResumoCard" + i
        )
    ) {

        elemento(
            "valorResumoCard" + i
        ).textContent =
            resumo.cards[
                i - 1
            ].valor;

    }


    if (
        elemento(
            "descricaoResumoCard" + i
        )
    ) {

        elemento(
            "descricaoResumoCard" + i
        ).textContent =
            resumo.cards[
                i - 1
            ].descricao;

    }

}


/* ==========================================================
   GRÁFICO
========================================================== */

if (elemento("tituloGrafico")) {

    elemento("tituloGrafico").textContent =
        resumo.grafico.titulo;

}


if (elemento("descricaoGrafico")) {

    elemento("descricaoGrafico").textContent =
        resumo.grafico.descricao;

}


if (elemento("imagemGrafico")) {

    elemento("imagemGrafico").src =
        resumo.grafico.imagem;

}


/* ==========================================================
   RODAPÉ
========================================================== */

if (elemento("footerDica")) {

    elemento("footerDica").textContent =
        "Mantenha seus produtos, banners e promoções atualizados.";

}


if (elemento("footerProdutos")) {

    elemento("footerProdutos").textContent =
        "Produtos";

}


if (elemento("footerBanners")) {

    elemento("footerBanners").textContent =
        "Banners";

}


if (elemento("footerPromocoes")) {

    elemento("footerPromocoes").textContent =
        "Promoções";

}


if (elemento("footerAjuda")) {

    elemento("footerAjuda").textContent =
        "Ajuda";

}


if (elemento("footerTermos")) {

    elemento("footerTermos").textContent =
        "Termos de Uso";

}


if (elemento("footerPrivacidade")) {

    elemento("footerPrivacidade").textContent =
        "Política de Privacidade";

}


if (elemento("footerCopyright")) {

    elemento("footerCopyright").textContent =
        "© 2026 - Todos os direitos reservados.";

}


/* ==========================================================
   NOVO CADASTRO
========================================================== */

if (elemento("btnNovoCadastro")) {

    elemento(
        "btnNovoCadastro"
    ).addEventListener(
        "click",
        function () {

            const form =
                elemento(
                    "formProduto"
                );


            if (form) {

                form.scrollIntoView(
                    {

                        behavior:
                            "smooth",

                        block:
                            "start"

                    }
                );

            }

        }
    );

}


/* ==========================================================
   RASCUNHOS
========================================================== */

if (elemento("btnRascunhos")) {

    elemento(
        "btnRascunhos"
    ).addEventListener(
        "click",
        function () {

            alert(
                "Área de rascunhos."
            );

        }
    );

}


/* ==========================================================
   SALVAR RASCUNHO PRODUTO
========================================================== */

if (
    elemento(
        "btnSalvarRascunhoProduto"
    )
) {

    elemento(
        "btnSalvarRascunhoProduto"
    ).addEventListener(
        "click",
        function () {

            alert(
                "Produto salvo como rascunho."
            );

        }
    );

}


/* ==========================================================
   FILTRO PRODUTOS
========================================================== */

if (elemento("btnFiltroProdutos")) {

    elemento(
        "btnFiltroProdutos"
    ).addEventListener(
        "click",
        function () {

            const secao =
                document.querySelector(
                    ".produtos"
                );


            if (secao) {

                secao.scrollIntoView(
                    {

                        behavior:
                            "smooth"

                    }
                );

            }

        }
    );

}


/* ==========================================================
   FILTRO BANNERS
========================================================== */

if (elemento("btnFiltroBanners")) {

    elemento(
        "btnFiltroBanners"
    ).addEventListener(
        "click",
        function () {

            const secao =
                document.querySelector(
                    ".banners"
                );


            if (secao) {

                secao.scrollIntoView(
                    {

                        behavior:
                            "smooth"

                    }
                );

            }

        }
    );

}


/* ==========================================================
   FILTRO PROMOÇÕES
========================================================== */

if (elemento("btnFiltroPromocoes")) {

    elemento(
        "btnFiltroPromocoes"
    ).addEventListener(
        "click",
        function () {

            const secao =
                document.querySelector(
                    ".promocoes"
                );


            if (secao) {

                secao.scrollIntoView(
                    {

                        behavior:
                            "smooth"

                    }
                );

            }

        }
    );

}


/* ==========================================================
   PESQUISA
========================================================== */

if (elemento("campoPesquisa")) {

    elemento(
        "campoPesquisa"
    ).addEventListener(
        "keyup",
        function (event) {

            if (
                event.key !==
                "Enter"
            ) {

                return;

            }


            const pesquisa =
                this.value
                    .trim()
                    .toLowerCase();


            if (pesquisa === "") {

                alert(
                    "Digite algo para pesquisar."
                );

                return;

            }


            alert(
                "Pesquisando por: " +
                pesquisa
            );

        }
    );

}


/* ==========================================================
   PREVIEW BANNER
========================================================== */

if (elemento("btnPreviewBanner")) {

    elemento(
        "btnPreviewBanner"
    ).addEventListener(
        "click",
        function () {

            alert(
                "Pré-visualização do banner."
            );

        }
    );

}


/* ==========================================================
   FORMULÁRIO BANNER
========================================================== */

const formBanner =
    elemento(
        "formBanner"
    );


if (formBanner) {

    formBanner.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const titulo =
                elemento(
                    "tituloBannerInput"
                ).value.trim();


            if (titulo === "") {

                alert(
                    "Informe o título do banner."
                );

                return;

            }


            alert(
                "Banner preenchido com sucesso."
            );

        }
    );

}


/* ==========================================================
   RASCUNHO PROMOÇÃO
========================================================== */

if (
    elemento(
        "btnSalvarRascunhoPromocao"
    )
) {

    elemento(
        "btnSalvarRascunhoPromocao"
    ).addEventListener(
        "click",
        function () {

            alert(
                "Promoção salva como rascunho."
            );

        }
    );

}


/* ==========================================================
   FORMULÁRIO PROMOÇÃO
========================================================== */

const formPromocao =
    elemento(
        "formPromocao"
    );


if (formPromocao) {

    formPromocao.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                elemento(
                    "nomePromocao"
                ).value.trim();


            if (nome === "") {

                alert(
                    "Informe o nome da promoção."
                );

                return;

            }


            alert(
                "Promoção preenchida com sucesso."
            );

        }
    );

}


/* ==========================================================
   BOTÕES DOS PRODUTOS
========================================================== */

for (
    let i = 1;
    i <= 6;
    i++
) {

    const btnEditar =
        elemento(
            "btnEditarProduto" + i
        );


    const btnExcluir =
        elemento(
            "btnExcluirProduto" + i
        );


    const btnVisualizar =
        elemento(
            "btnVisualizarProduto" + i
        );


    if (btnEditar) {

        btnEditar.addEventListener(
            "click",
            function () {

                alert(
                    "Editar produto " +
                    i
                );

            }
        );

    }


    if (btnExcluir) {

        btnExcluir.addEventListener(
            "click",
            function () {

                const resposta =
                    confirm(
                        "Deseja excluir este produto?"
                    );


                if (resposta) {

                    alert(
                        "Produto excluído."
                    );

                }

            }
        );

    }


    if (btnVisualizar) {

        btnVisualizar.addEventListener(
            "click",
            function () {

                alert(
                    "Visualizar produto " +
                    i
                );

            }
        );

    }

}


/* ==========================================================
   BOTÕES DOS BANNERS
========================================================== */

for (
    let i = 1;
    i <= 2;
    i++
) {

    const btnEditar =
        elemento(
            "btnEditarBanner" + i
        );


    const btnExcluir =
        elemento(
            "btnExcluirBanner" + i
        );


    const btnVisualizar =
        elemento(
            "btnVisualizarBanner" + i
        );


    if (btnEditar) {

        btnEditar.addEventListener(
            "click",
            function () {

                alert(
                    "Editar banner " +
                    i
                );

            }
        );

    }


    if (btnExcluir) {

        btnExcluir.addEventListener(
            "click",
            function () {

                const resposta =
                    confirm(
                        "Deseja excluir este banner?"
                    );


                if (resposta) {

                    alert(
                        "Banner excluído."
                    );

                }

            }
        );

    }


    if (btnVisualizar) {

        btnVisualizar.addEventListener(
            "click",
            function () {

                alert(
                    "Visualizar banner " +
                    i
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
    async function () {

        console.log(
            "Painel do Lojista carregado."
        );


        console.log(
            "API:",
            API
        );


        console.log(
            "Rotas:",
            ROTAS
        );


        await carregarCategorias();


        await carregarProdutosImagem();

    }
);
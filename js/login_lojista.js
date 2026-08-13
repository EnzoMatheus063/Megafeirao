/* ==========================================================
   DADOS DA PÁGINA
========================================================== */

const dadosPagina = {

    pagina: {

        titulo: "Painel do Lojista"

    },


    logo: {

        icone: "🏪",

        nome: "Painel do Lojista"

    },


    topo: {

        ajuda: "Ajuda",

        seguranca: "Segurança"

    },


    menu: [

        {
            id: "cadastro",
            icone: "🏠",
            texto: "Meu Cadastro"
        },

        {
            id: "pedidos",
            icone: "📦",
            texto: "Pedidos"
        },

        {
            id: "pagamentos",
            icone: "💰",
            texto: "Pagamentos"
        },

        {
            id: "desempenho",
            icone: "📈",
            texto: "Desempenho"
        },

        {
            id: "configuracoes",
            icone: "⚙️",
            texto: "Configurações"
        }

    ],


    apresentacao: {

        titulo: "Entrar como Lojista",

        descricao:
            "Acesse seu painel para gerenciar pedidos, produtos e pagamentos.",

        campo:
            "Preencha seus dados abaixo para continuar",

        criarConta:
            "Criar conta (Lojista)",

        entrar:
            "Entrar",

        login:
            "Login",

        recuperar:
            "Recuperar acesso",

        imagem:
            "../assets/imagem-lojista.jpg"

    },


    acesso: {

        titulo: "Acesso ao Painel",

        descricao:
            "Use seu e-mail e senha cadastrados.",

        documento:
            "E-mail ou CPF/CNPJ",

        ajudaDocumento:
            "Ex.: loja@empresa.com ou 00.000.000/0000-00",

        placeholderDocumento:
            "Informe seu e-mail ou CPF/CNPJ",

        senha:
            "Senha",

        ajudaSenha:
            "Mínimo de 6 caracteres. Sem espaços.",

        placeholderSenha:
            "Digite sua senha",

        perfil:
            "Perfil",

        lojista:
            "Lojista",

        representante:
            "Representante do Lojista",

        ajudaPerfil:
            "Selecione para carregar a área correta.",

        esqueciSenha:
            "Esqueci minha senha",

        entrar:
            "Entrar no Painel"

    },


    beneficios: {

        titulo:
            "Por que você vai gostar do painel?",

        descricao:
            "Tudo organizado em um só lugar, com acesso rápido às principais rotinas."

    },


    cards: {

        gestao: {

            icone: "🛒",

            titulo: "Gestão de pedidos",

            subtitulo: "Status e acompanhamento",

            descricao:
                "Veja novos pedidos, confirme envios e acompanhe atualizações em tempo real.",

            indicadores: "🛒  📦  🚚  📊"

        },


        produtos: {

            icone: "📦",

            titulo: "Produtos e estoque",

            subtitulo: "Controle do seu catálogo",

            descricao:
                "Cadastre, edite e ajuste disponibilidade com agilidade.",

            indicadores: "📦  🏷️  🛒  📊"

        },


        pagamentos: {

            icone: "💳",

            titulo: "Pagamentos",

            subtitulo: "Transparência",

            descricao:
                "Acompanhe repasses e histórico de transações.",

            indicadores: "💳  💰  📈  📋"

        },


        relatorios: {

            icone: "📊",

            titulo: "Relatórios",

            subtitulo: "Métricas úteis",

            descricao:
                "Entenda seu desempenho para tomar decisões com dados.",

            indicadores: "📈  📊  📋  📉"

        }

    },


    rodape: {

        copyright:
            "© 2026 Plataforma • Todos os direitos reservados",

        privacidade:
            "Privacidade",

        termos:
            "Termos de uso",

        suporte:
            "Suporte ao lojista: suporte@plataforma.com"

    }

};


/* ==========================================================
   FUNÇÃO AUXILIAR
========================================================== */

function preencherTexto(id, texto) {

    const elemento = document.getElementById(id);

    if (elemento) {

        elemento.textContent = texto;

    }

}


/* ==========================================================
   PREENCHIMENTO DO TÍTULO
========================================================== */

document.title = dadosPagina.pagina.titulo;

preencherTexto(
    "tituloPagina",
    dadosPagina.pagina.titulo
);


/* ==========================================================
   LOGO
========================================================== */

preencherTexto(
    "iconeLogo",
    dadosPagina.logo.icone
);

preencherTexto(
    "nomeLogo",
    dadosPagina.logo.nome
);


/* ==========================================================
   LINKS DO TOPO
========================================================== */

preencherTexto(
    "linkAjuda",
    dadosPagina.topo.ajuda
);

preencherTexto(
    "linkSeguranca",
    dadosPagina.topo.seguranca
);


/* ==========================================================
   MENU LATERAL
========================================================== */

preencherTexto(
    "iconeCadastro",
    dadosPagina.menu[0].icone
);

preencherTexto(
    "textoCadastro",
    dadosPagina.menu[0].texto
);


preencherTexto(
    "iconePedidos",
    dadosPagina.menu[1].icone
);

preencherTexto(
    "textoPedidos",
    dadosPagina.menu[1].texto
);


preencherTexto(
    "iconePagamentos",
    dadosPagina.menu[2].icone
);

preencherTexto(
    "textoPagamentos",
    dadosPagina.menu[2].texto
);


preencherTexto(
    "iconeDesempenho",
    dadosPagina.menu[3].icone
);

preencherTexto(
    "textoDesempenho",
    dadosPagina.menu[3].texto
);


preencherTexto(
    "iconeConfiguracoes",
    dadosPagina.menu[4].icone
);

preencherTexto(
    "textoConfiguracoes",
    dadosPagina.menu[4].texto
);


/* ==========================================================
   APRESENTAÇÃO
========================================================== */

preencherTexto(
    "tituloApresentacao",
    dadosPagina.apresentacao.titulo
);

preencherTexto(
    "descricaoApresentacao",
    dadosPagina.apresentacao.descricao
);

preencherTexto(
    "campoApresentacao",
    dadosPagina.apresentacao.campo
);

preencherTexto(
    "btnCriarConta",
    dadosPagina.apresentacao.criarConta
);

preencherTexto(
    "btnEntrarApresentacao",
    dadosPagina.apresentacao.entrar
);

preencherTexto(
    "btnLoginSecundario",
    dadosPagina.apresentacao.login
);

preencherTexto(
    "btnRecuperarAcesso",
    dadosPagina.apresentacao.recuperar
);


/* ==========================================================
   IMAGEM DA APRESENTAÇÃO
========================================================== */

const imagemApresentacao =
    document.getElementById("imagemApresentacao");

if (imagemApresentacao) {

    imagemApresentacao.src =
        dadosPagina.apresentacao.imagem;

    imagemApresentacao.alt =
        "Imagem do painel do lojista";
}


/* ==========================================================
   ACESSO AO PAINEL
========================================================== */

preencherTexto(
    "tituloAcesso",
    dadosPagina.acesso.titulo
);

preencherTexto(
    "descricaoAcesso",
    dadosPagina.acesso.descricao
);

preencherTexto(
    "labelDocumento",
    dadosPagina.acesso.documento
);

preencherTexto(
    "ajudaDocumento",
    dadosPagina.acesso.ajudaDocumento
);

preencherTexto(
    "labelSenha",
    dadosPagina.acesso.senha
);

preencherTexto(
    "ajudaSenha",
    dadosPagina.acesso.ajudaSenha
);

preencherTexto(
    "labelPerfil",
    dadosPagina.acesso.perfil
);

preencherTexto(
    "textoPerfilLojista",
    dadosPagina.acesso.lojista
);

preencherTexto(
    "textoPerfilRepresentante",
    dadosPagina.acesso.representante
);

preencherTexto(
    "ajudaPerfil",
    dadosPagina.acesso.ajudaPerfil
);

preencherTexto(
    "btnEsqueciSenha",
    dadosPagina.acesso.esqueciSenha
);

preencherTexto(
    "btnEntrarPainel",
    dadosPagina.acesso.entrar
);


/* ==========================================================
   PLACEHOLDERS
========================================================== */

const campoDocumento =
    document.getElementById("documento");

const campoSenha =
    document.getElementById("senha");


if (campoDocumento) {

    campoDocumento.placeholder =
        dadosPagina.acesso.placeholderDocumento;

}


if (campoSenha) {

    campoSenha.placeholder =
        dadosPagina.acesso.placeholderSenha;

}


/* ==========================================================
   IMAGEM DA ÁREA DE ACESSO
========================================================== */

const imagemAcesso =
    document.getElementById("imagemAcesso");

if (imagemAcesso) {

    imagemAcesso.src =
        dadosPagina.apresentacao.imagem;

    imagemAcesso.alt =
        "Área do lojista";

}


/* ==========================================================
   BENEFÍCIOS
========================================================== */

preencherTexto(
    "tituloBeneficios",
    dadosPagina.beneficios.titulo
);

preencherTexto(
    "descricaoBeneficios",
    dadosPagina.beneficios.descricao
);


/* ==========================================================
   CARD — GESTÃO
========================================================== */

preencherTexto(
    "iconeGestao",
    dadosPagina.cards.gestao.icone
);

preencherTexto(
    "tituloGestao",
    dadosPagina.cards.gestao.titulo
);

preencherTexto(
    "subtituloGestao",
    dadosPagina.cards.gestao.subtitulo
);

preencherTexto(
    "descricaoGestao",
    dadosPagina.cards.gestao.descricao
);

preencherTexto(
    "indicadoresGestao",
    dadosPagina.cards.gestao.indicadores
);


/* ==========================================================
   CARD — PRODUTOS
========================================================== */

preencherTexto(
    "iconeProdutos",
    dadosPagina.cards.produtos.icone
);

preencherTexto(
    "tituloProdutos",
    dadosPagina.cards.produtos.titulo
);

preencherTexto(
    "subtituloProdutos",
    dadosPagina.cards.produtos.subtitulo
);

preencherTexto(
    "descricaoProdutos",
    dadosPagina.cards.produtos.descricao
);

preencherTexto(
    "indicadoresProdutos",
    dadosPagina.cards.produtos.indicadores
);


/* ==========================================================
   CARD — PAGAMENTOS
========================================================== */

preencherTexto(
    "iconePagamentosCard",
    dadosPagina.cards.pagamentos.icone
);

preencherTexto(
    "tituloPagamentos",
    dadosPagina.cards.pagamentos.titulo
);

preencherTexto(
    "subtituloPagamentos",
    dadosPagina.cards.pagamentos.subtitulo
);

preencherTexto(
    "descricaoPagamentos",
    dadosPagina.cards.pagamentos.descricao
);

preencherTexto(
    "indicadoresPagamentos",
    dadosPagina.cards.pagamentos.indicadores
);


/* ==========================================================
   CARD — RELATÓRIOS
========================================================== */

preencherTexto(
    "iconeRelatorios",
    dadosPagina.cards.relatorios.icone
);

preencherTexto(
    "tituloRelatorios",
    dadosPagina.cards.relatorios.titulo
);

preencherTexto(
    "subtituloRelatorios",
    dadosPagina.cards.relatorios.subtitulo
);

preencherTexto(
    "descricaoRelatorios",
    dadosPagina.cards.relatorios.descricao
);

preencherTexto(
    "indicadoresRelatorios",
    dadosPagina.cards.relatorios.indicadores
);


/* ==========================================================
   RODAPÉ
========================================================== */

preencherTexto(
    "copyright",
    dadosPagina.rodape.copyright
);

preencherTexto(
    "linkPrivacidade",
    dadosPagina.rodape.privacidade
);

preencherTexto(
    "linkTermos",
    dadosPagina.rodape.termos
);

preencherTexto(
    "suporte",
    dadosPagina.rodape.suporte
);


/* ==========================================================
   MENU MOBILE
========================================================== */

const btnMenuMobile =
    document.getElementById("btnMenuMobile");

const menuLateral =
    document.getElementById("menuLateral");


if (btnMenuMobile && menuLateral) {

    btnMenuMobile.addEventListener(
        "click",
        function () {

            menuLateral.classList.toggle("aberto");

        }
    );

}


/* ==========================================================
   FECHAR MENU MOBILE AO CLICAR
========================================================== */

const itensMenu =
    document.querySelectorAll(".item-menu");


itensMenu.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            if (
                window.innerWidth <= 600 &&
                menuLateral
            ) {

                menuLateral.classList.remove("aberto");

            }

        }
    );

});


/* ==========================================================
   TROCA DO ITEM ATIVO DO MENU
========================================================== */

itensMenu.forEach(function (item) {

    item.addEventListener(
        "click",
        function (evento) {

            evento.preventDefault();

            itensMenu.forEach(function (outroItem) {

                outroItem.classList.remove("ativo");

            });

            item.classList.add("ativo");

        }
    );

});


/* ==========================================================
   BOTÃO CRIAR CONTA
========================================================== */

const btnCriarConta =
    document.getElementById("btnCriarConta");


if (btnCriarConta) {

    btnCriarConta.addEventListener(
        "click",
        function () {

            window.location.href =
                "cadastro-lojista.html";

        }
    );

}


/* ==========================================================
   BOTÃO ENTRAR DA APRESENTAÇÃO
========================================================== */

const btnEntrarApresentacao =
    document.getElementById(
        "btnEntrarApresentacao"
    );


if (btnEntrarApresentacao) {

    btnEntrarApresentacao.addEventListener(
        "click",
        function () {

            document
                .getElementById("secaoAcesso")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* ==========================================================
   BOTÃO LOGIN
========================================================== */

const btnLoginSecundario =
    document.getElementById(
        "btnLoginSecundario"
    );


if (btnLoginSecundario) {

    btnLoginSecundario.addEventListener(
        "click",
        function () {

            document
                .getElementById("secaoAcesso")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* ==========================================================
   BOTÃO RECUPERAR ACESSO
========================================================== */

const btnRecuperarAcesso =
    document.getElementById(
        "btnRecuperarAcesso"
    );


if (btnRecuperarAcesso) {

    btnRecuperarAcesso.addEventListener(
        "click",
        function () {

            document
                .getElementById("btnEsqueciSenha")
                .click();

        }
    );

}


/* ==========================================================
   LOGIN
========================================================== */

const formularioLogin =
    document.getElementById(
        "formularioLogin"
    );


if (formularioLogin) {

    formularioLogin.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            const documento =
                document
                    .getElementById("documento")
                    .value
                    .trim();

            const senha =
                document
                    .getElementById("senha")
                    .value
                    .trim();

            const mensagem =
                document.getElementById(
                    "mensagemLogin"
                );


            /* ---------------------------------------------
               LIMPA MENSAGEM
            --------------------------------------------- */

            mensagem.textContent = "";

            mensagem.style.color = "#9b1717";


            /* ---------------------------------------------
               VALIDA DOCUMENTO
            --------------------------------------------- */

            if (documento === "") {

                mensagem.textContent =
                    "Informe seu e-mail ou CPF/CNPJ.";

                document
                    .getElementById("documento")
                    .focus();

                return;

            }


            /* ---------------------------------------------
               VALIDA SENHA
            --------------------------------------------- */

            if (senha === "") {

                mensagem.textContent =
                    "Informe sua senha.";

                document
                    .getElementById("senha")
                    .focus();

                return;

            }


            /* ---------------------------------------------
               VALIDA TAMANHO DA SENHA
            --------------------------------------------- */

            if (senha.length < 6) {

                mensagem.textContent =
                    "A senha deve possuir pelo menos 6 caracteres.";

                document
                    .getElementById("senha")
                    .focus();

                return;

            }


            /* ---------------------------------------------
               PERFIL SELECIONADO
            --------------------------------------------- */

            const perfil =
                document.querySelector(
                    'input[name="perfil"]:checked'
                );


            if (!perfil) {

                mensagem.textContent =
                    "Selecione um perfil.";

                return;

            }


            /* ---------------------------------------------
               LOGIN VÁLIDO
            --------------------------------------------- */

            mensagem.style.color = "#245b24";

            mensagem.textContent =
                "Dados preenchidos corretamente.";


            /*
                Aqui futuramente podemos conectar
                este formulário ao seu backend Node.js.

                Exemplo:

                fetch("../api/lojista/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        documento: documento,
                        senha: senha,
                        perfil: perfil.value
                    })
                });

            */

        }
    );

}


/* ==========================================================
   ESQUECI MINHA SENHA
========================================================== */

const btnEsqueciSenha =
    document.getElementById(
        "btnEsqueciSenha"
    );


if (btnEsqueciSenha) {

    btnEsqueciSenha.addEventListener(
        "click",
        function () {

            const documento =
                document
                    .getElementById("documento")
                    .value
                    .trim();

            const mensagem =
                document.getElementById(
                    "mensagemLogin"
                );


            if (documento === "") {

                mensagem.style.color =
                    "#9b1717";

                mensagem.textContent =
                    "Informe seu e-mail ou CPF/CNPJ para recuperar o acesso.";

                document
                    .getElementById("documento")
                    .focus();

                return;

            }


            mensagem.style.color =
                "#245b24";

            mensagem.textContent =
                "Se os dados estiverem cadastrados, enviaremos as instruções de recuperação.";

        }
    );

}


/* ==========================================================
   SELEÇÃO DE PERFIL
========================================================== */

const perfilLojista =
    document.getElementById(
        "perfilLojista"
    );

const perfilRepresentante =
    document.getElementById(
        "perfilRepresentante"
    );


function atualizarPerfil() {

    const mensagem =
        document.getElementById(
            "mensagemLogin"
        );


    if (!mensagem) {
        return;
    }


    mensagem.textContent = "";

}


if (perfilLojista) {

    perfilLojista.addEventListener(
        "change",
        atualizarPerfil
    );

}


if (perfilRepresentante) {

    perfilRepresentante.addEventListener(
        "change",
        atualizarPerfil
    );

}


/* ==========================================================
   LINKS DO TOPO
========================================================== */

const linkAjuda =
    document.getElementById("linkAjuda");

const linkSeguranca =
    document.getElementById("linkSeguranca");


if (linkAjuda) {

    linkAjuda.addEventListener(
        "click",
        function (evento) {

            evento.preventDefault();

            alert(
                "Área de ajuda do painel do lojista."
            );

        }
    );

}


if (linkSeguranca) {

    linkSeguranca.addEventListener(
        "click",
        function (evento) {

            evento.preventDefault();

            alert(
                "Nesta área você encontrará informações de segurança da plataforma."
            );

        }
    );

}
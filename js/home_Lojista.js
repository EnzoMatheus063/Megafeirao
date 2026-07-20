/* ==========================================================
   DADOS DA HOME DO LOJISTA
========================================================== */

const home = {

    /* ==========================================
       LOGO
    ========================================== */

    logo:{

        imagem:"../Assets/logo.png",

        titulo:"Home - Lojista"

    },

    /* ==========================================
       MENU
    ========================================== */

    menu:{

        vendas:"Vendas",

        estoque:"Estoque",

        financeiro:"Financeiro",

        clientes:"Clientes",

        relatorios:"Relatórios"

    },

    /* ==========================================
       PESQUISA
    ========================================== */

    pesquisa:{

        placeholder:"Pesquisar vendas, produtos ou clientes..."

    },

    /* ==========================================
       RESUMO
    ========================================== */

    resumo:{

        titulo:"Resumo do Negócio",

        descricao:"Acompanhe os principais indicadores da sua loja em tempo real.",

        exportar:"Exportar Dados",

        relatorios:"Ver Relatórios",

        hoje:"Hoje",

        semana:"7 Dias",

        mes:"30 Dias"

    },

    /* ==========================================
       DESEMPENHO
    ========================================== */

    desempenho:{

        titulo:"Desempenho por Categoria",

        descricao:"Visualização das categorias com maior faturamento.",

        botao:"Buscar Categorias"

    },

    /* ==========================================
       GRÁFICOS
    ========================================== */

    graficos:{

        pizza:{

            titulo:"Categorias",

            descricao:"Participação nas vendas.",

            imagem:"../Assets/grafico_pizza.png"

        },

        barra:{

            titulo:"Produtos Vendidos",

            descricao:"Quantidade por categoria.",

            imagem:"../Assets/grafico_barra.png"

        }

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
   MENU
========================================================== */

document.getElementById("menuVendas").textContent =
home.menu.vendas;

document.getElementById("menuEstoque").textContent =
home.menu.estoque;

document.getElementById("menuFinanceiro").textContent =
home.menu.financeiro;

document.getElementById("menuClientes").textContent =
home.menu.clientes;

document.getElementById("menuRelatorios").textContent =
home.menu.relatorios;

/* ==========================================================
   PESQUISA
========================================================== */

document.getElementById("campoPesquisa").placeholder =
home.pesquisa.placeholder;

/* ==========================================================
   RESUMO
========================================================== */

document.getElementById("tituloResumo").textContent =
home.resumo.titulo;

document.getElementById("descricaoResumo").textContent =
home.resumo.descricao;

document.getElementById("btnExportar").textContent =
home.resumo.exportar;

document.getElementById("btnRelatorios").textContent =
home.resumo.relatorios;

document.getElementById("btnHoje").textContent =
home.resumo.hoje;

document.getElementById("btnSemana").textContent =
home.resumo.semana;

document.getElementById("btnMes").textContent =
home.resumo.mes;

/* ==========================================================
   DESEMPENHO
========================================================== */

document.getElementById("tituloDesempenho").textContent =
home.desempenho.titulo;

document.getElementById("descricaoDesempenho").textContent =
home.desempenho.descricao;

document.getElementById("btnCategorias").textContent =
home.desempenho.botao;

/* ==========================================================
   GRÁFICO PIZZA
========================================================== */

document.getElementById("tituloGraficoPizza").textContent =
home.graficos.pizza.titulo;

document.getElementById("descricaoGraficoPizza").textContent =
home.graficos.pizza.descricao;

document.getElementById("graficoPizza").src =
home.graficos.pizza.imagem;

/* ==========================================================
   GRÁFICO BARRAS
========================================================== */

document.getElementById("tituloGraficoBarra").textContent =
home.graficos.barra.titulo;

document.getElementById("descricaoGraficoBarra").textContent =
home.graficos.barra.descricao;

document.getElementById("graficoBarra").src =
home.graficos.barra.imagem;
/* ==========================================================
   INDICADORES FINANCEIROS
========================================================== */

const indicadores = {

    titulo: "Indicadores Financeiros",

    descricao: "Acompanhe os principais resultados da sua loja.",

    cards: [

        {
            titulo: "Vendas",
            valor: "R$ 24.580,00",
            variacao: "+12% em relação ao mês anterior"
        },

        {
            titulo: "Lucro Líquido",
            valor: "R$ 8.430,00",
            variacao: "+8%"
        },

        {
            titulo: "Prejuízo",
            valor: "R$ 540,00",
            variacao: "-2%"
        },

        {
            titulo: "Ticket Médio",
            valor: "R$ 218,90",
            variacao: "+5%"
        },

        {
            titulo: "Caixa",
            valor: "R$ 31.240,00",
            variacao: "Saldo Atual"
        },

        {
            titulo: "Margem",
            valor: "34%",
            variacao: "+3%"
        }

    ]

};

/* ==========================================================
   TÍTULO
========================================================== */

document.getElementById("tituloIndicadores").textContent =
indicadores.titulo;

document.getElementById("descricaoIndicadores").textContent =
indicadores.descricao;

/* ==========================================================
   CARD 1
========================================================== */

document.getElementById("tituloCard1").textContent =
indicadores.cards[0].titulo;

document.getElementById("valorCard1").textContent =
indicadores.cards[0].valor;

document.getElementById("variacaoCard1").textContent =
indicadores.cards[0].variacao;

/* ==========================================================
   CARD 2
========================================================== */

document.getElementById("tituloCard2").textContent =
indicadores.cards[1].titulo;

document.getElementById("valorCard2").textContent =
indicadores.cards[1].valor;

document.getElementById("variacaoCard2").textContent =
indicadores.cards[1].variacao;

/* ==========================================================
   CARD 3
========================================================== */

document.getElementById("tituloCard3").textContent =
indicadores.cards[2].titulo;

document.getElementById("valorCard3").textContent =
indicadores.cards[2].valor;

document.getElementById("variacaoCard3").textContent =
indicadores.cards[2].variacao;

/* ==========================================================
   CARD 4
========================================================== */

document.getElementById("tituloCard4").textContent =
indicadores.cards[3].titulo;

document.getElementById("valorCard4").textContent =
indicadores.cards[3].valor;

document.getElementById("variacaoCard4").textContent =
indicadores.cards[3].variacao;

/* ==========================================================
   CARD 5
========================================================== */

document.getElementById("tituloCard5").textContent =
indicadores.cards[4].titulo;

document.getElementById("valorCard5").textContent =
indicadores.cards[4].valor;

document.getElementById("variacaoCard5").textContent =
indicadores.cards[4].variacao;

/* ==========================================================
   CARD 6
========================================================== */

document.getElementById("tituloCard6").textContent =
indicadores.cards[5].titulo;

document.getElementById("valorCard6").textContent =
indicadores.cards[5].valor;

document.getElementById("variacaoCard6").textContent =
indicadores.cards[5].variacao;

/* ==========================================================
   EVOLUÇÃO DAS VENDAS
========================================================== */

const evolucao = {

    titulo: "Evolução das Vendas",

    descricao: "Comparativo dos últimos meses.",

    imagem: "../Assets/grafico_evolucao.png"

};

document.getElementById("tituloEvolucao").textContent =
evolucao.titulo;

document.getElementById("descricaoEvolucao").textContent =
evolucao.descricao;
    
document.getElementById("imagemEvolucao").src =
evolucao.imagem;

/* ==========================================================
   ALERTAS
========================================================== */

const alertas = {

    titulo: "Alertas e Recomendações",

    descricao: "Informações importantes para melhorar os resultados.",

    botaoConfigurar: "Configurar Alertas",

    botaoSugestoes: "Ver Sugestões",

    lista: [

        {

            titulo: "Produto com maior giro",

            texto: "O produto 'Mouse Gamer RGB' liderou as vendas nesta semana."

        },

        {

            titulo: "Oportunidade de margem",

            texto: "Há produtos com potencial para aumento de margem."

        },

        {

            titulo: "Recuperação de vendas",

            texto: "As vendas cresceram 12% nos últimos 7 dias."

        },

        {

            titulo: "Sinal de risco",

            texto: "Existem produtos com estoque abaixo do mínimo."

        }

    ]

};

/* ==========================================================
   TÍTULOS DOS ALERTAS
========================================================== */

document.getElementById("tituloAlertas").textContent =
alertas.titulo;

document.getElementById("descricaoAlertas").textContent =
alertas.descricao;

document.getElementById("btnConfigurarAlertas").textContent =
alertas.botaoConfigurar;

document.getElementById("btnVerSugestoes").textContent =
alertas.botaoSugestoes;

/* ==========================================================
   ALERTA 1
========================================================== */

document.getElementById("alertaTitulo1").textContent =
alertas.lista[0].titulo;

document.getElementById("alertaTexto1").textContent =
alertas.lista[0].texto;

/* ALERTA 2 */

document.getElementById("alertaTitulo2").textContent =
alertas.lista[1].titulo;

document.getElementById("alertaTexto2").textContent =
alertas.lista[1].texto;

/* ALERTA 3 */

document.getElementById("alertaTitulo3").textContent =
alertas.lista[2].titulo;

document.getElementById("alertaTexto3").textContent =
alertas.lista[2].texto;

/* ALERTA 4 */

document.getElementById("alertaTitulo4").textContent =
alertas.lista[3].titulo;

document.getElementById("alertaTexto4").textContent =
alertas.lista[3].texto;
/* ==========================================================
   ÚLTIMAS MOVIMENTAÇÕES
========================================================== */

const movimentacoes = {

    titulo:"Últimas Movimentações",

    descricao:"Acompanhe os eventos mais recentes da sua loja.",

    botao:"Ver Todas",

    lista:[

        {

            icone:"../Assets/pedidos-confirmados.png",

            titulo:"Pedidos Confirmados",

            descricao:"18 novos pedidos realizados hoje.",

            valor:"+18"

        },

        {

            icone:"../Assets/entrada-estoque.png",

            titulo:"Entradas no Estoque",

            descricao:"42 produtos adicionados ao estoque.",

            valor:"+42"

        },

        {

            icone:"../Assets/estoque-baixo.png",

            titulo:"Estoque Baixo",

            descricao:"7 produtos precisam de reposição.",

            valor:"7"

        },

        {

            icone:"../Assets/cancelamentos.png",

            titulo:"Cancelamentos",

            descricao:"2 pedidos cancelados hoje.",

            valor:"2"

        }

    ]

};

/* ==========================================================
   MOVIMENTAÇÕES
========================================================== */

document.getElementById("tituloMovimentacoes").textContent =
movimentacoes.titulo;

document.getElementById("descricaoMovimentacoes").textContent =
movimentacoes.descricao;

document.getElementById("btnAbrirMovimentacoes").textContent =
movimentacoes.botao;

for(let i = 1; i <= 4; i++){

    document.getElementById("iconeMov"+i).src =
    movimentacoes.lista[i-1].icone;

    document.getElementById("movTitulo"+i).textContent =
    movimentacoes.lista[i-1].titulo;

    document.getElementById("movDescricao"+i).textContent =
    movimentacoes.lista[i-1].descricao;

    document.getElementById("movValor"+i).textContent =
    movimentacoes.lista[i-1].valor;

}

/* ==========================================================
   RODAPÉ
========================================================== */

const footer = {

    dica:"Dica: acompanhe diariamente os indicadores para melhorar o desempenho da sua loja.",

    vendas:"Vendas",

    financeiro:"Financeiro",

    relatorios:"Relatórios",

    copyright:"© 2026 Mega Feirão - Todos os direitos reservados."

};

document.getElementById("footerDica").textContent =
footer.dica;

document.getElementById("linkVendas").textContent =
footer.vendas;

document.getElementById("linkFinanceiro").textContent =
footer.financeiro;

document.getElementById("linkRelatorios").textContent =
footer.relatorios;

document.getElementById("footerCopyright").textContent =
footer.copyright;

/* ==========================================================
   LINKS
========================================================== */

document.getElementById("linkVendas").href =
"vendas.html";

document.getElementById("linkFinanceiro").href =
"financeiro.html";

document.getElementById("linkRelatorios").href =
"relatorios.html";

/* ==========================================================
   EVENTOS DOS BOTÕES
========================================================== */

document.getElementById("btnExportar")
.addEventListener("click", function(){

    alert("Exportação iniciada.");

});

document.getElementById("btnRelatorios")
.addEventListener("click", function(){

    alert("Abrindo relatórios.");

});

document.getElementById("btnCategorias")
.addEventListener("click", function(){

    alert("Carregando categorias.");

});

document.getElementById("btnConfigurarAlertas")
.addEventListener("click", function(){

    alert("Configuração de alertas.");

});

document.getElementById("btnVerSugestoes")
.addEventListener("click", function(){

    alert("Exibindo sugestões.");

});

document.getElementById("btnAbrirMovimentacoes")
.addEventListener("click", function(){

    alert("Abrindo movimentações.");

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
   BOTÕES DE FILTRO
========================================================== */

document.getElementById("btnHoje")
.addEventListener("click", function(){

    alert("Filtro: Hoje");

});

document.getElementById("btnSemana")
.addEventListener("click", function(){

    alert("Filtro: Últimos 7 dias");

});

document.getElementById("btnMes")
.addEventListener("click", function(){

    alert("Filtro: Últimos 30 dias");

});

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

window.addEventListener("load", function(){

    console.log("Home do Lojista carregada com sucesso.");

});
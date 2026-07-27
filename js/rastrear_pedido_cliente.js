/* ==========================================================
   DADOS DA PÁGINA
========================================================== */

const rastreamento = {

    /* ==========================================
       HEADER
    ========================================== */

    header:{

        logo:"../Assets/logo.png",

        titulo:"Rastreamento do Pedido",

        ajuda:"Ajuda",

        suporte:"Suporte"

    },

    /* ==========================================
       HERO
    ========================================== */

    hero:{

        titulo:"Seu pedido está a caminho!",

        descricao:"Acompanhe em tempo real o andamento da sua entrega.",

        cancelar:"Cancelar Pedido",

        compartilhar:"Compartilhar",

        aba1:"Andamento",

        aba2:"Detalhes",

        aba3:"Pagamento"

    },

    /* ==========================================
       ESTIMATIVA
    ========================================== */

    estimativa:{

        titulo:"Estimativa de Entrega",

        descricao:"Informações atualizadas automaticamente.",

        tempo:{

            titulo:"Tempo",

            valor:"18 min",

            descricao:"Previsão até o destino"

        },

        distancia:{

            titulo:"Distância",

            valor:"4,3 km",

            descricao:"Restante"

        },

        status:{

            titulo:"Status",

            valor:"Em rota",

            descricao:"Motoboy em deslocamento"

        }

    }

};

/* ==========================================================
   HEADER
========================================================== */

document.getElementById("logoPagina").src =
rastreamento.header.logo;

document.getElementById("tituloPagina").textContent =
rastreamento.header.titulo;

document.getElementById("menuAjuda").textContent =
rastreamento.header.ajuda;

document.getElementById("menuSuporte").textContent =
rastreamento.header.suporte;

/* ==========================================================
   HERO
========================================================== */

document.getElementById("tituloHero").textContent =
rastreamento.hero.titulo;

document.getElementById("descricaoHero").textContent =
rastreamento.hero.descricao;

document.getElementById("btnCancelarPedido").textContent =
rastreamento.hero.cancelar;

document.getElementById("btnCompartilhar").textContent =
rastreamento.hero.compartilhar;

document.getElementById("abaAndamento").textContent =
rastreamento.hero.aba1;

document.getElementById("abaDetalhes").textContent =
rastreamento.hero.aba2;

document.getElementById("abaPagamento").textContent =
rastreamento.hero.aba3;

/* ==========================================================
   ESTIMATIVA
========================================================== */

document.getElementById("tituloEstimativa").textContent =
rastreamento.estimativa.titulo;

document.getElementById("descricaoEstimativa").textContent =
rastreamento.estimativa.descricao;

/* ----- Tempo ----- */

document.getElementById("tempoTitulo").textContent =
rastreamento.estimativa.tempo.titulo;

document.getElementById("tempoValor").textContent =
rastreamento.estimativa.tempo.valor;

document.getElementById("tempoDescricao").textContent =
rastreamento.estimativa.tempo.descricao;

/* ----- Distância ----- */

document.getElementById("distanciaTitulo").textContent =
rastreamento.estimativa.distancia.titulo;

document.getElementById("distanciaValor").textContent =
rastreamento.estimativa.distancia.valor;

document.getElementById("distanciaDescricao").textContent =
rastreamento.estimativa.distancia.descricao;

/* ----- Status ----- */

document.getElementById("statusTitulo").textContent =
rastreamento.estimativa.status.titulo;

document.getElementById("statusValor").textContent =
rastreamento.estimativa.status.valor;

document.getElementById("statusDescricao").textContent =
rastreamento.estimativa.status.descricao;
/* ==========================================================
   ACOMPANHAMENTO DO PEDIDO
========================================================== */

rastreamento.acompanhamento = {

    titulo:"Acompanhe seu Pedido",

    descricao:"Veja todas as etapas da entrega em tempo real.",

    etapas:[

        {

            icone:"../Assets/images/pedido_recebido.png",

            titulo:"Pedido Recebido",

            hora:"14:05",

            status:"Concluído"

        },

        {

            icone:"../Assets/images/preparando_pedido.png",

            titulo:"Pedido em Preparação",

            hora:"14:18",

            status:"Concluído"

        },

        {

            icone:"../Assets/images/saiu_entrega.png",

            titulo:"Saiu para Entrega",

            hora:"14:40",

            status:"Em andamento"

        },

        {

            icone:"../Assets/images/entregue.png",

            titulo:"Entregue",

            hora:"--:--",

            status:"Aguardando"

        }

    ]

};

/* ==========================================================
   TÍTULO DA TIMELINE
========================================================== */

document.getElementById("tituloAcompanhamento").textContent =
rastreamento.acompanhamento.titulo;

document.getElementById("descricaoAcompanhamento").textContent =
rastreamento.acompanhamento.descricao;

/* ==========================================================
   ETAPA 1
========================================================== */

document.getElementById("iconeEtapa1").src =
rastreamento.acompanhamento.etapas[0].icone;

document.getElementById("tituloEtapa1").textContent =
rastreamento.acompanhamento.etapas[0].titulo;

document.getElementById("horaEtapa1").textContent =
rastreamento.acompanhamento.etapas[0].hora;

document.getElementById("statusEtapa1").textContent =
rastreamento.acompanhamento.etapas[0].status;

/* ==========================================================
   ETAPA 2
========================================================== */

document.getElementById("iconeEtapa2").src =
rastreamento.acompanhamento.etapas[1].icone;

document.getElementById("tituloEtapa2").textContent =
rastreamento.acompanhamento.etapas[1].titulo;

document.getElementById("horaEtapa2").textContent =
rastreamento.acompanhamento.etapas[1].hora;

document.getElementById("statusEtapa2").textContent =
rastreamento.acompanhamento.etapas[1].status;

/* ==========================================================
   ETAPA 3
========================================================== */

document.getElementById("iconeEtapa3").src =
rastreamento.acompanhamento.etapas[2].icone;

document.getElementById("tituloEtapa3").textContent =
rastreamento.acompanhamento.etapas[2].titulo;

document.getElementById("horaEtapa3").textContent =
rastreamento.acompanhamento.etapas[2].hora;

document.getElementById("statusEtapa3").textContent =
rastreamento.acompanhamento.etapas[2].status;

/* ==========================================================
   ETAPA 4
========================================================== */

document.getElementById("iconeEtapa4").src =
rastreamento.acompanhamento.etapas[3].icone;

document.getElementById("tituloEtapa4").textContent =
rastreamento.acompanhamento.etapas[3].titulo;

document.getElementById("horaEtapa4").textContent =
rastreamento.acompanhamento.etapas[3].hora;

document.getElementById("statusEtapa4").textContent =
rastreamento.acompanhamento.etapas[3].status;

/* ==========================================================
   MAPA
========================================================== */

rastreamento.mapa = {

    titulo:"Localização da Entrega",

    descricao:"Acompanhe a posição atual do entregador.",

    imagem:"../Assets/mapa.png",

    texto:"O entregador está a aproximadamente 4,3 km do destino."

};

document.getElementById("tituloMapa").textContent =
rastreamento.mapa.titulo;

document.getElementById("descricaoMapa").textContent =
rastreamento.mapa.descricao;

document.getElementById("imagemMapa").src =
rastreamento.mapa.imagem;

document.getElementById("textoMapa").textContent =
rastreamento.mapa.texto;

/* ==========================================================
   INFORMAÇÕES DO PEDIDO
========================================================== */

rastreamento.informacoes = {

    titulo:"Informações do Pedido",

    descricao:"Confira os detalhes do seu pedido.",

    itens:{

        icone:"../Assets/produtos.png",

        titulo:"Itens",

        subtitulo:"Produtos",

        descricao:"01 Hambúrguer Artesanal, 01 Batata Frita Grande e 01 Refrigerante 600ml."

    },

    endereco:{

        icone:"../Assets/mapa.png",

        titulo:"Endereço",

        subtitulo:"Destino",

        descricao:"Rua das Flores, 250 - Centro - São Paulo/SP"

    },

    pagamento:{

        icone:"../Assets/pagamento.png",

        titulo:"Pagamento",

        subtitulo:"Forma de Pagamento",

        descricao:"Cartão de Crédito •••• 4587"

    },

    observacao:{

        icone:"../Assets/informacao.png",

        titulo:"Observações",

        subtitulo:"Informações adicionais",

        descricao:"Entregar na portaria. Interfone 302."

    }

};

/* ==========================================================
   TÍTULOS
========================================================== */

document.getElementById("tituloInformacoes").textContent =
rastreamento.informacoes.titulo;

document.getElementById("descricaoInformacoes").textContent =
rastreamento.informacoes.descricao;

/* ==========================================================
   ITENS
========================================================== */

document.getElementById("iconeItens").src =
rastreamento.informacoes.itens.icone;

document.getElementById("tituloItens").textContent =
rastreamento.informacoes.itens.titulo;

document.getElementById("subtituloItens").textContent =
rastreamento.informacoes.itens.subtitulo;

document.getElementById("descricaoItens").textContent =
rastreamento.informacoes.itens.descricao;

/* ==========================================================
   ENDEREÇO
========================================================== */

document.getElementById("iconeEndereco").src =
rastreamento.informacoes.endereco.icone;

document.getElementById("tituloEndereco").textContent =
rastreamento.informacoes.endereco.titulo;

document.getElementById("subtituloEndereco").textContent =
rastreamento.informacoes.endereco.subtitulo;

document.getElementById("descricaoEndereco").textContent =
rastreamento.informacoes.endereco.descricao;

/* ==========================================================
   PAGAMENTO
========================================================== */

document.getElementById("iconePagamento").src =
rastreamento.informacoes.pagamento.icone;

document.getElementById("tituloPagamento").textContent =
rastreamento.informacoes.pagamento.titulo;

document.getElementById("subtituloPagamento").textContent =
rastreamento.informacoes.pagamento.subtitulo;

document.getElementById("descricaoPagamento").textContent =
rastreamento.informacoes.pagamento.descricao;

/* ==========================================================
   OBSERVAÇÃO
========================================================== */

document.getElementById("iconeObservacao").src =
rastreamento.informacoes.observacao.icone;

document.getElementById("tituloObservacao").textContent =
rastreamento.informacoes.observacao.titulo;

document.getElementById("subtituloObservacao").textContent =
rastreamento.informacoes.observacao.subtitulo;

document.getElementById("descricaoObservacao").textContent =
rastreamento.informacoes.observacao.descricao;

/* ==========================================================
   AVISO
========================================================== */

document.getElementById("textoAviso").textContent =
"Você receberá uma notificação sempre que houver atualização no status da entrega.";

/* ==========================================================
   RODAPÉ
========================================================== */

document.getElementById("footerPrivacidade").textContent =
"Política de Privacidade";

document.getElementById("footerTermos").textContent =
"Termos de Uso";

document.getElementById("footerAjuda").textContent =
"Central de Ajuda";

document.getElementById("footerCopyright").textContent =
"© 2026 Mega Feirão - Todos os direitos reservados.";

document.getElementById("footerPrivacidade").href =
"privacidade.html";

document.getElementById("footerTermos").href =
"termos.html";

document.getElementById("footerAjuda").href =
"ajuda.html";

/* ==========================================================
   MODAL
========================================================== */

document.getElementById("tituloModal").textContent =
"Compartilhar Rastreamento";

document.getElementById("descricaoModal").textContent =
"Compartilhe o link abaixo para que outra pessoa acompanhe sua entrega.";

document.getElementById("linkCompartilhamento").value =
"https://megafeirao.com/rastreamento/ABC123";

document.getElementById("btnCopiarLink").textContent =
"Copiar Link";

document.getElementById("btnFecharModal").textContent =
"Fechar";

/* ==========================================================
   EVENTOS
========================================================== */

const modal =
document.getElementById("modalCompartilhar");

document.getElementById("btnCompartilhar")
.addEventListener("click", function(){

    modal.style.display = "flex";

});

document.getElementById("btnFecharModal")
.addEventListener("click", function(){

    modal.style.display = "none";

});

document.getElementById("btnCopiarLink")
.addEventListener("click", function(){

    const link =
    document.getElementById("linkCompartilhamento");

    link.select();

    navigator.clipboard.writeText(link.value);

    alert("Link copiado com sucesso!");

});

document.getElementById("btnCancelarPedido")
.addEventListener("click", function(){

    const confirmar =
    confirm("Deseja realmente cancelar este pedido?");

    if(confirmar){

        alert("Pedido cancelado.");

    }

});

/* ==========================================================
   LOADING
========================================================== */

window.addEventListener("load", function(){

    const loading =
    document.getElementById("loadingPedido");

    loading.style.display = "flex";

    document.getElementById("textoLoading").textContent =
    "Carregando informações do pedido...";

    setTimeout(function(){

        loading.style.display = "none";

    },1500);

});

/* ==========================================================
   FINALIZAÇÃO
========================================================== */

console.log("Tela de rastreamento carregada com sucesso.");
/* ==========================================================
   DADOS DO PERFIL
========================================================== */

const perfil = {

    /* ==========================================
       MENU LATERAL
    ========================================== */

    menu:{

        logo:"../Assets/perfil.png",

        titulo:"Meu Perfil",

        dados:"Dados Pessoais",

        seguranca:"Segurança",

        pedidos:"Meus Pedidos",

        pagamentos:"Pagamentos"

    },

    /* ==========================================
       HEADER
    ========================================== */

    header:{

        inicio:"Início",

        pedidos:"Pedidos",

        favoritos:"Favoritos",

        pesquisa:"Pesquisar..."

    },

    /* ==========================================
       HERO
    ========================================== */

    hero:{

        foto:"../Assets/perfil.png",

        nome:"João da Silva",

        conta:"Conta Verificada",

        plano:"Cliente Premium",

        descricao:"Gerencie seus dados pessoais, endereço, formas de pagamento e preferências da sua conta.",

        descartar:"Descartar",

        salvar:"Salvar"

    },

    /* ==========================================
       EDITAR PERFIL
    ========================================== */

    editar:{

        titulo:"Editar Perfil",

        descricao:"Atualize suas informações sempre que necessário.",

        salvar:"Salvar Perfil",

        abaPerfil:"Perfil",

        abaContato:"Contato",

        abaPreferencias:"Preferências"

    }

};

/* ==========================================================
   MENU LATERAL
========================================================== */

document.getElementById("logoPerfil").src =
perfil.menu.logo;

document.getElementById("tituloMenu").textContent =
perfil.menu.titulo;

document.getElementById("menuDados").textContent =
perfil.menu.dados;

document.getElementById("menuSeguranca").textContent =
perfil.menu.seguranca;

document.getElementById("menuPedidos").textContent =
perfil.menu.pedidos;

document.getElementById("menuPagamentos").textContent =
perfil.menu.pagamentos;

/* ==========================================================
   HEADER
========================================================== */

document.getElementById("linkInicio").textContent =
perfil.header.inicio;

document.getElementById("linkPedidos").textContent =
perfil.header.pedidos;

document.getElementById("linkFavoritos").textContent =
perfil.header.favoritos;

document.getElementById("campoPesquisa").placeholder =
perfil.header.pesquisa;

/* ==========================================================
   HERO
========================================================== */

document.getElementById("fotoPerfil").src =
perfil.hero.foto;

document.getElementById("nomeUsuario").textContent =
perfil.hero.nome;

document.getElementById("badgeConta").textContent =
perfil.hero.conta;

document.getElementById("badgePlano").textContent =
perfil.hero.plano;

document.getElementById("descricaoPerfil").textContent =
perfil.hero.descricao;

document.getElementById("btnDescartarHero").textContent =
perfil.hero.descartar;

document.getElementById("btnSalvarHero").textContent =
perfil.hero.salvar;

/* ==========================================================
   EDITAR PERFIL
========================================================== */

document.getElementById("tituloEditar").textContent =
perfil.editar.titulo;

document.getElementById("descricaoEditar").textContent =
perfil.editar.descricao;

document.getElementById("btnSalvarPerfil").textContent =
perfil.editar.salvar;

document.getElementById("abaPerfil").textContent =
perfil.editar.abaPerfil;

document.getElementById("abaContato").textContent =
perfil.editar.abaContato;

document.getElementById("abaPreferencias").textContent =
perfil.editar.abaPreferencias;
/* ==========================================================
   INFORMAÇÕES BÁSICAS
========================================================== */

const informacoes = {

    titulo: "Informações Básicas",

    descricao: "Mantenha seus dados pessoais sempre atualizados.",

    campos:{

        nome:{

            label:"Nome Completo",

            placeholder:"Digite seu nome completo"

        },

        nascimento:{

            label:"Data de Nascimento"

        },

        cpf:{

            label:"CPF",

            placeholder:"000.000.000-00",

            texto:"Informe um CPF válido."

        },

        genero:{

            label:"Gênero",

            texto:"Selecione uma opção.",

            opcoes:[

                "",

                "Masculino",

                "Feminino",

                "Outro",

                "Prefiro não informar"

            ]

        }

    },

    botoes:{

        descartar:"Descartar Alterações",

        salvar:"Salvar Alterações"

    }

};

/* ==========================================================
   TÍTULOS
========================================================== */

document.getElementById("tituloInformacoes").textContent =
informacoes.titulo;

document.getElementById("descricaoInformacoes").textContent =
informacoes.descricao;

/* ==========================================================
   NOME
========================================================== */

document.getElementById("lblNome").textContent =
informacoes.campos.nome.label;

document.getElementById("nome").placeholder =
informacoes.campos.nome.placeholder;

/* ==========================================================
   DATA DE NASCIMENTO
========================================================== */

document.getElementById("lblNascimento").textContent =
informacoes.campos.nascimento.label;

/* ==========================================================
   CPF
========================================================== */

document.getElementById("lblCpf").textContent =
informacoes.campos.cpf.label;

document.getElementById("cpf").placeholder =
informacoes.campos.cpf.placeholder;

document.getElementById("txtCpf").textContent =
informacoes.campos.cpf.texto;

/* ==========================================================
   GÊNERO
========================================================== */

document.getElementById("lblGenero").textContent =
informacoes.campos.genero.label;

document.getElementById("txtGenero").textContent =
informacoes.campos.genero.texto;

const genero = document.getElementById("genero");

genero.options[0].text =
informacoes.campos.genero.opcoes[0];

genero.options[1].text =
informacoes.campos.genero.opcoes[1];

genero.options[2].text =
informacoes.campos.genero.opcoes[2];

genero.options[3].text =
informacoes.campos.genero.opcoes[3];

genero.options[4].text =
informacoes.campos.genero.opcoes[4];

/* ==========================================================
   BOTÕES
========================================================== */

document.getElementById("btnDescartarInfo").textContent =
informacoes.botoes.descartar;

document.getElementById("btnSalvarInfo").textContent =
informacoes.botoes.salvar;

/* ==========================================================
   DADOS DE EXEMPLO
========================================================== */

document.getElementById("nome").value =
"João da Silva";

document.getElementById("cpf").value =
"123.456.789-00";

document.getElementById("dataNascimento").value =
"1998-06-15";

document.getElementById("genero").selectedIndex = 1;
/* ==========================================================
   CONTATO
========================================================== */

const contato = {

    titulo: "Contato",

    descricao: "Atualize suas informações de contato e endereço.",

    campos:{

        email:{

            label:"E-mail",

            placeholder:"Digite seu e-mail",

            texto:"Seu e-mail será utilizado para login."

        },

        telefone:{

            label:"Telefone",

            placeholder:"(00) 00000-0000",

            texto:"Informe um telefone válido."

        },

        cep:{

            label:"CEP",

            placeholder:"00000-000",

            texto:"Utilizado para localizar seu endereço."

        },

        cidade:{

            label:"Cidade",

            placeholder:"Digite sua cidade",

            texto:"Cidade onde você reside."

        },

        estado:{

            label:"Estado",

            texto:"Selecione seu estado."

        },

        endereco:{

            label:"Endereço",

            placeholder:"Rua, número e complemento",

            texto:"Informe seu endereço completo."

        }

    },

    botoes:{

        descartar:"Descartar Alterações",

        salvar:"Salvar Alterações"

    }

};

/* ==========================================================
   TÍTULOS
========================================================== */

document.getElementById("tituloContato").textContent =
contato.titulo;

document.getElementById("descricaoContato").textContent =
contato.descricao;

/* ==========================================================
   E-MAIL
========================================================== */

document.getElementById("lblEmail").textContent =
contato.campos.email.label;

document.getElementById("email").placeholder =
contato.campos.email.placeholder;

document.getElementById("txtEmail").textContent =
contato.campos.email.texto;

/* ==========================================================
   TELEFONE
========================================================== */

document.getElementById("lblTelefone").textContent =
contato.campos.telefone.label;

document.getElementById("telefone").placeholder =
contato.campos.telefone.placeholder;

document.getElementById("txtTelefone").textContent =
contato.campos.telefone.texto;

/* ==========================================================
   CEP
========================================================== */

document.getElementById("lblCep").textContent =
contato.campos.cep.label;

document.getElementById("cep").placeholder =
contato.campos.cep.placeholder;

document.getElementById("txtCep").textContent =
contato.campos.cep.texto;

/* ==========================================================
   CIDADE
========================================================== */

document.getElementById("lblCidade").textContent =
contato.campos.cidade.label;

document.getElementById("cidade").placeholder =
contato.campos.cidade.placeholder;

document.getElementById("txtCidade").textContent =
contato.campos.cidade.texto;

/* ==========================================================
   ESTADO
========================================================== */

document.getElementById("lblEstado").textContent =
contato.campos.estado.label;

document.getElementById("txtEstado").textContent =
contato.campos.estado.texto;

const estado = document.getElementById("estado");

estado.options[0].text = "Selecione";
estado.options[1].text = "AC";
estado.options[2].text = "AL";
estado.options[3].text = "AP";
estado.options[4].text = "AM";
estado.options[5].text = "BA";
estado.options[6].text = "CE";
estado.options[7].text = "DF";
estado.options[8].text = "ES";
estado.options[9].text = "GO";
estado.options[10].text = "MA";
estado.options[11].text = "MT";
estado.options[12].text = "MS";
estado.options[13].text = "MG";
estado.options[14].text = "PA";
estado.options[15].text = "PB";
estado.options[16].text = "PR";
estado.options[17].text = "PE";
estado.options[18].text = "PI";
estado.options[19].text = "RJ";
estado.options[20].text = "RN";
estado.options[21].text = "RS";
estado.options[22].text = "RO";
estado.options[23].text = "RR";
estado.options[24].text = "SC";
estado.options[25].text = "SP";
estado.options[26].text = "SE";
estado.options[27].text = "TO";

/* ==========================================================
   ENDEREÇO
========================================================== */

document.getElementById("lblEndereco").textContent =
contato.campos.endereco.label;

document.getElementById("endereco").placeholder =
contato.campos.endereco.placeholder;

document.getElementById("txtEndereco").textContent =
contato.campos.endereco.texto;

/* ==========================================================
   BOTÕES
========================================================== */

document.getElementById("btnDescartarContato").textContent =
contato.botoes.descartar;

document.getElementById("btnSalvarContato").textContent =
contato.botoes.salvar;

/* ==========================================================
   DADOS DE EXEMPLO
========================================================== */

document.getElementById("email").value =
"joao@email.com";

document.getElementById("telefone").value =
"(11) 99999-9999";

document.getElementById("cep").value =
"01001-000";

document.getElementById("cidade").value =
"São Paulo";

document.getElementById("estado").value =
"SP";

document.getElementById("endereco").value =
"Av. Paulista, 1000";
/* ==========================================================
   PREFERÊNCIAS
========================================================== */

const preferencias = {

    titulo: "Preferências",

    descricao: "Personalize a forma como deseja utilizar sua conta.",

    campos:{

        idioma:{
            label:"Idioma",
            texto:"Selecione o idioma da plataforma."
        },

        notificacoes:{
            label:"Notificações",
            texto:"Escolha quando deseja receber notificações."
        },

        contato:{
            label:"Contato Preferido",
            texto:"Escolha o principal meio de contato."
        },

        promocoes:{
            label:"Receber Promoções",
            texto:"Ative ou desative o recebimento de promoções."
        }

    },

    botoes:{

        descartar:"Descartar Alterações",

        salvar:"Salvar Preferências"

    }

};

/* ==========================================================
   TÍTULOS
========================================================== */

document.getElementById("tituloPreferencias").textContent =
preferencias.titulo;

document.getElementById("descricaoPreferencias").textContent =
preferencias.descricao;

/* ==========================================================
   LABELS
========================================================== */

document.getElementById("lblIdioma").textContent =
preferencias.campos.idioma.label;

document.getElementById("txtIdioma").textContent =
preferencias.campos.idioma.texto;

document.getElementById("lblNotificacoes").textContent =
preferencias.campos.notificacoes.label;

document.getElementById("txtNotificacoes").textContent =
preferencias.campos.notificacoes.texto;

document.getElementById("lblContatoPreferido").textContent =
preferencias.campos.contato.label;

document.getElementById("txtContatoPreferido").textContent =
preferencias.campos.contato.texto;

document.getElementById("lblPromocoes").textContent =
preferencias.campos.promocoes.label;

document.getElementById("txtPromocoes").textContent =
preferencias.campos.promocoes.texto;

/* ==========================================================
   OPÇÕES DOS SELECTS
========================================================== */

const idioma = document.getElementById("idioma");

idioma.options[0].text = "Selecione";
idioma.options[1].text = "Português (Brasil)";
idioma.options[2].text = "English";
idioma.options[3].text = "Español";

const notificacoes = document.getElementById("notificacoes");

notificacoes.options[0].text = "Selecione";
notificacoes.options[1].text = "Todas";
notificacoes.options[2].text = "Somente importantes";
notificacoes.options[3].text = "Nenhuma";

const contatoPreferido = document.getElementById("contatoPreferido");

contatoPreferido.options[0].text = "Selecione";
contatoPreferido.options[1].text = "E-mail";
contatoPreferido.options[2].text = "Telefone";
contatoPreferido.options[3].text = "WhatsApp";

const promocoes = document.getElementById("promocoes");

promocoes.options[0].text = "Selecione";
promocoes.options[1].text = "Ativar";
promocoes.options[2].text = "Desativar";

/* ==========================================================
   VALORES PADRÃO
========================================================== */

idioma.selectedIndex = 1;

notificacoes.selectedIndex = 1;

contatoPreferido.selectedIndex = 3;

promocoes.selectedIndex = 1;

/* ==========================================================
   BOTÕES
========================================================== */

document.getElementById("btnDescartarPreferencias").textContent =
preferencias.botoes.descartar;

document.getElementById("btnSalvarPreferencias").textContent =
preferencias.botoes.salvar;

/* ==========================================================
   RODAPÉ
========================================================== */

document.getElementById("footerAtendimento").textContent =
"Central de Atendimento";

document.getElementById("footerTroca").textContent =
"Trocas e Devoluções";

document.getElementById("footerFrete").textContent =
"Frete e Entregas";

document.getElementById("footerPagamento").textContent =
"Formas de Pagamento";

document.getElementById("footerCopyright").textContent =
"© 2026 Mega Feirão. Todos os direitos reservados.";

/* ==========================================================
   LINKS DO RODAPÉ
========================================================== */

document.getElementById("footerAtendimento").href =
"atendimento.html";

document.getElementById("footerTroca").href =
"trocas.html";

document.getElementById("footerFrete").href =
"frete.html";

document.getElementById("footerPagamento").href =
"pagamentos.html";

/* ==========================================================
   EVENTOS DOS BOTÕES
========================================================== */

document.getElementById("btnSalvarHero")
.addEventListener("click", function(){

    alert("Perfil salvo com sucesso!");

});

document.getElementById("btnSalvarInfo")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Informações básicas atualizadas.");

});

document.getElementById("btnSalvarContato")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Contato atualizado.");

});

document.getElementById("btnSalvarPreferencias")
.addEventListener("click", function(event){

    event.preventDefault();

    alert("Preferências salvas.");

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

    console.log("Página de Perfil carregada com sucesso.");

});
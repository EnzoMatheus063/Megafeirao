/*=====================================================
    DADOS DA PÁGINA
=====================================================*/

const pagina = {

    logo: {
        nome: "Mega Feirão",
        imagem: "/assets/logo.png"
    },

    menu: [
        "Início",
        "Categorias",
        "Ofertas",
        "Contato"
    ],

    busca: {
        placeholder: "Pesquisar produtos..."
    },

    hero: {

        titulo: "Bem-vindo de volta 👋",

        descricao: "Faça login para acessar sua conta e acompanhar seus pedidos.",

        criarConta: "Criar Conta",

        entrar: "Entrar"

    },

    login: {

        titulo: "Login",

        descricao: "Entre utilizando seu e-mail e senha.",

        email: "E-mail",

        emailPlaceholder: "Digite seu e-mail",

        senha: "Senha",

        senhaPlaceholder: "Digite sua senha",

        esqueciSenha: "Esqueci minha senha",

        entrar: "Entrar"

    },

    acesso: {

        titulo: "Opções de acesso",

        descricao: "Escolha uma das opções abaixo."

    },

    cards: [

        {

            imagem: "/assets/google.png",

            titulo: "Entrar com Google",

            descricao: "Utilize sua conta Google para entrar rapidamente.",

            botao: "Entrar"

        },

        {

            imagem: "/assets/usuario.png",

            titulo: "Criar Conta",

            descricao: "Cadastre-se gratuitamente e aproveite todos os benefícios.",

            botao: "Cadastrar"

        }

    ],

    cadastro: {

        titulo: "Ainda não possui cadastro?",

        descricao: "Crie sua conta gratuitamente e aproveite ofertas exclusivas.",

        botao: "Criar Conta"

    },

    footer: {

        titulo: "Mega Feirão",

        enderecoTitulo: "Endereço",

        endereco:

            "Rua Exemplo, 123\nCentro\nSão Paulo - SP",

        links: [

            "Política de Privacidade",

            "Termos de Uso",

            "Trocas",

            "Contato"

        ]

    }

};


/*=====================================================
    HEADER
=====================================================*/

document.getElementById("logoImagem").src =
pagina.logo.imagem;

document.getElementById("logoNome").textContent =
pagina.logo.nome;


/*=====================================================
    MENU
=====================================================*/

document.getElementById("menu1").textContent =
pagina.menu[0];

document.getElementById("menu2").textContent =
pagina.menu[1];

document.getElementById("menu3").textContent =
pagina.menu[2];

document.getElementById("menu4").textContent =
pagina.menu[3];

document.getElementById("campoBusca").placeholder =
pagina.busca.placeholder;


/*=====================================================
    HERO
=====================================================*/

document.getElementById("heroTitulo").textContent =
pagina.hero.titulo;

document.getElementById("heroDescricao").textContent =
pagina.hero.descricao;

document.getElementById("btnCriarConta").textContent =
pagina.hero.criarConta;

document.getElementById("btnEntrarHero").textContent =
pagina.hero.entrar;


/*=====================================================
    LOGIN
=====================================================*/

document.getElementById("loginTitulo").textContent =
pagina.login.titulo;

document.getElementById("loginDescricao").textContent =
pagina.login.descricao;

document.getElementById("lblEmail").textContent =
pagina.login.email;

document.getElementById("email").placeholder =
pagina.login.emailPlaceholder;

document.getElementById("lblSenha").textContent =
pagina.login.senha;

document.getElementById("senha").placeholder =
pagina.login.senhaPlaceholder;

document.getElementById("btnEsqueciSenha").textContent =
pagina.login.esqueciSenha;

document.getElementById("btnEntrar").textContent =
pagina.login.entrar;


/*=====================================================
    ÁREA DE ACESSO
=====================================================*/

document.getElementById("tituloAcesso").textContent =
pagina.acesso.titulo;

document.getElementById("descricaoAcesso").textContent =
pagina.acesso.descricao;


/*=====================================================
    CARD 1
=====================================================*/

document.getElementById("card1Imagem").src =
pagina.cards[0].imagem;

document.getElementById("card1Titulo").textContent =
pagina.cards[0].titulo;

document.getElementById("card1Descricao").textContent =
pagina.cards[0].descricao;

document.getElementById("card1Botao").textContent =
pagina.cards[0].botao;


/*=====================================================
    CARD 2
=====================================================*/

document.getElementById("card2Imagem").src =
pagina.cards[1].imagem;

document.getElementById("card2Titulo").textContent =
pagina.cards[1].titulo;

document.getElementById("card2Descricao").textContent =
pagina.cards[1].descricao;

document.getElementById("card2Botao").textContent =
pagina.cards[1].botao;


/*=====================================================
    CADASTRO
=====================================================*/

document.getElementById("cadastroTitulo").textContent =
pagina.cadastro.titulo;

document.getElementById("cadastroDescricao").textContent =
pagina.cadastro.descricao;

document.getElementById("btnCadastrar").textContent =
pagina.cadastro.botao;


/*=====================================================
    FOOTER
=====================================================*/

document.getElementById("footerTitulo").textContent =
pagina.footer.titulo;

document.getElementById("tituloEndereco").textContent =
pagina.footer.enderecoTitulo;

document.getElementById("textoEndereco").innerHTML =
pagina.footer.endereco.replace(/\n/g,"<br>");

document.getElementById("footerLink1").textContent =
pagina.footer.links[0];

document.getElementById("footerLink2").textContent =
pagina.footer.links[1];

document.getElementById("footerLink3").textContent =
pagina.footer.links[2];

document.getElementById("footerLink4").textContent =
pagina.footer.links[3];


/*=====================================================
    EVENTOS
=====================================================*/




document
.getElementById("btnEsqueciSenha")
.addEventListener("click", function(){

    alert("Redirecionando para recuperação de senha.");

});


document
.getElementById("btnCriarConta")
.addEventListener("click", function(){

    window.location.href = "cadastro.html";

});


document
.getElementById("btnCadastrar")
.addEventListener("click", function(){

    window.location.href = "cadastro.html";

});





// metodo de login do cliente

const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;

    }

    if (senha.length < 8) {

        mensagem.innerHTML = "A senha deve possuir no mínimo 8 caracteres.";
        mensagem.style.color = "red";
        return;

    }

    fetch("http://localhost:3000/clientes/login", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        email,
        senha
    })

})

.then(res => res.json())

.then(resposta => {

    if (resposta.sucesso) {

        localStorage.setItem(
            "cliente",
            JSON.stringify(resposta.cliente)
        );

        window.location.href = "../index.html";

    } else {

        mensagem.innerHTML = resposta.mensagem;
        mensagem.style.color = "red";

    }

});
});
/* ==========================================================
   DADOS DA TELA DE CADASTRO
========================================================== */

const cadastro = {

    /* ==========================================
       LOGO
    ========================================== */

    logo:{

        imagem:"/Assets/logo.png",

        titulo:"Mega Feirão"

    },

    /* ==========================================
       APRESENTAÇÃO
    ========================================== */

    apresentacao:{

        titulo:"Crie sua conta",

        texto:"Cadastre-se gratuitamente e aproveite ofertas exclusivas, acompanhe seus pedidos e tenha uma experiência completa em nossa loja.",

        imagem:"../Assets/images/cadastro.png"

    },

    /* ==========================================
       FORMULÁRIO
    ========================================== */

    formulario:{

        titulo:"Cadastro",

        subtitulo:"Preencha os dados abaixo para criar sua conta."

    },

    /* ==========================================
       CAMPOS
    ========================================== */

    campos:{

        nome:"Nome Completo",

        cpf:"CPF",

        telefone:"Telefone",

        email:"E-mail",

        senha:"Senha",

        nascimento:"Data de Nascimento"

    },

    /* ==========================================
       PLACEHOLDERS
    ========================================== */

    placeholder:{

        nome:"Digite seu nome completo",

        cpf:"000.000.000-00",

        telefone:"(00) 00000-0000",

        email:"Digite seu e-mail",

        senha:"Digite sua senha"

    },

    /* ==========================================
       TERMOS
    ========================================== */

    termos:"Aceito os Termos de Uso e a Política de Privacidade.",

    /* ==========================================
       BOTÕES
    ========================================== */

    botao:"Cadastrar",

    textoLogin:"Já possui uma conta?",

    linkLogin:"Entrar"

};

/* ==========================================================
   LOGO
========================================================== */

document.getElementById("logoImagem").src =
cadastro.logo.imagem;

document.getElementById("logoTitulo").textContent =
cadastro.logo.titulo;

/* ==========================================================
   APRESENTAÇÃO
========================================================== */

document.getElementById("tituloApresentacao").textContent =
cadastro.apresentacao.titulo;

document.getElementById("textoApresentacao").textContent =
cadastro.apresentacao.texto;

document.getElementById("imagemCadastro").src =
cadastro.apresentacao.imagem;

/* ==========================================================
   FORMULÁRIO
========================================================== */

document.getElementById("tituloFormulario").textContent =
cadastro.formulario.titulo;

document.getElementById("subtituloFormulario").textContent =
cadastro.formulario.subtitulo;

/* ==========================================================
   LABELS
========================================================== */

document.getElementById("lblNome").textContent =
cadastro.campos.nome;

document.getElementById("lblCpf").textContent =
cadastro.campos.cpf;

document.getElementById("lblTelefone").textContent =
cadastro.campos.telefone;

document.getElementById("lblEmail").textContent =
cadastro.campos.email;

document.getElementById("lblSenha").textContent =
cadastro.campos.senha;

document.getElementById("lblNascimento").textContent =
cadastro.campos.nascimento;

/* ==========================================================
   PLACEHOLDERS
========================================================== */

document.getElementById("nome").placeholder =
cadastro.placeholder.nome;

document.getElementById("cpf").placeholder =
cadastro.placeholder.cpf;

document.getElementById("telefone").placeholder =
cadastro.placeholder.telefone;

document.getElementById("email").placeholder =
cadastro.placeholder.email;

document.getElementById("senha").placeholder =
cadastro.placeholder.senha;

/* ==========================================================
   TERMOS E BOTÕES
========================================================== */

document.getElementById("lblAceiteTermos").textContent =
cadastro.termos;

document.getElementById("btnCadastrar").textContent =
cadastro.botao;

document.getElementById("textoLogin").textContent =
cadastro.textoLogin;

document.getElementById("linkLogin").textContent =
cadastro.linkLogin;

/* ==========================================================
   RODAPÉ
========================================================== */

const footer = {

    titulo1: "Atendimento",

    texto1: "Segunda à Sexta das 08:00 às 18:00.",

    titulo2: "Contato",

    texto2: "contato@megafeirao.com.br",

    titulo3: "Endereço",

    texto3: "Rua das Promoções, 123 - Centro",

    copyright:
    "© 2026 Mega Feirão - Todos os direitos reservados."

};

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
   LINK LOGIN
========================================================== */

document.getElementById("linkLogin").href =
"login.html";

/* ==========================================================
   MÁSCARA CPF
========================================================== */

const campoCpf =
document.getElementById("cpf");

campoCpf.addEventListener("input", function(){

    let valor = this.value.replace(/\D/g,"");

    valor = valor.replace(/(\d{3})(\d)/,"$1.$2");
    valor = valor.replace(/(\d{3})(\d)/,"$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    this.value = valor;

});

/* ==========================================================
   MÁSCARA TELEFONE
========================================================== */

const campoTelefone =
document.getElementById("telefone");

campoTelefone.addEventListener("input", function(){

    let valor = this.value.replace(/\D/g,"");

    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
    valor = valor.replace(/(\d{5})(\d)/,"$1-$2");

    this.value = valor;

});

/* ==========================================================
   VALIDAÇÃO DO FORMULÁRIO
========================================================== */

document.getElementById("formCadastro")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value.trim();

    const cpf =
    document.getElementById("cpf").value.trim();

    const telefone =
    document.getElementById("telefone").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const senha =
    document.getElementById("senha").value;

    const nascimento =
    document.getElementById("nascimento").value;

    const termos =
    document.getElementById("aceiteTermos").checked;

    if(
        nome === "" ||
        cpf === "" ||
        telefone === "" ||
        email === "" ||
        senha === "" ||
        nascimento === ""
    ){

        alert("Preencha todos os campos.");

        return;

    }

    if(!email.includes("@")){

        alert("Informe um e-mail válido.");

        return;

    }

    if(!termos){

        alert("Você deve aceitar os Termos de Uso.");

        return;

    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";

});

/* ==========================================================
   EFEITO NOS CAMPOS
========================================================== */

const campos =
document.querySelectorAll("input");

campos.forEach(function(campo){

    campo.addEventListener("focus", function(){

        this.style.background = "#FFFFF8";

    });

    campo.addEventListener("blur", function(){

        this.style.background = "#FFFFFF";

    });

});

/* ==========================================================
   BOTÃO CADASTRAR
========================================================== */

document.getElementById("btnCadastrar")
.addEventListener("mouseenter", function(){

    this.style.opacity = "0.9";

});

document.getElementById("btnCadastrar")
.addEventListener("mouseleave", function(){

    this.style.opacity = "1";

});


document.getElementById("btnCadastrar").addEventListener("click", () => {
 
    const nome = document.getElementById("nome").value.trim();
 
    const Cpf = document.getElementById("Cpf").value.trim();
 
    const Telefone = document.getElementById("Telefone").value.trim();
 
    const Email = document.getElementById("Email").value.trim();
 
    const senha = document.getElementById("senha").value;
 
    const nascimento =
        document.getElementById("nascimento").value;
 
      // verifica se todos os campos foram preenchidos
    if (
        nome == "" ||
        Cpf == "" ||
        Telefone == "" ||
        Email == "" ||
        senha == "" ||
        nascimento == ""
    ) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
        
 
        return;
 
    }
 
    if (senha.length < 8 || senha.length > 13) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve possuir no máximo 13 caracteres.";
 
        return;
 
    }
 
    if (!email.includes("@")) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um e-mail válido.";
 
        return;
 
    }
 
    mensagem.style.color = "green";
 
    mensagem.innerHTML =
        "Cadastro realizado com sucesso!";
 
    // Objeto pronto para enviar ao Node.js
 
    const cliente = {
 
        nome: nome,
 
        cpf: cpf.replace(/\D/g, ""),
 
        telefone: telefone.replace(/\D/g, ""),
 
        email: email,
 
        senha: senha,
 
        data_nascimento: dataNascimento,
 
        Loja_idLoja: 1
 
    };
 
    console.log(cliente);
 
 
    fetch("http://localhost:3000/clientes", {
 
        method: "POST",
 
        headers: {
            "Content-Type": "application/json"
        },
 
        body: JSON.stringify(cliente)
 
    })
        .then(res => res.json())
 
        .then(resposta => {
 
            if (resposta.sucesso) {
 
                mensagem.style.color = "green";
                mensagem.innerHTML = resposta.mensagem;
 
                // Limpa os campos
                document.getElementById("nome").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";
                document.getElementById("dataNascimento").value = "";
 
            } else {
 
                mensagem.style.color = "red";
                mensagem.innerHTML = resposta.mensagem;
 
            }
 
        })
 
        .catch(() => {
 
            mensagem.style.color = "red";
            mensagem.innerHTML = "Erro ao conectar com o servidor.";
 
        });
 
 
});
 
 
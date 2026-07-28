/* ==========================================================
   DADOS DA TELA DE CADASTRO
========================================================== */

const cadastro = {

    /* ==========================================
       LOGO
    ========================================== */

    logo: {

        imagem: "/Assets/logo.png",

        titulo: "Mega Feirão"

    },

    /* ==========================================
       APRESENTAÇÃO
    ========================================== */

    apresentacao: {

        titulo: "Crie sua conta",

        texto: "Cadastre-se gratuitamente e aproveite ofertas exclusivas, acompanhe seus pedidos e tenha uma experiência completa em nossa loja.",

        imagem: "../Assets/images/cadastro.png"

    },

    /* ==========================================
       FORMULÁRIO
    ========================================== */

    formulario: {

        titulo: "Cadastro",

        subtitulo: "Preencha os dados abaixo para criar sua conta."

    },

    /* ==========================================
       CAMPOS
    ========================================== */

    campos: {

        nome: "Nome Completo",

        cpf: "CPF",

        telefone: "Telefone",

        email: "E-mail",

        senha: "Senha",

        nascimento: "Data de Nascimento"

    },

    /* ==========================================
       PLACEHOLDERS
    ========================================== */

    placeholder: {

        nome: "Digite seu nome completo",

        cpf: "000.000.000-00",

        telefone: "(00) 00000-0000",

        email: "Digite seu e-mail",

        senha: "Digite sua senha"

    },

    /* ==========================================
       TERMOS
    ========================================== */

    termos: "Aceito os Termos de Uso e a Política de Privacidade.",

    /* ==========================================
       BOTÕES
    ========================================== */

    botao: "Cadastrar",

    textoLogin: "Já possui uma conta?",

    linkLogin: "Entrar"

};

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

document.getElementById("linkLogin").href =
    "login.html";

/* ==========================================================
   RODAPÉ
========================================================== */

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
   ELEMENTO DE MENSAGEM
========================================================== */

const mensagem =
    document.getElementById("mensagem");

/* ==========================================================
MÁSCARA CPF
========================================================== */

const campoCpf =
    document.getElementById("cpf");

campoCpf.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = valor;

});

/* ==========================================================
   MÁSCARA TELEFONE
========================================================== */

const campoTelefone =
    document.getElementById("telefone");

campoTelefone.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = valor;

});

/* ==========================================================
   EFEITO NOS CAMPOS
========================================================== */

const campos =
    document.querySelectorAll("input");

campos.forEach(function (campo) {

    campo.addEventListener("focus", function () {

        this.style.background = "#FFFFF8";

    });

    campo.addEventListener("blur", function () {

        this.style.background = "#FFFFFF";

    });

});

/* ==========================================================
   EFEITO BOTÃO
========================================================== */

const botao =
    document.getElementById("btnCadastrar");

botao.addEventListener("mouseenter", function () {

    this.style.opacity = "0.9";

});

botao.addEventListener("mouseleave", function () {

    this.style.opacity = "1";

});

/* ==========================================================
   VALIDAÇÃO DE E-MAIL
========================================================== */

function validarEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/* ==========================================================
   VALIDAÇÃO DA SENHA
========================================================== */

function validarSenha(nome, senha) {

    if (senha.length < 8 || senha.length > 13) {

        return "A senha deve possuir entre 8 e 13 caracteres.";

    }

    if (!/[A-Z]/.test(senha)) {

        return "A senha deve possuir pelo menos uma letra maiúscula.";

    }

    if (!/[a-z]/.test(senha)) {

        return "A senha deve possuir pelo menos uma letra minúscula.";

    }

    if (!/[0-9]/.test(senha)) {

        return "A senha deve possuir pelo menos um número.";

    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'~]/.test(senha)) {

        return "A senha deve possuir pelo menos um caractere especial.";

    }

    const primeiroNome =
        nome.split(" ")[0].toLowerCase();

    if (
        primeiroNome !== "" &&
        senha.toLowerCase().includes(primeiroNome)
    ) {

        return "A senha não pode conter o nome do usuário.";

    }

    return "";

}

/* ==========================================================
   VALIDAR MAIORIDADE
========================================================== */

function maiorDeIdade(dataNascimento) {

    const nascimento =
        new Date(dataNascimento);

    const hoje =
        new Date();

    let idade =
        hoje.getFullYear() -
        nascimento.getFullYear();

    const mes =
        hoje.getMonth() -
        nascimento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 &&
            hoje.getDate() < nascimento.getDate())
    ) {

        idade--;

    }

    return idade >= 18;

}

/* ==========================================================
   VALIDAÇÃO BÁSICA DO CPF
========================================================== */

function validarCpf(cpf) {

    cpf = cpf.replace(/\D/g, "");

    return cpf.length === 11;

}

/* ==========================================================
   VALIDAÇÃO DO FORMULÁRIO
========================================================== */

document.getElementById("btnCadastrar").addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const dataNascimento =
        document.getElementById("nascimento").value;
    const mensagem =
        document.getElementById("mensagem");

    //verificar se todos os campos foram preenchidos
    if (
        nome == "" ||
        cpf == "" ||
        telefone == "" ||
        email == "" ||
        senha == "" ||
        dataNascimento == ""
    ) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";



        return;

    }

    if (senha.length < 8 || senha.length > 13) {

        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve possuir entre 8 e 13 caracteres.";
        return;

    }
    // verificar se a senha possui letras maiusculas
    if (!/[A-Z]/.test(senha)) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve conter pelo menos uma letra maiúscula.";
        return;
    }
    if (!/[a-z]/.test(senha)) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve conter pelo menos uma letra minúscula.";
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/.test(senha)) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve conter pelo menos um caracter especial.";
        return;
    }
    if (!/[0-9]/.test(senha)) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve conter pelo menos um número.";
        return;
    }
    //verificar se a senha possui nome da pessoa
    if (senha.includes(nome)) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha não pode conter o nome do usuário.";
        return;
    }

    //verificar se o cliente é maior de idade
    const idade = new Date().getFullYear() -
        new Date(dataNascimento).getFullYear();

    if (idade < 18) {
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "Você deve ser maior de idade para se cadastrar.";
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
        .then(res => {
            console.log("Status:", res.status);
            return res.json();
        })
        .then(resposta => {
            console.log("Resposta:", resposta);

            if (resposta.sucesso) {

                mensagem.style.color = "green";
                mensagem.innerHTML = resposta.mensagem;

                document.getElementById("nome").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";
                document.getElementById("nascimento").value = "";

            } else {

                mensagem.style.color = "red";
                mensagem.innerHTML = resposta.mensagem;

            }
        })
        .catch((erro) => {
            console.error("Erro no fetch:", erro);

            mensagem.style.color = "red";
            mensagem.innerHTML = "Erro ao conectar com o servidor.";
        });

});

/* ==========================
   DADOS DO MENU
========================== */

const menuItens = [
    "Ofertas da Semana",
    "Ofertas do Dia",
    "Categorias",
    "Atendimento"
];

/* ==========================
   BENEFÍCIOS
========================== */

const beneficios = [
    {
        titulo: "Ofertas Exclusivas",
        descricao:
            "Receba promoções e tenha acesso antecipado às melhores ofertas."
    },
    {
        titulo: "Mais Rapidez",
        descricao:
            "Facilite compras futuras e atualizações de dados."
    }
];

/* ==========================
   HEADER
========================== */

function renderHeader() {

    document.getElementById("header-container").innerHTML = `
    
        <div class="top-bar">

            <div class="logo">
                Mega Feirão
            </div>

            <div class="search-box">
                <input
                    type="text"
                    placeholder="Buscar Produtos">
            </div>

        </div>
    `;
}

/* ==========================
   MENU
========================== */

function renderMenu(){

    let html = `<div class="menu">`;

    menuItens.forEach(item => {

        html += `
            <a href="#">
                ${item}
            </a>
        `;
    });

    html += `</div>`;

    document.getElementById("menu-container").innerHTML = html;
}

/* ==========================
   HERO
========================== */

function renderHero(){

    document.getElementById("hero-container").innerHTML = `

        <section class="hero">

            <h1>
                Crie sua conta e garanta seus benefícios
            </h1>

            <p>
                Cadastro rápido para comprar com mais praticidade
                e receber ofertas exclusivas.
            </p>

            <div class="hero-buttons">

                <button class="btn-ajuda">
                    Ajuda
                </button>

                <button class="btn-entrar">
                    Entrar
                </button>

            </div>

        </section>
    `;
}

/* ==========================
   BENEFÍCIOS
========================== */

function renderBeneficios(){

    let cards = "";

    beneficios.forEach(item => {

        cards += `
        
            <div class="card-beneficio">

                <h3>${item.titulo}</h3>

                <p>${item.descricao}</p>

            </div>
        `;
    });

    document.getElementById("beneficios-container").innerHTML = `

        <section class="beneficios">

            <h2>
                Por que cadastrar?
            </h2>

            <p>
                Vantagens para você aproveitar as melhores condições.
            </p>

            <div class="cards-beneficios">

                ${cards}

            </div>

        </section>
    `;
}

/* ==========================
   FOOTER
========================== */

function renderFooter(){

    document.getElementById("footer-container").innerHTML = `

        <div class="footer-links">

            <a href="#">Atendimento</a>
            <a href="#">Política de Troca</a>
            <a href="#">Frete e Prazos</a>
            <a href="#">Formas de Pagamento</a>
            <a href="#">© 2026 Sua Loja</a>

        </div>
    `;
}

/* ==========================
   FORMULÁRIO
========================== */

document.addEventListener("submit", function(e){

    if(e.target.id === "form-cadastro"){

        e.preventDefault();

        const senha =
            document.getElementById("senha").value;

        const confirmar =
            document.getElementById("confirmarSenha").value;

        if(senha !== confirmar){

            alert("As senhas não coincidem.");
            return;
        }

        alert("Conta criada com sucesso!");
    }
});

/* ==========================
   INICIALIZAÇÃO
========================== */

renderHeader();
renderMenu();
renderHero();
renderBeneficios();
renderFooter();
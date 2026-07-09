// CRIANDO VÁRIAVEIS
/*nome de váriaveis não pode ter:
-acentos
-espaço
-simbolos
-não pode começar com números
-não deve ser escrito com a primeira letra em maiusculo
*/

// Variaveis que Alteram o Valor
let preco_promocional = 80.43;
let preco_antigo = 120.50;
let desconto = "-15%";
let quantidade = 10;
let favorito = false;

//variaveis que sao constantes não alteram de valor
const nomeProduto = "kit de cozinha ";
const tamanho = ["1", "5", "10"];
const cor = ["preto", "vermelho", "branco"];
const avaliacoes = 5;
const img_miniaturas =
    [
        "/assets/kit-cozinha.png",
        "/assets/kit-cozinha2.png",
        "/assets/kit-cozinha3.png"
    ];
let img_principal = "/assets/kit-cozinha.png";
let descricao = "Kit 11 Peças Facas e Utensílios Cozinha com Suporte Prático";
let frete;
//botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;

//codigo para preencher as imagens no html

//criando uma variavel para reconhecer o id da imagem lateral

const lateral = document.getElementById("img-lateral");


//lendo a quantidade de imagens cadastradas e criando as tags img

/*ForEach: percorre uma lista de itens até o final
-ele percorre o primeiro, se ver que tem outro, ele lê o outro
-quando chega o ultimo ele para de ler e finaliza a execução
-img_miniatura é chamado pq é ele que contém a lista de imagens
-depois o ForEach passamos o tipo de documento ligido(imagem)
*/
img_miniaturas.forEach(imagem => {
    //criando uma variavel que crie a tag img na div do html
    const img = document.createElement("img");


    //criando o codígo que mostra as imagens no site
    img.src = imagem; // ele joga o caminho da imagem na tag img
    img.classList.add("img-lateral");

    /*criando o codigo que subistitui a imagem principal pela miniatura clicada*/
    img.addEventListener("click", () => {
        document.getElementById("img-maior").src = imagem;
        lateral.appendChild(img);
    })

}); //fechar o ForEach
document.getElementById("imagem-maior").src = img_principal;

//--------------------------------------PREENCHER DADOS DO PRODUTO  ------------------------------------------  
document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;
//--------cores------

//Quantidade de produto
/* O limite de quantidade vai ser igual a quantidade de produtos que o lojista cadastrou no estoque.
Quando o cliente clicar no bota + A quantidade comprada aumenta de 1 em 1.
Quando ele clica no bota - A quantidade comprada diminui de 1 em 1.
Inicialmente o calor da quantidade aparece como 1*/

let quantidade_inicial = 1;//Cria a quantidade inicial.
// chamar os botões e passar o id do html dentro deles
btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");
const numero = document.getElementById("numero-quantidade");

//passando o valor inicial para a tag html
numero.textContent = quantidade_inicial;

//criando o código de aumentar a quantidade de 1 em 1
btn_add_quantidade.addEventListener("click", () => {
    //se quantidade for menor que estoque
    if (quantidade_inicial < quantidade) {
        quantidade_inicial++;//aumentar de 1 em 1
        numero.textContent = quantidade_inicial;
    } else {
        alert("você atingiu o limite do estoque");
    }


});

//criando o código de diminuir a quantidade de 1 em 1
btn_add_quantidade.addEventListener("click", () => {
    
    if (quantidade_inicial > 0) {
        quantidade_inicial--;//diminuir de 1 em 1
        numero.textContent = quantidade_inicial;
    } 


});
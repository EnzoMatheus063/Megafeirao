// CRIANDO VÁRIAVEIS
/*nome de váriaveis não pode ter:
-acentos
-espaço
-simbolos
-não pode começar com números
-não deve ser escrito com a primeira letra em maiusculo
*/

// Variaveis que Alteram o Valor
let preco_promocional= 80.43;
let preco_antigo=120.50;
let desconto="-15%";
let quantidade= 10;
let favorito=false;

//variaveis que sao constantes não alteram de valor
const nomeProduto="kit de cozinha ";
const tamanho=["1","5","10"];
const cor=["preto","vermelho","branco"];
const avaliacoes=5;
const img_miniaturas=
[
    "/assets/kit-cozinha.png",
    "/assets/kit-cozinha2.png",
    "/assets/kit-cozinha3.png"
];
let img_principal="/assets/kit-cozinha.png";
let descricao="Kit 11 Peças Facas e Utensílios Cozinha com Suporte Prático";
let frete;
//botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete;

//codigo para preencher as imagens no html

//criando uma variavel para reconhecer o id da imagem lateral

const lateral= document.getElementById("img-lateral");


//lendo a quantidade de imagens cadastradas e criando as tags img

/*ForEach: percorre uma lista de itens até o final
-ele percorre o primeiro, se ver que tem outro, ele lê o outro
-quando chega o ultimo ele para de ler e finaliza a execução
-img_miniatura é chamado pq é ele que contém a lista de imagens
-depois o ForEach passamos o tipo de documento ligido(imagem)
*/
img_miniaturas.forEach(imagem=>{
    //criando uma variavel que crie a tag img na div do html
const img= document.createElement("img");

//criando o codígo que mostra as imagens no site
    
/*criando o codigo que subistitui a imagem principal pela miniatura clicada*/
img.addEventListener("click",()=>{
document.getElementById("img-maior").src=imagem;
lateral.appendChild(img);
})

}); //fechar o ForEach
document.getElementById("imagem-maior").src= img_principal;

//criando o codígo que mostra as imagens no site
 img.src=imagem; // ele joga o caminho da imagem na tag img
  img.classList.add ("img-lateral");
  //--------------------------------------PREENCHER DADOS DO PRODUTO    
  document.getElementById("nome-produto").textContent = nomeProduto;
  document.getElementById("valor-avaliacao").textContent = avaliacoes;
  document.getElementById("preco-antigo").textContent = preco_antigo;
  document.getElementById("preco-promocional").textContent = preco_promocional;
  document.getElementById("desconto").textContent = desconto;

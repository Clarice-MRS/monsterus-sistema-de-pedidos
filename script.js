/* ARRAY DE ITENS DO CARDÁPIO*/

const pratos = [
    {
        nome: "Little Monster Fries",
        descricao: "Porção pequena de batatas fritas.",
        categoria: "Acompanhamentos",
        valor: 9.90,
        imagem: "img/littlemonsterfries.jpeg",
        alt: "Batatas fritas"
    },

    {
        nome: "Paws of Cream",
        descricao: "Delicioso gelato artesanal de creme.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofcream.jpeg",
        alt: "Casquinha de gelato de creme."
    },

    {
        nome: "Paws of Chocolate",
        descricao: "Delicioso gelato artesanal de brigadeiro.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofchocolate.jpeg",
        alt: "Casquinha de gelato de brigadeiro."
    },

    {
        nome: "Diamond Rings",
        descricao: "Anéis de cebola crocantes e douradinhos.",
        categoria: "Acompanhamentos",
        valor: 15.90,
        imagem: "img/diamondrings.jpeg",
        alt: "Anéis de cebola."
    },

    {
        nome: "The Egg of Glory",
        descricao: "Sanduíche com carne, ovo, queijo, alface e tomate.",
        categoria: "Sanduíches",
        valor: 26.90,
        imagem: "img/theeggofglory.jpeg",
        alt: "Sanduíche com ovo, carne bovina, tomate e queijo."
    },

    {
        nome: "Gagamelo",
        descricao: "Milk-shake cremoso de caramelo.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/gagamelo.jpeg",
        alt: "Milk-shake de caramelo."
    },

    {
        nome: "Dress Burguer",
        descricao: "Sanduíche com carne, queijo, alface, molho de pimenta e bacon crocante.",
        categoria: "Sanduíches",
        valor: 28.90,
        imagem: "img/dressburguer.jpeg",
        alt: "Hambúrguer vermelho com carne, queijo e alface. No topo, bacons e uma bandeirinha azul e branca."
    },

    {
        nome: "Speecheese",
        descricao: "Hambúrguer artesanal duplo, com queijo e cebola caramelizada.",
        categoria: "Sanduíches",
        valor: 32.90,
        imagem: "img/speecheese.jpeg",
        alt: "Hambúrguer duplo suculento sob um prato de decoração de piano e dentro de uma garrafa."
    },

    {
        nome: "Just Free",
        descricao: "Hambúrguer vegano, com blend e queijo vegetal, alface e tomate.",
        categoria: "Sanduíches",
        valor: 30.90,
        imagem: "img/justfree.jpeg",
        alt: "Hambúrguer vegano."
    },

    {
        nome: "Sour Candy",
        descricao: "Milk shake de morango e limão.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/sourcandy.jpeg",
        alt: "Milk-shake de morango e limão."
    },

    {
        nome: "Brownie Eyes",
        descricao: "Brownie com sorvete de creme.",
        categoria: "Sobremesas",
        valor: 18.90,
        imagem: "img/brownieeyes.jpeg",
        alt: "Brownie em formato de estrela com sorvete."
    },

    {
        nome: "Cherry Boom",
        descricao: "Milk Shake de cereja.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/cherryboom.jpeg",
        alt: "Milk Shake de Cereja."
    },

    {
        nome: "Joanne Dip",
        descricao: "Molho Rosé.",
        categoria: "Acompanhamentos",
        valor: 5.90,
        imagem: "img/joannedip.jpeg",
        alt: "Molho Rosé."
    },

    {
        nome: "Judas Jalapeño",
        descricao: "Molho Apimentado.",
        categoria: "Acompanhamentos",
        valor: 5.90,
        imagem: "img/judasjalapeno.jpeg"
    },

    {
        nome: "Abracadabra-Cola",
        descricao: "Refrigerante sabor cola.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/abracadabracola.jpeg"
    },

    {
        nome: "Appleuse twist",
        descricao: "Refrigerante de maçã verde com limão.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/appleusetwist.jpeg"
    },

    {
        nome: "Summershake",
        descricao: "Milkshake de manga com pêssego.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/summershake.jpeg"
    },

    {
        nome: "Gaga Kids",
        descricao: "Combo para as crianças, com hambúrguer, suco, iogurte e fruta.",
        categoria: "Kids",
        valor: 29.90,
        imagem: "img/gagakids.jpeg"
    },

    {
        nome: "Poker Fizz",
        descricao: "Refrigerante de maracujá com um toque de hortelã.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/pokerfizz.jpeg"
    }
];

/*** CRIAR CARDS DO CARDÁPIO ***/

let indice = 0;
let pratosAtuais = pratos;

function criarCardapio() { 
 
    console.log("testando-funcao-chamada"); 
 
    const cardsCardapio = document.getElementById("cardapio");

    cardsCardapio.innerHTML = "";

    const pratosVisiveis = pratosAtuais.slice(indice, indice + 5);
 
    for(const prato of pratosVisiveis) { 
 
        cardsCardapio.innerHTML += `  
            <div class="item-card">
                <div class="item-info">  
                    <img src="${prato.imagem}"> 
                    <h3 class="nome">${prato.nome}</h3>  
                    <p class="valor">R$ ${prato.valor}0</p>  
                    <p class="descricao">${prato.descricao}</p> 
                </div>
                <div class="item-quantia">
                    <button type="button" class="diminuir-quantia"><i class="bi bi-dash"></i></button>
                    <span class="valor-quantia">0</span>
                    <button type="button" class="aumentar-quantia"><i class="bi bi-plus"></i></button>
                    <button class="adicionar-item">Adicionar</button>
                </div>
            </div>
        `; 
    }     
} 
 
criarCardapio();

const cardapio = document.getElementById("cardapio");

cardapio.addEventListener("click", (evento) => {
    console.log(evento.target);
});

/*** CONTADOR - QUANTIDADE POR ITEM***/

const aumentarcardapio = document.getElementById("cardapio");

aumentarcardapio.addEventListener("click", (evento) => {

    if (evento.target.closest(".aumentar-quantia")) {

        const card = evento.target.closest(".item-card");
        const quantia = card.querySelector(".valor-quantia");

        let quantidade = Number(quantia.textContent);

        if (quantidade < 20) {
            quantidade++;
        }

        quantia.textContent = quantidade;

    } else if (evento.target.closest(".diminuir-quantia")) {

        const card = evento.target.closest(".item-card");
        const quantia = card.querySelector(".valor-quantia");

        let quantidade = Number(quantia.textContent);

        if (quantidade > 0) {
            quantidade--;
        }

        quantia.textContent = quantidade;
    }

});

const proximo = document.getElementById("prox-itens");
const anterior = document.getElementById("ant-itens");

proximo.addEventListener("click", () => {

    if (indice + 5 < pratos.length) {
        indice += 5;
        criarCardapio();
    }

});

anterior.addEventListener("click", () => {

    if (indice >= 5) {
        indice -= 5;
        criarCardapio();
    }

});

const botoesFiltro = document.querySelectorAll(".filtrar");
const botaoTodos = document.querySelector(".filtrar-todos");

function controlarSetas() {

    if (pratosAtuais.length <= 5) {
        proximo.style.display = "none";
        anterior.style.display = "none";
    } else {
        proximo.style.display = "block";
        anterior.style.display = "block";
    }

}

function filtrarPratos(categoria) {

    const pratosFiltrados = [];

    for (const prato of pratos) { 
        if (prato.categoria === categoria) {
            pratosFiltrados.push(prato);   
        }
    }

    return pratosFiltrados; 
}

for (const botao of botoesFiltro) {

    botao.addEventListener("click", () => {

        const categoria = botao.textContent;

        pratosAtuais = filtrarPratos(categoria);

        indice = 0;

        criarCardapio();

        controlarSetas();

    });

}

botaoTodos.addEventListener("click", () => {

    pratosAtuais = pratos;

    indice = 0;

    criarCardapio();

    controlarSetas();
});
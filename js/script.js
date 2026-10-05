/* ARRAY DE ITENS DO CARDÁPIO*/

const pratos = [
    {
        id: 1,
        nome: "Little Monster Fries",
        descricao: "Porção pequena de batatas fritas.",
        categoria: "Acompanhamentos",
        valor: 9.90,
        imagem: "img/littlemonsterfries.jpeg",
        alt: "Batatas fritas"
    },

    {
        id: 2,
        nome: "Paws of Cream",
        descricao: "Delicioso gelato artesanal de creme.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofcream.jpeg",
        alt: "Casquinha de gelato de creme."
    },

    {
        id: 3,
        nome: "Paws of Chocolate",
        descricao: "Delicioso gelato artesanal de brigadeiro.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofchocolate.jpeg",
        alt: "Casquinha de gelato de brigadeiro."
    },

    {
        id: 4,
        nome: "Diamond Rings",
        descricao: "Anéis de cebola crocantes e douradinhos.",
        categoria: "Acompanhamentos",
        valor: 15.90,
        imagem: "img/diamondrings.jpeg",
        alt: "Anéis de cebola."
    },

    {
        id: 5,
        nome: "The Egg of Glory",
        descricao: "Sanduíche com carne, ovo, queijo, alface e tomate.",
        categoria: "Sanduíches",
        valor: 26.90,
        imagem: "img/theeggofglory.jpeg",
        alt: "Sanduíche com ovo, carne bovina, tomate e queijo."
    },

    {
        id: 6,
        nome: "Gagamelo",
        descricao: "Milk-shake cremoso de caramelo.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/gagamelo.jpeg",
        alt: "Milk-shake de caramelo."
    },

    {
        id: 7,
        nome: "Dress Burguer",
        descricao: "Sanduíche com carne, queijo, alface, molho de pimenta e bacon crocante.",
        categoria: "Sanduíches",
        valor: 28.90,
        imagem: "img/dressburguer.jpeg",
        alt: "Hambúrguer vermelho com carne, queijo e alface. No topo, bacons e uma bandeirinha azul e branca."
    },

    {
        id: 8,
        nome: "Speecheese",
        descricao: "Hambúrguer artesanal duplo, com queijo e cebola caramelizada.",
        categoria: "Sanduíches",
        valor: 32.90,
        imagem: "img/speecheese.jpeg",
        alt: "Hambúrguer duplo suculento sob um prato de decoração de piano e dentro de uma garrafa."
    },

    {
        id: 9,
        nome: "Just Free",
        descricao: "Hambúrguer vegano, com blend e queijo vegetal, alface e tomate.",
        categoria: "Sanduíches",
        valor: 30.90,
        imagem: "img/justfree.jpeg",
        alt: "Hambúrguer vegano."
    },

    {
        id: 10,
        nome: "Sour Candy",
        descricao: "Milk shake de morango e limão.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/sourcandy.jpeg",
        alt: "Milk-shake de morango e limão."
    },

    {
        id: 11,
        nome: "Brownie Eyes",
        descricao: "Brownie com sorvete de creme.",
        categoria: "Sobremesas",
        valor: 18.90,
        imagem: "img/brownieeyes.jpeg",
        alt: "Brownie em formato de estrela com sorvete."
    },

    {
        id: 12,
        nome: "Cherry Boom",
        descricao: "Milk Shake de cereja.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/cherryboom.jpeg",
        alt: "Milk Shake de Cereja."
    },

    {
        id: 13,
        nome: "Joanne Dip",
        descricao: "Molho Rosé.",
        categoria: "Acompanhamentos",
        valor: 5.90,
        imagem: "img/joannedip.jpeg",
        alt: "Molho Rosé."
    },

    {
        id: 14,
        nome: "Judas Jalapeño",
        descricao: "Molho Apimentado.",
        categoria: "Acompanhamentos",
        valor: 5.90,
        imagem: "img/judasjalapeno.jpeg",
        alt: "Molho Apimentado"
    },

    {
        id: 15,
        nome: "Abracadabra-Cola",
        descricao: "Refrigerante sabor cola.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/abracadabracola.jpeg",
        alt: "Refrigerante de Cola"
    },

    {
        id: 16,
        nome: "Appleuse twist",
        descricao: "Refrigerante de maçã verde com limão.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/appleusetwist.jpeg",
        alt: "Refrigerante de maçã verde e limão"
    },

    {
        id: 17,
        nome: "Summershake",
        descricao: "Milkshake de manga com pêssego.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/summershake.jpeg",
        alt: "Milkshake de manga e pêssego"
    },

    {
        id: 18,
        nome: "Gaga Kids",
        descricao: "Combo para as crianças, com hambúrguer, suco, iogurte e fruta.",
        categoria: "kids",
        valor: 29.90,
        imagem: "img/gagakids.jpeg",
        alt: "Combo Kids"
    },

    {id: 19,
        nome: "Poker Fizz",
        descricao: "Refrigerante de maracujá com um toque de hortelã.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/pokerfizz.jpeg",
        alt: "Refrigerante de maracujá com hortelã"
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
            <div class="item-card" data-id="${prato.id}">     
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

/*** CONTADOR - QUANTIDADE POR ITEM E ADICIONAR***/

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

    } else if (evento.target.closest(".adicionar-item")) {

        console.log("CLICOU EM ADICIONAR");

        const card = evento.target.closest(".item-card");

        console.log("achei o card:", card);

        const id = Number(card.dataset.id);

        console.log("3 - id:", id);

        const quantidade = Number(
        card.querySelector(".valor-quantia").textContent
        );

        console.log("quantidade:", quantidade);

        if (quantidade === 0) {
            return;
        }

        const prato = pratos.find(item => item.id === id);

        console.log("prato:", prato);

        const itemCarrinho = {
            id: prato.id,
            nome: prato.nome,
            valor: prato.valor,
            imagem: prato.imagem,
            quantidade: quantidade
        };

        console.log("item do carrinho:", itemCarrinho);

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        const itemExistente = carrinho.find(item => item.id === id);

        if (itemExistente) {

            itemExistente.quantidade += quantidade;

        } else {

            carrinho.push(itemCarrinho);

        }

        card.querySelector(".valor-quantia").textContent = 0;

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        console.log("carrinho salvo:", carrinho);
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

/*** FILTRAR OS PRATOS ***/

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

/*** TIPO DE PEDIDO ***/

const botaoDelivery = document.getElementById("botao-delivery");
const botaoRetirada = document.getElementById("botao-retirada");

botaoDelivery.addEventListener("click", () => {
    localStorage.setItem("tipo-pedido", "delivery");
    window.location.href = "tipopedido.html";
});

botaoRetirada.addEventListener("click", () => {
    localStorage.setItem("tipo-pedido", "retirada");
    window.location.href = "tipopedido.html";
});


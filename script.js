/* ARRAY DE ITENS DO CARDÁPIO*/

const pratos = [
    {
        nome: "Little Monster Fries",
        descricao: "Porção pequena de batatas fritas, crocantes por fora e sequinhas por, preparadas no óleo e levemente temperadas com sal. O acompanhamento perfeito para deixar sua refeição ainda mais deliciosa. Imagem Meramente Ilustrativa.",
        categoria: "Acompanhamentos",
        valor: 9.90,
        imagem: "img/littlemonsterfries.jpeg",
        alt: "Batatas fritas"
    },

    {
        nome: "Paws of Cream",
        descricao: "Delicioso gelato artesanal de creme, servido em uma casquinha muito crocante. Cremoso, intenso e irresistível, uma combinação digna de um toque de extravagância em cada mordida. Imagem Meramente Ilustrativa.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofcream.jpeg",
        alt: "Casquinnha de gelato de creme em uma mão vermelha que representa o símbolo paws up."
    },

    {
        nome: "Paws of Chocolate",
        descricao: "Delicioso gelato artesanal de brigadeiro, servido em uma casquinha muito crocante. Cremoso, intenso e irresistível, uma combinação digna de um toque de extravagância em cada mordida. Imagem Meramente Ilustrativa.",
        categoria: "Sobremesas",
        valor: 8.90,
        imagem: "img/pawsofchocolate.jpeg",
        alt: "Casquinnha de gelato de brigadeiro em uma mão vermelha que representa o símbolo paws up."
    },

    {
        nome: "Diamond Rings",
        descricao: "Anéis de cebola crocantes e douradinhos, preparados para garantir aquela combinação irresistível de textura e sabor. Por fora, uma crocância deliciosa; por dentro, cebola macia e saborosa. Imagem Meramente Ilustrativa.",
        categoria: "Acompanhamentos",
        valor: 15.90,
        imagem: "img/diamondrings.jpeg",
        alt: "Chapéu rosa com onion rings dentro."
    },

    {
        nome: "The Egg of Glory",
        descricao: "Sanduíche artesanal com carne bovina suculenta, ovo, queijo derretido, alface e fatias de tomate, combinados em uma mistura cremosa e saborosa. Uma opção caprichada e irresistível para qualquer momento. Imagem Meramente Ilustrativa.",
        categoria: "Sanduíches",
        valor: 26.90,
        imagem: "img/theeggofglory.jpeg",
        alt: "Sanduíche com ovo, carne bovina, tomate e queijo em um prato dourado."
    },

    {
        nome: "Gagamelo",
        descricao: "Milk-shake cremoso de caramelo, preparado com uma mistura suave e saborosa, finalizado com o delicioso toque do caramelo. Uma bebida irresistível para acompanhar seu momento. Imagem Meramente Ilustrativa.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/gagamelo.jpeg",
        alt: "Milk-shake de caramelo em uma mão vermelha que representa o símbolo paws up."
    },

    {
        nome: "Dress Burguer",
        descricao: "Hambúrguer artesanal com pão vermelho, suculenta carne bovina, queijo derretido e alface americana, finalizado com um irresistível molho de pimenta e bacon crocante por cima. Uma combinação intensa, cremosa e cheia de sabor. Imagem Meramente Ilustrativa.",
        categoria: "Sanduíches",
        valor: 28.90,
        imagem: "img/dressburguer.jpeg",
        alt: "Hambúrguer vermelho com carne, queijo e alface. No topo, bacons e uma bandeirinha azul e branca."
    },

    {
        nome: "Speecheese",
        descricao: "Hambúrguer artesanal duplo, com muito muito queijo e cebola caramelizada. Nossa cebola conta com um delicioso toque de cebola roxa crua para dar crocância ao prato. Imagem Meramente Ilustrativa.",
        categoria: "Sanduíches",
        valor: 32.90,
        imagem: "img/speecheese.jpeg",
        alt: "Hambúrguer duplo suculentp sob um prato de decoração de piano e dentro de uma garrafa."
    },

    {
        nome: "Just Free",
        descricao: "Hambúrguer vegano artesanal, preparado com um delicioso blend vegetal, acompanhado de ingredientes frescos e saborosos. Uma opção leve, cremosa e irresistível para quem ama um bom hambúrguer. Imagem Meramente Ilustrativa.",
        categoria: "Sanduíches",
        valor: 30.90,
        imagem: "img/justfree.jpeg",
        alt: "Hambúrguer vegano"
    },

    {
        nome: "Sour Candy",
        descricao: "Milkshake de morango e limão, uma combinação docinha e ácida servida em um copo babadeiro que simula um dos mais icônicos saltos usados pela diva pop. Imagem Meramente Ilustrativa.",
        categoria: "Sobremesas",
        valor: 17.90,
        imagem: "img/sourcandy.jpeg",
        alt: "Milk-shake de morango e limão dentro de um copo que simula um salto alto rosa."
    },

    {
        nome: "Brownie Eyes",
        descricao: "Brownie com sorvete de creme.",
        categoria: "Sobremesas",
        valor: 18.90,
        imagem: "img/brownieeyes.jpg"
    },

    {
        nome: "Electric Pie",
        descricao: "Torta pêssego com maracujá.",
        categoria: "Sobremesas",
        valor: 19.90,
        imagem: "img/eletricpie.jpg"
    },

    {
        nome: "Abracadabra-Cola",
        descricao: "Refrigerante sabor cola.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/abracadabracola.jpg"
    },

    {
        nome: "Appleuse twist",
        descricao: "Refrigerante de maçã verde com limão.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/appleusetwist.jpg"
    },

    {
        nome: "Poker Fizz",
        descricao: "Refrigerante de maracujá com um toque de hortelã.",
        categoria: "Bebidas",
        valor: 9.90,
        imagem: "img/pokerfizz.jpg"
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

});
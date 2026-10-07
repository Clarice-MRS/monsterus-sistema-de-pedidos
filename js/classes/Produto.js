/***********************************
    CLASSE PRODUTO - ENCAPSULADOS
***********************************/

class Produto { #id; #nome; #descricao; #valor; #categoria; #imagem; #alt;

    constructor(id, nome, descricao, valor, categoria, imagem, alt) {
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#valor = valor;
        this.#categoria = categoria;
        this.#imagem = imagem;
        this.#alt = alt;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get descricao() {
        return this.#descricao;
    }

    get valor() {
        return this.#valor;
    }

    get categoria() {
        return this.#categoria;
    }

    get imagem() {
        return this.#imagem;
    }

    get alt() {
        return this.#alt;
    }

    alterarValor(novoValor) {
    if (novoValor > 0) {
        this.#valor = novoValor;
    }
}
}

/***************************
    OBJETOS - PRODUTO
***************************/

const littlemonsterfries = new Produto (
    1,
    "Little Monster Fries",
    "Porção pequena de batatas fritas.",
    9.90,
    "Acompanhamentos",
    "img/littlemonsterfries.jpeg",
    "Batatas fritas"
);

const pawsofcream = new Produto (
    2,
    "Paws of Cream",
    "Delicioso gelato artesanal de creme.",
    8.90,
    "Sobremesas",
    "img/pawsofcream.jpeg",
    "Casquinha de gelato de creme."
);

const pawsofchocolate = new Produto (
    3,
    "Paws of Chocolate",
    "Delicioso gelato artesanal de brigadeiro.",
    8.90,
    "Sobremesas",
    "img/pawsofchocolate.jpeg",
    "Casquinha de gelato de brigadeiro."
);

const diamondrings = new Produto (
    4,
    "Diamond Rings",
    "Anéis de cebola crocantes e douradinhos.",
    15.90,
    "Acompanhamentos",
    "img/diamondrings.jpeg",
    "Anéis de cebola."
);

const theeggofglory = new Produto (
    5,
    "The Egg of Glory",
    "Sanduíche com carne, ovo, queijo, alface e tomate.",
    26.90,
    "Sanduíches",
    "img/theeggofglory.jpeg",
    "Sanduíche com ovo, carne bovina, tomate e queijo."
);

const gagamelo = new Produto (
    6,
    "Gagamelo",
    "Milk-shake cremoso de caramelo.",
    17.90,
    "Sobremesas",
    "img/gagamelo.jpeg",
    "Milk-shake de caramelo."
);

const dressburguer = new Produto (
    7,
    "Dress Burguer",
    "Sanduíche com carne, queijo, alface, molho de pimenta e bacon crocante.",
    28.90,
    "Sanduíches",
    "img/dressburguer.jpeg",
    "Hambúrguer vermelho com carne, queijo e alface. No topo, bacons e uma bandeirinha azul e branca."
);

const speecheese = new Produto (
    8,
    "Speecheese",
    "Hambúrguer artesanal duplo, com queijo e cebola caramelizada.",
    32.90,
    "Sanduíches",
    "img/speecheese.jpeg",
    "Hambúrguer duplo suculento sob um prato de decoração de piano e dentro de uma garrafa."
);

const justfree = new Produto (
    9,
    "Just Free",
    "Hambúrguer vegano, com blend e queijo vegetal, alface e tomate.",
    30.90,
    "Sanduíches",
    "img/justfree.jpeg",
    "Hambúrguer vegano."
);

const sourcandy = new Produto (
    10,
    "Sour Candy",
    "Milk shake de morango e limão.",
    17.90,
    "Sobremesas",
    "img/sourcandy.jpeg",
    "Milk-shake de morango e limão."
);

const brownieeyes = new Produto (
    11,
    "Brownie Eyes",
    "Brownie com sorvete de creme.",
    18.90,
    "Sobremesas",
    "img/brownieeyes.jpeg",
    "Brownie em formato de estrela com sorvete."
)

const cherryboom = new Produto (
    12,
    "Cherry Boom",
    "Milk Shake de cereja.",
    17.90,
    "Sobremesas",
    "img/cherryboom.jpeg",
    "Milk Shake de Cereja."
);

const joannedip = new Produto (
    13,
    "Joanne Dip",
    "Molho Rosé.",
    5.90,
    "Acompanhamentos",
    "img/joannedip.jpeg",
    "Molho Rosé."
);

const judasjalapeno = new Produto (
    14,
    "Judas Jalapeño",
    "Molho Apimentado.",
    5.90,
    "Acompanhamentos",
    "img/judasjalapeno.jpeg",
    "Molho Apimentado"
);

const abracadabracola = new Produto (
    15,
    "Abracadabra-Cola",
    "Refrigerante sabor cola.",
    9.90,
    "Bebidas",
    "img/abracadabracola.jpeg",
    "Refrigerante de Cola"
)

const appleusetwist = new Produto (
    16,
    "Appleuse twist",
    "Refrigerante de maçã verde com limão.",
    9.90,
    "Bebidas",
    "img/appleusetwist.jpeg",
    "Refrigerante de maçã verde e limão"
);

const summershake = new Produto (
    17,
    "Summershake",
    "Milkshake de manga com pêssego.",
    17.90,
    "Sobremesas",
    "img/summershake.jpeg",
    "Milkshake de manga e pêssego"
);

const gagakids = new Produto (
    18,
    "Gaga Kids",
    "Combo para as crianças, com hambúrguer, suco, iogurte e fruta.",
    29.90,
    "kids",
    "img/gagakids.jpeg",
    "Combo Kids"
);

const pokerfizz = new Produto (
    19,
    "Poker Fizz",
    "Refrigerante de maracujá com um toque de hortelã.",
    9.90,
    "Bebidas",
    "img/pokerfizz.jpeg",
    "Refrigerante de maracujá com hortelã"
);

/***************************
    PRATOS (PRODUTOS)
***************************/

const pratos = [
    littlemonsterfries,
    pawsofcream,
    pawsofchocolate,
    diamondrings,
    theeggofglory,
    gagamelo,
    dressburguer,
    speecheese,
    justfree,
    sourcandy,
    brownieeyes,
    cherryboom,
    joannedip,
    judasjalapeno,
    abracadabracola,
    appleusetwist,
    summershake,
    gagakids,
    pokerfizz
];


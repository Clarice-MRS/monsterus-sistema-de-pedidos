/*** CARREGAR CARRINHO ***/

function carregarCarrinho() {
    const dados = JSON.parse(localStorage.getItem("carrinho")) || [];

    const carrinho = new Carrinho();

    for (const item of dados) {
        const produto = pratos.find(prato => prato.id === item.id);

        if (produto) {
            carrinho.adicionarItem(produto, item.quantidade);
        }
    }

    return carrinho;
}


/*** SALVAR CARRINHO ***/

function salvarCarrinho(carrinho) {
    const dados = [];

    for (const item of carrinho.itens) {
        dados.push({
            id: item.produto.id,
            nome: item.produto.nome,
            descricao: item.produto.descricao,
            valor: item.produto.valor,
            categoria: item.produto.categoria,
            imagem: item.produto.imagem,
            alt: item.produto.alt,
            quantidade: item.quantidade
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(dados));
}


/*** CRIAR CARDÁPIO ***/

let pratosAtuais = pratos;

function criarCardapio() {

    const cardsCardapio = document.getElementById("cardapio");

    cardsCardapio.innerHTML = "";

    for (const prato of pratosAtuais) {

        cardsCardapio.innerHTML += `
            <div class="item-card" data-id="${prato.id}">

                <div class="item-info">

                    <img src="${prato.imagem}" alt="${prato.alt}">

                    <h3 class="nome">${prato.nome}</h3>

                    <p class="valor">
                        R$ ${prato.valor.toFixed(2).replace(".", ",")}
                    </p>

                    <p class="descricao">
                        ${prato.descricao}
                    </p>

                </div>

                <div class="item-quantia">

                    <button type="button" class="diminuir-quantia">
                        <i class="bi bi-dash"></i>
                    </button>

                    <span class="valor-quantia">0</span>

                    <button type="button" class="aumentar-quantia">
                        <i class="bi bi-plus"></i>
                    </button>

                    <button type="button" class="adicionar-item">
                        Adicionar
                    </button>

                </div>

            </div>
        `;
    }
}


/*** CONTADOR - QUANTIDADE POR ITEM E ADICIONAR ***/

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

        const card = evento.target.closest(".item-card");

        const id = Number(card.dataset.id);

        const quantidade = Number(
            card.querySelector(".valor-quantia").textContent
        );

        if (quantidade === 0) {
            return;
        }

        const prato = pratos.find(item => item.id === id);

        console.log("Produto encontrado:", prato);

        const carrinho = carregarCarrinho();

        console.log("Carrinho carregado:", carrinho);

        carrinho.adicionarItem(prato, quantidade);

        console.log("Carrinho depois de adicionar:", carrinho);

        alert(`${quantidade}x ${prato.nome} adicionado ao carrinho!`);

        salvarCarrinho(carrinho);

        console.log(
            "LocalStorage:",
            JSON.parse(localStorage.getItem("carrinho"))
        );

        card.querySelector(".valor-quantia").textContent = 0;

        card.querySelector(".valor-quantia").textContent = 0;
    }
});


/*** BOTÕES DO CARROSSEL ***/

const carrossel = document.getElementById("cardapio");
const proximo = document.getElementById("prox-itens");
const anterior = document.getElementById("ant-itens");


/*** PRÓXIMOS ITENS ***/

proximo.addEventListener("click", () => {

    const card = carrossel.querySelector(".item-card");

    const larguraCard = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(carrossel).gap);

    carrossel.scrollBy({
        left: (larguraCard + gap) * 2,
        behavior: "smooth"
    });
});

/*** ITENS ANTERIORES ***/

anterior.addEventListener("click", () => {

    const card = carrossel.querySelector(".item-card");

    const larguraCard = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(carrossel).gap);

    carrossel.scrollBy({
        left: -(larguraCard + gap) * 2,
        behavior: "smooth"
    });
});

/*** CONTROLAR SETAS ***/

function controlarSetas() {

    if (carrossel.scrollWidth <= carrossel.clientWidth) {

        anterior.style.display = "none";
        proximo.style.display = "none";

        carrossel.style.justifyContent = "center";

    } else {

        anterior.style.display = "block";
        proximo.style.display = "block";

        carrossel.style.justifyContent = "flex-start";
    }
}

/*** FILTRAR OS PRATOS ***/

const botoesFiltro = document.querySelectorAll(".filtrar");
const botaoTodos = document.querySelector(".filtrar-todos");


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

        criarCardapio();

        carrossel.scrollTo({
            left: 0,
            behavior: "smooth"
        });

        controlarSetas();

    });

}


botaoTodos.addEventListener("click", () => {

    pratosAtuais = pratos;

    criarCardapio();

    carrossel.scrollTo({
        left: 0,
        behavior: "smooth"
    });

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

criarCardapio();
controlarSetas();
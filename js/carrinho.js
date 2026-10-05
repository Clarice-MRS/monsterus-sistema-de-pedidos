const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const containerItens = document.getElementById("container-itens-pedido");
const carrinhoVazio = document.getElementById("carrinho-vazio");


/*** MOSTRAR ITENS DO CARRINHO ***/

if (carrinho.length > 0) {

    for (const item of carrinho) {

        containerItens.innerHTML += `
            <div class="item-carrinho" data-id="${item.id}">

                <img src="${item.imagem}">

                <div class="info-item-carrinho">
                    <h3>${item.nome}</h3>
                    <p>R$ ${item.valor.toFixed(2)}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>

                <button class="apagar-item" type="button">
                    <i class="bi bi-trash"></i>
                </button>

            </div>
        `;
    }
}

/*** CALCULAR SUBTOTAL E TOTAL ***/

function atualizarTotal() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const dadosPedido = JSON.parse(localStorage.getItem("dadosPedido"));

    let subtotal = 0;

    for (const item of carrinhoAtual) {
        subtotal += item.valor * item.quantidade;
    }

    let taxa = 0;

    if (dadosPedido && dadosPedido.tipo === "delivery") {
        taxa = dadosPedido.taxa;
    }

    document.getElementById("subtotal").textContent =
    `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

    const totalComEntrega = subtotal + taxa;

    document.getElementById("valor-total").textContent =
        `R$ ${totalComEntrega.toFixed(2).replace(".", ",")}`;
}

atualizarTotal();

/*** APAGAR ITEM ***/

containerItens.addEventListener("click", (evento) => {

    if (evento.target.closest(".apagar-item")) {

        const itemCarrinho = evento.target.closest(".item-carrinho");

        const id = Number(itemCarrinho.dataset.id);

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho = carrinho.filter(item => item.id !== id);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        itemCarrinho.remove();
        
        atualizarTotal();
    }

});

/*** TIPO DO PEDIDO NO TOTAL ***/

const dadosPedido = JSON.parse(localStorage.getItem("dadosPedido"));

const tipoLocal = document.getElementById("tipo-local");
const taxaEntrega = document.getElementById("taxa-entrega");

if (dadosPedido && dadosPedido.tipo === "delivery") {

    tipoLocal.textContent = "Taxa de entrega";
    taxaEntrega.textContent = `R$ ${dadosPedido.taxa.toFixed(2).replace(".", ",")}`;

} else if (dadosPedido && dadosPedido.tipo === "retirada") {

    tipoLocal.textContent = "Retirada em";
    taxaEntrega.textContent = dadosPedido.endereco;
}

/*** APAGAR TODO O PEDIDO ***/

const zerarPedido = document.getElementById("zerar-pedido");

zerarPedido.addEventListener("click", () => {

    localStorage.removeItem("carrinho");
    localStorage.removeItem("tipo-pedido");
    localStorage.removeItem("dadosPedido");

    window.location.reload();

});
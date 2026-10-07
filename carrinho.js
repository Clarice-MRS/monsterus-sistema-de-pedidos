/*** CARREGAR CARRINHO ***/

function carregarCarrinho() {

    const dados = JSON.parse(localStorage.getItem("carrinho")) || [];

    const carrinho = new Carrinho();

    for (const item of dados) {

        const produto = new Produto(
            item.id,
            item.nome,
            item.descricao,
            item.valor,
            item.categoria,
            item.imagem,
            item.alt
        );

        carrinho.adicionarItem(produto, item.quantidade);
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


const carrinho = carregarCarrinho();

const containerItens =
    document.getElementById("container-itens-pedido");

const carrinhoVazio =
    document.getElementById("carrinho-vazio");


/*** MOSTRAR ITENS DO CARRINHO ***/

function mostrarItensCarrinho() {

    containerItens.innerHTML = "";

    for (const item of carrinho.itens) {

        containerItens.innerHTML += `
            <div class="item-carrinho" data-id="${item.produto.id}">

                <img src="${item.produto.imagem}">

                <div class="info-item-carrinho">

                    <h3>${item.produto.nome}</h3>

                    <p>
                        R$ ${item.produto.valor.toFixed(2).replace(".", ",")}
                    </p>

                    <p>
                        Quantidade: ${item.quantidade}
                    </p>

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

    const dadosPedido =
        JSON.parse(localStorage.getItem("dadosPedido"));

    let tipoPedido = null;

    if (dadosPedido) {
        tipoPedido = dadosPedido.tipo;
    }

    const subtotal = carrinho.calcularSubtotal();
    const taxa = carrinho.calcularTaxa(tipoPedido);
    const total = carrinho.calcularTotal(tipoPedido);

    document.getElementById("subtotal").textContent =
        `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

    document.getElementById("valor-total").textContent =
        `R$ ${total.toFixed(2).replace(".", ",")}`;

    return taxa;
}


/*** TIPO DO PEDIDO NO TOTAL ***/

function atualizarTipoPedido() {

    const dadosPedido =
        JSON.parse(localStorage.getItem("dadosPedido"));

    const tipoLocal =
        document.getElementById("tipo-local");

    const taxaEntrega =
        document.getElementById("taxa-entrega");


    if (dadosPedido && dadosPedido.tipo === "delivery") {

        tipoLocal.textContent = "Taxa de entrega";

        taxaEntrega.textContent =
            `R$ ${carrinho
                .calcularTaxa("delivery")
                .toFixed(2)
                .replace(".", ",")}`;

    } else if (dadosPedido && dadosPedido.tipo === "retirada") {

        tipoLocal.textContent = "Retirada em";

        taxaEntrega.textContent =
            dadosPedido.endereco;

    } else {

        tipoLocal.textContent = "Taxa de entrega";

        taxaEntrega.textContent = "R$ 0,00";
    }
}


/*** APAGAR ITEM ***/

containerItens.addEventListener("click", (evento) => {

    if (!evento.target.closest(".apagar-item")) {
        return;
    }

    const itemCarrinho =
        evento.target.closest(".item-carrinho");

    const id =
        Number(itemCarrinho.dataset.id);

    const item = carrinho.itens.find(
        item => item.produto.id === id
    );

    const confirmar = confirm(
            `Apagar ${item.produto.nome} do carrinho?`
        );

        if (!confirmar) {
            return;
        }

        carrinho.removerItem(id);

        salvarCarrinho(carrinho);

        mostrarItensCarrinho();
        atualizarTotal();
});


/*** APAGAR TODO O PEDIDO ***/

const zerarPedido =
    document.getElementById("zerar-pedido");

zerarPedido.addEventListener("click", () => {

   const confirmar = confirm(
        "Tem certeza que deseja apagar todo o carrinho?"
    );

    if (!confirmar) {
        return;
    }

    carrinho.limparCarrinho();

    salvarCarrinho(carrinho);

    localStorage.removeItem("tipo-pedido");
    localStorage.removeItem("dadosPedido");

    mostrarItensCarrinho();
    atualizarTotal();
    atualizarTipoPedido();
});

mostrarItensCarrinho();
atualizarTotal();
atualizarTipoPedido();
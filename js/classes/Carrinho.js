/***********************************
    CLASSE CARRINHO - COM MÉTODOS
***********************************/

class Carrinho {

    #itens;

    constructor() {
        this.#itens = [];
    }


    /*** ADICIONAR ITEM ***/

    adicionarItem(produto, quantidade) {

        const itemExistente = this.#itens.find(
            item => item.produto.id === produto.id
        );

        if (itemExistente) {

            for (let i = 0; i < quantidade; i++) {
                itemExistente.aumentarQuantidade();
            }

            return;
        }

        const item = new ItemCarrinho(produto, quantidade);

        this.#itens.push(item);
    }


    /*** REMOVER UM ITEM ***/

    removerItem(id) {

        this.#itens = this.#itens.filter(
            item => item.produto.id !== id
        );
    }


    /*** REMOVER TODOS OS ITENS ***/

    limparCarrinho() {

        this.#itens = [];
    }


    /*** ACESSAR OS ITENS ***/

    get itens() {

        return this.#itens;
    }


    /*** CALCULAR SUBTOTAL ***/

    calcularSubtotal() {

        let subtotal = 0;

        for (const item of this.#itens) {

            subtotal += item.produto.valor * item.quantidade;
        }

        return subtotal;
    }


    /*** CALCULAR TAXA DE ENTREGA ***/

    calcularTaxa(tipoPedido) {

        if (tipoPedido === "delivery") {

            return 2.50;
        }

        return 0;
    }


    /*** CALCULAR TOTAL ***/

    calcularTotal(tipoPedido) {

        return this.calcularSubtotal() + this.calcularTaxa(tipoPedido);
    }

}
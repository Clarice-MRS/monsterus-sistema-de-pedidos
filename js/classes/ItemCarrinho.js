class ItemCarrinho {
    #produto; #quantidade;

    constructor(produto, quantidade) {
        this.#produto = produto;
        this.#quantidade = quantidade;
    }

    aumentarQuantidade() {
        if(this.#quantidade < 20){
            this.#quantidade++;
        }
    }

    diminuirQuantidade(){
        if(this.#quantidade === 0){
            return;
        }
        this.#quantidade--;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get produto() {
        return this.#produto;
    }
}
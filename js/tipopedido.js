/*** VERIFICAR TIPO DE PEDIDO ***/

const tipoPedido = localStorage.getItem("tipo-pedido");

const formDelivery = document.getElementById("form-delivery");
const escolhaRestaurante = document.getElementById("escolha-restaurante");

if (tipoPedido === "delivery") {

    formDelivery.style.display = "block";
    escolhaRestaurante.style.display = "none";

} else if (tipoPedido === "retirada") {

    formDelivery.style.display = "none";
    escolhaRestaurante.style.display = "block";

}


/*** SALVAR DADOS DO DELIVERY ***/

const formularioDelivery = document.getElementById("formulario-delivery");

if (formularioDelivery) {

    formularioDelivery.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const dadosPedido = {
            tipo: "delivery",
            nome: document.getElementById("nome").value,
            telefone: document.getElementById("telefone").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            complemento: document.getElementById("complemento").value,
            taxa: 2.50
        };

        localStorage.setItem("dadosPedido", JSON.stringify(dadosPedido));

        window.location.href = "index.html";
    });

}

/*** SALVAR RESTAURANTE ESCOLHIDO ***/

const restaurantes = document.querySelectorAll(".restaurante");

for (const restaurante of restaurantes) {

    restaurante.addEventListener("click", () => {

        const dadosPedido = {
            tipo: "retirada",
            restaurante: restaurante.dataset.restaurante,
            endereco: restaurante.dataset.endereco,
            taxa: 0
        };

        localStorage.setItem("dadosPedido", JSON.stringify(dadosPedido));

        window.location.href = "index.html";
    });

}
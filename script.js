const numeroWhatsApp = "5541999999999";

const pizzas = [
  {
    nome: "Pizza de Calabresa",
    descricao: "Molho de tomate, mussarela, calabresa, cebola e orégano.",
    preco: "45,00",
    imagem: "img/calabresa.jpg.png"
  }
];

const cardapio = document.getElementById("cardapio");

pizzas.forEach(function(pizza) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${pizza.imagem}" alt="${pizza.nome}">
    <div class="card-content">
      <h2>${pizza.nome}</h2>
      <p>${pizza.descricao}</p>
      <div class="preco">R$ ${pizza.preco}</div>
      <button onclick="pedirPizza('${pizza.nome}', '${pizza.preco}')">
        Pedir no WhatsApp
      </button>
    </div>
  `;

  cardapio.appendChild(card);
});

function pedirPizza(nome, preco) {
  const mensagem = `Olá, quero fazer um pedido:\n\nPizza: ${nome}\nValor: R$ ${preco}`;
  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}

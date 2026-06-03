const numeroWhatsApp = "5541999999999";

const pizzas = [
  {
    nome: "Pizza de Calabresa",
    descricao: "Molho de tomate, mussarela, calabresa, cebola e orégano.",
    preco: "45,00",
    imagem: "img/calabresa.jpg.png"
  },
  {
    nome: "Pizza de Mussarela",
    descricao: "Molho de tomate, mussarela especial, tomate e orégano.",
    preco: "42,00",
    imagem: "img/mussarela.jpg"
  },
  {
    nome: "Pizza Portuguesa",
    descricao: "Presunto, ovos, cebola, mussarela, ervilha, tomate e orégano.",
    preco: "48,00",
    imagem: "img/portuguesa.jpg"
  }
];

const cardapio = document.getElementById("cardapio");

pizzas.forEach(pizza => {
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
  const mensagem = `Olá, quero fazer um pedido:%0A%0APizza: ${nome}%0AValor: R$ ${preco}`;

  const link = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(link, "_blank");
}

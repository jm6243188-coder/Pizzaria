const numeroWhatsApp = "5541999999999";

const pizzas = [
  {
    nome: "Pizza de Calabresa",
    descricao: "Molho de tomate, mussarela, calabresa, cebola e orégano.",
    preco: "45,00",
    imagem: "imagem/calabresa.jpg.png"
  },
  {
    nome: "Pizza de Mussarela",
    descricao: "Molho de tomate, mussarela especial, tomate e orégano.",
    preco: "42,00",
    imagem: "imagem/mussarela.jpg.png"
  },
  {
    nome: "Pizza Portuguesa",
    descricao: "Mussarela, presunto, ovo, cebola, ervilha, tomate e orégano.",
    preco: "48,00",
    imagem: "imagem/portuguesa.jpg.png"
  },
  {
    nome: "Pizza de Frango com Catupiry",
    descricao: "Frango desfiado, catupiry, mussarela, milho e orégano.",
    preco: "50,00",
    imagem: "imagem/frango-catupiry.jpg.png"
  },
  {
    nome: "Pizza Quatro Queijos",
    descricao: "Mussarela, provolone, parmesão, catupiry e orégano.",
    preco: "52,00",
    imagem: "imagem/quatro-queijos.jpg.png"
  },
  {
    nome: "Pizza Marguerita",
    descricao: "Mussarela, tomate, manjericão, molho de tomate e orégano.",
    preco: "46,00",
    imagem: "imagem/marguerita.jpg.png"
  }
];

const cardapio = document.getElementById("cardapio");

pizzas.forEach(function(pizza) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="pizza-img" src="${pizza.imagem}" alt="${pizza.nome}">
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

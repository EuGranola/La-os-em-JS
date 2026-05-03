let cardapio = [
    { prato: "Hamburguer", preço: 25 },
    { prato: "Pizza", preço: 45 },
    { prato: "Lasanha", preço: 35 },
    { prato: "Sorvete", preço: 20 },
    { prato: "Sushi", preço: 50 }
];

// Organiza do maior para o menor
cardapio.sort((a, b) => b.preço - a.preço);

// Percorre os pratos já organizados
for (let item of cardapio) {
    console.log(`${item.prato} - R$ ${item.preço}`);
}
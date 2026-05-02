// Palavra que queremos inverter
let texto = "Amizadade";

// Começa na última letra
let i = texto.length - 1;

// Variável que vai guardar o resultado
let invertido = "";

do {

    // Adiciona uma letra por vez
    invertido += texto[i];

    // Volta uma posição
    i--;

} while (i >= 0);

// Mostra resultado final
console.log("Invertido:", invertido);
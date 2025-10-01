const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function verificarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
            return "Não é primo.";
        }
    }
    return "É primo.";
}

function eventoBtnCalcularPrimo() {
    const numeroN = Number(numero.value);
    const valorFinal = verificarPrimo(numeroN);
    resultado.innerText = valorFinal;
}
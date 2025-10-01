const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function verificarPrimo(numero) {
    let i = 2;
    while (i < numero) {
        if (numero % i == 0) {
            return "Não é primo";
        }
        i++;
    }
    return "É primo";
}

function eventoBtnCalcularPrimo() {
    const numeroN = Number(numero.value);
    const valorFinal = verificarPrimo(numeroN);
    resultado.innerText = valorFinal;
}
const numero = document.getElementById("idInNumero");
const bntVerificar = document.getElementById("bntVerificarNumero");
const resultado = document.getElementById("idOnResultado");

function calcularQuadPerf(numero) { 
const raiz = Math.trunc(Math.sqrt(numero));
if (Math.pow(raiz,2)==numero) {
  return "é quadrado perfeito";
} else {
    return "Não é quadrado perfeito"
}
}

function eventoBtnVerificarNumero() {
 const numeroI = Number(numero.value);
 const quadradoPerfeito = calcularQuadPerf(numeroI);
const saida = "O numero " + numeroI + quadradoPerfeito;
 resultado.innerText = saida;
}
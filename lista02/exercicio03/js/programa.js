const ladoA = document.getElementById("idInLadoA");
const ladoB = document.getElementById("idInLadoB");
const ladoC = document.getElementById("idInLadoC");
const bntVerificar = document.getElementById("bntVerificarTriangulo");
const resultado = document.getElementById("idOnResultado");

function calcularTipoTriangulo(ladoA, ladoB, ladoC) { 
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    
    if (ladoA == ladoB && ladoB == ladoC) {
        return("É um triângulo Triângulo Equilátero");
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        return("É um triângulo Triângulo Isósceles");
    } else {
        return("É um triângulo Triângulo Escaleno");
    }

} else {
        return("Não é um triângulo");
}
}

function eventoBtnVerificarTriangulo() {
const lado1 = Number(ladoA.value)    
const lado2 = Number(ladoB.value)    
const lado3 = Number(ladoC.value)    
const tipoDoTriangulo = calcularTipoTriangulo(lado1, lado2, lado3);
const saida = tipoDoTriangulo;
 resultado.innerText = saida;
}
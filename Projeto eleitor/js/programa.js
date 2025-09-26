const nomeC = document.getElementById("idInNome");
const anoDeNascimentoC = document.getElementById("idInAnoDeNascimento");
const btnCalcularEleitorC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");

function calcularTipoEleitor (anoDeNascimento){
    const idade = (2025 - anoDeNascimento)
    if(idade < 16) return "Não Eleitor";
    if(idade < 18) return "Eleitor Facultativo";
    if(idade <=70) return "Eleitor Obrigatorio";
    return "Eleitor Facultativo";
}

function eventoBtnCalcularEleitor(){
    const anoDeNascimento = Number(anoDeNascimentoC.value);
    const tipoEleitor = calcularTipoEleitor(anoDeNascimento);
    const saida = "O cidadão " + nomeC.value + " e " + tipoEleitor;
    resultadoC.innerText = saida;
}
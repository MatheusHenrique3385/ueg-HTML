const carro = document.getElementById("IdInValorDoCarro");
const resultado = document.getElementById("idOnResultado");

function calcularValCarro(carro) {
  let valorFinal = carro;

  const idsOpcionais = ["idInArCondicionado", "idInPintura", "idInVidro", "idInDirecao"];

  idsOpcionais.forEach((id) => {
    const checkbox = document.getElementById(id);
    if (checkbox && checkbox.checked) {
      valorFinal += parseInt(checkbox.value);
    }
  });
   return valorFinal;
}

function eventoBtnVerificarValCarro() {
  const carroI = Number(carro.value);
  const valorFinal = calcularValCarro(carroI);
  resultado.innerText = `O valor final do carro é: R$ ${valorFinal.toFixed(2)}`;
}

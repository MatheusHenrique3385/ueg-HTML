const numero_int = document.getElementById('numero');
const botaoCalcular = document.getElementById('calcular');
const listaResultado = document.getElementById('resultado');

botaoCalcular.addEventListener ('click', function() {
    listaResultado.innerHTML = '';

      const numero = parseInt(numero_int.value);

      if (isNaN(numero) || numero <= 0) {
        alert('Por favor, insira um número inteiro positivo.');
        return;
      }

      let i = 1 
      while (i<= numero){
        if (numero % i === 0){

            const li = document.createElement('li');
            li.textContent = i;
            listaResultado.appendChild(li);
        }   i++;
      }


});
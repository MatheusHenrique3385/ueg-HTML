const numero_primo = document.getElementById('numero');
const botaoCalcular = document.getElementById('verificar');
const listaResultado = document.getElementById('resultado');

botaoCalcular.addEventListener ('click', function() {
    

      const numero = parseInt(numero_primo.value);
      resultado.textContent = '';

      if (isNaN(numero) || numero <= 0) {
        alert('Por favor, insira um número inteiro positivo.');
        return;
      }

      if (numero === 1) {
        resultado.textContent = '1 não é um número primo.';
        return;
      }

      let i = 2
      let primo = true;
      while (i< numero){
        if (numero % i === 0){
            primo = false;
            break;
        }   i++;
      }
if (primo) {
        resultado.textContent = `${numero} é um número primo.`;
    } else {
        resultado.textContent = `${numero} não é um número primo.`;
    }

});
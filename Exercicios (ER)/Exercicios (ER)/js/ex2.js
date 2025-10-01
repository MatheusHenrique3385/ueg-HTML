const tbody = document.querySelector('#tabela tbody');


function fatorial(n) {
    let fat = 1;
    for (let i = 2; i <= n; i++) {
        fat *= i;
    }
    return fat;
}

function senoMacLaurin(x, termos = 5) {
    let seno = 0;
    for (let n = 0; n < termos; n++) {
        let expoente = 2 * n + 1;
        let termo = Math.pow(-1, n) * Math.pow(x, expoente) / fatorial(expoente);
        seno += termo;
    }
    return seno;
}

for (let a = 0; a <= 3.0; a += 0.5) {
    const tr = document.createElement('tr');
    
    const tdAngulo = document.createElement('td');
    tdAngulo.textContent = a.toFixed(1); 

    const tdSeno = document.createElement('td');
    tdSeno.textContent = senoMacLaurin(a).toFixed(6); 

    tr.appendChild(tdAngulo);
    tr.appendChild(tdSeno);
    tbody.appendChild(tr);
}

let lista = [];

let res = window.document.getElementById('res');

let numero = window.document.getElementById('txtnumero');

let txtres = window.document.getElementById('txtres');

let resfinal = window.document.createElement('div');

resfinal.setAttribute('id', 'resfinal');

function adicionar() {

    let valor = Number(numero.value);

    if (isNumero(valor) && !inLista(valor, lista)) {
        
        resfinal.style.display = 'none';
        
        lista.push(valor);
        
        txtres.innerHTML += `Valor ${valor} adicionado \n`;
        
        atualizarInputNumero(numero);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}

function finalizar() {

    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        resfinal.style.display = 'block';

        let total = lista.length;
        let maior = Math.max(...lista);
        let menor = Math.min(...lista);
        let soma = lista.reduce((a, b) => a + b, 0);
        let media = (soma / total);

        resfinal.innerHTML = `
            <p>Ao todo, temos <strong>${total}</strong> números cadastrados.</p>
            <p>O maior valor informado foi <strong>${maior}</strong>.</p>
            <p>O menor valor informado foi <strong>${menor}</strong>.</p>
            <p>A soma dos valores é <strong>${soma}</strong>.</p>
            <p>A média dos valores é <strong>${media}</strong>.</p>
        `;

        res.appendChild(resfinal)
    }
}

function atualizarInputNumero(n) {
    n.value = '';
    n.focus();
}

function isNumero(n) {
    return n >= 1 && n <= 100
}

function inLista(n, l) {
    return l.includes(n)
}
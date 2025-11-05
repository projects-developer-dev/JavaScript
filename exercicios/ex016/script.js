function contar() {

    var res = window.document.getElementById('res');

    var inicio = window.document.getElementById('txtinicio');

    var fim = window.document.getElementById('txtfim');

    var passo = window.document.getElementById('txtpasso');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        res.innerHTML = 'Impossível contar!';
        res.style.color = 'red';

    } else {

        res.style.color = 'black';
        res.innerHTML = 'Contando: <br>';

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        let mao = `${String.fromCodePoint(0x1F449)}`;
        let bandeira = `${String.fromCodePoint(0x1F3F4)}`

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        if (i < f) {

            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ${mao}`
            }

        } else {

            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ${mao}`
            }
        }

        res.innerHTML += `${bandeira}`
    }
}
function montarTabuada() {

    var numero = window.document.getElementById('txtnumero');

    var res = window.document.getElementById('txtres');

    var sel = window.document.getElementById('seltab');

    res.innerHTML = '';
    sel.innerHTML = '';
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        var n = Number(numero.value);

        for (let x = 1; x <= 10; x++) {
            res.innerHTML += `${n} x ${x} = ${n * x} \n`;

            //Usando select
            var item = document.createElement('option');
            item.text = `${n} x ${x} = ${n * x}`;
            item.value = `tab${x}`;

            sel.appendChild(item);
        }
    }
}
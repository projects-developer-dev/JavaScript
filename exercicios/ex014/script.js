function carregar() {

    var horaAtual = new Date().getHours();

    window.document.getElementById('msg').innerHTML = `Agora são ${horaAtual} horas`;

     var img = window.document.getElementById('imagem');

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = '../ex014/imagens/fotomanha.png';
        document.body.style.backgroundColor = '#fae9b3';
    } else if (horaAtual >= 12 && horaAtual <= 18) {
        img.src = '../ex014/imagens/fototarde.png'
        document.body.style.backgroundColor = '#e18668';
    } else {
        img.src = '../ex014/imagens/fotonoite.png'
        document.body.style.backgroundColor = '#2b2e2eff';
    }
}
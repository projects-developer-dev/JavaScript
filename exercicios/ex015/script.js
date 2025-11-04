function verificar() {

    var anoAtual = new Date().getFullYear();

    var fano = Number(window.document.getElementById('txtano').value);

    if (fano == 0 || fano > anoAtual) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var sexo = window.document.querySelector('input[name="sexo"]:checked').value;

        //Criar elemento dinamicante através do JavaScript
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        
        var msg = window.document.getElementById('res');

        var idade = anoAtual - fano;

        var genero = '';

        if (sexo === 'M') {

            genero = 'Homem';

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.png');
            } else {
                //Idoso
                 img.setAttribute('src', 'foto-idoso-h.jpg');
            }
            
        } else {

            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosa-m.jpg');
            }
        }
           msg.innerHTML = `${genero} de ${idade} anos`;
           msg.appendChild(img); 
    }

}
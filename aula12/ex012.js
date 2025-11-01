var horaSistema = new Date().getHours();

console.log(`Agora são exatamente ${horaSistema} horas.`)

if (horaSistema < 12) {
    console.log('Bom Dia!')
} else if (horaSistema <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
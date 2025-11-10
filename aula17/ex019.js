let pessoa = {
    idade: 8,
    nome: 'José',
    seco: 'M',
    peso: 85.4,
    engordar(p=0){
        this.peso += p
    }
}

pessoa.engordar(3);

console.log(`${pessoa.nome} pesa ${pessoa.peso}`);
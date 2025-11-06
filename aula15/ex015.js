let num = [3,1,2];

num[3] = 4; //Adicionando itens no array

num.push(5); //Adicionando itens no array

console.log(`O comprimento do array é: ${num.length}`); //comprimento do array

num.sort(); //Coloca em ordem crescente

console.log(`O indice é ${num.indexOf(1)}`); //Indice do número informado


for (let c = 0; c < num.length; c++) { //For
    console.log(`Indice ${c}: ${num[c]}`); 
}

let vet = [1,2,3];
vet.forEach(x => {  //forEach
    console.log(x);
});

let vet1 = [4,5,6]
for (let c in vet1) { // for in
    console.log(`Indice ${c}: ${vet1[c]}`);  
}

let vet2 = [10,11,12]
for (let x of vet2) {
    console.log(x);
}
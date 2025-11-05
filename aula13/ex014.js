var c = 1;

while (c <= 5) { //Repetição com teste lógico no inicio
    console.log(`Passo ${c}`);
    c++;
}

var y = 1;

do { //Repetição com teste lógico no final
    console.log(`Passo ${y}`);
    y++;
} while (y <= 5);


//Estrutura de repetição com variável de controle.
for (var a = 0; a <= 5; a++) {
    if (a % 2 == 0) {
        console.log(`Passo ${a}`);
    }
}

//ForEach
var array = [1,2,3,4,5,6,7];

array.forEach(x => {
    console.log(x);    
});  
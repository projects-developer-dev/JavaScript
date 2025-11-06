function soma(a=0 , b=0){ //Parametros já definidos, caso não informe ele passa o valor 0  
    return a + b;
}

console.log(`O valor da soma é: ${soma(5,6)}`);


console.log(`O número informado é ${parouimpar(2)}`); 

function parouimpar(num){ //function
    return num % 2 == 0 ? 'PAR' : 'IMPAR';
}

let parouimparfunc = (num) => num % 2 == 0 ? 'PAR' : 'IMPAR'; //arrow function
console.log(`O número informado é ${parouimparfunc(5)}`); 


let a = function(x){ //atribuindo uma funcao diretamente a variavel
    return x * 2;
}

console.log(a(5)); 
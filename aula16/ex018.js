//Recursividade

function fatorial(n){
    if (n == 1){
        return 1;
    }else{
        return n * fatorial(n - 1)
    }
}

console.log('O valor do fatorial é ' + fatorial(5))
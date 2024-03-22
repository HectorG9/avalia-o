let prompt = require('prompt-sync')();
n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite outro número: '));
while (i === 0){
    i = parseInt(prompt('Digite um valor diferente de zero: '));
    n2 = i
}

console.log(n1 / n2);
let prompt = require('prompt-sync')();
n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite outro número: '));
do {
    i = parseInt(prompt('Digite um valor diferente de zero: '));
    n2 = i
}
while (i = 0)
console.log(n1 / n2);
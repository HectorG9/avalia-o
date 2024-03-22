let prompt = require('prompt-sync')();
n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite outro número: '));
div = n1 / n2
if (n2 === 0) {
    console.log ('valor inválido');
}
else {
    console.log(div);
}
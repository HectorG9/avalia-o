let prompt = require('prompt-sync')();
n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite outro número: '));
if (n2 === 0){
    console.log ('digite um valor diferente de zero')
}
else{
    console.log(n1 / n2);
}
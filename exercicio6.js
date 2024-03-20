let prompt = require('prompt-sync')();
valor = parseInt(prompt('Digite o valor: '));
if (valor >= 1){
    console.log ('valor positivo');
}
else if (valor < 0){
    console.log ('Valor negativo');
}
else {
    console.log ('valor 0');
}
let prompt = require ('prompt-sync')();
valor = parseInt(prompt('Digite um valor: '))
if (valor >= 0) {
    console.log('O valor é positivo');
}
else {
    console.log('O valor é negativo');
}
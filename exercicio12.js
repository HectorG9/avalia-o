let prompt = require('prompt-sync')();
sexo = parseInt(prompt('Qual o seu sexo? 1 - feminino, 2 - masculino: '))
altura = parseFloat(prompt('Qual sua altura? '));
let pesoI;
switch(sexo) {
    case 1:
        pesoI = (62.1 * altura) - 44.7;
        console.log('O seu peso ideal é: Kg', pesoI);
        break;
    case 2:
        pesoI = (72.7 * altura) - 58;
        console.log('O seu peso ideal é: Kg', pesoI)
        break;
    default:
        console.log('número inválido no sistema! ')
        break;
}
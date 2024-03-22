console.log('====================== OPERAÇÕES =====================')
let prompt = require('prompt-sync')();
Pos = parseInt(prompt('Qual a tabuada? '));
n1 = parseInt(prompt('digite o número: '));
n2 = parseInt(prompt('digite outro número: '));
soma = (n1 + n2)
sub = (n1 - n2)
div = (n1 / n2)
multi = (n1 * n2)
switch(Pos) {
    case 1:
        console.log(n1, '+', n2, ' = ', soma); 
        break;
    case 2:
        console.log(n1, '-', n2, ' = ', sub);
        break;
    case 3:
        console.log(n1, '/', n2, ' = ', div);
        break;
    case 4:
        console.log(n1, 'x', n2, ' = ', sub);
        break;
    default:
        console.log('erro do sistema');
        break;
}
console.log('==========================================================')
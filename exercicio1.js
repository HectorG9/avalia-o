let prompt = require('prompt-sync')();

origem = parseInt(prompt('Código de origem do produto: '))

switch (origem) {
    case 1: 
        console.log('Sul');
        break;
    case 2: 
        console.log('Norte');
        break;
    case 3: 
        console.log('Leste');
        break;
    case 4:
        console.log('Oeste');
        break;
    case 5:
        console.log('Nordeste');
        break;
    case 6:
        console.log('Nordeste');
        break;
    case 7:
        console.log('Sudeste');
        break;
    case 8:
        console.log('Sudeste');
        break;
    case 9:
        console.log('Sudeste');
        break;
    case 10:
        console.log('Centro-Oeste');
        break;
    case 11:
        console.log('Noroeste');
        break;
    default:
        console.log('O produto é importado!')
}
let prompt = require('prompt-sync')();
NumLados = parseInt(prompt('Número de lados: '));
medidaLados = parseFloat (prompt('Qual a medida dos lados? (cm): '));
perimetroT = (NumLados * medidaLados);
areaQ = (medidaLados ** 2);
switch (NumLados) {
    case 3: 
        console.log('TRIÂNGULO!');
        console.log('O valor do perimetro é: ', perimetroT);
        break;
    case 4: 
        console.log('QUADRADO!')
        console.log('O valor da Área é: ', areaQ);
        break;
    case 5:
        console.log('PENTAGONO!');
        break;
    default:
        console.log('ERRO, Digite somente 3, 4 ou 5');
}
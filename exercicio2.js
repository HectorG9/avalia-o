let prompt = require('prompt-sync')();
notas = [n1, n2, nOPT]
n1 = parseFloat(prompt('Nota da prova 1: '));
n2 = parseFloat(prompt('Nota da prova 2: '));
nOPT = prompt('Nota da optativa: ');
media = (n1 + n2 + nOPT) / 3;
if (media >= 6.0) {
    console.log('Aprovado!')
} 
else if(media >= 3.0 & media < 6.0) {
    console.log('Reprovado');
}
else {
    console.log('Recuperação!')
}
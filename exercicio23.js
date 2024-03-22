let prompt = require('prompt-sync')();
n1 = parseInt(prompt('digite a primeira nota: '));
n2 = parseInt(prompt('digite a segunda nota: '));
media = (n1 + n2)/2
if((n1 >= 0) & (n1 <= 10) & (n2 >= 0) & (n2 <= 10)){
    console.log ('nota válida');
    console.log (media)
}else{
    console.log ('nota inválida');
}